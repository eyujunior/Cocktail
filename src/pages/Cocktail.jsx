import { useEffect, useState } from "react";
import { ReactComponent as Youtube } from "../assets/icons/youtube.svg";
import IngredientList from "../components/IngredientList";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const Cocktail = () => {
  const [selected, setSelected] = useState({});
  const [ingName, setIngName] = useState([]);
  const params = useParams();
  const cocktailID = params.cocktailID;
  const { cocktail } = useSelector((state) => state.cocktail);

  const { strDrink, strVideo, strInstructions, strDrinkThumb } = selected;

  useEffect(() => {
    // ingredient names validation
    const ingredientName = (list) => {
      if (list.strIngredient1) {
        setIngName((prev) => [...prev, list.strIngredient1]);
      }
      if (list.strIngredient2) {
        setIngName((prev) => [...prev, list.strIngredient2]);
      }
      if (list.strIngredient3) {
        setIngName((prev) => [...prev, list.strIngredient3]);
      }
      if (list.strIngredient4) {
        setIngName((prev) => [...prev, list.strIngredient4]);
      }
      if (list.strIngredient5) {
        setIngName((prev) => [...prev, list.strIngredient5]);
      }
      if (list.strIngredient6) {
        setIngName((prev) => [...prev, list.strIngredient6]);
      }
    };
    const getSelected = () => {
      const selectedItem = cocktail.filter(
        (item) => item.idDrink === cocktailID
      );
      setSelected(selectedItem[0]);
      ingredientName(selectedItem[0]);
    };

    getSelected();
  }, [cocktailID, cocktail]);

  return (
    <section className="text-stone-200 absolute top-4 left-1/2 -translate-x-1/2 w-full layout">
      <h1 className="font-title text-5xl sm:text-6xl text-center leading-snug mt-32 mb-20 2xl:mb-32">
        {strDrink}
      </h1>
      <div className="flex items-start space-y-4 lg:space-x-8 2xl:space-x-16 justify-start flex-col lg:flex-row ">
        <img
          src={strDrinkThumb}
          alt="cocktail"
          className="max-w-[50%] rounded-3xl"
        />
        <div className="flex items-start justify-start flex-col text-xl">
          <div className="flex items-start md:items-center justify-between w-full mb-6 flex-col md:flex-row">
            <h2 className="text-4xl mb-4 md:mb-0">Instructions</h2>
            {strVideo && (
              <a
                href={strVideo}
                className="bg-white text-black flex items-center space-x-2 px-4 py-2 rounded-md"
              >
                <Youtube className="w-6 h-6" />
                <span>Youtube</span>
              </a>
            )}
          </div>
          <p className="lg:w-4/5 2xl:w-3/4 text-stone-300 font-light">
            {strInstructions}
          </p>
        </div>
      </div>
      <div>
        <h1 className="font-title text-5xl md:text-6xl mt-32 mb-16 2xl:mb-24">
          Ingredient
        </h1>
        <IngredientList name={ingName} />
      </div>
    </section>
  );
};

export default Cocktail;
