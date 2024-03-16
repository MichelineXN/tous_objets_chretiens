import { useState } from 'react';
import paymentService from '../services/paymentService';

export const usePayment = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const processPayment = async (paymentDetails) => {
        try {
            setLoading(true);
            const data = await paymentService.processPayment(paymentDetails);
            setLoading(false);
            return data;
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    };

    return { processPayment, loading, error };
};
