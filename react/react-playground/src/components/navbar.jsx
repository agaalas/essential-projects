import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  const [open, setOpen] = useState(false);
  const [currentState, setCurrentState] = useState("Most Upvotes");
  function handleSelectFunction(newState) {
    setCurrentState(newState);
    setOpen(false);
  }
  return (
    <div className="navbar">
      <div className="logo-suggestions">
        <img src="" alt="" className="logo" />
        <h2 className="suggestions">{props.requests.length} Suggestions</h2>
        <span
          className="sort-by"
          onClick={() => {
            setOpen(!open);
            console.log("hello");
          }}
        >
          Sort by: <span className="most">{currentState}</span>
        </span>
        {open ? (
          <div className="most-least-upvotes">
            <div
              className="upvotes-comments"
              onClick={() => handleSelectFunction("Most Upvotes")}
            >
              <span className="upvote-comment">Most Upvotes</span>
              {currentState === "Most Upvotes" && (
                <img
                  src="./assets/shared/icon-check.svg"
                  alt=""
                  className="upvote-check"
                />
              )}
            </div>
            <div
              className="upvotes-comments"
              onClick={() => handleSelectFunction("Least Upvotes")}
            >
              <span className="upvote-comment">Least Upvotes</span>
              {currentState === "Least Upvotes" && (
                <img
                  src="./assets/shared/icon-check.svg"
                  alt=""
                  className="upvote-check"
                />
              )}
            </div>
            <div
              className="upvotes-comments"
              onClick={() => handleSelectFunction("Most Comments")}
            >
              <span className="upvote-comment">Most Comments</span>
              {currentState === "Most Comments" && (
                <img
                  src="./assets/shared/icon-check.svg"
                  alt=""
                  className="upvote-check"
                />
              )}
            </div>
            <div
              className="upvotes-comments"
              onClick={() => handleSelectFunction("Least Comments")}
            >
              <span className="upvote-comment">Least Comments</span>
              {currentState === "Least Comments" && (
                <img
                  src="./assets/shared/icon-check.svg"
                  alt=""
                  className="upvote-check"
                />
              )}
            </div>
          </div>
        ) : null}

        <img src="" alt="" className="arrow" />
      </div>
      <div className="add-feedback">
        <h3 className="feedback">
          <Link to="/new-feedback">Add new Feedback</Link>
        </h3>
      </div>
    </div>
  );
}

export default Navbar;
