import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

import styles from '../../styles/common/DashboardCardStyles';

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
      activeOpacity={0.9}
      style={styles.card}
      onPress={onPress}>

      <View style={styles.iconContainer}>
        <Text style={styles.icon}>
          {icon}
        </Text>
      </View>

      <Text style={styles.title}>
        {title}
      </Text>

      <Text style={styles.subtitle}>
        Tap to view
      </Text>

    </TouchableOpacity>
  );
};

export default DashboardCard;