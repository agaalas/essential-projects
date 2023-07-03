const fs = require("fs");
const User = require("../models/user");
const { default: mongoose } = require("mongoose");

exports.register = async (req, res) => {
  const {
    name,
    surname,
    email,
    password,
    birthdate,
    socialProfilesFb,
    socialProfilesInsta,
    gender
  } = req.body;

  const newUser = {
    name,
    surname,
    email,
    password,
    birthdate,
    gender,

    socialProfiles: {
      facebook: socialProfilesFb,
      instagram: socialProfilesInsta,
    },
  };
  try {
    const user = await User.create(newUser);
    res.json({ status: "success", user });
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  let foundedUser;
  try {
    foundedUser = await User.findOne({ email: email });
    console.log(foundedUser);
    if (!foundedUser) {
      res
        .status(401)
        .json({ status: "fail", message: "email or password is not right" });
    }
    if (foundedUser.password === password) {
      res.json({ status: "success", token: "788549ala465din" });
    } else {
      res
        .status(401)
        .json({ status: "fail", message: "email or password is not right" });
    }
  } catch (error) {}
};
exports.getUsers = async (req, res) => {
  const users = await User.find();
  console.log(users);
  res.json({
    status: "success",
    users,
  });
};

exports.updateUserInfo = async (req, res) => {
  const { userId } = req.params;
  const updatedUser = await User.findByIdAndUpdate(userId, {
    email: req.body.email,
  },{new:true});
  res.json({ status: "success", updatedUser });
};
