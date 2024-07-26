import { useState } from "react";
import { AddCategory, GifGrid } from "./components/index";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["bokus el macana"]);

  const onAddCategory = (newCategory) => {
    const normalizedNewCategory = newCategory.toLowerCase();

    const exits = categories.some(
      (category) => category.toLowerCase() === normalizedNewCategory
    );

    if (!exits) {
      setCategories([newCategory, ...categories]);
    }
  };

  return (
    <>
      <h1>Gift Expert App</h1>
      <AddCategory onNewCategory={onAddCategory} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
