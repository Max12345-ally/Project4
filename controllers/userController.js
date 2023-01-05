const express = require("express");
const { User } = require("../models");
const router = express.Router();

router.get("/", (req, res) => {
  User.find().then((users) => res.json(users));
});

router.post("/", async (req, res, next) => {
  console.log(req.body);
  const userToSave = req.body;
  try {
    const dbUser = await User.findOne({
      email: userToSave.email,
    });

    if (!dbUser) {
      const user = await User.create(req.body);
      res.json(user);
    } else {
      User.findOneAndUpdate({ email: userToSave.email }, userToSave, {
        new: true,
      }).then((adjustedUser) => res.json(adjustedUser));
    }
  } catch (err) {
    next(err);
  }
});

router.get("/:email", async (req, res) => {
  const { email } = req.params;

  try {
    const user = await User.findOne({
      email: email,
    });

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving asset");
  }
});

module.exports = router;
