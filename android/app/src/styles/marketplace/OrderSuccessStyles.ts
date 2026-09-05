import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },

  iconContainer: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },

  icon: {
    fontSize: 80,
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#2E7D32',
    textAlign: 'center',
  },

  message: {
    marginTop: 15,
    fontSize: 16,
    color: '#64748B',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },

  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 20,
    elevation: 4,
    marginBottom: 35,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
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

  button: {
    width: '100%',
    height: 55,
    backgroundColor: '#2E7D32',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },

});

export default styles;