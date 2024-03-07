require("dotenv").config();
const mongoose = require("mongoose");
const options = {
  serverSelectionTimeoutMS: 60000,
  connectTimeoutMS: 30000,
  socketTimeoutMS: 30000,
  maxPoolSize: 10
};

const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.DB_NAME}`;

async function connect() {
  try {
    await mongoose.connect(uri,options);
    return mongoose;
 } catch (e) {
  console.error(e);
    throw e;
 }
}

module.exports = { connect };
