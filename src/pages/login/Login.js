import React from "react";
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

const Login = () => {
  let navigate = useNavigate();

  // useEffect(() => {
  //   setIsNavbarHidden(true);
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
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
