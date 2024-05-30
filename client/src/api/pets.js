import axios from "./axios.js"

export const getPetsRequest = () => axios.get("/pets")
export const getPetRequest = (id) => axios.get(`/pets/${id}`)
export const createPetRequest = async (data) => {
    const form = new FormData();

    for (const key in data) {
        form.append(key, data[key]);
    }

   return await axios.post("/pets", form, {
    headers: {
        "content-type": "multipart/form-data"
    }
  })  
} 
export const updatePetRequest = (id, data) => axios.put(`/pets/${id}`, data)
export const deletePetRequest = (id) => axios.delete(`/pets/${id}`)