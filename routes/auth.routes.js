const { Router } = require("express");
const { validatorRegister } = require("../validator/auth.validator");

const { validatorLogin } = require("../validator/login.validator");
const { userModels } = require("../models");
const { loginCTRL, registerCTRL } = require("../controllers/auth.controlle");
const router = Router();

router.get("/", async (req, res) => {
  const data = await userModels.find({});
  res.json({ data });
});
router.post("/register", validatorLogin,registerCTRL );
router.post("/login", validatorRegister,loginCTRL );
// router.post("/login", validatorLogin, createItem);

module.exports = router;
