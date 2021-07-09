import React , { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import RecipeList from './components/RecipesList';
import TagsList from './components/TagsList';
import axios from 'axios';

const App = () => {
  const filterList = ['Ingredients', 'Tags', 'Name']
  const [filter, setFilter] = useState('')
  const [terms, setTerms] = useState('')
  const [recipes, setRecipes] = useState([])
  const [tags, setTags] = useState([])

  useEffect(()=> {
    const URL = ''
    const search = async () => {
      const { data } = await axios.get(URL, {
        params: {
          filter: filter,
          terms: terms
        }
      })

      setRecipes([])
      setTags([])
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

  return (
    <div className="container">
      <Navbar />
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col-4 mt-5"> 
              <Search handleChange={e => setFilter(e.target.value)} handleSubmit={target => handleSubmit(target)} options={optionsForFilterList}/>
              <TagsList tagsItens={tags}/>
            </div>
            <div className="col-8 mt-5"> 
              <RecipeList recipesList={recipes} />
            </div>   
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;