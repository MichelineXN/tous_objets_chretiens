import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

function SearchScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Recherche</Text>
            <TextInput
                style={styles.input}
                placeholder="Chercher..."
            />
            <Button
                title="Rechercher"
                onPress={() => navigation.navigate('Accueil')}
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
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '80%',
        marginBottom: 20,
        padding: 10,
    },
});

export default SearchScreen;
