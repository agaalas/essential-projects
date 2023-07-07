import axios from "axios";
import React, { useEffect } from "react";
import styled from "styled-components";

const SRoadmapItem=styled.div`
  position: relative;
  margin-left: 24px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  align-items: center;
`

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
