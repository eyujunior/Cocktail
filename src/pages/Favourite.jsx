import CocktailList from '../components/CocktailList'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { setFavourite } from '../store/features/cocktailSlice'

const Favourite = () => {
  const [showMessage, setShowMessage] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    let cocktails = localStorage.getItem('cocktails')
    cocktails = JSON.parse(cocktails)
    if (cocktails.length === 0) {
      setShowMessage(true)
    }
    dispatch(setFavourite(cocktails))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <section className='text-white absolute top-4 w-full'>
      <h1 className='font-title text-6xl text-center leading-snug mt-32 mb-16'>
        Favourite
      </h1>
      {showMessage ? (
        <h1 className='text-3xl text-center'>
          No favourites Add Your Favourite Cocktail please
        </h1>
      ) : (
        <CocktailList />
      )}
    </section>
  )
}

export default Favourite
