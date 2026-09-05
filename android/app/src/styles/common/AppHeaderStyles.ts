import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  safeArea: {
    backgroundColor: '#2E7D32',
  },

  container: {
    height: 60,
    backgroundColor: '#2E7D32',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingHorizontal: 18,

    elevation: 5,
  },

  leftContainer: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  rightContainer: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  title: {
    flex: 1,
    textAlign: 'center',

    color: '#FFFFFF',

    fontSize: 22,
    fontWeight: '700',
  },

});

export default styles;