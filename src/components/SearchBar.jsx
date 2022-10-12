import { ReactComponent as SearchIcon } from "../assets/icons/search.svg";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { getCocktails } from "../store/features/cocktailSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const searchCocktails = (e) => {
    e.preventDefault();
    dispatch(getCocktails(inputRef.current.value));
  };
  return (
    <div id="recipe">
      <form
        onSubmit={searchCocktails}
        className="flex items-center text-xl md:text-2xl justify-center flex-col md:flex-row mb-20 shadow-lg"
      >
        <input
          type="text"
          className="p-6 bg-[#140808] w-full mb-4 md:mb-0 md:w-1/3 outline-none rounded-l-lg text-white"
          placeholder="Search cocktails..."
          ref={inputRef}
        />
        <button
          type="submit"
          className=" bg-green px-4 py-2 md:p-6 rounded-md md:rounded-l-none flex items-center justify-center space-x-2 text-black w-full"
        >
          <SearchIcon className="h-7 w-7" />
          <span className="md:font-semibold ">Search</span>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
