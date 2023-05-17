import React from "react";
import styled from "styled-components";

const SSidebar = styled.div`
  width: 96px;
  height: 960px;
  background: #161d2f;
  border-radius: 20px;
  padding: 35px 28px 32px 28px;
  display: flex;
  flex-direction: column;
  margin-right: 36px;
  align-items: center;
`;

const SCategories = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SMovieLogo = styled.img`
  width: 32px;
`;

const SCategory = styled.img`
  margin-bottom: 40px;
  width: 20px;
  cursor: pointer;
`;

const SProfile = styled.img`
  margin-top: 460px;
  border: 1px solid #ffffff;
  width: 40px;
  border-radius: 50%;
`;

const SIcons = styled.img`
  margin-top: 115px;
  margin-bottom: 40px;
  width: 20px;
  cursor: pointer;
`;

function Sidebar() {
  return (
    <SSidebar>
      <SCategories>
        <SMovieLogo src="./assets/logo.svg" alt="" />
        <SIcons src="./assets/icon-nav-home.svg" alt="" />
        <SCategory src="./assets/icon-nav-movies.svg" alt="" />
        <SCategory
          src="./assets/icon-nav-tv-series.svg"
          alt=""
        />
        <SCategory
          src="./assets/icon-nav-bookmark.svg"
          alt=""
        />
      </SCategories>
      <SProfile src="./assets/image-avatar.png" alt="" />
    </SSidebar>
  );
}

export default Sidebar;
