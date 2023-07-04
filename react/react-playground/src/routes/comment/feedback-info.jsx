import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import "./style.css";

import Feedback from "../../components/feedback";
import axios from "axios";

function FeedbackInfo() {
  const [request, setRequest] = useState(null);
  const [addCommentInput, setAddCommentInput] = useState(" ");
  const { feedbackId } = useParams();
  const navigate = useNavigate();
  console.log(feedbackId);

  console.log(request);

 useEffect(()=>{
  async function getData(){
    let data
    const config={
      method:"GET",
      headers:{
        Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODc3Yzg3M2ZlNjY2Y2E0ZTFjOTUwNyIsImlhdCI6MTY4NjY4MjIwMSwiZXhwIjoxNjk0NDU4MjAxfQ.i1aSRJVpc0FD-z3o_hVmwE0XrqK7zPWTEDwOwJd58T0`,
        "Content-Type":`application/json`
      }
    }
    try {
      data=await axios.get(
        `https://tutorial-apis.herokuapp.com/api/v1/feedbacks/${feedbackId}`,
        config
      )
      setRequest(data.data.data)
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  getData()
 },[])

  // function countComments(data) {
  //   let count = 0;
  //   data.comments?.forEach((comment) => {
  //     count = count + 1;

  //     if (comment.replies) {
  //       comment.replies.forEach((comment) => {
  //         count = count + 1;
  //       });
  //     }
  //   });
  //   return count;
  // }
  // console.log(countComments(request));

  return (
    <div className="comments-container">
      <div className="comments-container__navbar">
        <div className="comments-container__go-back-button">
          <img
            src="./assets/Path 2.png"
            alt=""
            className="comments-container__back-icon"
          />
          <span className="comments-container__button">
            <button
              className="comments-container__go-back-btn"
              onClick={() => {
                navigate(-1);
              }}
            >
              Go Back
            </button>
          </span>
        </div>
        <div className="comments-container__edit-feedback-button">
          <button className="edit-button">Edit Feedback</button>
        </div>
      </div>
      <div className="comment-box__feedback">
        <Feedback
          id={request?.requestId}
          title={request?.title}
          category={request?.category}
          upvotes={request?.upvotes}
          description={request?.description}
          comments={request?.comments}
          upvoteRequest={request?.upvoteRequest}
        />
      </div>
      {/* <Comments comments={request.comments}/> */}

      <div className="comments-container__add-comment">
        <h2 className="comments-container__add-comment-header">Add Comment</h2>
        <input
          value={addCommentInput}
          onChange={(e) => setAddCommentInput(e.target.value)}
          type="text"
          placeholder="Type your comment here"
          className="comments-container__add-comment-input"
        />
        <div className="comments-container__post-comment">
          <span className="comments-container__characters-count">
            250 Characters left
          </span>
          <button className="comments-container__posting-button">
            Post Comment
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeedbackInfo;
