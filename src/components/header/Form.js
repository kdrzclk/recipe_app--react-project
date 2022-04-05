import React from "react";
import { FormDiv, FormInput, FormSelect, FormButton } from "./style";

const Form = () => {
  return (
    <FormDiv>
      <FormInput type="text" placeholder="Search" />
      <FormButton>Search</FormButton>
      <FormSelect>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
      </FormSelect>
    </FormDiv>
  );
};

export default Form;
