const { Router } = require("express");
const {
  getItems,
  getItem,
  createItem,
  deleteItem,
  updateItem,
} = require("../controllers/tracks.controller");
const { customHeader } = require("../middleware/customHeader");
const { authMiddleware } = require("../middleware/session");
const {validatorCreateItem, validatorId} = require("../validator/tracks.validator");

const router = Router();

router.get("/", authMiddleware,getItems);
router.get("/:id", validatorId,getItem);
router.delete("/:id",validatorId, deleteItem);
router.put("/:id", validatorCreateItem,validatorId,updateItem);
router.post("/", validatorCreateItem, customHeader, createItem);

module.exports = router;
