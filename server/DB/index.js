const dbConnection = process.env.dbConnection;
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");


// const MONGODB_URL =
//   "";

mongoose
.connect(dbConnection)
  .then(() => {
    app.listen(port, () => {
      console.log(`server app listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(`${error} did not connect`);
  });

  const db = mongoose.connection;
  module.exports = db;
  