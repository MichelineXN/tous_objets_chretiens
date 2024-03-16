import { useState, useEffect } from 'react';
import orderService from './services/orderService';

export const useOrders = (userId) => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const data = await orderService.getAllOrdersByUser(userId);
                setOrders(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        if (userId) {
            fetchOrders();
        }
    }, [userId]);

    return { orders, loading, error };
};
