import React, { useState } from 'react';

import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';

import AppHeader from '../../components/common/AppHeader';

import styles from '../../styles/citizen/PickupRequestStyles';

import { useAuth } from '../../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PickupRequestScreen = ({ navigation }: any) => {
  const { user } = useAuth();

  const [phone, setPhone] = useState('');
  const [wasteType, setWasteType] = useState('');
  const [address, setAddress] = useState('');

  const submitRequest = async () => {
    if (!phone || !wasteType || !address) {
      Alert.alert('Missing Information', 'Please fill all fields');

      return;
    }

    const newRequest = {
      id: Date.now(),

      citizenName: user?.fullName,

      contactPhone: phone,

      wasteType: wasteType,

      address: address,

      status: 'Pending',

      createdAt: new Date().toISOString(),
    };

    try {
      const existingRequests = await AsyncStorage.getItem('pickupRequests');

      let requests = existingRequests ? JSON.parse(existingRequests) : [];

      requests.push(newRequest);

      await AsyncStorage.setItem('pickupRequests', JSON.stringify(requests));

      Alert.alert('Success', 'Pickup request submitted successfully');

      // Clear form

      setPhone('');

      setWasteType('');

      setAddress('');
    } catch (error) {
      console.log('Save Request Error:', error);

      Alert.alert('Error', 'Failed to submit request');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader title="Pickup Request" showBack />

      <ScrollView>
        <View style={styles.form}>
          <Text style={styles.label}>Citizen Name</Text>

          <TextInput
            style={styles.input}
            value={user?.fullName}
            editable={false}
          />

          <Text style={styles.label}>Contact Phone</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter phone number"
            placeholderTextColor="#94A3B8"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />

          <Text style={styles.label}>Waste Type</Text>

          <TextInput
            style={styles.input}
            placeholder="Eg: Plastic, Organic, E-waste"
            placeholderTextColor="#94A3B8"
            value={wasteType}
            onChangeText={setWasteType}
          />

          <Text style={styles.label}>Address</Text>

          <TextInput
            style={[styles.input, styles.addressInput]}
            placeholder="Enter pickup location"
            placeholderTextColor="#94A3B8"
            multiline
            value={address}
            onChangeText={setAddress}
          />

          <TouchableOpacity style={styles.button} onPress={submitRequest}>
            <Text style={styles.buttonText}>Submit Request</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PickupRequestScreen;
