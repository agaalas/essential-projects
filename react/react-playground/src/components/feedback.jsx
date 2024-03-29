import axios from "axios";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { AuthContext } from "./context/auth-context";
import FeedbackProvider from "../providers/feedback-provider";
import { FeedbackContext } from "./context/context";

const SFeedback = styled.div`
  display: flex;
  background: #ffffff;
  opacity: 0.8;
  border-radius: 10px;
  padding: 28px 32px;
  align-items: flex-start;
  margin-bottom: 20px;
  cursor: pointer;
`;

const SLikes = styled.div`
  display: flex;
  background: #f2f4fe;
  border-radius: 10px;
  padding: 7px 9px 8px 9px;
  flex-direction: column;
  min-width: 40px;
  align-items: center;
  cursor: pointer;
`;
const SDescription = styled.div`
  margin-left: 40px;
  margin-right: auto;
`;
const SLike = styled.img`
  width: 100%;
`;
const SComment = styled.img`
  margin-right: 8px;
`;

function Feedback(props) {
  const {token} = useContext(AuthContext);
  const {getData} = useContext(FeedbackContext);

  async function upvoteFeedback() {
    const config = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": `application/json`,
      },
    };
    try {
      const response = await axios.get(
        `https://tutorial-apis.herokuapp.com/api/v1/feedbacks/upvote/${props.id}`,
        config
      );
      if (response.data.status === "success") {
        getData();
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="feedback-applications">
      <SFeedback>
        <SLikes onClick={upvoteFeedback}>
          <SLike src="./assets/Path 2.png" alt="" className="img-box-like" />
          <h3 className="num">{props.upvotes}</h3>
        </SLikes>
        <SDescription>
          <h2 className="add-tags">
            <Link className="feedback-link" to={`/feedback/${props.id}`}>
              {props.title}
            </Link>
          </h2>
          <p className="feedback-description">{props.description}</p>
          <a href="#/" className="enhancement">
            {props.category}
          </a>
        </SDescription>
        <div className="comments">
          <SComment
            src="./assets/shared/icon-comments.svg"
            alt=""
            className="like-img-box"
          />
          <span
            className={`comment-bar ${
              !props.comments || props.comments?.length === 0
                ? "comment-zero"
                : ""
            }`}
          >
            {props.comments ? props.comments.length : 0}
          </span>
        </div>
      </SFeedback>
    </div>
  );
}
export default Feedback;
