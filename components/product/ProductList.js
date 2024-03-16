//Ce code assume que onProductPress est une fonction que je passe à ProductList pour gérer les pressions sur les produits et que ProductCard est un composant que
// j'ai créé pour afficher les détails d'un produit

import React from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import ProductCard from './ProductCard';
import { useProducts } from '../../state/Hooks/useProducts.Hooks';

const ProductList = ({ onProductPress }) => {
    const { products, loading, error } = useProducts();

    if (loading) {
        return <ActivityIndicator size="large" />;
    }

    if (error) {
        return (
            <View>
                <Text>Error: {error.message}</Text>
            </View>
        );
    }

    return (
        <View>
            <FlatList
                data={products}
                renderItem={({ item }) => <ProductCard product={item} onPress={() => onProductPress(item)} />}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
};

export default ProductList;

