import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Linking,
  Platform,
} from 'react-native';

import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { AuthStackParamList } from '../../navigation/AuthNavigator';

import AppHeader from '../../components/common/AppHeader';

import styles from '../../styles/collector/CollectionDetailsStyles';

import {
  getCollectionById,
  updateCollectionStatus,
} from '../../services/collectionService';

type NavigationProp = NativeStackNavigationProp<AuthStackParamList>;

type RouteProps = RouteProp<AuthStackParamList, 'CollectionDetails'>;

const CollectionDetailsScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const route = useRoute<RouteProps>();

  const { collectionId } = route.params;

  const [loading, setLoading] = useState(true);

  const [collection, setCollection] = useState<any>(null);

  useEffect(() => {
    loadCollection();
  }, []);

  const loadCollection = async () => {
    try {
      const data = await getCollectionById(collectionId);

      console.log('Collection:', data.collection);

      setCollection(data.collection);
    } catch (error) {
      console.log(error);

      Alert.alert('Error', 'Failed to load collection.');
    } finally {
      setLoading(false);
    }
  };

  const openGoogleMaps = async () => {
    const destinationLat = collection.location.latitude;
    const destinationLng = collection.location.longitude;

    // Example origin: Colombo Fort
    const originLat = 6.9271;
    const originLng = 79.8612;

    const url =
      `https://www.google.com/maps/dir/?api=1` +
      `&origin=${originLat},${originLng}` +
      `&destination=${destinationLat},${destinationLng}` +
      `&travelmode=driving`;

    await Linking.openURL(url);
  };

  const handleComplete = async () => {
    try {
      await updateCollectionStatus(collectionId, 'Completed');

      Alert.alert('Success', 'Collection marked as completed.');

      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'Failed to update collection.');
    }
  };

  if (loading) {
    return (
      <SafeAreaView
        style={[
          styles.container,
          {
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}
      >
        <ActivityIndicator size="large" color="#2E7D32" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader title="Collection Details" showBack />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Resident Information</Text>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Resident</Text>

            <Text style={styles.value}>{collection.citizen?.fullName}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Address</Text>

            <Text style={styles.value}>{collection.address}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Contact</Text>

            <Text style={styles.value}>{collection.citizen?.phone}</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Collection Details</Text>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Waste Type</Text>

            <Text style={styles.value}>{collection.wasteType}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Collection Date</Text>

            <Text style={styles.value}>
              {new Date(collection.collectionDate).toLocaleDateString()}
            </Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Collection Time</Text>

            <Text style={styles.value}>{collection.collectionTime}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Status</Text>

            <Text style={styles.status}>{collection.status}</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Notes</Text>

          <Text style={styles.notes}>
            {collection.notes || 'No notes available.'}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.completeButton}
          onPress={openGoogleMaps}
        >
          <Text style={styles.buttonText}>Go To Route</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.completeButton}
          onPress={handleComplete}
        >
          <Text style={styles.buttonText}>Mark as Completed</Text>
        </TouchableOpacity>

       
      </ScrollView>
    </SafeAreaView>
  );
};

export default CollectionDetailsScreen;
