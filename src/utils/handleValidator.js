const { validationResult } = require("express-validator");
const { StatusCodes } = require("http-status-codes");

const validateResults = (req, res, next) => {
    try {
        validationResult(req).throw();
        return next();// if there is no errors continue with the controller
    } catch (error) {
        res.status(StatusCodes.FORBIDDEN).send({errors: error.array()})
    }
}


module.exports = validateResults;