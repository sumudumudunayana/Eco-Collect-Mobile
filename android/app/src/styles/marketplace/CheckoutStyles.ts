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

  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2E7D32',
    marginBottom: 20,
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    height: 55,
    paddingHorizontal: 15,
    marginBottom: 15,
    elevation: 2,
  },

  textArea: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    height: 120,
    textAlignVertical: 'top',
    marginBottom: 25,
    elevation: 2,
  },

  summaryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    elevation: 4,
    marginBottom: 25,
  },

  summaryTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2E7D32',
    marginBottom: 20,
  },

  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  itemText: {
    color: '#334155',
    fontSize: 14,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  total: {
    fontWeight: '700',
    fontSize: 18,
  },

  placeOrderButton: {
    backgroundColor: '#2E7D32',
    height: 55,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  placeOrderText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },

});

export default styles;