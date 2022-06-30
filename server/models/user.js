const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  email: { type: String, require: true },
  password: { type: String, require: false },
  id: { type: String },
});
const User = mongoose.model("user", userSchema);
module.exports = User;
