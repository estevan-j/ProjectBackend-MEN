const { StatusCodes } = require("http-status-codes");


const customHeader = (req, res, next) => {
    try {
        const apiKey = req.headers.api_Key;
        if (apiKey === 'leifer-01') {
            next()
        } else {
            res.status(StatusCodes).send({error: "API_KEY_NO_ES_CORRECTO"})
        }
    } catch (e) {
        res.status(StatusCodes.FORBIDDEN).send({error: "ALGO_OCURRICO_EN_EL_CUSTOM_HEADER"})
    }
}

module.exports = customHeader;