import styled from "styled-components";

export const GithubWrapper = styled.div`
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

export const GithubImage = styled.img`
  width: 15%;
  margin-bottom: 2rem;
  margin-top: 3rem;
`;

export const GithubText = styled.div`
  text-align: center;
  margin: 1rem;
  border: 1px solid #fff;
  padding: 1rem 2rem;
  border-radius: 1rem;
  line-height: 2;
  span {
    color: #fff;
    font-family: "Girassol", sans-serif;
  }
  a {
    color: #fff;
    font-family: "Girassol", sans-serif;
  }
`;
