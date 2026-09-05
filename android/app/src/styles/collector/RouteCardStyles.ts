import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
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

  header: {
    marginBottom: 20,
  },

  routeTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1E293B',
  },

  area: {
    marginTop: 6,
    color: '#64748B',
    fontSize: 15,
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

  progressBackground: {
    marginTop: 10,
    height: 10,
    backgroundColor: '#E5E7EB',
    borderRadius: 10,
    overflow: 'hidden',
  },

  progressBar: {
    height: '100%',
    backgroundColor: '#2E7D32',
    borderRadius: 10,
  },

  progressText: {
    marginTop: 10,
    textAlign: 'right',
    color: '#2E7D32',
    fontWeight: '700',
  },

});

export default styles;