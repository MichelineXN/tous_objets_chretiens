import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function DonScreen() {
  return (
    <View style={styles.container}>
      <Text>DonScreen</Text>
      <TouchableOpacity style={styles.button}
      onPress={()=> {navigation.navigate('Accueil')}}>
        <Text>Press to go to Accueil</Text>
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '##ADD8E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 9,
    backgroundColor: '#fff',
    marginTop: 20,
  },
  text: {
    color: '#000',
    fontSize: 30,
  }
});