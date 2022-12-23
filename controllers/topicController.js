const express = require("express");
const Topic = require("../models/digital-assets");
const router = express.Router();

router.get("/", (req, res) => {
  Topic.find().then((assets) => res.json(assets));
});
