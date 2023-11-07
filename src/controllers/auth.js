const { matchedData } = require("express-validator");
const { encrypt, compare } = require("../utils/handlePassword");
const { tokenSign } = require("../utils/handleJwt");
const { userModel } = require("../models");
const { handleHttpError } = require("../utils/handleErrors");

const registerController = async (req, res) => {
  try {
    req = matchedData(req); //eliminated the data out of the Model
    const passwordHash = await encrypt(req.password);
    const body = { ...req, password: passwordHash };
    const dataUser = await userModel.create(body); // this methos don't have filters
    dataUser.set("password", undefined, { strict: false }); // To methods without filters
    const data = {
      token: tokenSign(dataUser),
      user: dataUser,
    };
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_REGISTER_USER");
  }
};

const loginController = async (req, res) => {
    try {
        req = matchedData(req);
        const user = await userModel.findOne({email: req.email})
        if (!user){
            handleHttpError(res, "USER_NOT_EXIST", 404)
            return
        }
        const hashPassword = user.password;
        const check = await compare(req.password, hashPassword)
        if (!check) {
            handleHttpError(res, "PASSWORD_INVALID", 401)
        }
        const data = {
            token: tokenSign(user),
            user
        }
        res.send({data})
    } catch (error) {
        handleHttpError(res, "ERROR_LOGIN")
    }
}

module.exports = { loginController, registerController };
