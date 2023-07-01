import React from "react";

function Comment(props) {
  return (
    <div className="comments-container__comment">
      <div className="comments-container__user-info">
        <div className="comments-container__user-data">
          <img
            src={props.profileImg.replace(".", "")}
            alt=""
            className="comments-container__profile-picture"
          />
          <div className="comments-container__profile-info">
            <h2 className="comments-container__profile-username">
              {props.fullName}
            </h2>
            <span className="comments-container__user-nickname">
              @{props.nickname}
            </span>
          </div>
        </div>
        <span className="comments-container__reply-btn">Reply</span>
      </div>
      <p className="comments-container__the-comment">{props.content}</p>
    </div>
  );
}

export default Comment;
