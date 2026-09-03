import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
    marginBottom: 18,

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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  houseNo: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E293B',
  },

  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  statusText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 12,
  },

  name: {
    marginTop: 15,
    fontSize: 17,
    fontWeight: '600',
    color: '#334155',
  },

  waste: {
    marginTop: 10,
    color: '#64748B',
    fontSize: 15,
  },

  footer: {
    marginTop: 18,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingTop: 12,
  },

  details: {
    color: '#2E7D32',
    fontWeight: '700',
  },

});

export default styles;