import React from "react";
import { data } from "../data/data.js";
import Trending from "./trending";
import styled from "styled-components";

function TrendingList() {
  const STrendingMovies=styled.div`
  display: flex;
  `
  const trendingMovie=data.filter((movie)=>{
    return movie.isTrending===true
  })
  return (
    <STrendingMovies>
      {trendingMovie.map((request) => {
        return (
          <Trending
            year={request.year}
            category={request.category}
            rating={request.rating}
            title={request.title}
            img={request.thumbnail.regular.large}
          />
        );
      })}
    </STrendingMovies>
  );
}

export default TrendingList;
