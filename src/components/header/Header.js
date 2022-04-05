import React from "react";
import Form from "./Form";
import { HeaderDiv, HeaderTitle } from "./style";

const Header = () => {
  return (
    <HeaderDiv>
      <HeaderTitle>My Food</HeaderTitle>
      <Form />
    </HeaderDiv>
  );
};

export default Header;
