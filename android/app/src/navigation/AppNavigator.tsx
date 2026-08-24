import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './AuthNavigator';
import { AuthProvider } from '../context/AuthContext';
import { CartProvider } from '../context/CartContext';

const AppNavigator = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <NavigationContainer>
          <AuthNavigator />
        </NavigationContainer>
      </CartProvider>
    </AuthProvider>
  );
};

export default AppNavigator;