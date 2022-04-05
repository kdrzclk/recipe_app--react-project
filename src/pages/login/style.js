import styled from "styled-components";

export const LoginWrapper = styled.div`
  background-image: url("https://picsum.photos/1600/900");
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  background-size: cover;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const LoginFormContainer = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 50%;
  border: 1px solid #e1f1dd;
  background-color: rgba(0, 173, 181, 0.5);
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LoginImage = styled.img`
  width: 150px;
  margin: 2rem;
`;

export const LoginTitle = styled.h1`
  color: #fff;
  font-family: "Girassol", sans-serif;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const LoginInput = styled.input`
  font-size: 1.5rem;
  background-color: rgba(0, 0, 0, 0.6);
  height: 50px;
  width: 250px;
  border-radius: 5px;
  border: none;
  outline: none;
  color: #fff;
  margin: 1rem;
  text-indent: 20px;
`;

export const LoginButton = styled.button`
  font-size: 1.5rem;
  font-family: "Girassol", sans-serif;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  border: none;
  cursor: pointer;
  margin: 1rem;
`;
