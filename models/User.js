const mongoose = require("mongoose");
//user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true, // Ensuring that each username is unique
    required: true,
  },
  password: {
    type: String,
    minlength: 6,
    required: true,
  },
});
// Creating User model
const User = mongoose.model("User", userSchema);

module.exports = User;
