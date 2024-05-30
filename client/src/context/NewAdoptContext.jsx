import { createContext, useContext, useState } from "react";
import { deleteAdoptedRequest, getNewAdoptedRequest, newAdoptedRequest } from "../api/newAdopted";

const NewAdoptContext = createContext();

export const UseNewAdopt = () => {
    const context = useContext(NewAdoptContext);
    if (!context) {
        throw new Error("UseNewAdopt must be used within a NewAdoptContextProvider");
    }
    return context;
};

export function NewAdoptContextProvider({ children }) {
    const [adopted, setAdopted] = useState([]);

    const getAdopted = async () => {
        try {
            const res = await getNewAdoptedRequest();
            setAdopted(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    const createNewAdopted = async (data) => {
        try {
            const res = await newAdoptedRequest(data);
            setAdopted([...adopted, res.data]);
        } catch (error) {
            console.error('Error creating new adopted:', error);
            throw error;
        }
    }

    const deleteAdopted = async (id) => {
        try {
            await deleteAdoptedRequest(id);
            setAdopted(adopted.filter(adopted => adopted._id !== id));
        } catch (error) {
            console.error('Error deleting adopted:', error);
            throw error;
        }
    }

    
    return(
        <NewAdoptContext.Provider value={{
            adopted,
            getAdopted,
            setAdopted,
            createNewAdopted,
            deleteAdopted

        }}>
            {children}
        </NewAdoptContext.Provider>
    )
}