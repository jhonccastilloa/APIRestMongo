const handleHttpError = (res, message = "Something happened", code = 403) => {
  res.status(code).json({ error: message });
};

module.exports={handleHttpError}