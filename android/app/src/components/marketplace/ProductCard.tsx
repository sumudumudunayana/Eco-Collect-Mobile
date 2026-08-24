import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

type Props = {
  title: string;
  price: string;
  category: string;
  image: string;
  onPress: () => void;
};

const ProductCard = ({
  title,
  price,
  category,
  image,
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

      <Image
        source={{ uri: image }}
        resizeMode="cover"
        style={{
          width: '100%',
          height: 170,
          borderRadius: 12,
        }}
      />

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