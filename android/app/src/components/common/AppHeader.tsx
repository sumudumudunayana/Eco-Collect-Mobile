import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../styles/common/AppHeaderStyles';

type Props = {
  title: string;
  showBack?: boolean;
  showLogout?: boolean;
};

const AppHeader = ({
  title,
  showBack = false,
  showLogout = false,
}: Props) => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>

      <View style={styles.leftContainer}>
        {showBack && (
          <TouchableOpacity
            onPress={() => navigation.goBack()}>
            <Text style={styles.icon}>←</Text>
          </TouchableOpacity>
        )}
      </View>

      <Text style={styles.title}>
        {title}
      </Text>

      <View style={styles.rightContainer}>
        {showLogout && (
          <TouchableOpacity
            onPress={() => navigation.replace('Login')}>
            <Text style={styles.logout}>
              Logout
            </Text>
          </TouchableOpacity>
        )}
      </View>

    </View>
  );
};

export default AppHeader;