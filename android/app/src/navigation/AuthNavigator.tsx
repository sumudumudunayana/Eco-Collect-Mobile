import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../screens/auth/SplashScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';

import MainNavigator from './MainNavigator';
import CollectorBottomTabNavigator from './CollectorBottomTabNavigator';

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

import AssignedCollectionsScreen from '../screens/collector/AssignedCollectionsScreen';
import CollectionDetailsScreen from '../screens/collector/CollectionDetailsScreen';
import RouteScreen from '../screens/collector/RouteScreen';
import QRScannerScreen from '../screens/collector/QRScannerScreen';
import MissedCollectionScreen from '../screens/collector/MissedCollectionScreen';
import DailySummaryScreen from '../screens/collector/DailySummaryScreen';
import CollectorNotificationScreen from '../screens/collector/CollectorNotificationScreen';
import CollectorProfileScreen from '../screens/collector/CollectorProfileScreen';
import CommunityEventsScreen from '../screens/citizen/CommunityEventsScreen';
import PickupRequestScreen from '../screens/citizen/PickupRequestScreen';

import { useAuth } from '../context/AuthContext';

export type AuthStackParamList = {
  Splash: undefined;
  Login: undefined;
  Register: undefined;
  Dashboard: undefined;
  CollectionSchedule: undefined;
  TruckTracking: undefined;
  IllegalDumping: undefined;
  Marketplace: undefined;
  ProductDetails: {
    productId: string;
  };
  Cart: undefined;
  Checkout: undefined;
  OrderSuccess: undefined;
  Notification: undefined;
  Profile: undefined;
  CollectorDashboard: undefined;
  AssignedCollections: undefined;
  CollectionDetails: {
    collectionId: string;
  };
  Route: undefined;
  QRScanner: {
    collectionId: string;
  };
  MissedCollection: {
    collectionId: string;
  };
  DailySummary: undefined;
  CollectorNotifications: undefined;
  CollectorProfile: undefined;

  CitizenDashboard: undefined;
  PickupRequest: undefined;
  CommunityEvents: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return null;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {!user ? (
        <>
          <Stack.Screen name="Splash" component={SplashScreen} />

          <Stack.Screen name="Login" component={LoginScreen} />

          <Stack.Screen name="Register" component={RegisterScreen} />
        </>
      ) : user.role === 'collector' ? (
        <>
          <Stack.Screen
            name="CollectorDashboard"
            component={CollectorBottomTabNavigator}
          />

          <Stack.Screen
            name="AssignedCollections"
            component={AssignedCollectionsScreen}
          />

          <Stack.Screen
            name="CollectionDetails"
            component={CollectionDetailsScreen}
          />

          <Stack.Screen name="Route" component={RouteScreen} />

          <Stack.Screen name="QRScanner" component={QRScannerScreen} />

          <Stack.Screen
            name="MissedCollection"
            component={MissedCollectionScreen}
          />

          <Stack.Screen name="DailySummary" component={DailySummaryScreen} />

          <Stack.Screen
            name="CollectorNotifications"
            component={CollectorNotificationScreen}
          />

          <Stack.Screen
            name="CollectorProfile"
            component={CollectorProfileScreen}
          />
        </>
      ) : (
        <>
          <Stack.Screen name="Dashboard" component={MainNavigator} />

          <Stack.Screen
            name="CollectionSchedule"
            component={CollectionScheduleScreen}
          />

          <Stack.Screen name="TruckTracking" component={TruckTrackingScreen} />

          <Stack.Screen
            name="IllegalDumping"
            component={IllegalDumpingScreen}
          />

          <Stack.Screen
            name="CommunityEvents"
            component={CommunityEventsScreen}
          />

          <Stack.Screen name="PickupRequest" component={PickupRequestScreen} />

          <Stack.Screen name="Marketplace" component={MarketplaceScreen} />

          <Stack.Screen
            name="ProductDetails"
            component={ProductDetailsScreen}
          />

          <Stack.Screen name="Cart" component={CartScreen} />

          <Stack.Screen name="Checkout" component={CheckoutScreen} />

          <Stack.Screen name="OrderSuccess" component={OrderSuccessScreen} />

          <Stack.Screen name="Notification" component={NotificationScreen} />

          <Stack.Screen name="Profile" component={ProfileScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AuthNavigator;
