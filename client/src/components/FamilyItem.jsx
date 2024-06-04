import React, { useEffect, useState } from 'react';
import { Card } from './Card';
import { UseAdopted } from '../context/AdoptedContext';

export const FamilyItem = () => {
  const { getAdopted, adopted } = UseAdopted();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAdopted = async () => {
      await getAdopted();
      setIsLoading(false);
    }

    fetchAdopted();
  }, []);

  return (
    <div className="card-container">
      {isLoading ? (
        <p className="loading">Cargando...</p>
      ) : (
        adopted && adopted.map(family => (
          <Card 
            key={family._id} 
            image={family.image.url} 
            _id={family._id} 
            customContent={<h2 className='card-button'>{family.name}</h2>} 
          />
        )
      )
      )}
    </div>
  );
};
