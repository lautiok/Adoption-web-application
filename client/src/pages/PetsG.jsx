import React, { useEffect } from 'react';
import { CardID } from '../components/CardID';
import { useParams } from 'react-router-dom';
import { UsePets } from '../context/PetsContext';

export const PetsG = () => {
    const { getPet, pet } = UsePets();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getPet(id);
        }
    }, [id, getPet]);


    return (
        <div className="pets-container">
            {pet ? (
                <CardID
                    key={pet._id} // Add key for unique identification
                    id={pet._id}
                    image={pet.image.url}
                    text={pet.status}
                    name={pet.name}
                    description={pet.description}
                    age={pet.age}
                    gender={pet.gender}
                />
            ) : (
                <p>No pet available</p> // Handle case when there is no pet
            )}
        </div>
    );
};
