const { matchedData } = require("express-validator");
const { encrypt, compareEncrypt } = require("../utils/handlePassword");
const { tokenSign } = require("../utils/handleJwt");
const { userModels } = require("../models");
const { compare } = require("bcryptjs");

const registerCTRL = async (req, res) => {
  try {
    const dataClean = matchedData(req);
    const password = await encrypt(dataClean.password);
    const body = { ...dataClean, password };
    const dataUser = await userModels.create(body);
    dataUser.set("password", undefined, { strict: false });

    const data = {
      token: await tokenSign(dataUser),
      user: dataUser,
    };
    res.json({ data });
  } catch (error) {
    res.send(error);
  }
};

const loginCTRL = async (req, res) => {
  try {
    const dataClean = matchedData(req);
    const user = await userModels
      .findOne({ email: dataClean.email })
      .select("password name role email");
    if (!user) return res.send({ message: "user not found" });
    const hashPassword = user.get("password");
    const check = await compareEncrypt(dataClean.password, hashPassword);
    if (!check) return res.send({ message: "invalid password" });

    user.set("password", undefined, { strict: false });
    const data = {
      token: tokenSign(user),
      user,
    };
    res.json({ data });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
module.exports = { registerCTRL, loginCTRL };
