import React from 'react'

const IngredientItem = ({ name }) => {
  return (
    <div className=''>
      <img
        src={`https://www.thecocktaildb.com/images/ingredients/${name}.png`}
        alt='ingredient'
        className='mb-2'
      />
      <h3 className='text-center text-2xl'>{name}</h3>
    </div>
  )
}

export default IngredientItem
