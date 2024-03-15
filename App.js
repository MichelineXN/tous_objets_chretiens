
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import A_ProposScreen from './screens/A_ProposScreen';
import AccueilScreen from './screens/AccueilScreen';
import ConnexionScreen from './screens/ConnexionScreen';
import ContactScreen from './screens/ContactScreen';
import DonScreen from './screens/DonScreen';
import PanierScreen from './screens/PanierScreen';
import S_InscrireScreen from './/screens/S_inscrireScreen';
import ArticlesScreen from './screens/ArticlesScreen';

const Stack = createNativeStackNavigator();

function App() {
  let SearchScreen;
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
          <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;


