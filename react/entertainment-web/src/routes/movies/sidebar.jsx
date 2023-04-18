import React from "react";

function Sidebar() {
  return (
    <div className="entertainment-web-movie__sidebar">
      <div className="entertainment-web-movie__categories">
        <img
          src="./assets/logo.svg"
          alt=""
          className="entertainment-web-movie__logo"
        />
        <img
          src="./assets/icon-nav-home.svg"
          alt=""
          className="entertainment-web-movie__cateegory extra"
        />
        <img
          src="./assets/icon-nav-movies.svg"
          alt=""
          className="entertainment-web-movie__cateegory"
        />
        <img
          src="./assets/icon-nav-tv-series.svg"
          alt=""
          className="entertainment-web-movie__cateegory"
        />
        <img
          src="./assets/icon-nav-bookmark.svg"
          alt=""
          className="entertainment-web-movie__cateegory"
        />
      </div>
      <img
        src="./assets/image-avatar.png"
        alt=""
        className="entertainment-web-movie__profile"
      />
    </div>
  );
}

export default Sidebar;
