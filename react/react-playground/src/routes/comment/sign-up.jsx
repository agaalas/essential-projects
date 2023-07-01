import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

const SSignUpContainer = styled.div`
  display: flex;
  margin-top: 188px;
  flex-direction: column;
  background: #ffffff;
  border-radius: 20px;
  padding: 32px;
  width: 400px;
`;

const SSignUpHeader = styled.h2`
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

const SInputExtra = styled.input`
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
  margin-bottom: 45px;
  cursor: pointer;
  outline:none;
`;
const SSignUpBtn = styled.button`
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
const SLogin = styled.div`
  display: flex;
  justify-content: center;
`;
const SAccount = styled.p`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 19px;
  color: #647196;
`;
const SLoginBtn = styled.button`
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

function SignUp() {
  const [name, setName] = useState("aga");
  const [surname, setSurname] = useState("alas");
  const [email, setEmail] = useState("aga9877678@gmail.com");
  const [password, setPassword] = useState("4231321");
  const [passwordConfirm, setPasswordConfirm] = useState("4231321");
  async function register() {
    const response = await axios.post(
      "https://tutorial-apis.herokuapp.com/api/v1/auth/register",
      {
        name: name,
        surname: surname,
        username: email,
        password: password,
        role: "user",
        passwordConfirm: passwordConfirm,
      },
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
  }

  return (
    <SSignUpContainer>
      <SSignUpHeader>Sign-up</SSignUpHeader>
      <SInput
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <SInput
        type="text"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        placeholder="Surname"
      />
      <SInput
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <SInput
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <SInputExtra
        type="password"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
        placeholder="Password Confirm"
      />
      <SSignUpBtn onClick={register}>Create an account</SSignUpBtn>
      <SLogin>
        <SAccount>Already have an account?</SAccount>
        <Link to={"/login"}>
          <SLoginBtn>Login</SLoginBtn>
        </Link>
      </SLogin>
    </SSignUpContainer>
  );
}

export default SignUp;
