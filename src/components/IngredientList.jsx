import React from "react";
import IngredientItem from "./IngredientItem";

const IngredientList = ({ name }) => {
  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 mb-20">
      {name.map((ing) => {
        return <IngredientItem key={ing} name={ing} />;
      })}
    </div>
  );
};

export default IngredientList;
