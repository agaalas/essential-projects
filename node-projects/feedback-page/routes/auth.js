const express = require("express");
const {register, login, getUsers, updateUserInfo}=require("../controllers/authControll")


const router = express.Router();

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/get-users").get(getUsers)
router.route("/:userId").patch(updateUserInfo)



module.exports = router;
