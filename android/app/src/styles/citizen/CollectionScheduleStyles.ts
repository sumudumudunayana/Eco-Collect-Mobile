import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  month: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1E293B',
    marginBottom: 20,
  },

  dateCard: {
    width: 70,
    height: 90,

    backgroundColor: '#FFFFFF',

    borderRadius: 20,

    marginRight: 14,

    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 4,
  },

  selectedDateCard: {
    backgroundColor: '#2E7D32',
  },

  dayText: {
    color: '#64748B',
    fontSize: 14,
  },

  dateText: {
    marginTop: 8,
    fontSize: 24,
    fontWeight: '700',
    color: '#1E293B',
  },

  selectedDateText: {
    color: '#FFFFFF',
  },

  summaryCard: {
    marginTop: 25,

    backgroundColor: '#2E7D32',

    borderRadius: 22,

    padding: 22,

    marginBottom: 25,
  },

  summaryTitle: {
    color: '#E8F5E9',
    fontSize: 16,
  },

  summaryValue: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
    marginTop: 6,
  },

  card: {
    backgroundColor: '#FFFFFF',

    borderRadius: 22,

    padding: 20,

    marginBottom: 18,

    borderLeftWidth: 6,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },

    elevation: 5,
  },

  details: {
    flex: 1,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  type: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1E293B',
  },

  zoneBadge: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 30,
  },

  zoneText: {
    color: '#2E7D32',
    fontWeight: '600',
  },

  info: {
    marginTop: 10,
    fontSize: 15,
    color: '#64748B',
  },

});

export default styles;