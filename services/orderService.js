// orderService.js
const API_URL = 'https://your-api-domain.com/api';

const createOrder = async (orderData) => {
    try {
        const response = await fetch(`${API_URL}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData),
        });
        if (!response.ok) {
            throw new Error('Could not create order.');
        }
        return await response.json();
    } catch (error) {
        // Handle or throw the error
        console.error(error);
        throw error;
    }
};

const getOrderById = async (orderId) => {
    try {
        const response = await fetch(`${API_URL}/orders/${orderId}`);
        if (!response.ok) {
            throw new Error('Order not found.');
        }
        return await response.json();
    } catch (error) {
        // Handle or throw the error
        console.error(error);
        throw error;
    }
};
// Mettre à jour une commande
const updateOrder = async (orderId, orderData) => {
    try {
        const response = await fetch(`${API_URL}/orders/${orderId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData),
        });
        if (!response.ok) {
            throw new Error('Could not update order.');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Supprimer une commande
const deleteOrder = async (orderId) => {
    try {
        const response = await fetch(`${API_URL}/orders/${orderId}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Could not delete order.');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Lister toutes les commandes d'un utilisateur
const getAllOrdersByUser = async (userId) => {
    try {
        const response = await fetch(`${API_URL}/users/${userId}/orders`);
        if (!response.ok) {
            throw new Error('Could not get orders.');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};


export { createOrder, getOrderById };
