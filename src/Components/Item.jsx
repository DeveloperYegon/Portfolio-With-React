import React from 'react';
import { Link } from 'react-router-dom';

function Item(props) {
  const { id,image, name, description, type, author } = props; // Destructure props
  
  return (
    <div className='border  cursor-pointer border-[#ED7D3B] rounded-lg p-4 bg-[#182B5C] text-white my-2'>
        <img src={image} alt={name} />
      <h1 className='text-center font-bold'>{name}</h1>
      <Link to={`/${type}/${id}`}>
      <p className='text-center text-white'>{description}</p>
      </Link>
      <span>{author}</span>
    </div>
  );
}

export default Item;
