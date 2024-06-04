import React, { useEffect, useState } from "react";
import { CardID } from "../components/CardID";
import { useParams } from "react-router-dom";
import { UsePets } from "../context/PetsContext";

export const PetsG = () => {
  const { getPet, pet } = UsePets();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);  

  useEffect(() => {
    const fetchPet = async () => {
      await getPet(id);
      setIsLoading(false);  
    };

    fetchPet();
  }, []);

  return (
    <div className="pets-container">
      {isLoading ? ( 
        <p className="loading">Cargando...</p>
      ) : (
        pet ? (
          <CardID
            key={pet._id}
            id={pet._id}
            image={pet.image.url}
            text={pet.status}
            name={pet.name}
            description={pet.description}
            age={pet.age}
            gender={pet.gender}
          />
        ) : (
          <p>No hay mascotas</p>
        )
      )}
    </div>
  );
};
