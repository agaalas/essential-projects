import React from "react";
import "./movies-style.css";
import Sidebar from "./sidebar";
import TrendingList from "./trending-list";
import RecomenedList from "./recomened-list";
import styled from "styled-components";

const SContainer = styled.div`
  margin: 32px auto 0 auto;
  width: 1440px;
  display: flex;
`;

const SInputBox = styled.div`
  display: flex;
  margin-top: 32px;
  align-items: center;
`;

const SInputIcon = styled.img`
  width: 32px;
  margin-right: 24px;
`;

const SInput = styled.input`
  background: none;
  border: none;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 30px;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.5;
  width: 321px;
`;

const SHeader = styled.h1`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.5px;
  color: #ffffff;
  margin-top: 34px;
  margin-bottom: 25px;
`;

const SRecomenedForYou = styled.h1`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.5px;
  color: #ffffff;
  margin-top: 40px;
  margin-bottom: 32px;
`;

function Movies() {
  return (
    <SContainer>
      <Sidebar />
      <div className="entertainment-web-movie__movies">
        <SInputBox>
          <SInputIcon src="./assets/icon-search.svg" alt="" />
          <SInput type="text" placeholder="Search for movies or TV series" />
        </SInputBox>
        <SHeader>Trending</SHeader>
        <TrendingList />
        <SRecomenedForYou>Recomened for you</SRecomenedForYou>
        <RecomenedList />
      </div>
    </SContainer>
  );
}

export default Movies;
