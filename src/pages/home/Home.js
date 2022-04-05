import React from "react";
import Header from "../../components/header/Header";
import { HomeImage, HomeWrapper } from "./style";
import HomeIcon from "../../assets/home.svg";

const Home = () => {
  return (
    <HomeWrapper>
      {<Header />}
      <HomeImage src={HomeIcon} />
    </HomeWrapper>
  );
};

export default Home;
