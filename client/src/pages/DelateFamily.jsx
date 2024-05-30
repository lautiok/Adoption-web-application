import React, { useEffect } from 'react'
import {UseAdopted} from '../context/AdoptedContext'
import { HeaderD } from '../components/HeaderD'

export const DelateFamily = () => {
    const {getAdopted, adopted, deleteAdopted} = UseAdopted()

    useEffect(() => {
        getAdopted()
    }, [])

  return (
    <main>
    <HeaderD />
  <div className="card-container">
    {adopted.length === 0 ? (
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
    )}
  </div>
</main>
  )
}
