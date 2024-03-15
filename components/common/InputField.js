import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

//Le composant InputField est utilisé pour saisir de données
// (recueillir les données de l'utilisateur).
// ( utilisé pour implémenter une fonctionnalité de recherche, permettant aux utilisateurs de taper des requêtes pour trouver // des articles spécifiques dans votre catalogue d'objets chrétiens
//(Le composant InputField peut être réutilisé dans tout mon projet)
const InputField = ({ placeholder, value, onChangeText }) => {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default InputField;
