import styled from "styled-components";

export const DetailWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  background-color: #00adb5;
  padding: 5px;
`;

export const DetailsTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  font-size: 2rem;
  h1 {
    margin-right: 50px;
    font-family: "Girassol", sans-serif;
    color: #fff;
    font-size: 3rem;
  }
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 1rem;
  border: 1px solid #fff;
  border-radius: 7px;
  background-color: #e1f1dd;
`;

export const DetailText = styled.div`
  width: 400px;
  text-align: right;
  font-size: 1.2rem;
  margin: 1.5rem;
  h6 {
    color: blue;
    font-family: "Girassol", sans-serif;
    font-size: 1.5rem;
  }
  p {
    font-weight: 700;
  }
  li {
    font-weight: 700;
    line-height: 2;
    text-align: left;
  }
`;

export const DetailImg = styled.div`
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 10px;
  margin: 2rem;
  img {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
  }
`;
