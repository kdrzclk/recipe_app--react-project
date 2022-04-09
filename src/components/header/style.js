import styled from "styled-components";

export const FormDiv = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
  border-radius: 2px;
  margin: 1rem;
`;

export const FormInput = styled.input`
  height: 3rem;
  width: 15rem;
  font-size: 1.5rem;
  border: none;
  outline: none;
  text-indent: 0.5rem;
  margin: 5px;
`;

export const FormButton = styled.button`
  height: 3rem;
  border: none;
  outline: none;
  background-color: #e1f1dd;
  margin: 5px;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    background-color: #00adb5;
    transition: all 0.3s ease-in;
    border: 1px solid white;
  }
`;

export const FormSelect = styled.select`
  margin: 5px;
  padding: 0 10px;
  height: 3rem;
  border: none;
  outline: none;
  font-size: 1.5rem;
`;

export const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #00adb5;
  padding: 3rem 0;
`;

export const HeaderTitle = styled.h1`
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 2.5rem;
  font-family: "Girassol", sans-serif;
`;
