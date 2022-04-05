import React from "react";
import Header from "../../components/header/Header";
import { HomeImage, HomeWrapper } from "./style";
import HomeIcon from "../../assets/home.svg";

const Home = () => {
  // const APP_ID = "7d780e9c";
  // const APP_KEY = "cf47a5aca314e0af9e273a1a1c5a035e";

  // const baseURL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  return (
    <HomeWrapper>
      {<Header />}
      <HomeImage src={HomeIcon} />
    </HomeWrapper>
  );
};

export default Home;
