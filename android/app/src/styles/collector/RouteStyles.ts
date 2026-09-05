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

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 18,
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },

  label: {
    color: '#64748B',
    fontSize: 15,
  },

  value: {
    color: '#1E293B',
    fontWeight: '700',
    fontSize: 15,
  },

  mapPlaceholder: {
    height: 220,
    borderRadius: 15,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
  },

  mapIcon: {
    fontSize: 60,
  },

  mapText: {
    marginTop: 15,
    fontSize: 16,
    color: '#2E7D32',
    fontWeight: '600',
  },

  stopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },

  stopNumber: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#2E7D32',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },

  stopNumberText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },

  stopText: {
    flex: 1,
    color: '#334155',
    fontSize: 16,
  },

  startButton: {
    height: 55,
    backgroundColor: '#2E7D32',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  startButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },

});

export default styles;