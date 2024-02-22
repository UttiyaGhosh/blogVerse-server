const express = require("express");
const cookieParser = require("cookie-parser");
const cookieEncrypter = require("cookie-encrypter");
const cors = require("cors");
const app = express();
const authRoutes = require("./routes/authRoutes");
const { connect } = require("./utils/database");
const blogRoutes = require("./routes/blogRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const validateCookie = require("./middlewares/validateCookie");
require("dotenv").config();

const port = process.env.PORT;


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser("sudarshvenkat"));
app.use(cookieEncrypter("thisismysecretkeytoencryptcookie"));


app.use("/api", authRoutes);
app.use("/blogs", validateCookie, blogRoutes);
app.use("/categories", validateCookie, categoryRoutes);

let client;

connect()
  .then((connectedClient) => {
    client = connectedClient;

    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  })

app.listen(port, (error) => {
  if (error) {
    console.error(`Error starting server: ${error.message}`);
  } else {
    console.log(`Server is running on port ${port}`);
  }
});