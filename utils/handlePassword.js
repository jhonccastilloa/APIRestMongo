const bcryptjs = require("bcryptjs");

const encrypt = async (passwordPlain) => {
  const hash = await bcryptjs.hash(passwordPlain, 10);
  return hash;
};
const compareEncrypt = async (passwordPlain, hashPassword) => {
  const isAuth = await bcryptjs.compare(passwordPlain, hashPassword);
  return isAuth;
};

module.exports = { encrypt, compareEncrypt };
