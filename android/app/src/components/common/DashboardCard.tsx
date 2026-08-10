import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

type Props = {
  icon: string;
  title: string;
  onPress: () => void;
};

const DashboardCard = ({
  icon,
  title,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: '47%',
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 20,
        marginVertical: 10,
        elevation: 5,
        alignItems: 'center',
      }}>

      <Text
        style={{
          fontSize: 40,
        }}>
        {icon}
      </Text>

      <View
        style={{
          height: 10,
        }}
      />

      <Text
        style={{
          fontWeight: '700',
          textAlign: 'center',
        }}>
        {title}
      </Text>

    </TouchableOpacity>
  );
};

export default DashboardCard;