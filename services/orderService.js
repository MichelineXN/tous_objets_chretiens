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

// ... autres fonctions liées aux commandes, telles que updateOrder, deleteOrder, etc.

export { createOrder, getOrderById };
