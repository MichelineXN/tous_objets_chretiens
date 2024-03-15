import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';




//Un composant bouton réutilisable.

const Button = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 10,
        backgroundColor: 'blue',
        alignItems: 'center',
    },
    text: {
        color: 'white',
    },
});

export default Button;
