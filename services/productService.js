// productService.js
import api from './api';

const getAllProducts = async () => {
    try {
        const response = await api.get('/products');
        return response.data;
    } catch (error) {
        throw error;
    }
};

const getProductById = async (productId) => {
    try {
        const response = await api.get(`/products/${productId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Ajouter un nouveau produit
const createProduct = async (productData) => {
    try {
        const response = await api.post('/products', productData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Mettre à jour un produit existant
const updateProduct = async (productId, updateData) => {
    try {
        const response = await api.put(`/products/${productId}`, updateData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Supprimer un produit
const deleteProduct = async (productId) => {
    try {
        const response = await api.delete(`/products/${productId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Rechercher des produits par un terme de recherche
const searchProducts = async (searchTerm) => {
    try {
        const response = await api.get(`/products/search?query=${encodeURIComponent(searchTerm)}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};


export default {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    searchProducts,
};
