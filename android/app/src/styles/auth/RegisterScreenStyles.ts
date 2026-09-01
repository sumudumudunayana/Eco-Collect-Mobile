import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FAFC',
  },

 scrollContainer: {
  flexGrow: 1,
  justifyContent: 'center',
  paddingHorizontal: 25,
  paddingVertical: 40,
},

  logoContainer: {
  alignItems: 'center',
  marginBottom: 25,
},

  logo: {
  fontSize: 55,
  marginBottom: 10,
},

  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#2E7D32',
  },

  subtitle: {
    marginTop: 8,
    fontSize: 15,
    color: '#64748B',
  },

  formContainer: {
    backgroundColor: '#FFFFFF',
    padding: 25,
    borderRadius: 20,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 5,
    },

    elevation: 6,
  },

  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 8,
  },

  input: {
    height: 55,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 12,
    paddingHorizontal: 18,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
  },

  registerButton: {
    height: 55,
    backgroundColor: '#2E7D32',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 10,
  },

  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },

  loginText: {
    marginTop: 25,
    textAlign: 'center',
    fontSize: 15,
    color: '#64748B',
  },

  loginLink: {
    color: '#2E7D32',
    fontWeight: '700',
  },
});

export default styles;