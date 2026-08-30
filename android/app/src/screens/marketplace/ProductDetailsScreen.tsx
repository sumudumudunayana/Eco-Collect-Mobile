import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';

import AppHeader from '../../components/common/AppHeader';
import styles from '../../styles/marketplace/ProductDetailsStyles';

import {
  useNavigation,
  useRoute,
  RouteProp,
} from '@react-navigation/native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { AuthStackParamList } from '../../navigation/AuthNavigator';

import { getProductById } from '../../services/productService';
import { useCart } from '../../context/CartContext';

type NavigationProp =
  NativeStackNavigationProp<AuthStackParamList>;

type ProductRouteProp = RouteProp<
  AuthStackParamList,
  'ProductDetails'
>;

const ProductDetailsScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const route = useRoute<ProductRouteProp>();

  const { productId } = route.params;
  const { addToCart, itemCount } = useCart();

  const [product, setProduct] = useState<any>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    try {
      const data = await getProductById(productId);

      setProduct(data.product);
    } catch (error) {
      console.log('Product Error:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <SafeAreaView
        style={[
          styles.container,
          {
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}>
        <ActivityIndicator
          size="large"
          color="#2E7D32"
        />
      </SafeAreaView>
    );
  }

  if (!product) {
    return (
      <SafeAreaView
        style={[
          styles.container,
          {
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}>
        <Text>Product not found.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader
        title="Product Details"
        showBack
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <Image
          source={{
            uri: product.image,
          }}
          resizeMode="cover"
          style={{
            width: '100%',
            height: 240,
            borderRadius: 18,
          }}
        />

        <Text style={styles.title}>
          {product.title}
        </Text>

        <Text style={styles.category}>
          {product.category}
        </Text>

        <Text style={styles.rating}>
          ⭐ Eco Friendly Product
        </Text>

        <Text style={styles.price}>
          LKR {product.price}
        </Text>

        <View style={styles.card}>
          <Text style={styles.heading}>
            Description
          </Text>

          <Text style={styles.description}>
            {product.description}
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.heading}>
            Product Details
          </Text>

          <View style={styles.row}>
            <Text style={styles.label}>
              Category
            </Text>

            <Text style={styles.value}>
              {product.category}
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>
              Stock
            </Text>

            <Text style={styles.value}>
              {product.stock}
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>
              Price
            </Text>

            <Text style={styles.value}>
              LKR {product.price}
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.cartButton}
          onPress={async () => {
            await addToCart(product);
            navigation.navigate('Cart');
          }}>
          <Text style={styles.buttonText}>
            Add to Cart {itemCount > 0 ? `(${itemCount})` : ''}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buyButton}
          onPress={async () => {
            await addToCart(product);
            navigation.navigate('Cart');
          }}>
          <Text style={styles.buttonText}>
            Buy Now
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetailsScreen;