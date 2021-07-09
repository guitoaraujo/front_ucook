import React from 'react';
import Tag from './Tag';

const TagsList = ({tagsItens}) => {
  const tagsListItens = tagsItens.map((tag, index)=>{
    return(
      <Tag key={index} tagIten={tag} />
    )
  })

  return(
    <div className="mb-3 mt-5">
      <h5>Most Common Tags</h5>
      <ul className="list-group list-group-flush">
        {tagsListItens}
      </ul>
    </div>
  )
}

export default TagsList;