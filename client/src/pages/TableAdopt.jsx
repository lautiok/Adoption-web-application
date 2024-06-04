import React, { useEffect, useState } from "react";
import { UseNewAdopt } from "../context/NewAdoptContext";
import { UsePets } from "../context/PetsContext";
import { HeaderD } from "../components/HeaderD";

export const TableAdopt = () => {
  const { adopted, getAdopted, deleteAdopted } = UseNewAdopt();
  const { getPet, pets, getPets } = UsePets();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAdopted = async () => {
      await getAdopted();
      await getPets();
      setIsLoading(false);
    };

    fetchAdopted();
  }, []);

  const getPetName = (mascotaid) => {
    const pet = pets.find((pet) => pet._id === mascotaid);
    return pet ? pet.name : "mas";
  };

  return (
    <main>
      <HeaderD />
      <div className="table-container">
        {isLoading ? (
          <p className="loading">Cargando...</p>
        ) : adopted.length === 0 ? (
          <p className="loading">No hay adoptados</p>
        ) : (
          adopted &&
          adopted.map((item, index) => (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Message</th>
                  <th>Mascota Name</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.message}</td>
                  <td>{getPetName(item.mascotaid)}</td>
                  <td>
                    {" "}
                    <button
                      className="card-button-delete-adopt"
                      onClick={() => deleteAdopted(item._id)}
                    >
                      Delete
                    </button>{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          ))
        )}
      </div>
    </main>
  );
};
