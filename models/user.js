const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  hobbies: {
    type: [String],
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("users", userSchema);
