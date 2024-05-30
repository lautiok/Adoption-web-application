import { createContext, useContext, useState } from "react";
import { createPetRequest, deletePetRequest, getPetRequest, getPetsRequest } from "../api/pets";

const PetsContext = createContext();

export const UsePets = () => {
    const context = useContext(PetsContext);
    if (!context) {
        throw new Error("UsePets must be used within a PetsContextProvider");
    }
    return context;
}

export function PetsContextProvider({ children }) {
    const [pets, setPets] = useState([]);
    const [pet, setPet] = useState(null);

    const getPets = async () => {
        try {
            const res = await getPetsRequest();
            setPets(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    const getPet = async (id) => {
        try {
            const res = await getPetRequest(id);
            setPet(res.data); // Set the single pet
        } catch (error) {
            console.log(error);
        }
    }

    const createPet = async (data) => {
        try {
            const res = await createPetRequest(data);
            setPets([...pets, res.data]);
        } catch (error) {
            console.error('Error creating pet:', error);
            throw error;
        }
    }

    const delatePet = async (id) => {
        try {
            await deletePetRequest(id);
            setPets(pets.filter(pet => pet._id !== id));
        } catch (error) {
            console.error('Error deleting pet:', error);
            throw error;
        }
    }

    return (
        <PetsContext.Provider value={{
            pets,
            pet, // Provide single pet state
            getPets,
            getPet,
            createPet,
            delatePet
        }}>
            {children}
        </PetsContext.Provider>
    )
}
