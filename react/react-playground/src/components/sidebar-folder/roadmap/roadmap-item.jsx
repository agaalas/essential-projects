import axios from "axios";
import React, { useEffect } from "react";
import styled from "styled-components";

const SRoadmapItem = styled.div`
  position: relative;
  margin-left: 24px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  align-items: center;
  :after {
    content: "";
    height: 8px;
    width: 8px;
    border-radius: 50%;
    position: absolute;
    background: #000;
    left: -20px;
    top: 6;
  }
  :after:first-child {
    background-color: #f49f85;
  }
  :nth-child(2):after {
    background-color: #ad1fea;
  }
  :nth-child(3):after {
    background-color: #62bcfa;
  }
`;

function RoadmapItem(props) {
  const { label, count } = props;

  return (
    <SRoadmapItem key={label}>
      <div className="number-span">{label}</div>
      <span className="roadmap-count">{count}</span>
    </SRoadmapItem>
  );
}

export default RoadmapItem;
