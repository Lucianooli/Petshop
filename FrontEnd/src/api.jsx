import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080", // Base principal da API
});

export default api;
