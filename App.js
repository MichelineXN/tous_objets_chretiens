
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import A_ProposScreen from './screens/A_ProposScreen'; // Assurez-vous que le chemin d'import est correct
import AccueilScreen from './screens/AccueilScreen'; // Assurez-vous que le chemin d'import est correct
import ConnexionScreen from './screens/ConnexionScreen'; // Assurez-vous que le chemin d'import est correct
import ContactScreen from './screens/ContactScreen'; // Assurez-vous que le chemin d'import est correct
import DonScreen from './screens/DonScreen'; // Assurez-vous que le chemin d'import est correct
import PanierScreen from './screens/PanierScreen'; // Assurez-vous que le chemin d'import est correct
import S_InscrireScreen from './/screens/S_inscrireScreen'; // Assurez-vous que le chemin d'import est correct
import ArticlesScreen from './screens/ArticlesScreen'; // Assurez-vous que le chemin d'import est correct

const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Accueil" component={AccueilScreen} />
          <Stack.Screen name="Articles" component={ArticlesScreen} />
          <Stack.Screen name="A_Propos" component={A_ProposScreen} />
          <Stack.Screen name="Panier" component={PanierScreen} />
          <Stack.Screen name="Contact" component={ContactScreen} />
          <Stack.Screen name="Connexion" component={ConnexionScreen} />
          <Stack.Screen name="S_Inscrire" component={S_InscrireScreen} />
          <Stack.Screen name="Don" component={DonScreen} />
          {/* Ajoutez d'autres Stack.Screen pour d'autres écrans ici */}
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;


