import React, { useEffect } from "react";
import {
  LoginButton,
  LoginForm,
  LoginFormContainer,
  LoginImage,
  LoginInput,
  LoginTitle,
  LoginWrapper,
} from "./style";
import LoginImg from "../../assets/meal.svg";
import { useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";

const Login = ({ setShowNav, showNav }) => {
  let navigate = useNavigate();

  useEffect(() => {
    window.onload = setShowNav(!showNav);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <LoginWrapper>
      <LoginFormContainer>
        <LoginImage src={LoginImg} />
        <LoginTitle>{`<Kadir> Recipe`}</LoginTitle>
        <LoginForm onSubmit={handleSubmit}>
          <LoginInput type="text" placeholder="username" required />
          <LoginInput type="password" placeholder="password" required />
          <LoginButton type="submit">Login</LoginButton>
        </LoginForm>
      </LoginFormContainer>
    </LoginWrapper>
  );
};

export default Login;
