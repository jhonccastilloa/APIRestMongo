const jsonwebtoken = require("jsonwebtoken");

const tokenSign = (user) => {
  const JWT_SECRET = process.env.JWT_SECRET;
  const sign = jsonwebtoken.sign(
    {
      _id: user._id,
      role: user.role,
    },
    JWT_SECRET,
    {
      expiresIn: "2h",
    }
  );

  return sign;
};
const verifyToken = (tokenJwt) => {
  const JWT_SECRET = process.env.JWT_SECRET;

  try {
    return jsonwebtoken.verify(tokenJwt, JWT_SECRET);
  } catch (error) {
    return null;
  }
};

module.exports = { verifyToken, tokenSign };
