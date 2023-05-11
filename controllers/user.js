const mongoose = require("mongoose");
const User = require("../models/user");

const getAllUser = async (req, res, next) => {
  try {
    let result = await User.find();
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getUserbyId = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    if (!ObjectId.isValid(userId)) {
      res.status(400).send("invalid useID");
    }
    let result = await User.findById(userId);
    if (result) res.status(200).send(result);
    else res.status(404).send("user not found");
  } catch (err) {
    res.status(500).send(err);
  }
};

const createUser = async (req, res, next) => {
  const { username, hobbies, age } = req.body;
  if (!username || !hobbies || !age) {
    return res.status(400).send("each field is required");
  }
  const newuser = new User({
    username,
    hobbies,
    age,
  });
  try {
    const user = await newuser.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const userId = req.params.userId;

    if (!ObjectId.isValid(userId)) {
      res.status(400).send("invalid useID");
    }

    let result = await User.findById(userId);
    if (result) {
      const updatedUser = await User.findOneAndUpdate(
        { _id: userId },
        { $set: req.body },
        {
          new: true,
        }
      );
      res.status(200).send(updatedUser);
    } else res.status(404).send("user not found");
  } catch (err) {
    res.status(500).send(err);
  }
};
const deleteUser = async (req, res, next) => {
  try {
    const userId = req.params.userId;

    if (!ObjectId.isValid(userId)) {
      res.status(400).send("invalid useID");
    }

    let result = await User.findById(userId);
    if (result) {
      const deletedUser = await User.findByIdAndDelete({ _id: userId });
      res.status(204).send("user is deleted");
    } else res.status(404).send("user not found");
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  getAllUser,
  getUserbyId,
  createUser,
  updateUser,
  deleteUser,
};
