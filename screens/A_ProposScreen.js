import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';





export default function A_ProposScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>A_ProposScreen</Text>
      <TouchableOpacity
      style={styles.button}
      onPress={()=> {navigation.navigate('Contact')}}>
      <Text>Press to go to Contact</Text>
      </TouchableOpacity>
      
    </View>
  );
}


//export default function A_ProposScreen({navigation}) {
  //return (
    //<View style={styles.container}>
      //<Text>A_ProposScreen</Text>
     //<TouchableOpacity style={styles.button} 
      //onPress={()=> {navigation.navigate('Articles')}}>
      //<Text>Press to go to Articles</Text>
      //</TouchableOpacity>
      
   // </View>
  //);
//}


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