import React from "react";
import "./sign-up-style.css";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div class="entertainment-web__container">
      <img src="./assets/logo.svg" alt="" class="entertainment-web__logo" />
      <div class="entertainment-web__login-page">
        <h1 class="entertainment-web__login-head">Sign Up</h1>
        <input
          type="text"
          placeholder="Email address"
          class="entertainment-web__input"
        />
        <input
          type="text"
          placeholder="Password"
          class="entertainment-web__password-input"
        />
        <input
          type="password"
          placeholder="Repeat password"
          class="entertainment-web__password-repeat"
        />
        <button class="entertainment-web__login-btn">Sign up</button>
        <div class="entertainment-web__sing-up-container">
          <span class="entertainment-web__dont-have-an-account">
            Don’t have an account?
          </span>
          <button class="entertainment-web__sign-up-btn">
            <Link to={"/"}>Login</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
