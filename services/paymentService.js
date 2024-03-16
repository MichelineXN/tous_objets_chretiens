// paymentService.js
import api from './api';

// Fonction pour traiter un paiement
const processPayment = async (paymentDetails) => {
    try {
        const response = await api.post('/payments/process', paymentDetails);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Fonction pour obtenir le statut d'un paiement
const getPaymentStatus = async (paymentId) => {
    try {
        const response = await api.get(`/payments/${paymentId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Fonction pour annuler un paiement
const cancelPayment = async (paymentId) => {
    try {
        const response = await api.delete(`/payments/${paymentId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Fonction pour lister les transactions d'un utilisateur
const listTransactions = async (userId) => {
    try {
        const response = await api.get(`/users/${userId}/transactions`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default {
    processPayment,
    getPaymentStatus,
    cancelPayment,
    listTransactions,
};
