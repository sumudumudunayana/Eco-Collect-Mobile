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
    borderRadius: 18,
    padding: 20,
    marginBottom: 18,
    elevation: 3,
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E293B',
  },

  message: {
    marginTop: 8,
    fontSize: 15,
    color: '#475569',
    lineHeight: 22,
  },

  time: {
    marginTop: 15,
    fontSize: 13,
    color: '#64748B',
    textAlign: 'right',
  },

});

export default styles;