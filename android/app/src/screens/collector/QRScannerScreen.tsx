import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Alert,
  ActivityIndicator,
} from 'react-native';

import {
  useNavigation,
  useRoute,
  RouteProp,
} from '@react-navigation/native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { AuthStackParamList } from '../../navigation/AuthNavigator';

import AppHeader from '../../components/common/AppHeader';

import styles from '../../styles/collector/QRScannerStyles';

import { updateCollectionStatus } from '../../services/collectionService';

type NavigationProp =
  NativeStackNavigationProp<AuthStackParamList>;

type RouteProps = RouteProp<
  AuthStackParamList,
  'QRScanner'
>;

const QRScannerScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const route = useRoute<RouteProps>();

  const collectionId = route.params?.collectionId;

  if (!collectionId) {
  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          justifyContent: 'center',
          alignItems: 'center',
        },
      ]}>
      <Text>No collection selected.</Text>
    </SafeAreaView>
  );
}

  const [loading, setLoading] = useState(false);

  const handleScan = async () => {
    try {
      setLoading(true);

      await updateCollectionStatus(
        collectionId,
        'Completed',
      );

      Alert.alert(
        'Success',
        'Collection completed successfully.',
        [
          {
            text: 'OK',
            onPress: () =>
              navigation.navigate(
                'AssignedCollections',
              ),
          },
        ],
      );
    } catch (error) {
      Alert.alert(
        'Error',
        'Unable to update collection.',
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader
        title="QR Scanner"
        showBack
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <Text style={styles.heading}>
          Scan Collection QR Code
        </Text>

        <Text style={styles.subHeading}>
          Position the QR code inside the frame.
        </Text>

        <View style={styles.cameraContainer}>
          <View style={styles.scanFrame}>
            <Text style={styles.qrIcon}>
              📷
            </Text>

            <Text style={styles.scanText}>
              Camera Preview
            </Text>
          </View>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>
            Instructions
          </Text>

          <Text style={styles.infoText}>
            • Hold the device steady.
          </Text>

          <Text style={styles.infoText}>
            • Keep the QR code inside the square.
          </Text>

          <Text style={styles.infoText}>
            • Ensure sufficient lighting.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.scanButton}
          disabled={loading}
          onPress={handleScan}>
          {loading ? (
            <ActivityIndicator
              color="#FFFFFF"
            />
          ) : (
            <Text
              style={
                styles.scanButtonText
              }>
              Simulate Successful Scan
            </Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.flashButton}>
          <Text
            style={
              styles.flashButtonText
            }>
            Toggle Flash
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default QRScannerScreen;