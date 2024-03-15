import OrderSummaryScreen from '../screens/OrderSummaryScreen';
import PaymentScreen from '../screens/PaymentScreen';
import OrderConfirmationScreen from '../screens/OrderConfirmationScreen';
import React from "react";
import {createStackNavigator} from "@react-navigation/stack";


//C'est l'écran panier

const CartStack = createStackNavigator();

let CartScreen;
let CheckoutScreen;
const CartNavigator = () => (
    <CartStack.Navigator>
        <CartStack.Screen name="Cart" component={CartScreen} />
        <CartStack.Screen name="Checkout" component={CheckoutScreen} />
        <CartStack.Screen name="OrderSummary" component={OrderSummaryScreen} />
        <CartStack.Screen name="Payment" component={PaymentScreen} />
        <CartStack.Screen name="OrderConfirmation" component={OrderConfirmationScreen} />
    </CartStack.Navigator>
);

export default CartNavigator;
