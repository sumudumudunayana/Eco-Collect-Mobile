import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  card: {
    width: '47%',
    backgroundColor: '#FFFFFF',

    borderRadius: 24,

    paddingVertical: 24,
    paddingHorizontal: 18,

    marginBottom: 18,

    alignItems: 'center',

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 6,
    },

    elevation: 6,
  },

  iconContainer: {
    width: 72,
    height: 72,

    borderRadius: 36,

    backgroundColor: '#E8F5E9',

    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: 18,
  },

  icon: {
    fontSize: 34,
  },

  title: {
    textAlign: 'center',

    fontSize: 17,

    fontWeight: '700',

    color: '#1E293B',
  },

  subtitle: {
    marginTop: 8,

    fontSize: 13,

    color: '#64748B',
  },

});

export default styles;