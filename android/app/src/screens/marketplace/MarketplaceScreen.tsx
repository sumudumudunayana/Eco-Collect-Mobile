import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  ActivityIndicator,
} from 'react-native';

import AppHeader from '../../components/common/AppHeader';
import ProductCard from '../../components/marketplace/ProductCard';

import styles from '../../styles/marketplace/MarketplaceStyles';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { AuthStackParamList } from '../../navigation/AuthNavigator';

import { getProducts } from '../../services/productService';

const MarketplaceScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const [products, setProducts] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const data = await getProducts();

      setProducts(data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader title="Marketplace" showBack />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <TextInput
          style={styles.search}
          placeholder="Search recycled products..."
          placeholderTextColor="#94A3B8"
        />

        <Text style={styles.sectionTitle}>Featured Products</Text>

        {loading ? (
          <ActivityIndicator size="large" color="#2E7D32" />
        ) : (
          products.map(product => (
            <ProductCard
              key={product._id}
              title={product.title}
              category={product.category}
              price={`LKR ${product.price}`}
              image={product.image}
              onPress={() =>
                navigation.navigate('ProductDetails', {
                  productId: product._id,
                } as never)
              }
            />
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MarketplaceScreen;
