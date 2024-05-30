import React, { useEffect, useState } from 'react';
import { Filter } from '../components/Filter';
import { CardItem } from '../components/CardItem';
import { UsePets } from '../context/PetsContext';

export const Adopta = () => {
  const { pets, getPets } = UsePets();
  const [filteredDogs, setFilteredDogs] = useState();

  useEffect(() => {
    getPets();
  }, []); // Este efecto se ejecuta una vez al montar el componente


  useEffect(() => {
    setFilteredDogs(pets); // Este efecto se ejecuta cada vez que 'pets' cambia
  }, [ pets ]);

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
      <CardItem filteredDogs={filteredDogs} />
    </main>
  );
}
