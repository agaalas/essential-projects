import React from "react";
import styled from "styled-components";

const SRecomenedMovie = styled.div`
  margin-right: 30px;
  margin-bottom: 30px;
  position: relative;
`;
const SMovieImg = styled.img`
  width: 280px;
  border-radius: 8px;
`;
const SCategories = styled.div`
  display: flex;
`;
const SCategory = styled.h4`
  margin-right: 19px;
  margin-bottom: 5px;
  display: flex;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 16px;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.75;
`;
const SMovieTitle = styled.h1`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: #ffffff;
  cursor: pointer;
`;
const SBookmarkIcon = styled.img`
position: absolute;
top: 25px;
left: 242px;
cursor: pointer;
`

function RecomenedMovies(request) {
  return (
    <SRecomenedMovie>
      <SMovieImg src={request.img} alt="" />
      <SBookmarkIcon src="./assets/icon-bookmark-empty.svg" alt="" />
      <SCategories>
        <SCategory>{request.year}</SCategory>
        <SCategory>{request.category}</SCategory>
        <SCategory>{request.rating}</SCategory>
      </SCategories>
      <SMovieTitle>{request.title}</SMovieTitle>
    </SRecomenedMovie>
  );
}

export default RecomenedMovies;
