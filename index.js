const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");

const bodyParser = require("body-parser");
require("dotenv").config({ path: "./.env" });

// Instantiate Express app
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const assetController = require("./controllers/assetController");
app.use("/api/assets/", assetController);

app.set("port", process.env.PORT || 4000);

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
let upload = multer({ storage: storage });

app.use(express.static(__dirname + "/public"));
app.use("/uploads", express.static("uploads"));

app.post(
  "/profile-upload-single",
  upload.single("profile-file"),
  function (req, res, next) {
    // req.file is the `profile-file` file
    // req.body will hold the text fields, if there were any
    console.log(JSON.stringify(req.file));
    var response = '<a href="/">Home</a><br>';
    response += "Files uploaded successfully.<br>";
    response += `<img src="${req.file.path}" /><br>`;
    return res.send(response);
  }
);

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
