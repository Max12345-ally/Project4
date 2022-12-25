const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const bodyParser = require("body-parser");
require("dotenv").config({ path: "./.env" });

// Instantiate Express app
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const assetController = require("./controllers/assetController");
app.use("/api/assets/", assetController);

app.set("port", process.env.PORT || 4000);

// Redirect

// Controllers

// app.use("/api/asset", assetController);
// app.use("/assets", assets);

app.listen(app.get("port"), () => {
  console.log(
    "Hello world! ⭐️ Express GAphy API listening on port " + app.get("port")
  );
});

module.exports = app;
