import React, { useEffect, useState } from "react";
import { CardID } from "../components/CardID";
import { useParams } from "react-router-dom";
import { UsePets } from "../context/PetsContext";

export const PetsG = () => {
  const { getPet, pet } = UsePets();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);  // Estado de carga

  useEffect(() => {
    const fetchPet = async () => {
      await getPet(id);
      setIsLoading(false);  // Cambiar el estado de carga a false una vez que los datos estén obtenidos
    };

    fetchPet();
  }, []);

  return (
    <div className="pets-container">
      {isLoading ? (  // Mostrar un indicador de carga mientras se obtienen los datos
        <p>Cargando...</p>
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
