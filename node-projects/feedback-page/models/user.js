const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  surname: String,
  birthdate: Date,
  gender: {
    type: String,
    enum: ["female", "male", "diverse"],
    default:"male"
  },
  email: {
    type: String,
    unique: true,
    require: [true, "this email is required"],
  },
  password: {
    type: String,
    select: false,
  },
  socialProfiles: {
    facebook: String,
    instagram: String,
  },
});

const User = mongoose.model("user", userSchema);
module.exports = User;
