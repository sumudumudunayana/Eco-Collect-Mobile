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

  imageContainer: {
    height: 260,
    backgroundColor: '#E8F5E9',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  imageIcon: {
    fontSize: 90,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1E293B',
  },

  category: {
    color: '#64748B',
    marginTop: 6,
    fontSize: 16,
  },

  rating: {
    marginTop: 10,
    color: '#F59E0B',
    fontWeight: '600',
    fontSize: 16,
  },

  price: {
    marginTop: 15,
    fontSize: 30,
    color: '#2E7D32',
    fontWeight: '700',
  },

  card: {
    marginTop: 25,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 20,
    elevation: 4,
  },

  heading: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2E7D32',
    marginBottom: 15,
  },

  description: {
    color: '#475569',
    lineHeight: 24,
    fontSize: 15,
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
    fontWeight: '700',
    color: '#1E293B',
    fontSize: 15,
  },

  cartButton: {
    backgroundColor: '#2E7D32',
    height: 55,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },

  buyButton: {
    backgroundColor: '#1565C0',
    height: 55,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 17,
  },

});

export default styles;