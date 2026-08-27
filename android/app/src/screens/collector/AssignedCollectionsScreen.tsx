import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  ActivityIndicator,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { AuthStackParamList } from '../../navigation/AuthNavigator';

import AppHeader from '../../components/common/AppHeader';
import CollectionCard from '../../components/collector/CollectionCard';

import styles from '../../styles/collector/AssignedCollectionsStyles';

import { getAssignedCollections } from '../../services/collectorService';

type NavigationProp = NativeStackNavigationProp<AuthStackParamList>;

const AssignedCollectionsScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const [search, setSearch] = useState('');

  const [loading, setLoading] = useState(true);

  const [collections, setCollections] = useState<any[]>([]);

  useEffect(() => {
    loadCollections();
  }, []);

  const loadCollections = async () => {
    try {
      const data = await getAssignedCollections();

      setCollections(data.collections);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredCollections = collections.filter(item => {
    const keyword = search.toLowerCase();

    return (
      item.citizen?.fullName?.toLowerCase().includes(keyword) ||
      item.address?.toLowerCase().includes(keyword) ||
      item.wasteType?.toLowerCase().includes(keyword)
    );
  });

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
      <AppHeader title="Assigned Collections" showBack />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.heading}>Today's Assigned Collections</Text>

        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="#94A3B8"
          value={search}
          onChangeText={setSearch}
        />

        {filteredCollections.map(item => (
          <CollectionCard
            key={item._id}
            houseNo={item.address}
            residentName={item.citizen.fullName}
            wasteType={item.wasteType}
            status={item.status}
            onPress={() =>
              navigation.navigate('CollectionDetails', {
                collectionId: item._id,
              })
            }
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AssignedCollectionsScreen;
