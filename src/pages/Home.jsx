import CocktailList from '../components/CocktailList'
import SearchBar from '../components/SearchBar'
const Home = () => {
  return (
    <>
      <section className='bg-hero md:bg-bottom h-screen w-full bg-cover text-white flex items-center px-2 md:px-8 mb-16'>
        <div className=''>
          <h1 className='font-title capitalize text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl sm:w-1/2 md:w-3/5 mb-4 mt-8 md:mt-0'>
            Enjoy your cocktail parties
          </h1>
          <p className='text-xl sm:w-2/3 mb-4'>
            If you need a cocktail, look no further. We've got recipes for
            vodka, rum, whiskey, martinis, margaritas, blended drinks, and more.
          </p>
          <a href='/#recipe'>
            <button className='px-4 md:px-6 py-2 bg-white text-black border-2 border-white text-xl rounded-md border-2'>
              Search
            </button>
          </a>
        </div>
      </section>
      <section className='recipe text-white'>
        <h1 className='font-title text-5xl md:text-6xl text-center leading-snug mb-4'>
          Our Cocktails
        </h1>
        <SearchBar />
        <CocktailList />
      </section>
    </>
  )
}

export default Home
