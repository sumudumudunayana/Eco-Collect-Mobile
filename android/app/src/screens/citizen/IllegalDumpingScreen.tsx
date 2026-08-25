import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';

import { launchImageLibrary } from 'react-native-image-picker';
import AppHeader from '../../components/common/AppHeader';
import styles from '../../styles/citizen/IllegalDumpingStyles';
import { uploadImage } from '../../services/uploadService';
import { createReport } from '../../services/reportService';

const IllegalDumpingScreen = () => {
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Other');

  const [image, setImage] = useState<any>(null);

  const [loading, setLoading] = useState(false);

  const chooseImage = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 0.8,
    });

    if (result.didCancel) {
      return;
    }

    if (result.errorCode) {
      Alert.alert('Error', result.errorMessage || 'Failed to select image.');
      return;
    }

    if (result.assets && result.assets.length > 0) {
      setImage(result.assets[0]);
    }
  };

  const handleSubmit = async () => {
    if (!image) {
      Alert.alert('Validation', 'Please choose an image.');
      return;
    }

    if (!location.trim()) {
      Alert.alert('Validation', 'Please enter the location.');
      return;
    }

    if (!description.trim()) {
      Alert.alert('Validation', 'Please enter a description.');
      return;
    }

    try {
      setLoading(true);

      // Upload image to Cloudinary
      const uploadResponse = await uploadImage(image);

      const imageUrl = uploadResponse.imageUrl;

      // Create report
      await createReport({
        title: 'Illegal Waste Dumping',
        description,
        category,
        image: imageUrl,
        location: {
          address: location,
          latitude: null,
          longitude: null,
        },
      });

      Alert.alert('Success', 'Your report has been submitted successfully.');

      // Reset form
      setImage(null);
      setLocation('');
      setDescription('');
      setCategory('Other');
    } catch (error: any) {
      console.log(error);

      Alert.alert(
        'Error',
        error?.response?.data?.message || 'Something went wrong.',
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader title="Report Illegal Dumping" showBack />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Photo */}

        <View style={styles.imageBox}>
          {image ? (
            <Image
              source={{ uri: image.uri }}
              style={{
                width: '100%',
                height: 220,
                borderRadius: 12,
                marginBottom: 15,
              }}
              resizeMode="cover"
            />
          ) : (
            <>
              <Text style={styles.imageIcon}>📷</Text>

              <Text style={styles.imageTitle}>Upload Evidence</Text>
            </>
          )}

          <TouchableOpacity style={styles.uploadButton} onPress={chooseImage}>
            <Text style={styles.uploadButtonText}>
              {image ? 'Change Photo' : 'Choose Photo'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Location */}

        <Text style={styles.label}>Location</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter location"
          placeholderTextColor="#060607"
          value={location}
          onChangeText={setLocation}
        />

        {/* Description */}

        <Text style={styles.label}>Description</Text>

        <TextInput
          style={styles.textArea}
          placeholder="Describe the issue..."
          placeholderTextColor="#060607"
          multiline
          numberOfLines={5}
          value={description}
          onChangeText={setDescription}
        />

        {/* Category */}

        <Text style={styles.label}>Waste Category</Text>

        <View style={styles.categoryContainer}>
          {['Household', 'Plastic', 'Construction', 'Other'].map(item => (
            <TouchableOpacity
              key={item}
              style={[
                styles.category,
                category === item && {
                  backgroundColor: '#2E7D32',
                },
              ]}
              onPress={() => setCategory(item)}
            >
              <Text
                style={[
                  styles.categoryText,
                  category === item && {
                    color: '#FFFFFF',
                  },
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Submit */}

        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmit}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <Text style={styles.submitText}>Submit Report</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default IllegalDumpingScreen;
