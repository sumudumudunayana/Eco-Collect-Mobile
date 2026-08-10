import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../screens/auth/SplashScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import MainNavigator from './MainNavigator';
import CollectionScheduleScreen from '../screens/citizen/CollectionScheduleScreen';
import TruckTrackingScreen from '../screens/citizen/TruckTrackingScreen';
import IllegalDumpingScreen from '../screens/citizen/IllegalDumpingScreen';
import MarketplaceScreen from '../screens/marketplace/MarketplaceScreen';
import ProductDetailsScreen from '../screens/marketplace/ProductDetailsScreen';
import CartScreen from '../screens/marketplace/CartScreen';
import CheckoutScreen from '../screens/marketplace/CheckoutScreen';
import OrderSuccessScreen from '../screens/marketplace/OrderSuccessScreen';
import NotificationScreen from '../screens/citizen/NotificationScreen';
import ProfileScreen from '../screens/citizen/ProfileScreen';

export type AuthStackParamList = {
  Splash: undefined;
  Login: undefined;
  Register: undefined;
  Dashboard: undefined;
  CollectionSchedule: undefined;
  TruckTracking: undefined;
  IllegalDumping: undefined;
  Marketplace: undefined;
  ProductDetails: undefined;
  Cart: undefined;
  Checkout: undefined;
  OrderSuccess: undefined;
  Notification: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Dashboard" component={MainNavigator} />
      <Stack.Screen
        name="CollectionSchedule"
        component={CollectionScheduleScreen}
      />
      <Stack.Screen name="TruckTracking" component={TruckTrackingScreen} />
      <Stack.Screen name="IllegalDumping" component={IllegalDumpingScreen} />
      <Stack.Screen name="Marketplace" component={MarketplaceScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
      <Stack.Screen name="OrderSuccess" component={OrderSuccessScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
