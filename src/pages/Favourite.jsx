import CocktailList from "../components/CocktailList";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setFavourite } from "../store/features/cocktailSlice";

const Favourite = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    let cocktails = localStorage.getItem("cocktails");
    cocktails = JSON.parse(cocktails) || [];

    dispatch(setFavourite(cocktails));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section className="text-white absolute top-4 w-full">
      <h1 className="font-title text-6xl text-center leading-snug mt-32 mb-16">
        Favourite
      </h1>
      <CocktailList />
    </section>
  );
};

export default Favourite;
