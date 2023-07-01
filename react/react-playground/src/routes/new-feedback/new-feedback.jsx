import React from "react";

import { Link } from "react-router-dom";

import "./style.css"

function NewFeedback() {
  return (
    <div className="new-feedback__container">
      <button className="new-feedback__go-back-btn">
      {" "}
      <Link to="/">Go Back</Link></button>
      <div className="new-feedback__create-new-feedback">
        <h1 className="new-feedback__header">Create New Feedback</h1>
        <h4 className="new-feedback__feedback-title-category-detail">
          Feedback Title
        </h4>
        <span className="new-feedback__title-category-detail-description">
          Add a short, descriptive headline
        </span>
        <input type="text" className="new-feedback__title-category-detail-input" />
        <h4 className="new-feedback__feedback-title-category-detail">Category</h4>
        <span className="new-feedback__title-category-detail-description">
          Choose a category for your feedback
        </span>
        <input
          type="text"
          placeholder="Feature"
          className="new-feedback__title-category-detail-input"
        />
        <h4 className="new-feedback__feedback-title-category-detail">
          Feedback Detail
        </h4>
        <span className="new-feedback__title-category-detail-description">
          Include any specific comments on what should be improved, added, etc.
        </span>
        <input
          type="text"
          className="new-feedback__title-category-detail-input different"
        />
        <div className="new-feedback__the-btns">
          <button className="new-feedback__cancel-btn">Cancel</button>
          <button className="new-feedback__add-feedback-btn">Add Feedback</button>
        </div>
      </div>
    </div>
  );
}
export default NewFeedback;
