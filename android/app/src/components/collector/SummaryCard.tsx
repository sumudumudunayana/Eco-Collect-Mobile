import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import styles from '../../styles/collector/SummaryCardStyles';

type Props = {
  title: string;
  value: string | number;
  icon: string;
  backgroundColor?: string;
};

const SummaryCard = ({
  title,
  value,
  icon,
  backgroundColor = '#E8F5E9',
}: Props) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor,
        },
      ]}>

      <Text style={styles.icon}>
        {icon}
      </Text>

      <Text style={styles.value}>
        {value}
      </Text>

      <Text style={styles.title}>
        {title}
      </Text>

    </View>
  );
};

export default SummaryCard;