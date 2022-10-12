import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setFavourite } from "../store/features/cocktailSlice";
import { MdFavorite } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";

const CocktailItem = ({ cocktailItem }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { cocktail } = useSelector((state) => state.cocktail);
  const { favourite } = useSelector((state) => state.cocktail);

  const addFavourite = (name) => {
    let cocktails = localStorage.getItem("cocktails")
      ? JSON.parse(localStorage.getItem("cocktails"))
      : [];
    const selectedCocktail = cocktail.find((item) => item.strDrink === name);
    cocktails.push(selectedCocktail);
    cocktails = [...new Set(cocktails.map((_) => JSON.stringify(_)))].map((_) =>
      JSON.parse(_)
    );
    localStorage.setItem("cocktails", JSON.stringify(cocktails));
  };

  const removeFavourite = (drink) => {
    let cocktails = favourite;
    let newCocktails = cocktails.filter((cocktail) => {
      return cocktail.strDrink !== drink;
    });
    localStorage.setItem("cocktails", JSON.stringify(newCocktails));
    dispatch(setFavourite(newCocktails));
  };

  return (
    <div className="relative overflow-hidden">
      {/* <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        className={`icon icon-add w-12 h-12  bg-green-600 fill-white stroke-white p-2 ${
          location.pathname === "/favourite" ? "hidden" : ""
        }`}
      >
        <title />
        <g data-name="Layer 54" id="Layer_54">
          <path
            className="cls-1"
            d="M16,28.72a3,3,0,0,1-2.13-.88L3.57,17.54a8.72,8.72,0,0,1-2.52-6.25,8.06,8.06,0,0,1,8.14-8A8.06,8.06,0,0,1,15,5.68l1,1,.82-.82h0a8.39,8.39,0,0,1,11-.89,8.25,8.25,0,0,1,.81,12.36L18.13,27.84A3,3,0,0,1,16,28.72ZM9.15,5.28A6.12,6.12,0,0,0,4.89,7a6,6,0,0,0-1.84,4.33A6.72,6.72,0,0,0,5,16.13l10.3,10.3a1,1,0,0,0,1.42,0L27.23,15.91A6.25,6.25,0,0,0,29,11.11a6.18,6.18,0,0,0-2.43-4.55,6.37,6.37,0,0,0-8.37.71L16.71,8.8a1,1,0,0,1-1.42,0l-1.7-1.7a6.28,6.28,0,0,0-4.4-1.82Z"
          />
        </g>
      </svg> */}
      <MdFavorite
        onClick={() => addFavourite(cocktailItem.strDrink)}
        className={`absolute text-3xl top-4 right-4 text-green cursor-pointer animate-pulse ${
          location.pathname === "/favourite" ? "hidden" : ""
        }`}
      />
      <AiFillCloseCircle
        onClick={() => removeFavourite(cocktailItem.strDrink)}
        className={`absolute text-3xl top-4 right-4 text-red-600 cursor-pointer animate-pulse ${
          location.pathname === "/" ? "hidden" : ""
        }`}
      />
      {/* <svg
        className={`w-12 h-12 absolute top-2 right-2 icon ${
          location.pathname === "/" ? "hidden" : ""
        }`}
        fill="none"
        height="24"
        stroke="red"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => removeFavourite(cocktailItem.strDrink)}
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="15" x2="9" y1="9" y2="15" />
        <line x1="9" x2="15" y1="9" y2="15" />
      </svg> */}
      <Link to={`/cocktail/${cocktailItem.idDrink}`}>
        <div className="bg-[#1c0404] text-black text-center rounded-md overflow-hidden">
          <img
            src={cocktailItem.strDrinkThumb}
            alt="cocktail"
            className="w-full"
          />
          <div className="flex items-center justify-between p-4 text-xl">
            <p className="text-xl font-bold text-green">
              {cocktailItem.strDrink}
            </p>
            <p className=" text-stone-400 text-sm">
              {cocktailItem.strCategory}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CocktailItem;
