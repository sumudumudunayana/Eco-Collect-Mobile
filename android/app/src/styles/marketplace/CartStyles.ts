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

  emptyCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 24,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 4,
  },

  emptyText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1E293B',
  },

  emptySubText: {
    marginTop: 8,
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
  },

  itemCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
    flexDirection: 'row',
    marginBottom: 20,
    elevation: 4,
  },

  productImage: {
    width: 90,
    height: 90,
    borderRadius: 12,
    backgroundColor: '#E8F5E9',
  },

  details: {
    flex: 1,
    marginLeft: 15,
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E293B',
  },

  category: {
    color: '#64748B',
    marginTop: 4,
    fontSize: 13,
  },

  price: {
    color: '#2E7D32',
    fontSize: 18,
    marginTop: 8,
    fontWeight: '700',
  },

  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    flexWrap: 'wrap',
  },

  qtyButton: {
    width: 35,
    height: 35,
    backgroundColor: '#2E7D32',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  qtyText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },

  quantity: {
    marginHorizontal: 18,
    fontSize: 18,
    fontWeight: '700',
  },

  removeButton: {
    marginLeft: 18,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },

  removeText: {
    color: '#DC2626',
    fontWeight: '600',
  },

  summaryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 20,
    elevation: 4,
    marginBottom: 25,
  },

  summaryTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2E7D32',
    marginBottom: 18,
  },

  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  total: {
    fontWeight: '700',
    fontSize: 18,
  },

  checkoutButton: {
    backgroundColor: '#2E7D32',
    height: 55,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  disabledButton: {
    opacity: 0.5,
  },

  checkoutText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 17,
  },

});

export default styles;