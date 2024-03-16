import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AccueilScreen from "../components/Layout/screens/AccueilScreen";
import A_ProposScreen from "../components/Layout/screens/A_ProposScreen";
import ArticlesScreen from "../components/Layout/screens/ArticlesScreen";
import ConnexionScreen from "../components/Layout/screens/ConnexionScreen";
import ContactScreen from "../components/Layout/screens/ContactScreen";
import DonsScreen from "../components/Layout/screens/DonsScreen";
import PanierScreen from "../components/Layout/screens/PanierScreen";
import S_inscrireScreen from "../components/Layout/screens/S_inscrireScreen";
import CheckoutScreen from "../components/Layout/screens/CheckoutScreen";
import SearchScreen from "../components/Layout/screens/SearchScreen";
import UserProfileScreen from '../screens/UserProfileScreen';





const Drawer = createDrawerNavigator();
let Stack;
Stack = createNativeStackNavigator()



// Vous pouvez créer un Stack Navigator pour certains écrans qui nécessitent une navigation interne
function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Accueil" component={AccueilScreen} />
            <Stack.Screen name="À Propos" component={A_ProposScreen}/>
            <Stack.Screen name="Articles" component={ArticlesScreen}/>
            <Stack.Screen name="Connexion" component={ConnexionScreen}/>
            <Stack.Screen name="Contact" component={ContactScreen}/>
            <Stack.Screen name="Dons" component={DonsScreen}/>
            <Stack.Screen name="Panier" component={PanierScreen}/>
            <Stack.Screen name="S'inscrire" component={S_inscrireScreen}/>
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen name="Checkout" component={CheckoutScreen} />
        </Stack.Navigator>
    );
}

// Le Drawer Navigator sera mon navigation principale
function AppNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Accueil" component={StackNavigator} />
            <Drawer.Screen name="À Propos" component={A_ProposScreen} />
            <Drawer.Screen name="Articles" component={ArticlesScreen} />
            <Drawer.Screen name="Connexion" component={ConnexionScreen}/>
            <Drawer.Screen name="Contact" component={ContactScreen}/>
            <Drawer.Screen name="Dons" component={DonsScreen}/>
            <Drawer.Screen name="Panier" component={PanierScreen}/>
            <Drawer.Screen name="S'inscrire" component={S_inscrireScreen}/>
            <Drawer.Screen name="Search" component={SearchScreen} />
            <Drawer.Screen name="UserProfile" component={UserProfileScreen} options={{ title: 'Profil' }} />
        </Drawer.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <AppNavigator />
        </NavigationContainer>
    );
}
