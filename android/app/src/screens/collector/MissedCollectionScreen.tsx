import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  ActivityIndicator,
} from 'react-native';

import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { AuthStackParamList } from '../../navigation/AuthNavigator';

import AppHeader from '../../components/common/AppHeader';

import styles from '../../styles/collector/MissedCollectionStyles';

import { updateCollectionStatus } from '../../services/collectionService';

type NavigationProp = NativeStackNavigationProp<AuthStackParamList>;

type RouteProps = RouteProp<AuthStackParamList, 'MissedCollection'>;

const MissedCollectionScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const route = useRoute<RouteProps>();

  const { collectionId } = route.params;

  const [loading, setLoading] = useState(false);

  const [reason, setReason] = useState('');

  const [notes, setNotes] = useState('');

  const reasons = [
    'Resident Not Available',
    'Waste Not Kept Outside',
    'Road Blocked',
    'Bad Weather',
    'Vehicle Breakdown',
    'Other',
  ];

  const handleSubmit = async () => {
    if (!reason) {
      Alert.alert('Validation', 'Please select a reason.');
      return;
    }

    try {
      setLoading(true);

      const finalReason =
        notes.trim().length > 0 ? `${reason} - ${notes}` : reason;

      await updateCollectionStatus(collectionId, 'Missed', finalReason);

      Alert.alert('Success', 'Missed collection reported successfully.', [
        {
          text: 'OK',
          onPress: () => navigation.navigate('AssignedCollections'),
        },
      ]);
    } catch (error) {
      Alert.alert('Error', 'Unable to submit report.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader title="Missed Collection" showBack />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.heading}>Why was this collection missed?</Text>

        <View style={styles.card}>
          {reasons.map(item => (
            <TouchableOpacity
              key={item}
              style={[
                styles.reasonButton,
                reason === item && styles.selectedReason,
              ]}
              onPress={() => setReason(item)}
            >
              <Text
                style={[
                  styles.reasonText,
                  reason === item && styles.selectedReasonText,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Additional Notes</Text>

          <TextInput
            style={styles.notesInput}
            multiline
            placeholder="Enter additional details..."
            placeholderTextColor="#94A3B8"
            value={notes}
            onChangeText={setNotes}
          />
        </View>

        <TouchableOpacity style={styles.photoButton}>
          <Text style={styles.photoButtonText}>📷 Add Photo (Coming Soon)</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.submitButton}
          disabled={loading}
          onPress={handleSubmit}
        >
          {loading ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <Text style={styles.submitButtonText}>Submit Report</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MissedCollectionScreen;
