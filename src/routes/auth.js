const { validatorRegisterItem, validatorLogin } = require("../validator/auth");
const { matchedData } = require("express-validator");
const { encrypt } = require("../utils/handlePassword");
const { userModel } = require("../models");

const express = require("express");
const { loginController, registerController } = require("../controllers/auth");
const router = express.Router();

router.post('/register', validatorRegisterItem, registerController)
router.post('/login', validatorLogin, loginController)





module.exports = router;