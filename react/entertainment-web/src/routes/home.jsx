import React, { useState } from "react";
import Sidebar from "../movies/sidebar";
import Trending from "../movies/trending";
import RecomenedMovies from "../movies/recomened-movies";

function Home() {
  

  return (
    <div className="entertainment-web-movie__container">
      <Sidebar />
      <div className="entertainment-web-movie__movies">
        <div className="entertainment-web-movie__input-box">
          <img
            src="./assets/icon-search.svg"
            alt=""
            className="entertainment-web-movie__input-icon"
          />
          <input
            type="text"
            placeholder="Search for movies or TV series"
            className="entertainment-web-movie__input"
          />
        </div>
        <h1 className="entertainment-web-movie__trending-header">Trending</h1>
        <Trending />
        <h1 className="entertainment-web-movie__recomened-for-you">
          Recomened for you
        </h1>
        <RecomenedMovies />
      </div>
    </div>
  );
}

export default Home;
