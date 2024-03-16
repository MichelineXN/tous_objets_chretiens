import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

function CheckoutScreen({ navigation }) {
    // États pour les informations de paiement
    const [numeroCarte, setNumeroCarte] = useState('');
    const [dateExpiration, setDateExpiration] = useState('');
    const [cvv, setCvv] = useState('');
    const [nomTitulaire, setNomTitulaire] = useState('');
    const [adresse, setAdresse] = useState('');
    const [ville, setVille] = useState('');
    const [codePostal, setCodePostal] = useState('');
    const [pays, setPays] = useState('');


    const handleFinaliserAchat = () => {
        // Ici, vous pouvez ajouter la logique pour traiter la commande
        // Comme la validation de l'adresse, la gestion du paiement, etc.
        // Ensuite, envoyez la commande au serveur ou à votre système de gestion des commandes
        console.log('Commande:', { adresse, ville, codePostal, pays });
        // Après le traitement de la commande, vous pouvez naviguer vers un écran de succès ou de récapitulatif de la commande
        navigation.navigate('ConfirmationCommande');
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Adresse de Livraison</Text>
            <TextInput
                style={styles.input}
                placeholder="Adresse"
                onChangeText={setAdresse}
                value={adresse}
            />
            <TextInput
                style={styles.input}
                placeholder="Ville"
                onChangeText={setVille}
                value={ville}
            />
            <TextInput
                style={styles.input}
                placeholder="Code Postal"
                onChangeText={setCodePostal}
                value={codePostal}
            />
            <TextInput
                style={styles.input}
                placeholder="Pays"
                onChangeText={setPays}
                value={pays}
            />
            {/* Ajoutez ici les champs pour les informations de paiement */}
            <Button
                title="Finaliser l'achat"
                onPress={handleFinaliserAchat}
                color="#841584"
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        color: '#000',
        fontSize: 22,
        margin: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        padding: 10,
        fontSize: 18,
    },
});

export default CheckoutScreen;
