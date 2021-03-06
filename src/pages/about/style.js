import styled from "styled-components";

export const AboutWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1;

  background-color: #00adb5;

  span {
    color: #fff;
    font-size: 2.5rem;
    font-family: "Girassol", sans-serif;
  }
`;

export const AboutImage = styled.img`
  width: 30%;
  margin-bottom: 2rem;
  margin-top: 3rem;
`;

export const AboutTitle = styled.div`
  margin-bottom: 2rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

export const AboutText = styled.div`
  text-align: right;
  margin: 1rem;
  border: 1px solid #fff;
  padding: 1rem 2rem;
  border-radius: 1rem;
  span {
    color: #fff;
    font-family: "Girassol", sans-serif;
  }
  a {
    color: #fff;
    font-family: "Girassol", sans-serif;
  }
`;
