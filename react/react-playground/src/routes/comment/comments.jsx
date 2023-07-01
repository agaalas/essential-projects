import React from "react";

import Comment from "./comment";

function Comments(props) {
  console.log(props.comments);

  return (
    <div className="comments-container__comments">
      <h2 className="comments-container__comments-count">
        {props.comments ? props.comments.length : "0"} Comments
      </h2>
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
    </div>
  );
}

export default Comments;
