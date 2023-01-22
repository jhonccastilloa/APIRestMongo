const { check } = require("express-validator");
const {validateResult} = require("../utils/handleValidator");

const validatorId = [
  check("id").exists().notEmpty().isMongoId(),
  (req, res, next) => validateResult(req, res, next),
];

module.exports = { validatorId };
