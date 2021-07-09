import React from 'react';
import Recipe from './Recipe';

const RecipesList = ({recipesList}) => {
  const recipesListItens = recipesList.map((recipe, index)=>{
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