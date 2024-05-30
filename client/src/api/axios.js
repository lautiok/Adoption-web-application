import axios from "axios";

const url = "https://adoption-web-application.onrender.com/api";

const instance = axios.create({
    baseURL: url,
    withCredentials: true
});

export default instance