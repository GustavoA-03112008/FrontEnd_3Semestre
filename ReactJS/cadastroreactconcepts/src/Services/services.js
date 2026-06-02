import axios from "axios";

// define a porta onde a API local está rodando
const apiPort = "5063";

// define o endereço/endpoint da api local
const localApi = `http://localhost:${apiPort}`;

// define o endereço das APIs externas
const externalApi = null;

const api = axios.create({
    baseURL: localApi
});

export default api;