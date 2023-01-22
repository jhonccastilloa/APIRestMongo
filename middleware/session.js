const { userModels } = require("../models");
const { verifyToken } = require("../utils/handleJwt");

const authMiddleware = async (req, res, next) => {
  try {
    if (!req.headers.authorization)
      return res.json({ message: "user not token" });

    const token = req.headers.authorization.split(" ").pop();
    const dataToken = await verifyToken(token);
    if (!dataToken._id) return res.json({ message: "usser not authorization" });
    const user=await userModels.findById(dataToken._id)
    req.user=user
    next();
  } catch (error) {
    res.send("not session");
  }
};

module.exports = { authMiddleware };
