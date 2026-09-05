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

  heading: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1E293B',
    textAlign: 'center',
  },

  subHeading: {
    marginTop: 8,
    textAlign: 'center',
    color: '#64748B',
    marginBottom: 25,
  },

  cameraContainer: {
    height: 320,
    backgroundColor: '#1E293B',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },

  scanFrame: {
    width: 220,
    height: 220,
    borderWidth: 4,
    borderColor: '#2E7D32',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  qrIcon: {
    fontSize: 60,
  },

  scanText: {
    marginTop: 15,
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },

  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 20,
    marginBottom: 25,
    elevation: 3,
  },

  infoTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 15,
    color: '#1E293B',
  },

  infoText: {
    fontSize: 15,
    color: '#475569',
    marginBottom: 10,
  },

  scanButton: {
    backgroundColor: '#2E7D32',
    height: 55,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },

  scanButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 17,
  },

  flashButton: {
    height: 55,
    borderRadius: 14,
    backgroundColor: '#1565C0',
    justifyContent: 'center',
    alignItems: 'center',
  },

  flashButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 17,
  },

});

export default styles;