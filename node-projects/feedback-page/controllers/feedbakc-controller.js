const fs = require("fs");
const Feedback = require("../models/feedback");

const dataUrl = __dirname.split(`controllers`)[0] + "data.json";
const data = fs.readFileSync(dataUrl, "utf-8");

exports.getFeedbacks = async (req, res) => {
  if(!(req.headers.authorization==="Bearer 788549ala465din")){
    res.json({
      status: "fail",
      message:"You need to login"
    });  }
  const feedbacks = await Feedback.find().populate({
    path:"creator",
    select:"name surname email"
  });
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
    creator:"6474fc36093979997e2baf3b"
  };
  const feedback = await Feedback.create(addedFeedback);
  res.json({status:"succes",addedFeedback});
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

