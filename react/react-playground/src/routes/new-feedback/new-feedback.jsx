import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import styled from "styled-components";
import axios from "axios";

import "./style.css";

const SNewFeedbackContainer = styled.div`
  margin: 92px auto 0 auto;
  width: 540px;
`;
const SButtons = styled.div`
  display: flex;
  justify-content: end;
`;
const SCreateNewFeedBack = styled.div`
  margin-top: 40px;
  background: #ffffff;
  border-radius: 10px;
  padding: 52px 42px 40px 42px;
  display: flex;
  flex-direction: column;
`;
const STitleContainer = styled.div`
  background: #f7f8fd;
  border-radius: 5px;
  border: none;
  height: 48px;
  margin-bottom: 24px;
  padding: 24px;
  display: flex;
  align-items: center;
  color: #3a4374;
  font-family: Jost;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;
const SHeader = styled.h1`
  font-family: "Jost";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
  letter-spacing: -0.333333px;
  color: #3a4374;
  margin-bottom: 40px;
`;
const SFeedbackTitle = styled.h1`
  font-family: "Jost";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.194444px;
  color: #3a4374;
  margin-bottom: 2px;
`;

const SGoBackBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-family: "Jost";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #647196;
`;
const SCancelBtn = styled.button`
  font-family: "Jost";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #f2f4fe;
  background: #3a4374;
  border-radius: 10px;
  padding: 12px 24px;
  margin-right: 16px;
  border: none;
  cursor: pointer;
`;
const SAddFeedbackBtn = styled.button`
  background: #ad1fea;
  border-radius: 10px;
  padding: 12px 24px;
  font-family: "Jost";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #f2f4fe;
  border: none;
  cursor: pointer;
`;
const SDescription = styled.span`
  font-family: "Jost";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #647196;
  margin-bottom: 16px;
`;
const STitleInput = styled.input`
  background: #f7f8fd;
  border-radius: 5px;
  border: none;
  height: 48px;
  margin-bottom: 24px;
  padding-left: 24px;
`;
const STitleInputExtra = styled.textarea`
  background: #f7f8fd;
  border-radius: 5px;
  border: none;
  height: 48px;
  margin-bottom: 24px;
  padding: 24px;
  height: 96px;
`;

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
        category: "Feature",
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
    if (response.data.status === "success") {
      console.log("hi");
      navigate("/");
    }
  }

  return (
    <SNewFeedbackContainer>
      <SGoBackBtn>
        {" "}
        <Link to="/">Go Back</Link>
      </SGoBackBtn>
      <SCreateNewFeedBack>
        <SHeader>Create New Feedback</SHeader>
        <SFeedbackTitle>Feedback Title</SFeedbackTitle>
        <SDescription>Add a short, descriptive headline</SDescription>
        <STitleInput
          type="text"
          value={title}
          onChange={(e) => setTttle(e.target.value)}
        />
        <SFeedbackTitle>Category</SFeedbackTitle>
        <SDescription>Choose a category for your feedback</SDescription>
        <STitleContainer>
          <span>Feature</span>
          <img src="" alt="" />
        </STitleContainer>
        <SFeedbackTitle>Feedback Detail</SFeedbackTitle>
        <SDescription>
          Include any specific comments on what should be improved, added, etc.
        </SDescription>
        <STitleInputExtra
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <SButtons>
          <SCancelBtn>Cancel</SCancelBtn>
          <SAddFeedbackBtn onClick={addFeedback}>Add Feedback</SAddFeedbackBtn>
        </SButtons>
      </SCreateNewFeedBack>
    </SNewFeedbackContainer>
  );
}
export default NewFeedback;
