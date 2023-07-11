import { productRequests } from "../../../data/data";

import RoadmapItem from "./roadmap-item";


import styled from "styled-components";

const SRoadmap = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 19px 24px 24px 24px;
  display: flex;
  flex-direction: column;
`;
const SNavbar = styled.div`
  justify-content: space-between;
  display: flex;
  margin-bottom: 31px;
  align-items: center;
`;
const SHeader = styled.h1`
  font-family: "Jost";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.25px;
  color: #3a4374;
`;

const SProgress = styled.div`
  font-family: "Jost";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  color: #647196;
`;
const SRoadmapNoView = styled.div`
  font-family: "Jost";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 19px;
  text-decoration-line: none;
  color: #4661e6;
  mix-blend-mode: normal;
  opacity: 0.25;
`;
const SRoadmapView = styled.div`
  font-family: "Jost";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 19px;
  text-decoration-line: none;
  color: #4661e6;
  mix-blend-mode: normal;
  :hover {
    font-family: "Jost";
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 19px;
    text-decoration-line: underline;
    color: #4661e6;
  }
`;

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
    <SRoadmap>
      <SNavbar>
        <SHeader>Roadmap</SHeader>
        <a
          href="/#"
          className={
            props.productDataRequests.length === 0 ? (
              <SRoadmapNoView />
            ) : (
              <SRoadmapView />
            )
          }
        >
          View
        </a>
      </SNavbar>
      <SProgress>
        {statuses.map((status) => {
          return (
            <RoadmapItem
              key={status}
              label={status}
              count={requestCountsByStatus[status]}
            />
          );
        })}
      </SProgress>
    </SRoadmap>
  );
}

export default Roadmap;
