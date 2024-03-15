import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function AccueilScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <TouchableOpacity
        style = {styles.button}
        onPress={() =>{
          navigation.navigate('A_Propos');
        }}>
          <Text>Se connecter</Text>
      </TouchableOpacity>
    </View>
  );
}

//export default function AccueilScreen({ navigation }) {
  //return (
    //<View style={styles.container}>
     // <Text>AccueilScreen</Text>
      //<TouchableOpacity style={styles.button}
      //onPress={()=> {navigation.navigate('A_Propos')}}>
      //<Text>Press to go to A_Propos</Text>
      //</TouchableOpacity>
   // </View>
  //);
//}




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