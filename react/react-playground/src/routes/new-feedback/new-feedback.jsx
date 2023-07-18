import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import "./style.css";
import axios from "axios";

function NewFeedback() {
  const [title, setTttle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  async function addFeedback() {
    const response = await axios.post(
      "https://tutorial-apis.herokuapp.com/api/v1/feedbacks",
      {
        title: title,
        category: category,
        description: description,
      },
      {
        method: "POST",
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODc3Yzg3M2ZlNjY2Y2E0ZTFjOTUwNyIsImlhdCI6MTY4NjY4MjIwMSwiZXhwIjoxNjk0NDU4MjAxfQ.i1aSRJVpc0FD-z3o_hVmwE0XrqK7zPWTEDwOwJd58T0`,
          "Content-Type": `application/json`,
        },
      }
    );
    if (response.data.status==="success") {
      console.log("hi");
      navigate("/")
    }
  }
  return (
    <div className="new-feedback__container">
      <button className="new-feedback__go-back-btn">
        {" "}
        <Link to="/">Go Back</Link>
      </button>
      <div className="new-feedback__create-new-feedback">
        <h1 className="new-feedback__header">Create New Feedback</h1>
        <h4 className="new-feedback__feedback-title-category-detail">
          Feedback Title
        </h4>
        <span className="new-feedback__title-category-detail-description">
          Add a short, descriptive headline
        </span>
        <input
          type="text"
          className="new-feedback__title-category-detail-input"
          value={title}
          onChange={(e) => setTttle(e.target.value)}
        />
        <h4 className="new-feedback__feedback-title-category-detail">
          Category
        </h4>
        <span className="new-feedback__title-category-detail-description">
          Choose a category for your feedback
        </span>
        <input
          type="text"
          placeholder="Feature"
          className="new-feedback__title-category-detail-input"
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
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
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
        />
        <div className="new-feedback__the-btns">
          <button className="new-feedback__cancel-btn">Cancel</button>
          <button className="new-feedback__add-feedback-btn" onClick={addFeedback} >
            Add Feedback
          </button>
        </div>
      </div>
    </div>
  );
}
export default NewFeedback;
