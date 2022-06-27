const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const port = 8080;

app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// const MONGODB_URL =
//   "";

// mongoose
// .connect(MONGODB_URL)
//   .then(() => {
//     app.listen(port, () => {
//       console.log(`server app listening on port ${port}`);
//     });
//   })
//   .catch((error) => {
//     console.log(`${error} did not connect`);
//   });

//DB connection

const db=require("./DB/index")
db.on("error", () => {
  console.log("Connection error");
});



// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
