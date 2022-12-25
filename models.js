const mongoose = require("./db/connection");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  assets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Asset",
    },
  ],
});

const assetSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = {
  User: mongoose.model("User", userSchema),
  Asset: mongoose.model("Asset", assetSchema),
  Comment: mongoose.model("Comment", commentSchema),
};

// comments: { type : Array , "default" : [String] },

// owner: {
//   // References use the type ObjectId
//   type: mongoose.Schema.Types.ObjectId,
//   // the name of the model to which they refer
//   ref: 'User',
// },

// likes: { type: Number, default: 0 },
// 		sponsored: { type: Boolean, default: false },
