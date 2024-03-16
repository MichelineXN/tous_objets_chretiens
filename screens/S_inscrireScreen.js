import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

function SInscrireScreen({ navigation }) {
    // Définir les états pour le nom, l'email et le mot de passe
    const [nom, setNom] = useState('');
    const [email, setEmail] = useState('');
    const [motDePasse, setMotDePasse] = useState('');

    // Fonction pour gérer la soumission du formulaire
    const handleInscription = () => {
        // Validation simple pour vérifier que les champs ne sont pas vides
        if (nom.length === 0) {
            Alert.alert("Erreur", "Le nom est requis.");
            return;
        }

        if (email.length === 0) {
            Alert.alert("Erreur", "L'email est requis.");
            return;
        } else if (!email.includes('@')) { // Vérification très basique du format de l'email
            Alert.alert("Erreur", "L'email n'est pas valide.");
            return;
        }

        if (motDePasse.length === 0) {
            Alert.alert("Erreur", "Le mot de passe est requis.");
            return;
        } else if (motDePasse.length < 6) { // Vérification basique de la longueur du mot de passe
            Alert.alert("Erreur", "Le mot de passe doit contenir au moins 6 caractères.");
            return;
        }

        // Si tout est correct, envoyer les données au serveur...

        // Création d'un objet avec les données de l'utilisateur
        const userData = {
            nom: nom,
            email: email,
            motDePasse: motDePasse,
        };

        // Envoyez les données au serveur
        fetch('https://monadresseapi.com/inscription', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
            .then(response => response.json())
            .then(data => {
                // Traitement de la réponse du serveur ici
                console.log('Inscription réussie:', data);
                Alert.alert("Succès", "Inscription réussie !");
                navigation.navigate('Accueil');
            })
            .catch((error) => {
                // Gérez les erreurs ici
                console.error('Erreur lors de l\'inscription:', error);
                Alert.alert("Erreur", "Une erreur est survenue lors de l'inscription.");
            });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>S'inscrire</Text>
            <TextInput
                style={styles.input}
                placeholder="Nom"
                onChangeText={setNom}
                value={nom}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={setEmail}
                value={email}
            />
            <TextInput
                style={styles.input}
                placeholder="Mot de passe"
                secureTextEntry={true}
                onChangeText={setMotDePasse}
                value={motDePasse}
            />
            <Button
                title="S'inscrire"
                onPress={handleInscription}
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

export default SInscrireScreen;


