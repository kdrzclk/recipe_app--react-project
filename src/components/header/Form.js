import React from "react";
import { FormDiv, FormInput, FormSelect, FormButton } from "./style";

const Form = ({
  query,
  setQuery,
  meal,
  setMeal,

  getApi,
}) => {
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
      <FormSelect onChange={handleChange2}>
        <option value="breakfast">breakfast</option>
        <option value="dinner">dinner</option>
        <option value="lunch">lunch</option>
        <option value="snack">snack</option>
        <option value="teatime">teatime</option>
      </FormSelect>
    </FormDiv>
  );
};

export default Form;
