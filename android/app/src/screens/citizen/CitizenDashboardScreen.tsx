import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

import DashboardCard from '../../components/common/DashboardCard';
import AppHeader from '../../components/common/AppHeader';

import styles from '../../styles/citizen/CitizenDashboardStyles';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import { AuthStackParamList } from '../../navigation/AuthNavigator';

import { useAuth } from '../../context/AuthContext';
import { getCitizenSchedule } from '../../services/collectionService';

const CitizenDashboardScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const { user, logout } = useAuth();

  const [loading, setLoading] = useState(true);

  const [nextCollection, setNextCollection] = useState<any>(null);

  useEffect(() => {
    loadSchedule();
  }, []);

  const loadSchedule = async () => {
    try {
      const data = await getCitizenSchedule();

      if (data.collections.length > 0) {
        setNextCollection(data.collections[0]);
      }
    } catch (error) {
      console.log('Schedule Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await logout();

    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader
        title="Dashboard"
        rightIcon="log-out-outline"
        onRightPress={handleLogout}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.welcome}>Good Morning 👋</Text>

          <Text style={styles.name}>{user?.fullName}</Text>
        </View>

        <View style={styles.collectionCard}>
          <Text style={styles.collectionTitle}>Next Collection</Text>

          {loading ? (
            <ActivityIndicator color="#2E7D32" size="small" />
          ) : nextCollection ? (
            <>
              <Text style={styles.collectionDay}>{nextCollection.day}</Text>

              <Text style={styles.collectionTime}>
                {nextCollection.wasteType} • {nextCollection.collectionTime}
              </Text>

              <Text
                style={[
                  styles.collectionTime,
                  {
                    marginTop: 6,
                  },
                ]}
              >
                📍 {nextCollection.zone}
              </Text>

              <Text
                style={[
                  styles.collectionTime,
                  {
                    marginTop: 6,
                  },
                ]}
              >
                👷 {nextCollection.collector.name}
              </Text>
            </>
          ) : (
            <Text style={styles.collectionTime}>No upcoming collections.</Text>
          )}
        </View>

        <Text style={styles.sectionTitle}>Services</Text>

        <View style={styles.cardContainer}>
          <DashboardCard
            icon="🚛"
            title="Track Truck"
            onPress={() => navigation.navigate('TruckTracking')}
          />

          <DashboardCard
            icon="♻️"
            title="Illegal Dumping"
            onPress={() => navigation.navigate('IllegalDumping')}
          />

          <DashboardCard
            icon="🛒"
            title="Marketplace"
            onPress={() => navigation.navigate('Marketplace')}
          />

          <DashboardCard
            icon="🌱"
            title="Community Events"
            onPress={() => navigation.navigate('CommunityEvents')}
          />

          <DashboardCard
            icon="🚚"
            title="Request Pickup"
            onPress={() => navigation.navigate('PickupRequest')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CitizenDashboardScreen;
