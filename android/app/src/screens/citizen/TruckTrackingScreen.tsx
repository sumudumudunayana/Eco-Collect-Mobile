import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Linking,
  ActivityIndicator,
} from 'react-native';

import AppHeader from '../../components/common/AppHeader';
import styles from '../../styles/citizen/TruckTrackingStyles';
import api from '../../services/api';

type TruckLocation = {
  latitude: number;
  longitude: number;
};

type RouteStop = {
  address?: string;
  latitude?: number;
  longitude?: number;
};

type TruckRouteData = {
  routeName?: string;
  area?: string;
  status?: string;
  estimatedTime?: string;
  truck?: {
    vehicleNumber?: string;
    currentLocation?: TruckLocation;
    status?: string;
  };
  collector?: {
    fullName?: string;
  };
  stops?: RouteStop[];
};

const defaultLocation = {
  latitude: 6.9271,
  longitude: 79.8612,
};

const TruckTrackingScreen = () => {
  const [route, setRoute] = useState<TruckRouteData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadRoute();
  }, []);

  const loadRoute = async () => {
    try {
      const routeResponse = await api.get('/routes/live');
      const liveRoutes = routeResponse.data?.routes || [];

      const activeRoute = liveRoutes[0] || null;

      if (activeRoute) {
        setRoute(activeRoute);
        return;
      }

      const truckResponse = await api.get('/trucks/live');
      const liveTruck = truckResponse.data?.trucks?.[0] || null;

      if (liveTruck) {
        setRoute({
          routeName: 'Truck Route',
          area: 'Live Collection Route',
          status: liveTruck.status,
          truck: {
            vehicleNumber: liveTruck.vehicleNumber,
            currentLocation: liveTruck.currentLocation,
            status: liveTruck.status,
          },
        });
        return;
      }

      setRoute(null);
    } catch (error) {
      console.log('Truck route error:', error);
      setRoute(null);
    } finally {
      setLoading(false);
    }
  };

  const validStops = (route?.stops || []).filter(
    item => typeof item?.latitude === 'number' && typeof item?.longitude === 'number',
  ) as RouteStop[];

  const truckLocation = route?.truck?.currentLocation || validStops[0] || defaultLocation;
  const routeDestination = validStops[validStops.length - 1] || truckLocation;

  const openGoogleMaps = () => {
    if (!truckLocation || !routeDestination) {
      return;
    }

    const origin = `${truckLocation.latitude},${truckLocation.longitude}`;
    const destination = `${routeDestination.latitude},${routeDestination.longitude}`;
    const waypoints = validStops
      .slice(0, -1)
      .map(stop => `${stop.latitude},${stop.longitude}`)
      .join('|');

    const url = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}${waypoints ? `&waypoints=${encodeURIComponent(waypoints)}` : ''}`;
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader title="Truck Tracking" showBack />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        {loading ? (
          <View style={{ paddingTop: 40 }}>
            <ActivityIndicator size="large" color="#2E7D32" />
          </View>
        ) : (
          <>
            <View style={styles.mapContainer}>
              <Text style={styles.mapIcon}>🗺️</Text>
              <Text style={styles.mapTitle}>Live Truck Location</Text>
              <Text style={styles.mapSubtitle}>
                {route?.routeName
                  ? `${route.routeName} • ${route.area || 'Current route'}`
                  : 'The truck is currently tracking around Colombo city.'}
              </Text>

              <TouchableOpacity style={styles.mapButton} onPress={openGoogleMaps}>
                <Text style={styles.mapButtonText}>View Map Route</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>Truck Information</Text>

              <View style={styles.row}>
                <Text style={styles.label}>Truck Number</Text>
                <Text style={styles.value}>{route?.truck?.vehicleNumber || 'Not available'}</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.label}>Driver</Text>
                <Text style={styles.value}>{route?.collector?.fullName || 'Collector on route'}</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.label}>Current Location</Text>
                <Text style={styles.value}>
                  {route?.area || 'Live route'}
                </Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.label}>Route Status</Text>
                <Text style={styles.value}>{route?.status || route?.truck?.status || 'On Route'}</Text>
              </View>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>Collection Status</Text>

              <View style={styles.row}>
                <Text style={styles.label}>Route Name</Text>
                <Text style={styles.value}>{route?.routeName || 'Active route'}</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.label}>Estimated Arrival</Text>
                <Text style={styles.value}>{route?.estimatedTime || 'Checking route'}</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.label}>Stops</Text>
                <Text style={styles.value}>{validStops.length > 0 ? `${validStops.length} stops` : 'Route in progress'}</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.button} onPress={loadRoute}>
              <Text style={styles.buttonText}>Refresh Location</Text>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default TruckTrackingScreen;
