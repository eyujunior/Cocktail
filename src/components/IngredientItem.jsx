import React from "react";

const IngredientItem = ({ name }) => {
  return (
    <div className="bg-[#1c0404] p-4 xl:p-6 rounded-xl">
      <img
        src={`https://www.thecocktaildb.com/images/ingredients/${name}.png`}
        alt="ingredient"
        className="mb-8 hover:scale-125 duration-300 ease-in transition-all"
      />
      <h3 className="text-center text-xl font-light">{name}</h3>
    </div>
  );
};

export default IngredientItem;
