import styled from "styled-components";

export const HomeWrapper = styled.div`
  background-color: #00adb5;
`;

export const HomeImage = styled.img`
  width: 35%;
  display: block;
  margin: 1.5rem auto;
`;

export const Meal = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;

export const RecipeCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 300px;
  height: 300px;
  background-color: #e1f1dd;
  padding: 7px;
  margin: 10px;
  border-radius: 2px;
  &:hover {
    box-shadow: 5px 5px 5px black;
    transition: all 0.5s ease-in;
  }
`;

export const RecipeTitle = styled.h5`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

export const RecipeImg = styled.img`
  width: 150px;
  border-radius: 7px;
`;

export const RecipeButton = styled.button`
  height: 30px;
  border: none;
  border-radius: 2px;
  margin: 10px;
  padding: 5px;
  color: #fff;
  background-color: #00adb5;
  cursor: pointer;
`;
