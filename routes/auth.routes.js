

const { Router } = require("express");

const { customHeader } = require("../middleware/customHeader");
const {validatorCreateItem, validatorId} = require("../validator/tracks.validator");

const router = Router();

router.post("/", validatorCreateItem, customHeader, createItem);

module.exports = router;
