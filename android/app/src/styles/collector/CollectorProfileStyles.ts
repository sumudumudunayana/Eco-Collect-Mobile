import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  profileCard: {
    backgroundColor: '#2E7D32',
    borderRadius: 20,
    alignItems: 'center',
    paddingVertical: 30,
    marginBottom: 20,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    fontSize: 34,
    fontWeight: '700',
    color: '#2E7D32',
  },

  name: {
    marginTop: 15,
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  role: {
    marginTop: 6,
    color: '#E8F5E9',
    fontSize: 16,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 18,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },

  label: {
    color: '#64748B',
    fontSize: 15,
  },

  value: {
    color: '#1E293B',
    fontSize: 15,
    fontWeight: '700',
  },

  actionButton: {
    height: 55,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    elevation: 2,
  },

  actionText: {
    color: '#2E7D32',
    fontWeight: '700',
    fontSize: 16,
  },

  logoutButton: {
    height: 55,
    backgroundColor: '#D32F2F',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoutText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },

input: {
  backgroundColor: '#FFFFFF',
  borderRadius: 12,
  paddingHorizontal: 15,
  height: 50,
  marginBottom: 12,
  borderWidth: 1,
  borderColor: '#E2E8F0',
},

});

export default styles;