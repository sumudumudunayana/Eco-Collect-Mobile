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
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
  },

  reasonButton: {
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginBottom: 12,
  },

  selectedReason: {
    backgroundColor: '#2E7D32',
    borderColor: '#2E7D32',
  },

  reasonText: {
    color: '#1E293B',
    fontSize: 16,
    fontWeight: '600',
  },

  selectedReasonText: {
    color: '#FFFFFF',
  },

  label: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 12,
  },

  notesInput: {
    minHeight: 120,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 12,
    padding: 15,
    textAlignVertical: 'top',
    fontSize: 15,
  },

  photoButton: {
    backgroundColor: '#1565C0',
    height: 55,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },

  photoButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },

  submitButton: {
    backgroundColor: '#2E7D32',
    height: 55,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  submitButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 17,
  },

});

export default styles;