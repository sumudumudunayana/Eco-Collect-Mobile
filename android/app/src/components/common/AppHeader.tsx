import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native';
import Ionicons from '@react-native-vector-icons/ionicons';

import styles from '../../styles/common/AppHeaderStyles';

type Props = {
  title: string;
  showBack?: boolean;
  rightIcon?: string;
  onRightPress?: () => void;
};

const AppHeader = ({
  title,
  showBack = false,
  rightIcon,
  onRightPress,
}: Props) => {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView
      edges={['top']}
      style={styles.safeArea}
    >
      <View style={styles.container}>

        {/* Left Side */}

        <View style={styles.leftContainer}>
          {showBack ? (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name="arrow-back"
                size={24}
                color="#FFFFFF"
              />
            </TouchableOpacity>
          ) : (
            <View style={{ width: 24 }} />
          )}
        </View>

        {/* Title */}

        <Text style={styles.title}>
          {title}
        </Text>

        {/* Right Side */}

        <View style={styles.rightContainer}>
          {rightIcon ? (
            <TouchableOpacity onPress={onRightPress}>
              <Ionicons
                name={rightIcon as any}
                size={24}
                color="#FFFFFF"
              />
            </TouchableOpacity>
          ) : (
            <View style={{ width: 24 }} />
          )}
        </View>

      </View>
    </SafeAreaView>
  );
};

export default AppHeader;