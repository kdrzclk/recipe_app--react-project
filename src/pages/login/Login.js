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

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <LoginWrapper>
      <LoginFormContainer>
        <LoginImage src={LoginImg} />
        <LoginTitle>{`<Kadir> Recipe`}</LoginTitle>
        <LoginForm onSubmit={handleSubmit}>
          <LoginInput type="text" placeholder="username" required />
          <LoginInput type="password" placeholder="password" required />
          <LoginButton>Login</LoginButton>
        </LoginForm>
      </LoginFormContainer>
    </LoginWrapper>
  );
};

export default Login;
