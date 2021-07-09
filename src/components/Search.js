import React from 'react';

const Search = ({options, handleChange, handleSubmit}) => {
  const handleClick = e => {
    e.preventDefault()
    handleSubmit(e.target)
  }

  return(
    <div className="row">
      <div className="col">
        <div className="mb-3">
          <form onSubmit={e => handleClick(e)}>
            <label htmlFor="filter" className="form-label">Filter Field</label>
            <select onChange={handleChange} className="form-select mb-3" id="filter" autoFocus>
              {options}
            </select>
            <label htmlFor="terms" className="form-label">Search Field</label>
            <input type="text" className="form-control mb-3" id="terms" placeholder="Type something here..." />
            <button type="submit" className="btn btn-primary mb-3">Bring me dishes</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Search;