import React from 'react';

import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import AppHeader from '../../components/common/AppHeader';

import styles from '../../styles/citizen/CommunityEventsStyles';

const CommunityEventsScreen = ({ navigation }: any) => {
  const events = [
    {
      id: 1,
      title: 'Zero Plastic Campaign',
      date: '25 August 2026',
      location: 'Colombo City Center',
      description:
        'A community event to reduce plastic usage and promote reusable products.',
    },

    {
      id: 2,
      title: 'Beach Cleaning Program',
      date: '5 September 2026',
      location: 'Mount Lavinia Beach',
      description: 'Join citizens and volunteers to clean the beach area.',
    },

    {
      id: 3,
      title: 'Tree Planting Day',
      date: '15 September 2026',
      location: 'Community Park',
      description: 'Plant trees and support a greener environment.',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader title="Community Events" showBack={true} />

      <ScrollView>
        {events.map(event => (
          <TouchableOpacity key={event.id} style={styles.eventCard}>
            <Text style={styles.title}>🌱 {event.title}</Text>

            <Text style={styles.text}>📅 {event.date}</Text>

            <Text style={styles.text}>📍 {event.location}</Text>

            <Text style={styles.description}>{event.description}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CommunityEventsScreen;
