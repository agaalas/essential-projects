const express = require("express");
const {
  getFeedbacks,
  addFeedback,
  getFeedback,
  removeFeedback,
  updateFeedback,
  addComment,
} = require("../controllers/controll");

const router = express.Router();

router.route("/").get(getFeedbacks).post(addFeedback);
router.route("/:feedbackId").get(getFeedback).delete(removeFeedback).patch(updateFeedback);
router.route("/add-comment").post(addComment)

module.exports = router;
