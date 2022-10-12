import CocktailList from "../components/CocktailList";
import SearchBar from "../components/SearchBar";
const Home = () => {
  return (
    <div>
      <div className="bg-hero bg-cover bg-center">
        <section className="layout md:bg-bottom h-screen w-full text-white flex items-center mb-16">
          <div className="">
            <h1 className="font-title text-center md:text-left  capitalize text-4xl sm:text-5xl md:text-6xl leading-normal lg:text-7xl xl:text-8xl sm:w-1/2 md:w-3/5 xl:leading-tight mb-4 mt-8 md:mt-0">
              Enjoy your cocktail parties
            </h1>
            <p className="xl:text-xl text-stone-00 font-light text-center md:text-left sm:w-2/3 2xl:w-1/2 mb-4">
              If you need a cocktail, look no further. We've got recipes for
              vodka, rum, whiskey, martinis, margaritas, blended drinks, and
              more.
            </p>
            <a href="/#recipe" className="flex md:block justify-center">
              <button className="px-4 md:px-6 py-2 bg-white text-stone-800 border-white text-xl rounded-md border-2">
                Search
              </button>
            </a>
          </div>
        </section>
      </div>
      <section className="recipe text-white layout">
        <h1 className="font-title text-5xl md:text-6xl text-center leading-snug mb-8 md:mb-16">
          Our Cocktails
        </h1>
        <SearchBar />
        <CocktailList />
      </section>
    </div>
  );
};

export default Home;
