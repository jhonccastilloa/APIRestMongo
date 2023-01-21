const express = require("express");
const cors = require("cors");
const dbConnect=require("./config/mongo")
require("dotenv").config();


const app = express();
const PORT = process.env.PORT || 3500;
app.use(cors());
app.listen(PORT, () => {
  console.log("el servidor se inicio en el puerto:", PORT);
});

dbConnect()