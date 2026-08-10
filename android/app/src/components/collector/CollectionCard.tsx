import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import styles from '../../styles/collector/CollectionCardStyles';

type Props = {
  houseNo: string;
  residentName: string;
  wasteType: string;
  status: 'Pending' | 'Completed' | 'Missed';
  onPress?: () => void;
};

const CollectionCard = ({
  houseNo,
  residentName,
  wasteType,
  status,
  onPress,
}: Props) => {
  const getStatusColor = () => {
    switch (status) {
      case 'Completed':
        return '#2E7D32';

      case 'Pending':
        return '#F9A825';

      case 'Missed':
        return '#D32F2F';

      default:
        return '#64748B';
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={onPress}>

      <View style={styles.header}>

        <Text style={styles.houseNo}>
          🏠 {houseNo}
        </Text>

        <View
          style={[
            styles.statusBadge,
            {
              backgroundColor: getStatusColor(),
            },
          ]}>

          <Text style={styles.statusText}>
            {status}
          </Text>

        </View>

      </View>

      <Text style={styles.name}>
        {residentName}
      </Text>

      <Text style={styles.waste}>
        ♻️ Waste Type : {wasteType}
      </Text>

      <View style={styles.footer}>

        <Text style={styles.details}>
          Tap to view details →
        </Text>

      </View>

    </TouchableOpacity>
  );
};

export default CollectionCard;