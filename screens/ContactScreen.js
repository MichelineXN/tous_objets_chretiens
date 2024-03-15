import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';



export default function ContactScreen( navigation) {
  return (
    <View style={styles.container}>
      <Text>ContactScreen</Text>

      <TouchableOpacity style={styles.button}
      onPress={()=> {navigation.navigate('Connexion')}}>
        <Text>Press to go to connexion</Text>
        
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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