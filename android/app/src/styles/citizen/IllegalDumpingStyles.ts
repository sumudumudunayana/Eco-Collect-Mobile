import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },

  content: {
    padding: 20,
    paddingBottom: 50,
  },

  imageBox: {
    backgroundColor: '#FFFFFF',

    borderRadius: 24,

    paddingVertical: 35,

    alignItems: 'center',

    marginBottom: 30,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },

    elevation: 6,
  },

  imageIcon: {
    fontSize: 70,
  },

  imageTitle: {
    marginTop: 15,

    fontSize: 22,

    fontWeight: '700',

    color: '#1E293B',
  },

  uploadButton: {
    marginTop: 20,

    backgroundColor: '#2E7D32',

    borderRadius: 16,

    paddingHorizontal: 30,

    paddingVertical: 14,

    elevation: 3,
  },

  uploadButtonText: {
    color: '#FFFFFF',

    fontWeight: '700',

    fontSize: 16,
  },

  label: {
    fontSize: 17,

    fontWeight: '700',

    color: '#1E293B',

    marginBottom: 10,
  },

  input: {
    height: 58,

    backgroundColor: '#FFFFFF',

    borderRadius: 16,

    paddingHorizontal: 18,

    fontSize: 16,

    color: '#1E293B',

    marginBottom: 20,

    borderWidth: 1,
    borderColor: '#E2E8F0',

    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 6,

    elevation: 2,
  },

  textArea: {
    backgroundColor: '#FFFFFF',

    borderRadius: 16,

    padding: 18,

    minHeight: 140,

    fontSize: 16,

    color: '#1E293B',

    textAlignVertical: 'top',

    marginBottom: 22,

    borderWidth: 1,
    borderColor: '#E2E8F0',
  },

  categoryContainer: {
    flexDirection: 'row',

    flexWrap: 'wrap',

    justifyContent: 'space-between',

    marginBottom: 35,
  },

  category: {
    width: '48%',

    backgroundColor: '#FFFFFF',

    borderRadius: 16,

    paddingVertical: 18,

    alignItems: 'center',

    marginBottom: 15,

    borderWidth: 1,
    borderColor: '#2E7D32',

    elevation: 2,
  },

  categoryText: {
    color: '#2E7D32',

    fontWeight: '700',

    fontSize: 15,
  },

  submitButton: {
    height: 58,

    backgroundColor: '#2E7D32',

    borderRadius: 18,

    justifyContent: 'center',

    alignItems: 'center',

    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 5,
  },

  submitText: {
    color: '#FFFFFF',

    fontSize: 18,

    fontWeight: '700',
  },

});

export default styles;