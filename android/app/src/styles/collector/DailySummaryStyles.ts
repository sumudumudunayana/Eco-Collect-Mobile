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

  heading: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 20,
  },

  summaryRow: {
    flexDirection: 'row',
    marginHorizontal: -6,
    marginBottom: 8,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 20,
    marginTop: 20,
    elevation: 3,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 18,
  },

  progressBackground: {
    height: 12,
    borderRadius: 10,
    backgroundColor: '#E2E8F0',
    overflow: 'hidden',
  },

  progressBar: {
    height: '100%',
    backgroundColor: '#2E7D32',
  },

  progressText: {
    marginTop: 12,
    textAlign: 'right',
    color: '#2E7D32',
    fontWeight: '700',
    fontSize: 16,
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
    fontWeight: '700',
    fontSize: 15,
  },

  finishButton: {
    marginTop: 30,
    backgroundColor: '#2E7D32',
    height: 55,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  finishButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },

});

export default styles;