import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  ActivityIndicator,
} from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/AuthNavigator';
import styles from '../../styles/auth/RegisterScreenStyles';

import { register } from '../../services/authService';

type Props = NativeStackScreenProps<AuthStackParamList, 'Register'>;

const RegisterScreen = ({ navigation }: Props) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (
      !fullName ||
      !email ||
      !phone ||
      !address ||
      !password ||
      !confirmPassword
    ) {
      Alert.alert('Validation', 'Please fill all fields.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Validation', 'Passwords do not match.');
      return;
    }

    try {
      setLoading(true);

      await register(fullName, email, phone, password, address);

      Alert.alert('Success', 'Registration completed successfully.');

      navigation.goBack();

    } catch (error: any) {

      console.log('REGISTER ERROR:', error);
      console.log('REGISTER RESPONSE:', error?.response?.data);

      Alert.alert(
        'Registration Failed',
        error?.response?.data?.message ||
        error.message ||
        'Something went wrong.',
      );

    } finally {
      setLoading(false);
    }
  };


  return (

    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
    >

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
      >

        <View style={styles.logoContainer}>

          <Text style={styles.logo}>
            🌿
          </Text>

          <Text style={styles.title}>
            Create Account
          </Text>

          <Text style={styles.subtitle}>
            Join EcoCollect Today
          </Text>

        </View>



        <View style={styles.formContainer}>


          <Text style={styles.label}>
            Full Name
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your full name"
            placeholderTextColor="#94A3B8"
            value={fullName}
            onChangeText={setFullName}
          />



          <Text style={styles.label}>
            Email
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#94A3B8"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />



          <Text style={styles.label}>
            Phone Number
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your phone number"
            placeholderTextColor="#94A3B8"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />



          <Text style={styles.label}>
            Address
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your address"
            placeholderTextColor="#94A3B8"
            value={address}
            onChangeText={setAddress}
          />



          <Text style={styles.label}>
            Password
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Enter password"
            placeholderTextColor="#94A3B8"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />



          <Text style={styles.label}>
            Confirm Password
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Confirm password"
            placeholderTextColor="#94A3B8"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />



          <TouchableOpacity
            style={styles.registerButton}
            onPress={handleRegister}
            disabled={loading}
          >

            {
              loading ? (

                <ActivityIndicator color="#FFFFFF" />

              ) : (

                <Text style={styles.registerButtonText}>
                  Register
                </Text>

              )
            }

          </TouchableOpacity>



          <TouchableOpacity
            onPress={() => navigation.goBack()}
          >

            <Text style={styles.loginText}>

              Already have an account?

              <Text style={styles.loginLink}>
                {' '}Login
              </Text>

            </Text>

          </TouchableOpacity>


        </View>


      </ScrollView>


    </KeyboardAvoidingView>

  );
};


export default RegisterScreen;