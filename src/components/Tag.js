import react from 'react';

const Tag = ({tagIten}) => {
  return(
    <li className="list-group-item">
      <span className="badge bg-danger">{`${tagIten['name']} - ${tagIten['value']}`}</span>
    </li>
  )
}

export default Tag;