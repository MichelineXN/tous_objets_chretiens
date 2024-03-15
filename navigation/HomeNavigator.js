// Importations nécessaires
import { createStackNavigator } from '@react-navigation/stack';
import AccueilScreen from '../screens/AccueilScreen';
import A_ProposScreen from "../components/Layout/screens/A_ProposScreen";
import ArticlesScreen from "../components/Layout/screens/ArticlesScreen";
import ConnexionScreen from "../components/Layout/screens/ConnexionScreen";
import ContactScreen from "../components/Layout/screens/ContactScreen";
import DonsScreen from "../components/Layout/screens/DonsScreen";
import PanierScreen from "../components/Layout/screens/PanierScreen";
import S_inscrireScreen from "../components/Layout/screens/S_inscrireScreen";
import React from "react";



//Dans chacun de ces fichiers,
//je définis un Stack Navigator pour cette section spécifique.

const HomeStack = createStackNavigator();

const HomeNavigator = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen name="Accueil" component={AccueilScreen} />
        <HomeStack.Screen name="Accueil" component={AccueilScreen}/>
        <HomeStack.Screen name="À Propos" component={A_ProposScreen}/>
        <HomeStack.Screen name="Articles" component={ArticlesScreen}/>
        <HomeStack.Screen name="Connexion" component={ConnexionScreen}/>
        <HomeStack.Screen name="Contact" component={ContactScreen}/>
        <HomeStack.Screen name="Dons" component={DonsScreen}/>
        <HomeStack.Screen name="Panier" component={PanierScreen}/>
        <HomeStack.Screen name="S'inscrire" component={S_inscrireScreen}/>
        <HomeStack.Screen name="Search" component={SearchScreen} />
    </HomeStack.Navigator>
);

export default HomeNavigator;


