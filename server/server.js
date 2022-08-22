const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const app = express();
const port = 8080;

const userRouter = require("./routes/user");

app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/users", userRouter); //http://localhost:8080/users/signup

//DB connection

const db = require("./DB/index");
db.on("error", () => {
  console.log("Connection error");
});

app.get("*", (res, req) => {
  res.sendFile(path.join(BUILLD_PATH, "index.html"));
});
app.listen(port, () => {
  console.log(`server app listening on port ${port}`);
});
module.exports = app;
