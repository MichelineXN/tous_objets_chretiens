import React, { Component } from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';



//les props passées à CustomDrawerContent seront également passées à DrawerContentScrollView
// et DrawerItemList.
//DrawerContentScrollView sert de conteneur pour les éléments des tiroirs de mon appli. Il permet de s'assurer que ces éléments
// peuvent défiler si leur contenu dépasse la hauteur de l'écran.
//
class CustomDrawerContent extends Component {
    render() {
        return (
            <DrawerContentScrollView {...this.props}>
                <DrawerItemList {...this.props} />

            </DrawerContentScrollView>
        );
    }
}
//CustomDrawerContent est une classe qui étend Component de React.
//render() est une méthode de classe qui doit retourner le JSX qui décrit le rendu du composant.
   // this.props est utilisé pour accéder aux props dans une classe.
export default CustomDrawerContent;



