import axios from "./axios";


export const registerRequest = user => axios.post(`session/register`, user)

export const loginRequest = user => axios.post(`session/login`, user)

export const verifyRequest = () => axios.get(`session/verify`)