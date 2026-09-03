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
    marginBottom: 20,
  },

  infoRow: {
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
    fontWeight: '600',
    textAlign: 'right',
    flex: 1,
    marginLeft: 20,
  },

  status: {
    color: '#F9A825',
    fontWeight: '700',
  },

  notes: {
    color: '#475569',
    lineHeight: 24,
    fontSize: 15,
  },

  completeButton: {
    backgroundColor: '#2E7D32',
    height: 55,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },

  missedButton: {
    backgroundColor: '#D32F2F',
    height: 55,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },

});

export default styles;