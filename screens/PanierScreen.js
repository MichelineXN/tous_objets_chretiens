import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, FlatList} from 'react-native';


//J'utilise un useState pour simuler un panier d'achat contenant des articles.
//  J'utilise FlatList pour afficher la liste des articles dans le panier. FlatList est une façon optimisée d'afficher
//  une liste d'éléments dans React Native.
// Je calcule le total du panier avec la méthode reduce sur le tableau panier.
// J'ai un bouton qui, lorsqu'il est pressé, naviguera vers un écran de passage à la caisse.


function PanierScreen({ navigation }) {
    const [panier, setPanier] = useState([
        { id: '1', titre: 'Article 1', quantite: 1, prix: 9.99 },
        { id: '2', titre: 'Article 2', quantite: 2, prix: 19.99 },
        { id: '3', titre: 'Article 3', quantite: 1, prix: 29.99 },
    ]);
    // Calcul du total
    const total = panier.reduce((acc, article) =>
        acc + article.quantite * article.prix, 0).toFixed(2);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Panier</Text>
            <FlatList
                data={panier}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemText}>{item.titre} x{item.quantite} - ${item.prix}</Text>
                    </View>
                )}
            />
            <Text style={styles.totalText}>Total: ${total}</Text>

            <Button
                title="Passer à la caisse"
                onPress={() => navigation.navigate('checkout')}
                color="#841584"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'jaune',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#000',
        fontSize: 30,
    },

    itemContainer: undefined,
    itemText: undefined,
    totalText: undefined
});

export default PanierScreen;
