import React from "react";

function RecomenedMovies(request) {
  return (
    <div className="entertainment-web-movie__recomened-for-you-movie">
      <img
        src="./assets/thumbnails/the-great-lands/regular/medium.jpg"
        alt=""
        className="entertainment-web-movie__recomened-for-you-movie-img"
      />
      <div className="entertainment-web-movie__recomened-for-you-movie-categories">
        <h4 className="entertainment-web-movie__recomened-for-you-movie-category">
          {request.year}
        </h4>
        <h4 className="entertainment-web-movie__recomened-for-you-movie-category">
          {request.category}
        </h4>
        <h4 className="entertainment-web-movie__recomened-for-you-movie-category">
          {request.rating}
        </h4>
      </div>
      <h2 className="entertainment-web-movie__recomened-for-you-movie-name">
        {request.title}
      </h2>
    </div>
  );
}

export default RecomenedMovies;
