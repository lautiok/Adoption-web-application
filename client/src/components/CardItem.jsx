import React from 'react';
import { Card } from './Card';

export const CardItem = ({ filteredDogs }) => {
  return (
    <div className="card-container">
      {filteredDogs && filteredDogs.map(dog => (
        <Card 
          key={dog._id} 
          image={dog.image.url} 
          text={dog.status} 
          _id={dog._id} 
        />
      ))}
    </div>
  );
};
