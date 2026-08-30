import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/AuthNavigator';

import AppHeader from '../../components/common/AppHeader';
import styles from '../../styles/marketplace/CheckoutStyles';
import { useCart } from '../../context/CartContext';

type NavigationProp = NativeStackNavigationProp<AuthStackParamList>;

const CheckoutScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const { cart, subtotal, deliveryFee, total, clearCart } = useCart();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handlePlaceOrder = async () => {
    if (!name.trim() || !phone.trim() || !address.trim()) {
      Alert.alert('Missing details', 'Please fill in your delivery information.');
      return;
    }

    if (cart.length === 0) {
      Alert.alert('Cart is empty', 'Add at least one product before checkout.');
      return;
    }

    await clearCart();
    navigation.navigate('OrderSuccess');
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader title="Checkout" showBack />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>Delivery Information</Text>

        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#060607"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor="#060607"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />

        <TextInput
          style={styles.textArea}
          placeholder="Delivery Address"
          placeholderTextColor="#060607"
          multiline
          value={address}
          onChangeText={setAddress}
        />

        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Order Summary</Text>

          {cart.map(item => (
            <View key={item._id} style={styles.itemRow}>
              <Text style={styles.itemText}>
                {item.title} x {item.quantity}
              </Text>
              <Text style={styles.itemText}>LKR {item.price * item.quantity}</Text>
            </View>
          ))}

          <View style={styles.row}>
            <Text>Subtotal</Text>
            <Text>LKR {subtotal}</Text>
          </View>

          <View style={styles.row}>
            <Text>Delivery Fee</Text>
            <Text>LKR {deliveryFee}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.total}>Total</Text>
            <Text style={styles.total}>LKR {total}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.placeOrderButton}
          onPress={handlePlaceOrder}
          disabled={cart.length === 0}
        >
          <Text style={styles.placeOrderText}>Place Order</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CheckoutScreen;