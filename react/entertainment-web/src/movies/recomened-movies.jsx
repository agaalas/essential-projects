import React from "react";

function RecomenedMovies() {
  return (
    <div className="entertainment-web-movie__recomened-for-you-movies">
      <div className="entertainment-web-movie__recomened-for-you-movie">
        <img
          src="./assets/thumbnails/the-great-lands/regular/medium.jpg"
          alt=""
          className="entertainment-web-movie__recomened-for-you-movie-img"
        />
        <div className="entertainment-web-movie__recomened-for-you-movie-categories">
          <h4 className="entertainment-web-movie__recomened-for-you-movie-category">
            2019
          </h4>
          <h4 className="entertainment-web-movie__recomened-for-you-movie-category">
            Movie
          </h4>
          <h4 className="entertainment-web-movie__recomened-for-you-movie-category">
            PG
          </h4>
        </div>
        <h2 className="entertainment-web-movie__recomened-for-you-movie-name">
          The Great Lands
        </h2>
      </div>
    </div>
  );
}

export default RecomenedMovies;
