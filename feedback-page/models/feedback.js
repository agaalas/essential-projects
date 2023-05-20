const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  id: Number,
  title: String,
  category: String,
  upvotes: Number,
  status: String,
  description: String,
  comments:[String]
});

const Feedback = mongoose.model("feedback", feedbackSchema);
module.exports = Feedback;
