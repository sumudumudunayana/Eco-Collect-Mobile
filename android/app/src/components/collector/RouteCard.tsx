import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import styles from '../../styles/collector/RouteCardStyles';

type Props = {
  routeName: string;
  area: string;
  totalStops: number;
  completedStops: number;
  estimatedTime: string;
  onPress?: () => void;
};

const RouteCard = ({
  routeName,
  area,
  totalStops,
  completedStops,
  estimatedTime,
  onPress,
}: Props) => {
  const progress = (completedStops / totalStops) * 100;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={onPress}>

      <View style={styles.header}>

        <Text style={styles.routeTitle}>
          🗺 {routeName}
        </Text>

        <Text style={styles.area}>
          {area}
        </Text>

      </View>

      <View style={styles.infoRow}>
        <Text style={styles.label}>Stops</Text>
        <Text style={styles.value}>
          {completedStops} / {totalStops}
        </Text>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.label}>Estimated Time</Text>
        <Text style={styles.value}>
          {estimatedTime}
        </Text>
      </View>

      <View style={styles.progressBackground}>

        <View
          style={[
            styles.progressBar,
            {
              width: `${progress}%`,
            },
          ]}
        />

      </View>

      <Text style={styles.progressText}>
        {Math.round(progress)}% Completed
      </Text>

    </TouchableOpacity>
  );
};

export default RouteCard;