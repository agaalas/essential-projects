import React from "react";
import { data } from "../data/data.js";
import Job from "./job";

function JobList() {
  return (
    <div className="jobs">
      {data.map((request) => {
        return (
          <Job
            key={request.id}
            id={request.id}
            postedAt={request.postedAt}
            contract={request.contract}
            position={request.position}
            company={request.company}
            location={request.location}
          />
        );
      })}
    </div>
  );
}

export default JobList;
