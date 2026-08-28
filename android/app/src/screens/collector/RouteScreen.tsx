import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { AuthStackParamList } from '../../navigation/AuthNavigator';

import AppHeader from '../../components/common/AppHeader';

import styles from '../../styles/collector/RouteStyles';

type NavigationProp = NativeStackNavigationProp<AuthStackParamList>;

const RouteScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const stops = [
    'No. 120 - Galle Road',
    'No. 45 - Flower Road',
    'No. 78 - Marine Drive',
    'No. 210 - Duplication Road',
    'No. 65 - Baseline Road',
  ];

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader title="Today's Route" showBack />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Route Summary */}

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Route Summary</Text>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Route</Text>
            <Text style={styles.value}>Route A</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Area</Text>
            <Text style={styles.value}>Colombo 03</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Vehicle</Text>
            <Text style={styles.value}>WM-1023</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Driver</Text>
            <Text style={styles.value}>John Silva</Text>
          </View>
        </View>

        {/* Map */}

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Route Map</Text>

          <View style={styles.mapPlaceholder}>
            <Text style={styles.mapIcon}>🗺️</Text>

            <Text style={styles.mapText}>Google Map will appear here</Text>
          </View>
        </View>

        {/* Stops */}

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Collection Stops</Text>

          {stops.map((stop, index) => (
            <View key={index} style={styles.stopRow}>
              <View style={styles.stopNumber}>
                <Text style={styles.stopNumberText}>{index + 1}</Text>
              </View>

              <Text style={styles.stopText}>{stop}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity
          style={styles.startButton}
          onPress={() => navigation.navigate('AssignedCollections')}
        >
          <Text style={styles.startButtonText}>Start Collection</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RouteScreen;
