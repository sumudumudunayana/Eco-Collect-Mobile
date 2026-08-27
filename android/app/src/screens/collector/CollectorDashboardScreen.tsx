import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { AuthStackParamList } from '../../navigation/AuthNavigator';

import AppHeader from '../../components/common/AppHeader';
import SummaryCard from '../../components/collector/SummaryCard';
import ActionCard from '../../components/collector/ActionCard';
import RouteCard from '../../components/collector/RouteCard';

import styles from '../../styles/collector/CollectorDashboardStyles';

import { getAssignedCollections } from '../../services/collectorService';

import { useAuth } from '../../context/AuthContext';

type NavigationProp = NativeStackNavigationProp<AuthStackParamList>;

const CollectorDashboardScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const { user, logout } = useAuth();

  const [loading, setLoading] = useState(true);

  const [assigned, setAssigned] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [pending, setPending] = useState(0);
  const [missed, setMissed] = useState(0);

  const [collection, setCollection] = useState<any>(null);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const data = await getAssignedCollections();

      const collections = data.collections;

      setAssigned(collections.length);

      setCompleted(
        collections.filter((item: any) => item.status === 'Completed').length,
      );

      setPending(
        collections.filter((item: any) => item.status === 'Pending').length,
      );

      setMissed(
        collections.filter((item: any) => item.status === 'Missed').length,
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await logout();
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
      <AppHeader
        title="Collector Dashboard"
        rightIcon="log-out-outline"
        onRightPress={handleLogout}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.welcomeContainer}>
          <Text style={styles.greeting}>👋 Good Morning,</Text>

          <Text style={styles.collectorName}>{user?.fullName}</Text>

          <Text style={styles.date}>{new Date().toDateString()}</Text>
        </View>

        <Text style={styles.sectionTitle}>Today's Summary</Text>

        <View style={styles.summaryRow}>
          <SummaryCard icon="📋" title="Assigned" value={assigned} />

          <SummaryCard
            icon="✅"
            title="Completed"
            value={completed}
            backgroundColor="#E3F2FD"
          />
        </View>

        <View style={styles.summaryRow}>
          <SummaryCard
            icon="⏳"
            title="Pending"
            value={pending}
            backgroundColor="#FFF8E1"
          />

          <SummaryCard
            icon="⚠️"
            title="Missed"
            value={missed}
            backgroundColor="#FFEBEE"
          />
        </View>

        <Text style={styles.sectionTitle}>Quick Actions</Text>

        <View style={styles.actionContainer}>
          <ActionCard
            icon="📋"
            title="Assigned Collections"
            subtitle="Today's jobs"
            onPress={() => navigation.navigate('AssignedCollections')}
          />

          <ActionCard
            icon="🗺️"
            title="Today's Route"
            subtitle="View route"
            onPress={() => navigation.navigate('Route')}
          />

          <ActionCard
            icon="📊"
            title="Daily Summary"
            subtitle="View report"
            onPress={() => navigation.navigate('DailySummary')}
          />
        </View>

        <Text style={styles.sectionTitle}>Current Route</Text>

        <RouteCard
          routeName="Today's Route"
          area="Assigned Zone"
          totalStops={assigned}
          completedStops={completed}
          estimatedTime="Auto Calculated"
          onPress={() => navigation.navigate('Route')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CollectorDashboardScreen;
