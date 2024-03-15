//

import AccueilScreen from "../components/Layout/screens/AccueilScreen";
import A_ProposScreen from "../components/Layout/screens/A_ProposScreen";
import ArticlesScreen from "../components/Layout/screens/ArticlesScreen";
import ConnexionScreen from "../components/Layout/screens/ConnexionScreen";
import ContactScreen from "../components/Layout/screens/ContactScreen";
import DonsScreen from "../components/Layout/screens/DonsScreen";
import PanierScreen from "../components/Layout/screens/PanierScreen";
import S_inscrireScreen from "../components/Layout/screens/S_inscrireScreen";
import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

//J'importe HomeNavigator et l'assignez à un Drawer.Screen
//J'importe ensuite chaque Stack Navigator dans le fichier principal de la navigation (AppNavigator.js dans cet exemple) et l'utilisez pour configurer le Drawer Navigator
// qui est la structure de navigation de mon application.

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

let SearchScreen;
const AppNavigator = () => (
    <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name="Accueil" component={AccueilScreen}/>
            <Drawer.Screen name="À Propos" component={A_ProposScreen}/>
            <Drawer.Screen name="Articles" component={ArticlesScreen}/>
            <Drawer.Screen name="Connexion" component={ConnexionScreen}/>
            <Drawer.Screen name="Contact" component={ContactScreen}/>
            <Drawer.Screen name="Dons" component={DonsScreen}/>
            <Drawer.Screen name="Panier" component={PanierScreen}/>
            <Drawer.Screen name="S'inscrire" component={S_inscrireScreen}/>
            <Drawer.Screen name="Search" component={SearchScreen} />

        </Drawer.Navigator>
    </NavigationContainer>
);

function AppNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Accueil" component={AccueilScreen} />
            <Stack.Screen name="Articles" component={ArticlesScreen} />
            // ... autres déclarations d'écrans
        </Stack.Navigator>
    );
}

export default AppNavigator;
