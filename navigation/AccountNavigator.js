// AppNavigator.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import SearchNavigator from './SearchNavigator';
import CustomDrawerContent from './CustomDrawerContent';
import AccueilScreen from "../components/Layout/screens/AccueilScreen";
import A_ProposScreen from "../components/Layout/screens/A_ProposScreen";
import ArticlesScreen from "../components/Layout/screens/ArticlesScreen";
import ConnexionScreen from "../components/Layout/screens/ConnexionScreen";
import ContactScreen from "../components/Layout/screens/ContactScreen";
import DonsScreen from "../components/Layout/screens/DonsScreen";
import PanierScreen from "../components/Layout/screens/PanierScreen";
import S_inscrireScreen from "../components/Layout/screens/S_inscrireScreen"; // Vous pouvez créer ce composant pour personnaliser le contenu du tiroir

const Drawer = createDrawerNavigator();

let AccueilNavigator;
let A_ProposNavigator;
let ConnexionNavigator;
let ArticlesNavigator;
let DonsNavigator;
let PanierNavigator;
let ContactNavigator;
let S_inscrireNavigator;
const AppNavigator = () => (
    <NavigationContainer>
        <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Accueil" component={AccueilNavigator}/>
            <Drawer.Screen name="À Propos" component={A_ProposNavigator}/>
            <Drawer.Screen name="Articles" component={ArticlesNavigator}/>
            <Drawer.Screen name="Connexion" component={ConnexionNavigator}/>
            <Drawer.Screen name="Contact" component={ContactNavigator}/>
            <Drawer.Screen name="Dons" component={DonsNavigator}/>
            <Drawer.Screen name="Panier" component={PanierNavigator}/>
            <Drawer.Screen name="S'inscrire" component={S_inscrireNavigator}/>
            <Drawer.Screen name="Search" component={SearchNavigator} />
        </Drawer.Navigator>
    </NavigationContainer>
);

export default AppNavigator;



