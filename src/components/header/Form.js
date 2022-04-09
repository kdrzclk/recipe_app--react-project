import React from "react";
import { FormDiv, FormInput, FormSelect, FormButton } from "./style";

const Form = ({ mealTypes, setQuery, setMeal, query, meal, getApi }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    query ? getApi(query, meal) : alert("Please enter a search query");
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleChange2 = (e) => {
    setMeal(e.target.value);
  };

  return (
    <FormDiv onSubmit={handleSubmit}>
      <FormInput type="text" placeholder="Search" onChange={handleChange} />
      <FormButton type="submit">Search</FormButton>
      <FormSelect name="mealTypes" id="mealTypes" onChange={handleChange2}>
        {mealTypes.map((item, index) => (
          <option key={index} value={item.toLowerCase()}>
            {item}
          </option>
        ))}
      </FormSelect>
    </FormDiv>
  );
};

export default Form;
