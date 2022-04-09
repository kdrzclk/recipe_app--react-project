import React from "react";
import Form from "./Form";
import { HeaderDiv, HeaderTitle } from "./style";

const Header = ({ setQuery, query, meal, setMeal, getApi, mealTypes }) => {
  return (
    <HeaderDiv>
      <HeaderTitle>My Food</HeaderTitle>
      <Form
        setQuery={setQuery}
        query={query}
        mealTypes={mealTypes}
        setMeal={setMeal}
        meal={meal}
        getApi={getApi}
      />
    </HeaderDiv>
  );
};

export default Header;
