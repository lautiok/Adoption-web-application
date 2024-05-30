import axios from "./axios";


export const newAdoptedRequest = (data) => axios.post("/newadopted", data)
export const getNewAdoptedRequest = () => axios.get("/newadopted")
export const deleteAdoptedRequest = (id) => axios.delete(`/newadopted/${id}`)