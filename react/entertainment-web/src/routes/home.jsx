import React, { useState } from "react";
import Login from "./login";


function Home() {
  return (
    <div className="entertainment-web__container">
      <img src="./assets/logo.svg" alt="" className="entertainment-web__logo" />
      <Login/>
    </div>
  );
}

export default Home;
