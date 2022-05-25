import React from 'react'
import IngredientItem from './IngredientItem'

const IngredientList = ({ name }) => {
  return (
    <div className='ing-container mb-20'>
      {name.map((ing) => {
        return <IngredientItem key={ing} name={ing} />
      })}
    </div>
  )
}

export default IngredientList
