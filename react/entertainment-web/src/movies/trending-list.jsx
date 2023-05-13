import React from "react";
import { data } from "../data/data.js";
import Trending from "./trending";

function TrendingList() {
  return (
    <div className="entertainment-web-movie__trending-movies">
      {data.isTrending===true? "":  data.map((request) => {
        return (
            <Trending
            year={request.year}
            category={request.category}
            rating={request.rating}
            title = {request.title}
            />
        )
      })}
    </div>
  );
}

export default TrendingList;
