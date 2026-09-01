import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E7D32',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 80,
  },

  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    fontSize: 90,
    marginBottom: 20,
  },

  title: {
    fontSize: 38,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 1,
  },

  tagline: {
    marginTop: 10,
    fontSize: 17,
    color: '#E8F5E9',
    textAlign: 'center',
    paddingHorizontal: 40,
  },

  footer: {
    alignItems: 'center',
  },

  loadingText: {
    color: '#FFFFFF',
    marginTop: 15,
    fontSize: 16,
    fontWeight: '500',
  },

  version: {
    color: '#C8E6C9',
    marginTop: 20,
    fontSize: 13,
  },
});

export default styles;