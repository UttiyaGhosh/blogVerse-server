require("dotenv").config();
const mongoose = require("mongoose");
const options = {
  serverSelectionTimeoutMS: 60000,
  connectTimeoutMS: 30000, // Increase this value as needed
  socketTimeoutMS: 30000, // Increase this value as needed
};

async function connect() {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URL, options);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("DB connection failed:", error);
  }
}

module.exports = { connect };
