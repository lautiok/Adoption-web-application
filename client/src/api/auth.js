import axios from 'axios';

axios.defaults.withCredentials = true;  // Habilita el envío de cookies con cada solicitud

const API_BASE_URL = 'https://adoption-web-application.onrender.com/api';

export const registerRequest = user => axios.post(`${API_BASE_URL}/session/register`, user);

export const loginRequest = user => axios.post(`${API_BASE_URL}/session/login`, user);

export const verifyRequest = () => axios.get(`${API_BASE_URL}/session/verify`);
