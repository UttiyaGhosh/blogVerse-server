const bcrypt = require("bcrypt");
const User = require("../models/User");
const cookieEncrypter = require("cookie-encrypter");
const validateCookie = async (req, res, next) => {
  try {
    // Check if the 'user' cookie exists

    // const encryptedCookie = req.signedCookies.user;
    // if (!encryptedCookie) {
    //   return res.status(401).json({ error: "Unauthorized - Missing cookie" });
    // }

    // Decrypt the cookie value
    // const decryptedUsername = encryptedCookie;

    // Check if the user exists in the database
    // const user = await User.findOne({ username: decryptedUsername });

    // if (!user) {
    //   return res.status(401).json({ error: "Unauthorized - Invalid user" });
    // }

    // req.user = user;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = validateCookie;
