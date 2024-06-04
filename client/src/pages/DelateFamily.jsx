import React, { useEffect, useState } from 'react'
import {UseAdopted} from '../context/AdoptedContext'
import { HeaderD } from '../components/HeaderD'

export const DelateFamily = () => {
    const {getAdopted, adopted, deleteAdopted} = UseAdopted()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      const fetchAdopted = async () => {
        await getAdopted();
        setIsLoading(false);
      }

      fetchAdopted();
    }, [])

  return (
    <main>
    <HeaderD />
  <div className="card-container">
    { isLoading ? (
      <p className="loading">Cargando...</p>
    ) : (
      adopted.length === 0 ? (
      <div>No hay familias</div>
    ) : (
      adopted.map((dog) => (
        <div key={dog._id} className="card">
          <div className="image-container">
            <img src={dog.image.url} alt="Dog" className="card-image" />
            <button
              className="card-button card-button-delete"
              onClick={() => deleteAdopted(dog._id)}
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
  )
}
