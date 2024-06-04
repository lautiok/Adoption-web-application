import React, { useEffect, useState } from "react";
import { UsePets } from "../context/PetsContext";
import { HeaderD } from "../components/HeaderD";

export const Dashboard = () => {
  const { getPets, pets, delatePet } = UsePets();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPets = async () => {
      await getPets();
      setIsLoading(false);
    }

    fetchPets();
  }, []);
  return (
    <main>
       <HeaderD />
      <div className="card-container">
        {isLoading ?(
          <p className="loading">Cargando...</p>
        ):( pets.length === 0 ? (
          <p className="loading">No hay mascotas</p>
        ) : (
          pets.map((dog) => (
            <div key={dog._id} className="card">
              <div className="image-container">
                <img src={dog.image.url} alt="Dog" className="card-image" />
                <button
                  className="card-button card-button-delete"
                  onClick={() => delatePet(dog._id)}
                >
                  {" "}
                  eliminar
                </button>
              </div>
            </div>
          ))
        )
        )}
      </div>
    </main>
  );
};
