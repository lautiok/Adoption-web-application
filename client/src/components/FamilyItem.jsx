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
        <Card key={family._id} image={family.image.url} text={family.name} />
      ))}
    </div>
  );
};