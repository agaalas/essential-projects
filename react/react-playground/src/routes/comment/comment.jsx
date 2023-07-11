import React from "react";
import styled from "styled-components";

const SCommentContainer = styled.div`
  max-width: 730px;
  margin-top: 80px;
`;
const SUserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SUserData = styled.div`
  display: flex;
`;
const SProfileInfo = styled.div`
  margin-left: 32px;
`;
const SUsername = styled.h2`
  font-family: "Jost";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.194444px;
  color: #3a4374;
`;
const SNickname = styled.span`
  font-family: "Jost";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #647196;
`;
const SReplyBtn = styled.button`
  font-family: "Jost";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 19px;
  color: #4661e6;
`;
const SComment = styled.span`
  font-family: "Jost";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: #647196;
  margin-left: 72px;
  margin-top: 17px;
`;
const SProfileImg = styled.img``;

function Comment(props) {
  return (
    <SCommentContainer>
      <SUserInfo>
        <SUserData>
          <SProfileImg src={props.profileImg.replace(".", "")} alt="" />
          <SProfileInfo>
            <SUsername>{props.fullName}</SUsername>
            <SNickname>@{props.nickname}</SNickname>
          </SProfileInfo>
        </SUserData>
        <SReplyBtn>Reply</SReplyBtn>
      </SUserInfo>
      <SComment>{props.content}</SComment>
    </SCommentContainer>
  );
}

export default Comment;
