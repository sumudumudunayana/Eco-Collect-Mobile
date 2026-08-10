import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

import styles from '../../styles/collector/ActionCardStyles';

type Props = {
  icon: string;
  title: string;
  subtitle?: string;
  backgroundColor?: string;
  onPress?: () => void;
};

const ActionCard = ({
  icon,
  title,
  subtitle,
  backgroundColor = '#FFFFFF',
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.container,
        {
          backgroundColor,
        },
      ]}
      onPress={onPress}>

      <View style={styles.iconContainer}>
        <Text style={styles.icon}>
          {icon}
        </Text>
      </View>

      <Text style={styles.title}>
        {title}
      </Text>

      {subtitle ? (
        <Text style={styles.subtitle}>
          {subtitle}
        </Text>
      ) : null}

    </TouchableOpacity>
  );
};

export default ActionCard;