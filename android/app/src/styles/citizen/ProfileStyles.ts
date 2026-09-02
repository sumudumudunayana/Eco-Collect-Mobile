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
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    alignItems: 'center',
    padding: 25,
    elevation: 4,
    marginBottom: 25,
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    fontSize: 55,
  },

  name: {
    marginTop: 18,
    fontSize: 24,
    fontWeight: '700',
    color: '#1E293B',
  },

  email: {
    marginTop: 8,
    color: '#64748B',
    fontSize: 16,
  },

  /* --------------------------
     NEW STYLES
  --------------------------- */

  label: {
    marginBottom: 8,
    marginTop: 15,
    fontSize: 15,
    fontWeight: '600',
    color: '#1E293B',
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 52,
    fontSize: 16,
    color: '#1E293B',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 10,
  },

  /* -------------------------- */

  editButton: {
    marginTop: 25,
    backgroundColor: '#2E7D32',
    paddingHorizontal: 28,
    paddingVertical: 14,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  editButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },

  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },

  statCard: {
    backgroundColor: '#FFFFFF',
    width: '31%',
    borderRadius: 16,
    paddingVertical: 20,
    alignItems: 'center',
    elevation: 3,
  },

  statNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2E7D32',
  },

  statTitle: {
    marginTop: 8,
    color: '#64748B',
    fontSize: 13,
    textAlign: 'center',
  },

  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 18,
    marginBottom: 15,
    elevation: 2,
  },

  menuIcon: {
    fontSize: 28,
  },

  menuContent: {
    flex: 1,
    marginLeft: 18,
  },

  menuTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1E293B',
  },

  menuSubtitle: {
    color: '#64748B',
    marginTop: 3,
    fontSize: 13,
  },

  arrow: {
    fontSize: 26,
    color: '#94A3B8',
  },

  logoutButton: {
    marginTop: 30,
    backgroundColor: '#D32F2F',
    height: 55,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoutText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 17,
  },
});

export default styles;