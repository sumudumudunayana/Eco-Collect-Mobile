import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    borderRadius: 18,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 6,

    elevation: 4,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  icon: {
    fontSize: 32,
    marginBottom: 10,
  },

  value: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1E293B',
  },

  title: {
    marginTop: 8,
    fontSize: 15,
    color: '#64748B',
    textAlign: 'center',
  },

});

export default styles;