import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';

import AppHeader from '../../components/common/AppHeader';
import styles from '../../styles/citizen/NotificationStyles';

import {
  getNotifications,
  markAsRead,
} from '../../services/notificationService';

const NotificationScreen = () => {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

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
      setRefreshing(false);
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    loadNotifications();
  };

  const handleNotificationPress = async (id: string) => {
    try {
      await markAsRead(id);

      setNotifications(prev =>
        prev.map(item =>
          item._id === id
            ? {
                ...item,
                isRead: true,
              }
            : item,
        ),
      );
    } catch (error) {
      console.log(error);
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'Collection':
        return '🚛';

      case 'Marketplace':
        return '🛒';

      case 'Report':
        return '♻️';

      default:
        return '🔔';
    }
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
        ]}>
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
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
          />
        }>
        {notifications.length === 0 ? (
          <View
            style={{
              alignItems: 'center',
              marginTop: 80,
            }}>
            <Text
              style={{
                fontSize: 18,
                color: '#64748B',
              }}>
              No Notifications Yet
            </Text>
          </View>
        ) : (
          notifications.map(item => (
            <TouchableOpacity
              key={item._id}
              onPress={() =>
                handleNotificationPress(item._id)
              }
              style={[
                styles.card,
                !item.isRead &&
                  styles.unreadCard,
              ]}>
              <View style={styles.iconContainer}>
                <Text style={styles.icon}>
                  {getIcon(item.type)}
                </Text>
              </View>

              <View style={styles.details}>
                <View
                  style={styles.headerRow}>
                  <Text style={styles.title}>
                    {item.title}
                  </Text>

                  {!item.isRead && (
                    <View
                      style={styles.badge}>
                      <Text
                        style={
                          styles.badgeText
                        }>
                        NEW
                      </Text>
                    </View>
                  )}
                </View>

                <Text
                  style={styles.message}>
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

export default NotificationScreen;