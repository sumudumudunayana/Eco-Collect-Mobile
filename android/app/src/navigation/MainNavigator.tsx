import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@react-native-vector-icons/ionicons';
import type { ComponentProps } from 'react';

import CitizenDashboardScreen from '../screens/citizen/CitizenDashboardScreen';
import NotificationScreen from '../screens/citizen/NotificationScreen';
import ProfileScreen from '../screens/citizen/ProfileScreen';


const Tab = createBottomTabNavigator();

type IconName = ComponentProps<typeof Ionicons>['name'];

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarActiveTintColor: '#2E7D32',
        tabBarInactiveTintColor: '#9CA3AF',

        tabBarStyle: {
          height: 65,
          paddingBottom: 8,
          paddingTop: 8,
        },

        tabBarIcon: ({ color, size }) => {
          let iconName: IconName = 'ellipse';

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;

            case 'Notifications':
              iconName = 'notifications';
              break;

            case 'Profile':
              iconName = 'person';
              break;
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
        name="Home"
        component={CitizenDashboardScreen}
      />

      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;