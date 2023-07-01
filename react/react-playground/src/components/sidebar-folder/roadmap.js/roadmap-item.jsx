import axios from "axios";
import React, { useEffect } from "react";


function RoadmapItem(props) {
  const { label, count } = props;
  

  return (
    <div className="roadmap-item" key={label}>
      <div className="number-span">{label}</div>
      <span className="roadmap-count">{count}</span>
    </div>
  );
}

export default RoadmapItem;
