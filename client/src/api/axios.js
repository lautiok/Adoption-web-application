import axios from "axios";

const url = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
    baseURL: url,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
        "X-Requested-With": "XMLHttpRequest",
        "Access-Control-Allow-Credentials": true
    },
});

export default instance