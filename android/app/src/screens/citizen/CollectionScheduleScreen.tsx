import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import AppHeader from '../../components/common/AppHeader';
import styles from '../../styles/citizen/CollectionScheduleStyles';

import { getCitizenSchedule } from '../../services/collectionService';

const CollectionScheduleScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const [loading, setLoading] = useState(true);

  const [schedules, setSchedules] = useState<any[]>([]);

  useEffect(() => {
    loadSchedule();
  }, []);

  const loadSchedule = async () => {
    try {
      const data = await getCitizenSchedule();
      console.log('Schedule Data:', data);
      console.log('Schedule Response:', data);
      const items = Array.isArray(data?.collections)
        ? [...data.collections].sort((a, b) => {
            return (
              new Date(a.collectionDate).getTime() -
              new Date(b.collectionDate).getTime()
            );
          })
        : [];

      console.log('Loaded items:', items.length);
      setSchedules(items);

      if (items.length > 0) {
        const firstDate = new Date(items[0].collectionDate)
          .toISOString()
          .split('T')[0];

        setSelectedDate(firstDate);
      }
    } catch (error) {
      console.error('Schedule Error:', error);
      setSchedules([]);
    } finally {
      setLoading(false);
    }
  };

  const dateKeys = Array.from(
    new Set(
      schedules.map((item) => {
        return new Date(item.collectionDate)
          .toISOString()
          .split('T')[0];
      }),
    ),
  );

  const dates = dateKeys.map((dateKey) => {
    const date = new Date(dateKey);

    return {
      day: date.toLocaleDateString('en-US', {
        weekday: 'short',
      }),
      date: date.getDate().toString(),
      fullDate: dateKey,
    };
  });

  const filteredSchedules = schedules.filter((item) => {
    const dateKey = new Date(item.collectionDate)
      .toISOString()
      .split('T')[0];

    return dateKey === selectedDate;
  });

  const monthLabel =
    schedules.length > 0
      ? new Date(schedules[0].collectionDate).toLocaleDateString('en-US', {
          month: 'long',
          year: 'numeric',
        })
      : 'No upcoming collection';

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader
        title="Collection Schedule"
        showBack
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <Text style={styles.month}>{monthLabel}</Text>

        {loading ? (
          <ActivityIndicator
            size="large"
            color="#2E7D32"
          />
        ) : (
          <>
            {dates.length > 0 ? (
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={dates}
                keyExtractor={(item) => item.fullDate}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={[
                      styles.dateCard,
                      selectedDate === item.fullDate &&
                        styles.selectedDateCard,
                    ]}
                    onPress={() => setSelectedDate(item.fullDate)}>
                    <Text
                      style={[
                        styles.dayText,
                        selectedDate === item.fullDate &&
                          styles.selectedDateText,
                      ]}>
                      {item.day}
                    </Text>

                    <Text
                      style={[
                        styles.dateText,
                        selectedDate === item.fullDate &&
                          styles.selectedDateText,
                      ]}>
                      {item.date}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            ) : null}

            <View style={styles.summaryCard}>
              <Text style={styles.summaryTitle}>
                Upcoming Collections
              </Text>

              <Text style={styles.summaryValue}>
                {schedules.length} Collections Scheduled
              </Text>
            </View>

            {filteredSchedules.length === 0 ? (
              <Text
                style={{
                  textAlign: 'center',
                  marginTop: 30,
                  color: '#64748B',
                }}>
                {schedules.length === 0
                  ? 'No collection schedule available for your account.'
                  : 'No collection on this date.'}
              </Text>
            ) : (
              filteredSchedules.map((item) => (
                <View
                  key={item.id}
                  style={[
                    styles.card,
                    {
                      borderLeftColor:
                        item.wasteType ===
                        'Organic Waste'
                          ? '#4CAF50'
                          : item.wasteType ===
                              'Recyclable Waste'
                            ? '#2196F3'
                            : '#795548',
                    },
                  ]}>
                  <View style={styles.details}>
                    <View style={styles.row}>
                      <Text style={styles.type}>
                        {item.wasteType}
                      </Text>

                      <View
                        style={styles.zoneBadge}>
                        <Text
                          style={styles.zoneText}>
                          {item.zone}
                        </Text>
                      </View>
                    </View>

                    <Text style={styles.info}>
                      📅 {item.day}
                    </Text>

                    <Text style={styles.info}>
                      ⏰ {item.collectionTime}
                    </Text>

                    <Text style={styles.info}>
                      📍 {item.address}
                    </Text>

                    <Text style={styles.info}>
                      👷 {item.collector.name}
                    </Text>

                    <Text style={styles.info}>
                      Status: {item.status}
                    </Text>
                  </View>
                </View>
              ))
            )}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CollectionScheduleScreen;