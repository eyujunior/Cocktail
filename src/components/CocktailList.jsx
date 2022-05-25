import React, { useEffect, useState } from 'react'
import CocktailItem from './CocktailItem'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

const CocktailList = () => {
  const [cocktailItems, setCocktailItems] = useState([])
  const location = useLocation()
  const { cocktail } = useSelector((state) => state.cocktail)
  const { favourite } = useSelector((state) => state.cocktail)

  useEffect(() => {
    if (location.pathname === '/') {
      setCocktailItems(cocktail)
    } else if (location.pathname === '/favourite') {
      setCocktailItems(favourite)
    }
  }, [cocktail, favourite])
  return (
    <div className='recipe-container px-4 md:px-8 mb-40'>
      {cocktailItems.map((item) => {
        return <CocktailItem key={item.idDrink} cocktailItem={item} />
      })}
    </div>
  )
}

export default CocktailList
