// authService.js - Pour gérer l'authentification des utilisateurs.

import api from './api';

const login = async (email, password) => {
    try {
        const response = await api.post('/auth/login', { email, password });
        if (response.data.accessToken) {
            // Stockage du token d'accès localement, dans localStorage ou AsyncStorage
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    } catch (error) {
        throw error;
    }
};

const logout = () => {
    // Supprimez le token d'accès du stockage local
    localStorage.removeItem('user');
};

const register = async (username, email, password) => {
    try {
        const response = await api.post('/auth/register', { username, email, password });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default {
    login,
    logout,
    register,
};
