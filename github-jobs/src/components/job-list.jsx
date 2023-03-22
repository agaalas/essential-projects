import { jobRequest } from "../data/data.js";
import Job from "./job.jsx";
import React from 'react'

function JobList() {
  return (
    <div className="jobs">
      {jobRequest.map((request) => {
        return (
          <Job
            key={request.id}
            id={request.id}
            title={request.company}
            location={request.location}
            position={request.position}
            postedAt={request.postedAt}
            contract={request.contract}
          />
        );
      })}
    </div>
  );
}

export default JobList;
