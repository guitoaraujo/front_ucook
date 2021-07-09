import React from 'react';

const Recipe = ({recipeIten}) => {
  return(
    <div className="row">
      <div className="col">
        <div className="card mb-3">
          <div className="row">
            <div className="col-4">
              <img src={recipeIten.image} className="img-fluid rounded-start" alt="" />
            </div>
            <div className="col-8">
              <div className="card-body">
                <h5 className="card-title">
                  <a href='' >{ recipeIten.name }</a>
                  <span className="badge bg-warning text-dark">{ recipeIten.rate }</span>
                </h5>
                <p className="card-text">{ recipeIten.tags.join(' ') }</p>
                <p className="card-text"><small className="text-muted">{ `Ready to eat in: ${recipeIten.total_time}` }</small></p>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Recipe;