import react, { useState, useEffect } from 'react';
import Search from './Search';
import TagsList from './TagsList';
import RecipeList from './RecipesList';
import axios from 'axios';

const Home = () => {
  const filterList = ['Ingredients', 'Tags', 'Name']
  const [filter, setFilter] = useState('')
  const [terms, setTerms] = useState('')
  const [recipes, setRecipes] = useState([])
  const [tags, setTags] = useState([])

  useEffect(()=> {
    const DEV_URL = 'http://localhost:3000/api/v1/recipes'
    const PRO_URL = 'https://ucookapp.herokuapp.com/api/v1/recipes'

    const search = async () => {
      const { data } = await axios.get(PRO_URL, {
        params: {
          filter: filter,
          terms: terms
        }
      })

      setRecipes(data.recipes)
      setTags(data.most_common_tags)
      setFilter(data.filter)
    }

    search()
  }, [terms])

  const handleSubmit = target => {
    setTerms(target[1].value)    
  }

  const optionsForFilterList = filterList.map((option, index) => {
    return(
      <option value={option} key={index}>{option}</option>
    )
  })

  return(
    <div className="row">
      <div className="col">
        <div className="row">
          <div className="col-4 mt-5"> 
            <Search handleChange={e => setFilter(e.target.value)} handleSubmit={target => handleSubmit(target)} options={optionsForFilterList}/>
            <TagsList tagsItens={tags}/>
          </div>
          <div className="col-8 mt-5"> 
            <RecipeList recipesItens={recipes} />
          </div>   
        </div>
      </div>
    </div>
  )
}

export default Home;