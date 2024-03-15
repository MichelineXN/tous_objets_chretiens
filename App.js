import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { A_ProposScreen } from "/screens/A_ProposScreen";
import { AccueilScreen } from "/screens/AccueilScreen";
import { ConnexionScreen } from "/screens/ConnexionScreen";
import { ContactScreen } from "/screens/ContactScreen";
import { DonScreen } from "/screens/Don/Screen";
import { PanierScreen } from "/screens/PanierScreen";
import { S_InscrireScreen } from "/screens/S_Inscrire/Screen";





const  Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
return (

    screenOptions={({ route }) => ({
      taBarIcon: ({ color, size }) => {
        let iconName = '';

        if (route ==='Contact')
      }
});

    

export default function App() {

  return (
  <NavigationContainer>
  <Stack.Navigator>
  <Stack.Screen name="Accueil" Component={AccueilScreen} />
  <Stack.Screen name= "TabNavigator" Component={TabNavigator} />

  <Stack.Screen name= "Articles" Component={ArticlesScreen} />
  <Stack.Screen name= "A_Propos" Component={A_ProposScreen} />
  <Stack.Screen name= "Panier" Component={PanierScreen} />
  <Stack.Screen name= "Contact" Component={ContactScreen} />
  <Stack.Screen name= "Connexion" Component={ConnexionScreen} />
  <Stack.Screen name= "S_Inscrire" Component={S_InscrireScreen} />
  <Stack.Screen name= "Don" Component={DonScreen} />
  </Stack.Navigator>
  </NavigationContainer>
  //)
  )
}