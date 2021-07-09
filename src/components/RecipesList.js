import React from 'react';
import Recipe from './Recipe';

const RecipesList = ({recipesItens}) => {
  
  const recipesListItens = recipesItens.map((recipe, index)=>{
    return(
      <Recipe key={index} recipeIten={recipe} />
    )
  })
  return(
    <div>
      {recipesListItens}
    </div>
  )
}

export default RecipesList;