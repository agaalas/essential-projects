const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const feedbackRoutes = require("./routes/feedback-route");
const authRoutes = require("./routes/auth");
const app = express();


app.use(bodyParser.json({ limit: "5mb" }));
app.use("/feedback", feedbackRoutes)
app.use("/auth", authRoutes)

module.exports = app;
