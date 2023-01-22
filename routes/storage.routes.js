const { Router } = require("express");
const {
  createItem,
  getItems,
  getItem,
  deleteItem,
} = require("../controllers/storage.controllers");
const uploadMiddleware = require("../utils/handleStorage");
const { validatorId } = require("../validator/storage.validar");
const router = Router();

router.get("/", getItems);
router.get("/:id", validatorId, getItem);
router.delete("/:id", validatorId, deleteItem);
router.post("/", uploadMiddleware.single("myfile"), createItem);

module.exports = router;
