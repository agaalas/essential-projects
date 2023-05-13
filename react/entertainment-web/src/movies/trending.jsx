import React from "react";

function Trending(request) {
  return (
    <div>
      <div className="entertainment-web-movie__trending-movie">
        <div className="entertainment-web-movie__movie-categories">
          <h4 className="entertainment-web-movie__movie-category">
            {request.year}
          </h4>
          <h4 className="entertainment-web-movie__movie-category">
            {request.category}
          </h4>
          <h4 className="entertainment-web-movie__movie-category">
            {request.rating}
          </h4>
        </div>
        <h1 className="entertainment-web-movie__movie-name">{request.title}</h1>
      </div>
    </div>
  );
}

export default Trending;
