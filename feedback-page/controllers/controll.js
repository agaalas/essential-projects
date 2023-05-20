const fs = require("fs");
const Feedback = require("../models/feedback");

const dataUrl = __dirname.split(`controllers`)[0] + "data.json";
const data = fs.readFileSync(dataUrl, "utf-8");

exports.getFeedbacks = async (req, res) => {
  const feedbacks = await Feedback.find();
  res.json({
    status: "succesfull",
    feedbacks,
  });
};

exports.addFeedback = async (req, res) => {
  const addedFeedback = {
    id: req.body.id,
    title: req.body.title,
    category: req.body.category,
    upvotes: req.body.upvotes,
    status: req.body.status,
    description: req.body.description,
    comments: req.body.comments,
  };
  const feedback = await Feedback.create(addedFeedback);
  res.json(addedFeedback);
};

exports.addComment = async (req, res) => {
  const { content } = req.body;
  console.log(content);

  res.json({ status: "succesfull" });
};

exports.getFeedback = async (req, res) => {
  const { feedbackId } = req.params;
  const feedback = await Feedback.findById(feedbackId);
  res.json({ status: "succesfull", feedback });
};

exports.removeFeedback = async (req, res) => {
  const { feedbackId } = req.params;
  await Feedback.findByIdAndRemove(feedbackId);
  res.status(204).json({});
};

exports.updateFeedback = async (req, res) => {
  const { feedbackId } = req.params;
  await Feedback.findByIdAndUpdate(feedbackId, {
    title: req.body.title,
    category: req.body.category,
    upvotes: req.body.upvotes,
    status: req.body.status,
    description: req.body.description,
    comments: req.body.comments,
  });
  res.json({ status: "succesfull" });
};