import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CitizenDashboardScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Citizen Dashboard
      </Text>
    </View>
  );
};

export default CitizenDashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});