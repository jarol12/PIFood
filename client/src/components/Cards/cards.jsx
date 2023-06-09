import React from 'react'
import Card from '../Card/card'

const Cards = ({allRecipes}) => {
  return (
    <div className='cards-container'>
      {allRecipes.map((recipe,index) => <Card nombre={recipe.nombre?recipe.nombre:recipe.name}
       imagen={recipe.imagen} 
       healthScore={recipe.healthScore?recipe.healthScore:recipe.Nivel_food}
       tipos_dietas={recipe.diets?recipe.diets:[]}
       id = {recipe.id}
       key={index}/>)}
    </div>
  )
}

export default Cards
