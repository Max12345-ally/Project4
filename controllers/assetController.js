const express = require("express");
const { Asset } = require("../models");
const router = express.Router();

router.get("/", (req, res) => {
  Asset.find().then((assets) => res.json(assets));
});

router.put("/:id", (req, res) => {
  console.log(req.params.id);
  Asset.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  }).then((adjustAsset) => res.json(adjustAsset));
});

router.post("/", async (req, res, next) => {
  try {
    const assets = await Asset.create(req.body);
    res.json(assets);
  } catch (err) {
    next(err);
  }
});

// router.delete('/:id', (req, res) => {
//   Topic.findOneAndDelete({
//     _id: req.params.id,

module.exports = router;
