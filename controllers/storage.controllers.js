const { storageModels } = require("../models");
const fs = require("fs");

const MEDIA_PATH = `${__dirname}/../storage`;
const getItems = async (req, res) => {
  const data = await storageModels.find({});
  console.log(data);
  res.json({ data });
};

const getItem = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await storageModels.findById({ _id: id });
    res.json(data);
  } catch (error) {}
};

const createItem = async (req, res) => {
  const PUBLIC_URL = process.env.PUBLIC_URL;

  const { file } = req;
  const fileData = {
    filename: file.filename,
    url: `${PUBLIC_URL}/${file.filename}`,
  };
  const data = await storageModels.create(fileData);
  res.json(data);
};
const deleteItem = async (req, res) => {
  const { id } = req.params;
  try {
    const { filename } = await storageModels.findById(id);
    const filePath = `${MEDIA_PATH}/${filename}`;
    fs.unlinkSync(filePath);
    await storageModels.deleteOne({ _id: id });
    res.json({ filePath, delete: true });
  } catch (error) {
    console.log(error);
    res.json({ error: true });
  }
};

module.exports = {
  getItems,
  getItem,
  createItem,
  deleteItem,
};
