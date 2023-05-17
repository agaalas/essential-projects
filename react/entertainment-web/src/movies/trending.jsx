import React from "react";
import styled from "styled-components";

function Trending(request) {
  const STrendingMovie = styled.div`
    width: 470px;
    height: 230px;
    background-image: url(${request.img});
    border-radius: 8px;
    padding-left: 24px;
    padding-bottom: 24px;
    margin-right: 40px;
    background-size: 100%;
    display: flex;
    justify-content: end;
    flex-direction: column;
    position: relative;
  `;

  const SCategories = styled.div`
    display: flex;
    align-items: center;
  `;

  const SCategory = styled.h4`
    margin-right: 19px;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 19px;
    color: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.75;
    cursor: pointer;
  `;

  const SBookmarkIcon = styled.img`
    width: 11.67px;
    top: 25px;
    left: 424px;
    position: absolute;
    cursor: pointer;
  `;

  const STitle = styled.h1`
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    color: #ffffff;
    cursor: pointer;
  `;

  return (
    <div>
      <STrendingMovie>
        <SBookmarkIcon src="./assets/icon-bookmark-empty.svg" alt="" />
        <SCategories>
          <SCategory>{request.year}</SCategory>
          <SCategory>{request.category}</SCategory>
          <SCategory>{request.rating}</SCategory>
        </SCategories>
        <STitle>{request.title}</STitle>
      </STrendingMovie>
    </div>
  );
}

export default Trending;
