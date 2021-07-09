import React from 'react';
import Recipe from './Recipe';

const RecipesList = ({results}) => {
  return(
    <div>
      {results}
      <Recipe />
    </div>
  )
}

export default RecipesList;