import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GitExpertApp = () => {
  const [categories, setCategories] = useState(["Demon Slayer"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) {
      return;
    } // si la categoria ya  existe, no haga nada
    setCategories([newCategory, ...categories]); // pero si no existe, insertalo
  };
  return (
    <>
      <h1>GIF App</h1>

      <AddCategory
        /* setCategories={setCategories} categories={categories} */
        onNewCategory={(event) => onAddCategory(event)}
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

//apikey YgsrZHO7LbWziO4qrGKOM4R36NEOtrR9
