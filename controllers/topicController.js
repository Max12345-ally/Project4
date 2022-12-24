const express = require("express");
const Topic = require("../models/Asset");
const router = express.Router();

router.get("/", (req, res) => {
  Asset.find().then((assets) => res.json(assets));
});
