// userProfileService.js
import api from './api';

const getUserProfile = async () => {
    try {
        const response = await api.get('/user/profile');
        return response.data;
    } catch (error) {
        throw error;
    }
};

const updateUserProfile = async (userData) => {
    try {
        const response = await api.put('/user/profile', userData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Ajouter une nouvelle fonction pour changer le mot de passe de l'utilisateur
const changeUserPassword = async (passwordData) => {
    try {
        const response = await api.put('/user/change-password', passwordData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Ajouter une nouvelle fonction pour mettre à jour les préférences de l'utilisateur
const updateUserPreferences = async (preferencesData) => {
    try {
        const response = await api.put('/user/preferences', preferencesData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Ajouter une nouvelle fonction pour supprimer le compte de l'utilisateur
const deleteUserAccount = async () => {
    try {
        const response = await api.delete('/user');
        return response.data;
    } catch (error) {
        throw error;
    }
};


export default {
    getUserProfile,
    updateUserProfile,
    changeUserPassword,
    updateUserPreferences,
    deleteUserAccount
};
