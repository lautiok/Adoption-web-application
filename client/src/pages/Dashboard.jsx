import React, { useEffect } from "react";
import { UsePets } from "../context/PetsContext";
import { HeaderD } from "../components/HeaderD";

export const Dashboard = () => {
  const { getPets, pets, delatePet } = UsePets();

  useEffect(() => {
    getPets();
  }, []);
  return (
    <main>
       <HeaderD />
      <div className="card-container">
        {pets.length === 0 ? (
          <div>No hay mascotas</div>
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
        )}
      </div>
    </main>
  );
};
