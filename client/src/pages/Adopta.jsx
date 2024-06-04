import React, { useEffect, useState } from 'react';
import { Filter } from '../components/Filter';
import { CardItem } from '../components/CardItem';
import { UsePets } from '../context/PetsContext';

export const Adopta = () => {
  const { pets, getPets } = UsePets();
  const [filteredDogs, setFilteredDogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPets = async () => {
      await getPets();
      setIsLoading(false);
    }
    fetchPets();
  }, []); 

  useEffect(() => {
    setFilteredDogs(pets); 
  }, [pets]); 

  const handleFilter = (filters) => {
    const { race, age, gender, type } = filters;
    const filtered = pets.filter(dog => {
      return (!race || dog.race === race) &&
             (!age || dog.age === age) &&
             (!gender || dog.gender === gender) &&
             (!type || dog.type === type);
    });
    setFilteredDogs(filtered);
  };

  return (
    <main>
      <Filter onFilter={handleFilter} />
      {isLoading ? (
        <p className="loading">Cargando...</p>
      ) : (
        !filteredDogs.length ? (
          <p className='loading'>No hay mascotas</p>
        ) :
        <CardItem filteredDogs={filteredDogs} />
      )} 
    </main>
  );
}
