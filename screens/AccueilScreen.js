// AccueilScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function AccueilScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Page d'accueil</Text>
            <Button
                title="Aller à À Propos"
                onPress={() => navigation.navigate('A_Propos')}
                color="#841584"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#007FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        color: '#000',
        fontSize: 30,
    }
});

export default AccueilScreen;


