import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function ArticlesScreen({ navigation }) {
  return (
      <View style={styles.container}>
        <Text style={styles.text}>Articles de l'App</Text>
        <Button
            title="Retour à l'accueil"
            onPress={() => navigation.navigate('Accueil')}
            color="#841584"
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow', // Modifier selon vos préférences
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    fontSize: 30,
  },
});

export default ArticlesScreen;
