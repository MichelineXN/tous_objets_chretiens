
// DonScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function DonScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Faire un Don</Text>
            // Ajoutez ici les éléments pour faire un don
            <Button
                title="Donner"
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
});

export default DonScreen;
