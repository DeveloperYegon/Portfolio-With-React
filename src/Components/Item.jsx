import React from 'react';
import { Link } from 'react-router-dom';

function Item(props) {
  const { id, image, name, description, type } = props; // Destructure props
  
  return (
    <div className='bg-[#182B5C] text-white border p-3 hover:scale-95'>
      <Link to={`/${type}/${id}`}>
        <img src={image} alt={name} />
      </Link>
      <h1 className='text-center'>{name}</h1>
      <p className='text-center'>{description}</p>
    </div>
  );
}

export default Item;
