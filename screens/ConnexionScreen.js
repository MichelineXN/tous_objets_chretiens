import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ConnexionScreen(navigation) {
  return (
    <View style={styles.container}>
      <Text>ConnexionScreen</Text>
      <TouchableOpacity style={styles.button}
      onPress={()=> {navigation.navigate('S_inscrire')}}>
        <Text>Press to go to S_Inscrire</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
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