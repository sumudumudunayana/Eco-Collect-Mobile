import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from 'react-native';

import AppHeader from '../../components/common/AppHeader';
import styles from '../../styles/collector/CollectorNotificationStyles';

import {
  getNotifications,
  markNotificationAsRead,
} from '../../services/notificationService';

const CollectorNotificationScreen = () => {
  const [loading, setLoading] = useState(true);

  const [notifications, setNotifications] = useState<any[]>([]);

  useEffect(() => {
    loadNotifications();
  }, []);

  const loadNotifications = async () => {
    try {
      const data = await getNotifications();

      setNotifications(data.notifications);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleRead = async (id: string) => {
    try {
      await markNotificationAsRead(id);

      setNotifications(previous =>
        previous.map(notification =>
          notification._id === id
            ? {
                ...notification,
                isRead: true,
              }
            : notification,
        ),
      );
    } catch (error) {
      Alert.alert(
        'Error',
        'Unable to update notification.',
      );
    }
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
      <AppHeader
        title="Notifications"
        showBack
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        {notifications.length === 0 ? (
          <Text
            style={{
              textAlign: 'center',
              marginTop: 50,
              fontSize: 16,
            }}>
            No notifications available.
          </Text>
        ) : (
          notifications.map(item => (
            <TouchableOpacity
              key={item._id}
              onPress={() =>
                !item.isRead &&
                handleRead(item._id)
              }>
              <View
                style={[
                  styles.card,
                  {
                    backgroundColor: item.isRead
                      ? '#FFFFFF'
                      : '#E8F5E9',
                  },
                ]}>
                <Text style={styles.title}>
                  {item.title}
                </Text>

                <Text style={styles.message}>
                  {item.message}
                </Text>

                <Text style={styles.time}>
                  {new Date(
                    item.createdAt,
                  ).toLocaleString()}
                </Text>
              </View>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CollectorNotificationScreen;