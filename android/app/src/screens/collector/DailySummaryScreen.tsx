import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { AuthStackParamList } from '../../navigation/AuthNavigator';

import AppHeader from '../../components/common/AppHeader';
import SummaryCard from '../../components/collector/SummaryCard';

import styles from '../../styles/collector/DailySummaryStyles';

import { getCollectorCollections } from '../../services/collectionService';

type NavigationProp = NativeStackNavigationProp<AuthStackParamList>;

const DailySummaryScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const [loading, setLoading] = useState(true);

  const [assigned, setAssigned] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [pending, setPending] = useState(0);
  const [missed, setMissed] = useState(0);

  useEffect(() => {
    loadSummary();
  }, []);

  const loadSummary = async () => {
    try {
      const data = await getCollectorCollections();

      const collections = data.collections;

      setAssigned(collections.length);

      setCompleted(
        collections.filter((c: any) => c.status === 'Completed').length,
      );

      setPending(collections.filter((c: any) => c.status === 'Pending').length);

      setMissed(collections.filter((c: any) => c.status === 'Missed').length);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const completion =
    assigned === 0 ? 0 : Math.round((completed / assigned) * 100);

  if (loading) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ActivityIndicator size="large" color="#2E7D32" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader title="Daily Summary" showBack />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.heading}>Today's Performance</Text>

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
            icon="❌"
            title="Missed"
            value={missed}
            backgroundColor="#FFEBEE"
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Overall Progress</Text>

          <View style={styles.progressBackground}>
            <View
              style={[
                styles.progressBar,
                {
                  width: `${completion}%`,
                },
              ]}
            />
          </View>

          <Text style={styles.progressText}>{completion}% Completed</Text>
        </View>

        <TouchableOpacity
          style={styles.finishButton}
          onPress={() => navigation.replace('CollectorDashboard')}
        >
          <Text style={styles.finishButtonText}>Finish Shift</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DailySummaryScreen;
