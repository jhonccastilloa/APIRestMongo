const { matchedData } = require("express-validator");
const { tracksModels } = require("../models");
const { handleHttpError } = require("../utils/handleError");

const getItems = async (req, res) => {
  try {
    const user=req.user
    const data = await tracksModels.find({});
    res.json({ user,data });
  } catch (error) {
    handleHttpError(res);
  }
};
const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await tracksModels.findById(id);
    res.json({ data });
  } catch (error) {
    handleHttpError(res);
  }
};
const createItem = async (req, res) => {
  const bodyClean = matchedData(req);
  const { id, name, ...demas } = bodyClean;
  try {
    const data = await tracksModels.create(bodyClean);
    res.json({ data });
  } catch (error) {
    handleHttpError(res);
  }
};
const updateItem = async (req, res) => {
  const dataClean = matchedData(req);
  const { id, ...body } = dataClean;
  try {
    const data = await tracksModels.findOneAndUpdate(id, body);
    res.json({ data });
  } catch (error) {
    handleHttpError(res);
  }
};
const deleteItem = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await tracksModels.deleteOne({ _id: id });
    res.json({ data });
  } catch (error) {
    handleHttpError(res);
  }
};

module.exports = {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
};
