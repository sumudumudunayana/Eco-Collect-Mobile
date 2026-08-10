import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppNavigator from './android/app/src/navigation/AppNavigator';

function App() {
  return (
    <SafeAreaProvider>

      <StatusBar
        backgroundColor="#2E7D32"
        barStyle="light-content"
      />

      <AppNavigator />

    </SafeAreaProvider>
  );
}

export default App;