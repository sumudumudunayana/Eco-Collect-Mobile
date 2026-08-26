import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
  ActivityIndicator,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { AuthStackParamList } from '../../navigation/AuthNavigator';

import AppHeader from '../../components/common/AppHeader';
import styles from '../../styles/citizen/ProfileStyles';

import { getProfile, updateProfile } from '../../services/profileService';

import { useAuth } from '../../context/AuthContext';

type NavigationProp = NativeStackNavigationProp<AuthStackParamList>;

const ProfileScreen = () => {
  const navigation = useNavigation<NavigationProp>();

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
      console.log(error);

      Alert.alert('Error', 'Failed to load profile.');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!fullName.trim()) {
      Alert.alert('Validation', 'Full Name is required.');
      return;
    }

    try {
      setSaving(true);

      const data = await updateProfile({
        fullName,
        phone,
        address,
      });

      await updateUser(data.user);

      Alert.alert('Success', 'Profile updated successfully.');
    } catch (error: any) {
      Alert.alert(
        'Error',
        error?.response?.data?.message || 'Failed to update profile.',
      );
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = async () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Logout',
        style: 'destructive',
        onPress: async () => {
          await logout();

          navigation.reset({
            index: 0,
            routes: [
              {
                name: 'Login',
              },
            ],
          });
        },
      },
    ]);
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
      <AppHeader title="My Profile" showBack />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>👤</Text>
          </View>
        </View>

        <Text style={styles.label}>Full Name</Text>

        <TextInput
          style={styles.input}
          value={fullName}
          onChangeText={setFullName}
        />

        <Text style={styles.label}>Email</Text>

        <TextInput style={styles.input} value={email} editable={false} />

        <Text style={styles.label}>Phone</Text>

        <TextInput style={styles.input} value={phone} onChangeText={setPhone} />

        <Text style={styles.label}>Address</Text>

        <TextInput
          style={styles.input}
          value={address}
          onChangeText={setAddress}
        />

        <Text style={styles.label}>Role</Text>

        <TextInput style={styles.input} value={role} editable={false} />

        <TouchableOpacity
          style={styles.editButton}
          onPress={handleSave}
          disabled={saving}
        >
          {saving ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <Text style={styles.editButtonText}>Save Changes</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
