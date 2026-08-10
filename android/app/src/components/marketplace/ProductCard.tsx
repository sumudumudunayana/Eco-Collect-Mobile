import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

type Props = {
  title: string;
  price: string;
  category: string;
  onPress: () => void;
};

const ProductCard = ({
  title,
  price,
  category,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 16,
        marginBottom: 18,
        elevation: 4,
      }}>

      <View
        style={{
          height: 130,
          backgroundColor: '#E8F5E9',
          borderRadius: 12,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{ fontSize: 45 }}>♻️</Text>
      </View>

      <Text
        style={{
          marginTop: 15,
          fontWeight: '700',
          fontSize: 18,
        }}>
        {title}
      </Text>

      <Text
        style={{
          color: '#64748B',
          marginTop: 5,
        }}>
        {category}
      </Text>

      <Text
        style={{
          marginTop: 10,
          color: '#2E7D32',
          fontWeight: '700',
          fontSize: 20,
        }}>
        {price}
      </Text>

    </TouchableOpacity>
  );
};

export default ProductCard;