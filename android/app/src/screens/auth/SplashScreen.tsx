import React, { useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
  StatusBar,
} from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/AuthNavigator';
import { useAuth } from '../../context/AuthContext';

import styles from '../../styles/auth/SplashScreenStyles';

type Props = NativeStackScreenProps<AuthStackParamList, 'Splash'>;

const SplashScreen = ({ navigation }: Props) => {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (loading) {
      return;
    }

    const timer = setTimeout(() => {
      if (!user) {
        navigation.replace('Login');
      } else if (user.role === 'collector') {
        navigation.replace('CollectorDashboard');
      } else {
        navigation.replace('Dashboard');
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [loading, user, navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#2E7D32"
        barStyle="light-content"
      />

      <View style={styles.logoContainer}>
        <Text style={styles.logo}>🌿</Text>

        <Text style={styles.title}>EcoCollect</Text>

        <Text style={styles.tagline}>
          Smart Waste Management System
        </Text>
      </View>

      <View style={styles.footer}>
        <ActivityIndicator
          size="large"
          color="#FFFFFF"
        />

        <Text style={styles.loadingText}>
          Loading...
        </Text>

        <Text style={styles.version}>
          Version 1.0.0
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;