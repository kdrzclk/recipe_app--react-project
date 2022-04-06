import React from "react";
import Form from "./Form";
import { HeaderDiv, HeaderTitle } from "./style";

const Header = ({
  query,
  setQuery,
  meal,
  setMeal,
  recipes,
  setRecipes,
  getApi,
}) => {
  return (
    <HeaderDiv>
      <HeaderTitle>My Food</HeaderTitle>
      <Form
        query={query}
        setQuery={setQuery}
        meal={meal}
        setMeal={setMeal}
        getApi={getApi}
      />
    </HeaderDiv>
  );
};

export default Header;
