const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const feedbackRoutes = require("./routes/feedback-route");
const app = express();


app.use(bodyParser.json({ limit: "5mb" }));
app.use("/feedback", feedbackRoutes)
module.exports = app;
