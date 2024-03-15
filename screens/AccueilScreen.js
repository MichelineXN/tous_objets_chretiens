// AccueilScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

function AccueilScreen({ navigation }) {
  return (
      <View>
        <Text>Page d'accueil</Text>
        <Button
            title="Aller aux articles"
            onPress={() => navigation.navigate('Articles')}
        />
      </View>
  );
}



// ArticlesScreen.js
import React from 'react';
import { View, Text } from 'react-native';

function ArticlesScreen() {
  return (
      <View>
        <Text>Liste des articles</Text>
      </View>
  );
}

export default ArticlesScreen;

