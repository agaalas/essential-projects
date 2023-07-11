import React from "react";

import Comment from "./comment";
import styled from "styled-components";

const SComments = styled.div`
  margin-top: 28px;
`;
const SCommentsCount = styled.h2`
  font-family: "Jost";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.25px;
  color: #3a4374;
`;

function Comments(props) {
  console.log(props.comments);

  return (
    <SComments>
      <SCommentsCount>
        {props.comments ? props.comments.length : "0"} Comments
      </SCommentsCount>
      {props.comments?.map(function (comment) {
        return (
          <Comment
            key={comment.id}
            profileImg={comment.user.image}
            fullName={comment.user.name}
            nickname={comment.user.username}
            content={comment.content}
          />
        );
      })}
    </SComments>
  );
}

export default Comments;
