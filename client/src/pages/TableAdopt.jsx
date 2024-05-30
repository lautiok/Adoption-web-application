import React, { useEffect } from 'react';
import { UseNewAdopt } from '../context/NewAdoptContext';
import { UsePets } from '../context/PetsContext';
import { HeaderD } from '../components/HeaderD';

export const TableAdopt = () => {
    const { adopted, getAdopted, deleteAdopted } = UseNewAdopt();
    const { getPet, pets, getPets } = UsePets();

    useEffect(() => {
        getAdopted();
        getPets(); // Fetch all pets to have them available for matching
    }, [getAdopted, getPets]);

    const getPetName = (mascotaid) => {
        const pet = pets.find((pet) => pet._id === mascotaid);
        return pet ? pet.name : 'Unknown';
    };

    return (
        <main>
            <HeaderD />
            <div className='table-container'>
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
                    {adopted.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.message}</td>
                            <td>{getPetName(item.mascotaid)}</td>
                            <td> <button className='card-button-delete-adopt' onClick={() => deleteAdopted(item._id)}>Delete</button> </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </main>
        
    );
};
