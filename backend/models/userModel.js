const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is compulsory"],
  },

  email: {
    type: String,
    required: [true, "email is compulsory"],
  },

  password: {
    type: String,
    required: true,
  },
});

// creating the model

const userModel = mongoose.model("url", userSchema);

// exporting the model

module.exports = {
  userModel,
};
