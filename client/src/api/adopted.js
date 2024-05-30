import axios from "./axios.js"

export const getAdoptedRequest = () => axios.get("/adopted")
export const createAdoptedRequest = async (data) => {
    const form = new FormData();

    for (const key in data) {
        form.append(key, data[key]);
    }

   return await axios.post("/adopted", form, {
    headers: {
        "content-type": "multipart/form-data"
    }
  })  
} 
export const deleteAdoptedRequest = (id) => axios.delete(`/adopted/${id}`)