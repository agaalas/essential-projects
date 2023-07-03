import React, { useState } from "react";
import "./login-style.css";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("aydin@gmail.com");
  const [password, setPassword] = useState("123456");

  const emailInputChange = (e) => {
    setEmail(e.target.value);
  };
  const passwordInputChange = (e) => {
    setPassword(e.target.value);
  };
  async function request() {
    const data = {
      username: email,
      password: password,
    };

    try {
      const response = await fetch(
        "https://product-feedbacks-api-app.herokuapp.com/apps/entertainment-app/api/v1/auth/login",
        {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow",
          referrerPolicy: "no-referrer",
          body: JSON.stringify(data),
        }
      );
      const responeData = await response.json(); // parses JSON response into native JavaScript objects
      console.log(responeData);
    } catch (error) {
      console.log(error);
    }
  }

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
        <button onClick={request} className="entertainment-web__login-btn">
          Login to your account
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
