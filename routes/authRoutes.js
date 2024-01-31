const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const { login, register } = require("../controllers/userController");
// Route to register a new user
router.get("/register", (req, res) => {
  res.render("register");
});
router.post("/register", register);

// Route to login
router.get("/login", (req, res) => {
  res.render("login");
});
router.post("/login", login);

// Route to Logout

router.get("/logout", (req, res) => {
  res.clearCookie("user");
  res.render("login");
});
module.exports = router;
