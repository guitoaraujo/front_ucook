import react from 'react';

const Tag = ({tagIten}) => {
  return(
    <li className="list-group-item">
      <span className="badge bg-danger">{`${tagIten[0]} - ${tagIten[1]}`}</span>
    </li>
  )
}

export default Tag;