const validateResults = require("../utils/handleValidator");
const { check } = require('express-validator')


const validatorCreateItem = [
    check('name').exists().notEmpty().isLength({min: 5, max: 20}),
    check('album').exists().notEmpty(),
    check('cover').exists().notEmpty(),
    check('artist.name').exists().notEmpty(),
    check('artist.nickname').exists().notEmpty(),
    check('artist.nationality').exists().notEmpty(),
    check('duration').exists().notEmpty(),
    check('duration.start').exists().notEmpty(),
    check('duration.end').exists().notEmpty(),
    check('mediaId').exists().notEmpty().isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];


const validateObjectDataUpdate = [
    check("id").exists().notEmpty(),
    check("name").exists().notEmpty(),
    check("album").exists().notEmpty(),
    check("mediaId").exists().notEmpty().isMongoId(),
    check("cover").exists().notEmpty().isURL(),
    check("artist").exists().notEmpty(),
    check("artist.name").exists().notEmpty(),
    check("artist.nickname").exists().notEmpty(),
    check("artist.nationality").exists().notEmpty(),
    check("duration.start").exists().notEmpty(),
    check("duration.end").exists().notEmpty(),
    (req, res, next) => {
      validateResult(req, res, next);
    },
  ];
  

const validatorGetItem = [
    check('id').exists().notEmpty().isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];



module.exports = { validatorCreateItem, validatorGetItem };