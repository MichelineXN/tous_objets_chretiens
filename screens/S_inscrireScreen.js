import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function S_iInscrireScreen(navigation) {
  return (
    <View style={styles.container}>
      <Text>S_InscrireScreen</Text>
      <TouchableOpacity  style={styles.button}
      onPress={()=> {navigation.navigate('Dons')}}>
        <Text>Press to go to Dons</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#yelow',
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