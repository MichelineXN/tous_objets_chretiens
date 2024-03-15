import React from 'react';
import { View, FlatList } from 'react-native';
import ProductCard from './ProductCard';

//Un composant pour lister les produits, utilisant ProductCard
const ProductList = ({ products, onProductPress }) => {
    return (
        <View>
            <FlatList
                data={products}
                renderItem={({ item }) => <ProductCard product={item} onPress={onProductPress} />}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
};

export default ProductList;
