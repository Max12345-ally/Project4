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
  console.log(req.body);
  try {
    const assets = await Asset.create(req.body);

    res.json(assets);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", (req, res) => {
  Asset.findOneAndDelete({
    _id: req.params.id,
  }).then((deleteAsset) => {
    Asset.find({}).then((assets) => {
      res.json(assets);
    });
  });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const asset = await Asset.findOne({
      _id: id,
    }).populate({
      path: "comments",
      model: "Comment",
      populate: {
        path: "user",
        model: "User",
      },
    });

    if (!asset) {
      return res.status(404).send({ message: "Asset not found" });
    }

    res.json({
      asset,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving asset");
  }
});

router.post("/likes", async (req, res, next) => {
  console.log(req.body);
  try {
    // const assets = await Asset.create(req.body);

    res.json({ f: "bar" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
