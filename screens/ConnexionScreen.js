// ConnexionScreen.js
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

function ConnexionScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Connexion</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
            />
            <TextInput
                style={styles.input}
                placeholder="Mot de passe"
                secureTextEntry={true}
            />
            <Button
                title="Se connecter"
                onPress={() => navigation.navigate('Accueil')}
                color="#841584"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'bleu azur',
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

export default ConnexionScreen;

