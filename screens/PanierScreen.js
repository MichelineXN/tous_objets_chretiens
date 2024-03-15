import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PanierScreen( navigation) {
  return (
    <View style={styles.container}>
      <Text>PanierScreen</Text>
      <TouchableOpacity style={styles.button}
      onPress={()=> {navigation.navigate('Contact')}}>
        <Text>Press to go to Contact</Text>
      </TouchableOpacity>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#green',
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