import React from "react";
import { useNavigate } from "react-router-dom";
import {
  RecipeButton,
  RecipeCardWrapper,
  RecipeImg,
  RecipeTitle,
} from "./style";

const RecipeCard = ({ recipe }) => {
  let navigate = useNavigate();

  const handleMore = () => {
    navigate("/details", { state: { recipe } });
  };
  return (
    <RecipeCardWrapper>
      <RecipeTitle> {recipe?.label} </RecipeTitle>
      <RecipeImg src={recipe?.image} />
      <RecipeButton onClick={handleMore}>View More</RecipeButton>
    </RecipeCardWrapper>
  );
};

export default RecipeCard;
