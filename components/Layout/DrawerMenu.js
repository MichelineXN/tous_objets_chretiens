
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AccueilScreen from './screens/AccueilScreen';
import A_ProposScreen from './screens/A_ProposScreen';
import ArticlesScreen from './screens/ArticlesScreen';
import ConnexionScreen from './screens/ConnexionScreen';
import ContactScreen from './screens/ContactScreen';
import DonsScreen from './screens/DonsScreen';
import PanierScreen from './screens/PanierScreen';
import S_inscrireScreen from './screens/S_inscrireScreen';
import SearchNavigator from "../../navigation/SearchNavigator";

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator initialRouteName="Accueil">
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
    );

    function App(){
        return
    }
}
//(
//<NavigationContainer>
//  <MyDrawer />
// </NavigationContainer>
//);

