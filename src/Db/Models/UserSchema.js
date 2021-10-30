const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 4,
      max: 20,
    },

    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      min: 6,
    },

    profilePicture: {
      type: String,
      default: "",
    },

    followers: {
      type: Array,
      default: [],
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
