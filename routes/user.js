const express = require("express");
const router = express.Router();
const User = require("../controllers/user");
router.get("/", User.getAllUser);

router.get("/:userId", User.getUserbyId);

router.post("/", User.createUser);

router.put("/:userId", User.updateUser);

router.delete("/:userId", User.deleteUser);

module.exports = router;
