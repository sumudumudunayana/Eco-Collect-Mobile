import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    width: '47%',
    borderRadius: 18,
    paddingVertical: 22,
    paddingHorizontal: 15,
    marginBottom: 18,
    alignItems: 'center',

    elevation: 4,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  iconContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },

  icon: {
    fontSize: 34,
  },

  title: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1E293B',
    textAlign: 'center',
  },

  subtitle: {
    marginTop: 8,
    fontSize: 13,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 18,
  },

});

export default styles;