import React from "react";
import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setinputValue] = useState("");

  const onInputChange = (event) => {
    setinputValue(event.target.value);
    // console.log(event.target.value); // estoy resiviendo el valor que escribo en el input;
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) {
      return;
    }

    // setCategories([...categories, inputValue]);
    onNewCategory(inputValue.trim());
    setinputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifts"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

//cada componenete puede tener su propio estado, sus propios hooks
