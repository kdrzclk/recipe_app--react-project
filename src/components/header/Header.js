import React from "react";
import Form from "./Form";
import { HeaderDiv, HeaderImage, HeaderTitle } from "./style";
import HomeIcon from "../../assets/home.svg";

const Header = () => {
  return (
    <HeaderDiv>
      <HeaderTitle>My Food</HeaderTitle>
      <Form />
      <HeaderImage src={HomeIcon} />
    </HeaderDiv>
  );
};

export default Header;
