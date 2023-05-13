import React from "react";
import "./movies-style.css";
import Sidebar from "./sidebar";
import RecomenedMovies from "./recomened-movies";
import TrendingList from "./trending-list";
import RecomenedList from "./recomened-list";

function Movies() {
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
        <TrendingList />
        <h1 className="entertainment-web-movie__recomened-for-you">
          Recomened for you
        </h1>
        <RecomenedList/>
      </div>
    </div>
  );
}

export default Movies;
