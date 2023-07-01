import React from "react";

import { Link } from "react-router-dom";

import "./no-feedback-style.css";

function NoFeedback() {
  return (
    <div className="no-feedback-folder-container">
      <img src="" alt="" className="no-feedback-folder__img" />
      <h1 className="no-feedback-folder__header">There is no feedback yet.</h1>
      <p className="no-feedback-folder__description">
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </p>
      <Link to="/new-feedback">
        <button className="no-feedback-folder__btn">+ Add Feedback</button>
      </Link>
    </div>
  );
}

export default NoFeedback;
