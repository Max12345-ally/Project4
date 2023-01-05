const mongoose = require("./db/connection");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  avatarLink: {
    type: String,
    required: true,
  },
});

const assetSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  userName: {
    type: String,
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
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  likes: [
    {
      type: String,
    },
  ],
  category: {
    type: String,
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
