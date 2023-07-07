import React from "react";

import { Link } from "react-router-dom";

import styled from "styled-components";

const SNoFeedbackContainer = styled.div`
  width: 825px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px auto auto 0;
  background: #ffffff;
  border-radius: 10px;
  padding: 111px 206px 110px 209px;
`;

const SNoFeedbackImg = styled.img``;
const SNoFeedbackHeader = styled.h1`
  font-family: "Jost";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
  text-align: center;
  letter-spacing: -0.333333px;
  color: #3a4374;
  margin-top: 53px;
  margin-bottom: 16px;
`;

const SNoFeedbackDescription = styled.p`
  font-family: "Jost";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  color: #647196;
  margin-bottom: 48px;
`;

const SNoFeedbackBtn = styled.button`
  border: none;
  background: #ad1fea;
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

function NoFeedback() {
  return (
    <SNoFeedbackContainer>
      <SNoFeedbackImg src="" alt="" />
      <SNoFeedbackHeader>There is no feedback yet.</SNoFeedbackHeader>
      <SNoFeedbackDescription>
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </SNoFeedbackDescription>
      <Link to="/new-feedback">
        <SNoFeedbackBtn>+ Add Feedback</SNoFeedbackBtn>
      </Link>
    </SNoFeedbackContainer>
  );
}

export default NoFeedback;
