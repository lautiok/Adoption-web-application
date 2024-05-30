import { createContext, useContext, useState } from "react";
import { createAdoptedRequest, deleteAdoptedRequest, getAdoptedRequest } from "../api/adopted";
const AdoptedContext = createContext();

export const UseAdopted = () => {
    const context = useContext(AdoptedContext);
    if (!context) {
        throw new Error("UseAdopted must be used within a AdoptedContextProvider");
    }
    return context;
}

export function AdoptedContextProvider({ children }) {
    const [adopted, setAdopted] = useState([]);

    const getAdopted = async () => {
        try {
            const res = await getAdoptedRequest();
            setAdopted(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    const createAdopted = async (data) => {
        try {
            const res = await createAdoptedRequest(data);
            setAdopted([...adopted, res.data]);
        } catch (error) {
            console.error('Error creating adopted:', error);
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


    return (
        <AdoptedContext.Provider value={{
            adopted,
            setAdopted,
            getAdopted,
            createAdopted,
            deleteAdopted

        }}>
            {children}
        </AdoptedContext.Provider>
    )
}