import React from "react";
import "./job-info-style.css";
import { jobRequest } from "../../data/data.js";
import { useParams } from "react-router-dom";

function JobInfo() {
  const { jobId } = useParams();
  console.log(jobId);
  const request = jobRequest.find((request) => {
    return request.id === Number(jobId);
  });
  console.log(request);

  return (
    <div className="job-info-container">
      <div className="job-info__job-company">
        <img src="" alt="" className="job-info__logo" />
        <div className="job-info__job-info">
          <div className="job-info__job-name">
            <h2 className="job-info__job-position">{request.company}</h2>
            <span className="job-info__company-name">{request.company}</span>
          </div>
          <button className="job-info__website-btn">Company Site</button>
        </div>
      </div>
      <div className="job-info__content">
        <div className="job-info__header-undso">
          <div className="job-info__time">
            <span className="job-info__upload">{request.postedAt}</span>
            <span className="job-info__work-time">{request.contract}</span>
          </div>
          <div className="job-info__header">
            <div className="job-info__job-information">
              <h1 className="job-info__job-position-head">
                {request.position}
              </h1>
              <span className="job-info__job-locations">
                {request.location}
              </span>
            </div>
            <div className="job-info__apply-now-btn">
              <button className="job-info__aply-btn">Apply Now</button>
            </div>
          </div>
          <p className="job-info__description">{request.description}</p>
          <a href="@" className="job-info__see-more-link">
            See more about our teams here
          </a>
          <h3 className="job-info__requirements">Requirements</h3>
          <p className="job-info__requirements-description">
            {request.requirements.content}
          </p>
          <ul className="job-info__requirements-pluses">
            <li className="job-info__requirements-plus">
              Morbi interdum mollis sapien. Sed
            </li>
            <li className="job-info__requirements-plus">
              Phasellus lacinia magna a ullamcorper laoreet, lectus arcu
              pulvinar risus
            </li>
            <li className="job-info__requirements-plus">
              Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel,
              tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.
            </li>
            <li className="job-info__requirements-plus">
              Morbi interdum mollis sapien. Sed
            </li>
          </ul>
          <h2 className="job-info__pluswhat-you-will-do">What You Will Do</h2>
          <p className="job-info__pluswhat-you-will-do-description">
          {request.role.content}

          </p>
          <ul className="job-info__pluswhat-you-will-do-list">
            <li className="job-info__pluswhat-you-will-do-element">
              Morbi interdum mollis sapien. Sed
            </li>
            <li className="job-info__pluswhat-you-will-do-element">
              Phasellus lacinia magna a ullamcorper laoreet, lectus arcu
              pulvinar risus
            </li>
            <li className="job-info__pluswhat-you-will-do-element">
              Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel,
              tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.
            </li>
            <li className="job-info__pluswhat-you-will-do-element">
              Morbi interdum mollis sapien. Sed
            </li>
          </ul>
        </div>
      </div>
      <div className="job-info__how-to-apply">
        <h3 className="job-info__how-to-apply-header">How To Apply</h3>
        <p className="job-info__how-to-apply-description">
          Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a
          ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis
          libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing
          varius, adipiscing in, lacinia vel, tellus.
        </p>
        <a href="@" className="job-info__how-to-apply-link">
          https://examplelink.com/how-to-apply
        </a>
      </div>
    </div>
  );
}

export default JobInfo;
