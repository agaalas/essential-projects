import React, { createContext, useContext, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../components/context/auth-context";

const SLoginContainer = styled.div`
  display: flex;
  margin-top: 188px;
  flex-direction: column;
  background: #ffffff;
  border-radius: 20px;
  padding: 32px;
  width: 400px;
`;
const SLoginHeader = styled.h2`
  font-family: "Jost";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
  letter-spacing: -0.333333px;
  color: #3a4374;
  margin-bottom: 32px;
`;
const SInput = styled.input`
  border: none;
  background: none;
  padding-top: 9px;
  padding-bottom: 9px;
  font-family: "Jost";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #647196;
  border-bottom: #5a698f 1px solid;
  margin-bottom: 24px;
  outline:none;
`;
const SLoginBtn = styled.button`
  background: #ad1fea;
  border-radius: 6px;
  padding: 15px 96.5px;
  border: none;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 24px;
  cursor: pointer;
`;
const SSignUp = styled.div`
  display: flex;
  justify-content: center;
`;
const SAcountless = styled.p`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 19px;
  color: #647196;
`;
const SSignUpBtn = styled.button`
  border: none;
  background: none;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 19px;
  color: #3a4374;
  margin-left: 9px;
  cursor: pointer;
`;

function Login() {
  const [username, setUsername] = useState("aga@gmail.com");
  const [password, setPassword] = useState("123456");
  const {login:loginUser}=useContext(AuthContext)


  async function login() {
    try {
      const response = await axios.post(
        "https://tutorial-apis.herokuapp.com/api/v1/auth/login",
        {
          username: username,
           password: password,
        },
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data=response.data
      console.log(data);
      loginUser(data.token, data.user)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SLoginContainer>
      <SLoginHeader>Login</SLoginHeader>
      <SInput
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Email"
      />
      <SInput
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="Password"
      />
      <SLoginBtn onClick={login}>Login to your account</SLoginBtn>
      <SSignUp>
        <SAcountless>Don’t have an account?</SAcountless>
        <Link to={"/sign-up"}>
          <SSignUpBtn>Sign Up</SSignUpBtn>
        </Link>
      </SSignUp>
    </SLoginContainer>
  );
}

export default Login;
