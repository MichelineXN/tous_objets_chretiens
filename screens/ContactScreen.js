// ContactScreen.js
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

function ContactScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Contact</Text>
            <TextInput
                style={styles.input}
                placeholder="Nom"
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
            />
            <TextInput
                style={styles.input}
                placeholder="Message"
                multiline
            />
            <Button
                title="Envoyer"
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

export default ContactScreen;
