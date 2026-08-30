import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { AuthStackParamList } from '../../navigation/AuthNavigator';

import styles from '../../styles/marketplace/OrderSuccessStyles';

type NavigationProp = NativeStackNavigationProp<AuthStackParamList>;

const OrderSuccessScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>✅</Text>
      </View>

      <Text style={styles.title}>Order Placed Successfully!</Text>

      <Text style={styles.message}>
        Thank you for supporting sustainable living.
      </Text>

      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.label}>Order Number</Text>
          <Text style={styles.value}>#EC102548</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Payment</Text>
          <Text style={styles.value}>Cash on Delivery</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Estimated Delivery</Text>
          <Text style={styles.value}>2 - 3 Days</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Dashboard')}
      >
        <Text style={styles.buttonText}>Back to Dashboard</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OrderSuccessScreen;
