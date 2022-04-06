import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import { HomeImage, HomeWrapper, Meal } from "./style";
import HomeIcon from "../../assets/home.svg";
import axios from "axios";
import RecipeCard from "./RecipeCard";

const APP_ID = "7d780e9c";
const APP_KEY = "cf47a5aca314e0af9e273a1a1c5a035e";

const Home = ({ setShowNav, showNav }) => {
  const [query, setQuery] = useState("");
  const [meal, setMeal] = useState("");
  const [recipes, setRecipes] = useState();

  const baseURL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getApi = async () => {
    const { data } = await axios.get(baseURL);
    console.log(data);
    setRecipes(data.hits);
  };

  useEffect(() => {
    window.onload = setShowNav(true);
  }, []);

  return (
    <HomeWrapper>
      {
        <Header
          query={query}
          setQuery={setQuery}
          meal={meal}
          setMeal={setMeal}
          getApi={getApi}
        />
      }

      {recipes ? (
        <Meal>
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe.recipe} />
          ))}
        </Meal>
      ) : (
        <HomeImage src={HomeIcon} />
      )}
    </HomeWrapper>
  );
};

export default Home;
