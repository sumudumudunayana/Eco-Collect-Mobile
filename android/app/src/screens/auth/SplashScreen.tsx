import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/AuthNavigator';

type Props = NativeStackScreenProps<AuthStackParamList, 'Splash'>;

const SplashScreen = ({ navigation }: Props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🌿</Text>

      <Text style={styles.title}>EcoCollect</Text>

      <Text style={styles.subtitle}>
        Smart Waste Management System
      </Text>

      <Text style={styles.loading}>Loading...</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E7D32',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    fontSize: 80,
    marginBottom: 20,
  },

  title: {
    color: '#fff',
    fontSize: 34,
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#E8F5E9',
    fontSize: 16,
    marginTop: 8,
  },

  loading: {
    color: '#fff',
    marginTop: 60,
    fontSize: 18,
  },
});