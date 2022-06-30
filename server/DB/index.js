const dbConnection = process.env.dbConnection;
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

const MONGODB_URL =
  "mongodb+srv://foodi:ninja123@cluster0.o5szr.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("db connected");
  })
  .catch((error) => {
    console.log(`${error} did not connect`);
  });

const db = mongoose.connection;
module.exports = db;
