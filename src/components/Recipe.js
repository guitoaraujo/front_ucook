import React from 'react';

const Recipe = ({recipe}) => {
  return(
      <div className="row">
        <div className="col">
          <div className="card mb-3">
            <div className="row">
              <div className="col-4">
                <img src="<%= recipe.image %>" className="img-fluid rounded-start" alt="" />
              </div>
              <div className="col-8">
                <div className="card-body">
                  <h5 className="card-title">
                    <a href='' >{ recipe.image }</a>
                    <span className="badge bg-warning text-dark">{ recipe.rate }</span>
                  </h5>
                  <p className="card-text">{ recipe.tags }</p>
                  <p className="card-text"><small className="text-muted">{ recipe.total_time }</small></p>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
  )
}

export default Recipe;