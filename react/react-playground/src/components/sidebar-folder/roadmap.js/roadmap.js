import { productRequests } from "../../../data/data";

import RoadmapItem from "./roadmap-item";

import "./roadmap-style.css";

function Roadmap(props) {
  const statuses = ["planned", "in-progress", "live"];
  const requestCountsByStatus = productRequests.reduce((acc, curValue) => {
    if (statuses.includes(curValue.status)) {
      if (acc[curValue.status]) {
        acc[curValue.status] = acc[curValue.status] + 1;
      } else {
        acc[curValue.status] = 1;
      }
    }
    return acc;
  }, {});
  console.log(requestCountsByStatus);

  return (  
    <div className="roadmap">
      <div className="nav-bar">
        <h2 className="road-heading">Roadmap</h2>
        <a href="/#" className={props.productDataRequests.length===0? "roadmapp__view--no-feedback" : "roadmapp__view"}>
          View
        </a>
      </div>
      <div className="progress">
        {statuses.map((status) => {
          return (
            <RoadmapItem
              key={status}
              label={status}
              count={requestCountsByStatus[status]}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Roadmap;
