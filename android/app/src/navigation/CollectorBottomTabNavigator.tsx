import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from '@react-native-vector-icons/ionicons';

import CollectorDashboardScreen from '../screens/collector/CollectorDashboardScreen';
import CollectorNotificationScreen from '../screens/collector/CollectorNotificationScreen';
import CollectorProfileScreen from '../screens/collector/CollectorProfileScreen';

const Tab = createBottomTabNavigator();

const CollectorBottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({

        headerShown: false,

        tabBarActiveTintColor: '#2E7D32',
        tabBarInactiveTintColor: '#94A3B8',

        tabBarStyle: {
          height: 65,
          paddingBottom: 8,
          paddingTop: 8,
        },

        tabBarIcon: ({ color, size }) => {

          let iconName: any;

          switch (route.name) {

            case 'CollectorHome':
              iconName = 'home';
              break;

            case 'CollectorNotifications':
              iconName = 'notifications';
              break;

            case 'CollectorProfile':
              iconName = 'person';
              break;

            default:
              iconName = 'ellipse';
          }

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
            />
          );
        },

      })}
    >

      <Tab.Screen
        name="CollectorHome"
        component={CollectorDashboardScreen}
        options={{
          title: 'Home',
        }}
      />

      <Tab.Screen
        name="CollectorNotifications"
        component={CollectorNotificationScreen}
        options={{
          title: 'Notifications',
        }}
      />

      <Tab.Screen
        name="CollectorProfile"
        component={CollectorProfileScreen}
        options={{
          title: 'Profile',
        }}
      />

    </Tab.Navigator>
  );
};

export default CollectorBottomTabNavigator;