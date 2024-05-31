import axios from "axios";

const url = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
    baseURL: url,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",

    },
});

export default instance