// api.js - Un fichier de configuration de base pour Axios ou client HTTP.
// api.js
import axios from 'axios';

// l'URL de base de mon API.
const API_URL = 'your-base-url';

const instance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instance;
