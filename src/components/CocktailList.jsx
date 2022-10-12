import React, { useEffect, useState } from "react";
import CocktailItem from "./CocktailItem";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const CocktailList = () => {
  const [cocktailItems, setCocktailItems] = useState([]);
  const location = useLocation();
  const { cocktail } = useSelector((state) => state.cocktail);
  const { favourite } = useSelector((state) => state.cocktail);

  useEffect(() => {
    if (location.pathname === "/") {
      setCocktailItems(cocktail);
    } else if (location.pathname === "/favourite") {
      setCocktailItems(favourite);
    }
  }, [cocktail, favourite, location.pathname]);
  return (
    <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 layout mb-40 relative">
      {cocktailItems && cocktailItems.length > 1 ? (
        cocktailItems.map((item) => {
          return <CocktailItem key={item.idDrink} cocktailItem={item} />;
        })
      ) : (
        <p className=" absolute top-0 left-1/2 -translate-x-1/2 font-light text-xl">
          Sorry we couldn't find the a cocktail.
        </p>
      )}
    </div>
  );
};

export default CocktailList;
