const express = require("express");
const cookieParser = require("cookie-parser");
const cookieEncrypter = require("cookie-encrypter");
const ejs = require("ejs");
const cors = require("cors");
const path = require("path");
const port = 3000;
const app = express();
const authRoutes = require("./routes/authRoutes");
const { connect } = require("./utils/database");
const vehicleMaintenanceRoutes = require("./routes/vehicleMaintenanceRoutes");
const validateCookie = require("./middlewares/validateCookie");
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "assets")));

app.use(cookieParser("sudarshvenkat"));
app.use(cookieEncrypter("thisismysecretkeytoencryptcookie"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("homepage");
});
app.use("/auth", authRoutes);
app.use("/dashboard", validateCookie, (req, res) => {
  res.render("dashboard");
});
app.use("/cars", validateCookie, vehicleMaintenanceRoutes);
let client;
connect()
  .then((connectedClient) => {
    client = connectedClient;

    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);

    process.exit(1); // Exit the application if the database connection fails
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
