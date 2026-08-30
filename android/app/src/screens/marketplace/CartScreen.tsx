import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import AppHeader from '../../components/common/AppHeader';
import styles from '../../styles/marketplace/CartStyles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/AuthNavigator';
import { useCart } from '../../context/CartContext';

const CartScreen = () => {
  type NavigationProp = NativeStackNavigationProp<AuthStackParamList>;

  const navigation = useNavigation<NavigationProp>();
  const { cart, subtotal, deliveryFee, total, updateQuantity, removeFromCart } =
    useCart();

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader title="Shopping Cart" showBack />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {cart.length === 0 ? (
          <View style={styles.emptyCard}>
            <Text style={styles.emptyText}>Your cart is empty.</Text>
            <Text style={styles.emptySubText}>
              Add eco-friendly products to get started.
            </Text>
          </View>
        ) : (
          cart.map(item => (
            <View key={item._id} style={styles.itemCard}>
              <Image
                source={{ uri: item.image }}
                resizeMode="cover"
                style={styles.productImage}
              />

              <View style={styles.details}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.category}>{item.category}</Text>
                <Text style={styles.price}>LKR {item.price}</Text>

                <View style={styles.quantityRow}>
                  <TouchableOpacity
                    style={styles.qtyButton}
                    onPress={() => updateQuantity(item._id, -1)}
                  >
                    <Text style={styles.qtyText}>-</Text>
                  </TouchableOpacity>

                  <Text style={styles.quantity}>{item.quantity}</Text>

                  <TouchableOpacity
                    style={styles.qtyButton}
                    onPress={() => updateQuantity(item._id, 1)}
                  >
                    <Text style={styles.qtyText}>+</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.removeButton}
                    onPress={() => removeFromCart(item._id)}
                  >
                    <Text style={styles.removeText}>Remove</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))
        )}

        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Order Summary</Text>

          <View style={styles.summaryRow}>
            <Text>Subtotal</Text>
            <Text>LKR {subtotal}</Text>
          </View>

          <View style={styles.summaryRow}>
            <Text>Delivery</Text>
            <Text>LKR {deliveryFee}</Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.total}>Total</Text>
            <Text style={styles.total}>LKR {total}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={[styles.checkoutButton, cart.length === 0 && styles.disabledButton]}
          onPress={() => cart.length > 0 && navigation.navigate('Checkout')}
          disabled={cart.length === 0}
        >
          <Text style={styles.checkoutText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CartScreen;
