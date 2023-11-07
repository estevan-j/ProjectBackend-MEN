const { StatusCodes } = require("http-status-codes");
const { tracksModel } = require("../models");
const { handleHttpError } = require("../utils/handleErrors");
const { matchedData } = require("express-validator");

const getItems = async (req, res) => {
  try {
    const data = await tracksModel.find({});
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_GET_ITEMS");
  }
};

const getItem = async (req, res) => {
  try {
    const [, options] = optionsPaginate(req);
    const [data] = await tracksModel.aggregate([
        {
          $lookup: {
            from: "storages",
            localField: "mediaId",
            foreignField: "_id",
            as: "audio",
          },
        },
        { $unwind: "$audio" },
        {
          $match: {
            _id: mongoose.Types.ObjectId(id),
          },
        },
      ]);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

const updateItem = async (req, res) => {
  try {
    req = matchedData(req);
    const { id, ...body } = req;

    const data = await tracksModel.findOneAndUpdate(id, body, {
      new: true,
    });
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

const createItem = async (req, res) => {
  try {
    req = matchedData(req);
    console.log(req);
    const data = await tracksModel.create(req);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

const deleteItem = async (req, res) => {
  try {
    req = matchedData(req);
    const id = req.id;
    const findData = await tracksModel.delete({ _id: id });
    const data = {
      findData: findData,
      deleted: true,
    };

    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

module.exports = {
  getItems,
  updateItem,
  getItem,
  deleteItem,
  createItem,
};
