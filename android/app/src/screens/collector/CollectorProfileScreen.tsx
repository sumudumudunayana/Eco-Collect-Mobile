import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ActivityIndicator,
  Alert,
} from 'react-native';

import AppHeader from '../../components/common/AppHeader';

import styles from '../../styles/collector/CollectorProfileStyles';

import {
  getProfile,
  updateProfile,
} from '../../services/profileService';

import { useAuth } from '../../context/AuthContext';

const CollectorProfileScreen = () => {
  const { logout, updateUser } = useAuth();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const data = await getProfile();

      const user = data.user;

      setFullName(user.fullName);
      setEmail(user.email);
      setPhone(user.phone || '');
      setAddress(user.address || '');
      setRole(user.role);
    } catch (error) {
      Alert.alert('Error', 'Failed to load profile.');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      setSaving(true);

      const data = await updateProfile({
        fullName,
        phone,
        address,
      });

      await updateUser(data.user);

      Alert.alert(
        'Success',
        'Profile updated successfully.',
      );
    } catch (error: any) {
      Alert.alert(
        'Error',
        error?.response?.data?.message ||
          'Unable to update profile.',
      );
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = async () => {
    await logout();
  };

  if (loading) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator
          size="large"
          color="#2E7D32"
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader title="My Profile" showBack />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {fullName.charAt(0).toUpperCase()}
            </Text>
          </View>

          <Text style={styles.name}>{fullName}</Text>

          <Text style={styles.role}>
            Waste Collection Officer
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>
            Personal Information
          </Text>

          <Text style={styles.label}>Full Name</Text>

          <TextInput
            style={styles.input}
            value={fullName}
            onChangeText={setFullName}
          />

          <Text style={styles.label}>Email</Text>

          <TextInput
            style={styles.input}
            value={email}
            editable={false}
          />

          <Text style={styles.label}>Phone</Text>

          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
          />

          <Text style={styles.label}>Address</Text>

          <TextInput
            style={styles.input}
            value={address}
            onChangeText={setAddress}
          />

          <Text style={styles.label}>Role</Text>

          <TextInput
            style={styles.input}
            value={role}
            editable={false}
          />
        </View>

        <TouchableOpacity
          style={styles.actionButton}
          disabled={saving}
          onPress={handleSave}>
          {saving ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <Text style={styles.actionText}>
              Save Changes
            </Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogout}>
          <Text style={styles.logoutText}>
            Logout
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CollectorProfileScreen;