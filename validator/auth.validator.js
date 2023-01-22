const { check } = require("express-validator");
const { validateResult } = require("../utils/handleValidator");

const validatorRegister = [
  check("password").exists().notEmpty().isLength({ min: 3, max: 15 }),
  check("email").exists().notEmpty().isEmail(),

  (req, res, next) => validateResult(req, res, next),
];

module.exports = { validatorRegister };
