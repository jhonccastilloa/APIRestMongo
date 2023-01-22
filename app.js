const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/mongo");
const userRoutes = require("./routes/users.routes");
const tracksRoutes = require("./routes/tracks.routes");
const storageRoutes = require("./routes/storage.routes");
const authRoutes = require("./routes/auth.routes");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json())
app.use(express.static("storage"))

app.use("/api/users",userRoutes);
app.use("/api/tracks",tracksRoutes);
app.use("/api/storage",storageRoutes);
app.use("/api/auth",authRoutes);
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.log("el servidor se inicio en el puerto:", PORT);
});

dbConnect();
