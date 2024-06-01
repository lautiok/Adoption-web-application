import React, { useEffect } from 'react';
import { Card } from './Card';
import { UseAdopted } from '../context/AdoptedContext';

export const FamilyItem = () => {
  const { getAdopted, adopted } = UseAdopted();

  useEffect(() => {
    getAdopted();
  }, []);

  return (
    <div className="card-container">
      {adopted && adopted.map(family => (
        <Card 
          key={family._id} 
          image={family.image.url} 
          _id={family._id} 
          customContent={<h2 className='card-button'>{family.name}</h2>} 
        />
      ))}
    </div>
  );
};
