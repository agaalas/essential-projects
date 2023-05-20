const express = require("express");
const {
  getFeedbacks,
  addFeedback,
  getFeedback,
  removeFeedback,
} = require("../controllers/controll");

const router = express.Router();

router.route("/").get(getFeedbacks).post(addFeedback);
router.route("/:feedbackId").get(getFeedback).delete(removeFeedback);

module.exports = router;
