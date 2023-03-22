import React from "react";

function Job(props) {
  return (
    <div className="job">
      <img src="" alt="" className="img" />
      <div className="job-time">
        <span>{props.postedAt}</span>
        <span>{props.contract}</span>
      </div>
      <h2>{props.position}</h2>
      <h3>{props.company}</h3>
      <h4>{props.location}</h4>
    </div>
  );
}

export default Job;
