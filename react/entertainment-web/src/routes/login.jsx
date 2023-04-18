import React, { useState } from "react";
import "./login-style.css";
import { Link } from "react-router-dom";

function Login( ) {
  return (
    <div className="entertainment-web__login-page">
      <h1 className="entertainment-web__login-head">Login</h1>
      <input
        type="text"
        placeholder="Email address"
        className="entertainment-web__input"
      />
      <input
        type="text"
        placeholder="Password"
        className="entertainment-web__password-input"
      />
      <button className="entertainment-web__login-btn">
        <Link to={"/movies"}>Login to your account</Link>
      </button>
      <div className="entertainment-web__sing-up-container">
        <span className="entertainment-web__dont-have-an-account">
          Don’t have an account?
        </span>
        <button type="submit" className="entertainment-web__sign-up-btn">
          <Link to={"/sign-up"}>Sign Up</Link>
        </button>
      </div>
    </div>
  );
}

export default Login;
