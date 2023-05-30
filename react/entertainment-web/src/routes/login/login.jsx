import React, { useState } from "react";
import "./login-style.css";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailInputChange = (e) => {
    setEmail(e.target.value);
  };
  const passwordInputChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="entertainment-web__container">
      <img src="./assets/logo.svg" alt="" className="entertainment-web__logo" />
      <div className="entertainment-web__login-page">
        <h1 className="entertainment-web__login-head">Login</h1>
        <input
          type="text"
          placeholder="Email address"
          className="entertainment-web__input"
          onChange={emailInputChange}
          value={email}
        />
        <input
          type="text"
          placeholder="Password"
          className="entertainment-web__password-input"
          onChange={passwordInputChange}
          value={password}
        />
        <button className="entertainment-web__login-btn">
          <Link to="/movies">Login to your account</Link>
        </button>
        <div className="entertainment-web__sing-up-container">
          <span className="entertainment-web__dont-have-an-account">
            Don’t have an account?
          </span>
          <button type="submit" className="entertainment-web__sign-up-btn">
            <Link to="/sign-up">Sign Up</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
