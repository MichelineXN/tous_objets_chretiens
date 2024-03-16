// A_ProposScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function A_ProposScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>À Propos de l'App</Text>
            <Button
                title="Retour à l'accueil"
                onPress={() => navigation.navigate('Accueil')}
                color="#841584" // Vous pouvez changer la couleur si vous le souhaitez
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

export default A_ProposScreen;
