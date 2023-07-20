import React, { useEffect, useState } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";

import "./style.css";

import Feedback from "../../components/feedback";
import axios from "axios";
import styled from "styled-components";

const SCommentContainer = styled.div`
  max-width: 730px;
  margin-top: 80px;
`;
const SNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  align-items: center;
`;
const SGoBAckBtn = styled.div`
  font-family: "Jost";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #647196;
  margin-left: 15px;
`;
const SGoBackBtnB = styled.div`
  background: none;
  border: none;
  font-family: "Jost";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #647196;
  margin-left: 15px;
  :hover {
    cursor: pointer;
    text-decoration: underline;
    font-family: "Jost";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    text-decoration-line: underline;
    color: #647196;
  }
`;
const SEditFeedback = styled.div`
  border: none;
  background: #4661e6;
  border-radius: 10px;
  padding: 12px 25px;
  font-family: "Jost";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #f2f4fe;
  cursor: pointer;
`;
const SAddComment = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 24px 32px 34px 32px;
  margin-top: 24px;
`;
const SPostCommentCnt = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 27px;
  align-items: center;
`;
const SAcHeader = styled.h2`
  font-family: "Jost";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.25px;
  color: #3a4374;
  margin-bottom: 24px;
`;
const SInput = styled.input`
  background: #f7f8fd;
  border-radius: 5px;
  width: 664px;
  height: 80px;
  font-family: "Jost";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: #8c92b3;
  padding-left: 24px;
  border: none;
`;
const SCount = styled.span`
  font-family: "Jost";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: #647196;
`;
const SPostingBtn = styled.button`
  font-family: "Jost";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #f2f4fe;
  background: #ad1fea;
  border-radius: 10px;
  padding: 12px 24px;
  cursor: pointer;
  border: none;
`;
const SEditFeedbackb = styled.div``;
const SCommentboxFeedback = styled.div``;

function FeedbackInfo() {
  const [request, setRequest] = useState(null);
  const [addCommentInput, setAddCommentInput] = useState(" ");
  const { feedbackId } = useParams();
  const navigate = useNavigate();
  console.log(feedbackId);

  console.log(request);

  useEffect(() => {
    async function getData() {
      let data;
      const config = {
        method: "GET",
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODc3Yzg3M2ZlNjY2Y2E0ZTFjOTUwNyIsImlhdCI6MTY4NjY4MjIwMSwiZXhwIjoxNjk0NDU4MjAxfQ.i1aSRJVpc0FD-z3o_hVmwE0XrqK7zPWTEDwOwJd58T0`,
          "Content-Type": `application/json`,
        },
      };
      try {
        data = await axios.get(
          `https://tutorial-apis.herokuapp.com/api/v1/feedbacks/${feedbackId}`,
          config
        );
        setRequest(data.data.data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

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
    <SCommentContainer>
      <SNavbar>
        <SGoBAckBtn>
          <img
            src="./assets/Path 2.png"
            alt=""
            className="comments-container__back-icon"
          />

          <SGoBackBtnB
            onClick={() => {
              navigate(-1);
            }}
          >
            Go Back
          </SGoBackBtnB>
        </SGoBAckBtn>
        <SEditFeedbackb>
          <Link to="/edit-feedback">
            <SEditFeedback>Edit Feedback</SEditFeedback>
          </Link>
        </SEditFeedbackb>
      </SNavbar>
      <SCommentboxFeedback>
        <Feedback
          id={request?.requestId}
          title={request?.title}
          category={request?.category}
          upvotes={request?.upvotes}
          description={request?.description}
          comments={request?.comments}
          upvoteRequest={request?.upvoteRequest}
        />
      </SCommentboxFeedback>
      {/* <Comments comments={request.comments}/> */}

      <SAddComment>
        <SAcHeader>Add Comment</SAcHeader>
        <SInput
          value={addCommentInput}
          onChange={(e) => setAddCommentInput(e.target.value)}
          type="text"
          placeholder="Type your comment here"
        />
        <SPostCommentCnt>
          <SCount>250 Characters left</SCount>
          <SPostingBtn>Post Comment</SPostingBtn>
        </SPostCommentCnt>
      </SAddComment>
    </SCommentContainer>
  );
}

export default FeedbackInfo;
