import React from "react";
import { Link } from "react-router-dom";

function Job(props) {
  return (
    <div className="job">
      <Link className="job-link" to={`/job-info/${props.id}`}>
        <img src="" alt="" className="img" />
        <div className="job-time">
          <span>{props.postedAt}</span>
          <span>{props.contract}</span>
        </div>
        <h2>{props.position}</h2>
        <h3 className="company-name">{props.title}</h3>
        <h4>{props.location}</h4>
      </Link>
    </div>
  );
}

export default Job;
