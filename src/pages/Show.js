import react, { useState, useEffect } from 'react';
import axios from 'axios';

const Show = ({match}) => {
  const id = match.params.id
  const [recipe, setRecipe] = useState({})

  useEffect(()=> {
    const DEV_URL = `http://localhost:3000/api/v1/recipes/${id}`
    const PRO_URL = `https://ucookapp.herokuapp.com/api/v1/recipes/${id}`

    const getRecipe = async () => {
      const { data } = await axios.get(PRO_URL, {
        params: {
          id: id
        }
      })
      setRecipe(data.recipe)
    }

    getRecipe()
  }, [])

  return(
    <div class="row">
      <div class="col">
        <div class="row">
          <div class="col-8 offset-2 mb-3 mt-5">
            <div class="card bg-dark text-white">
              <img src={ recipe.image } class="card-img" alt="" />
              <div class="card-img-overlay">
                <h1 class="card-title">{ recipe.name }</h1>
                <h3 class="card-text">{ recipe.tags?.join(' ') }</h3>
                <p class="card-text">{ `Ready to eat in: ${recipe.total_time}` }</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col mb-3">
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><strong>{ recipe.name }</strong></li>
              <li class="list-group-item">{ recipe.tags?.join(' ') }</li>
              <li class="list-group-item">{ recipe.ingredients?.join(', ') }</li>
              <li class="list-group-item"><strong>Is it expensive? </strong>{ recipe.budget }</li>
              <li class="list-group-item"><strong>Is it hard? </strong>{ recipe.difficulty }</li>
              <li class="list-group-item"><strong>Food for </strong>{ recipe.people_quantity }</li>
              <li class="list-group-item"><strong>Rated as </strong>{ recipe.rate }</li>
              <li class="list-group-item"><strong>Thanks to </strong>{ recipe.author }</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Show;