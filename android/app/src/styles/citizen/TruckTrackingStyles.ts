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

  mapContainer: {
    minHeight: 260,
    backgroundColor: '#E8F5E9',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    padding: 20,
  },

  mapIcon: {
    fontSize: 70,
  },

  mapTitle: {
    marginTop: 15,
    fontSize: 22,
    fontWeight: '700',
    color: '#2E7D32',
  },

  mapSubtitle: {
    marginTop: 10,
    textAlign: 'center',
    color: '#64748B',
    paddingHorizontal: 30,
    fontSize: 15,
  },

  mapButton: {
    marginTop: 20,
    backgroundColor: '#2E7D32',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 22,
  },

  mapButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 20,
    marginBottom: 20,

    elevation: 4,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  cardTitle: {
    fontSize: 21,
    fontWeight: '700',
    color: '#2E7D32',
    marginBottom: 18,
  },

  row: {
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

  status: {
    color: '#4CAF50',
    fontWeight: '700',
    fontSize: 16,
  },

  button: {
    backgroundColor: '#2E7D32',
    height: 55,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },

});

export default styles;