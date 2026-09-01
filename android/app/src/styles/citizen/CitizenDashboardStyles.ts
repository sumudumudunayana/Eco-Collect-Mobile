import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },

  header: {
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 18,
  },

  welcome: {
    fontSize: 17,
    color: '#64748B',
    fontWeight: '500',
  },

  name: {
    fontSize: 36,
    fontWeight: '800',
    color: '#1E293B',
    marginTop: 6,
    letterSpacing: 0.3,
  },

  collectionCard: {
    marginHorizontal: 20,
    marginTop: 5,
    backgroundColor: '#2E7D32',

    borderRadius: 24,

    paddingHorizontal: 24,
    paddingVertical: 24,

    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 6,
    },

    elevation: 8,
  },

  collectionTitle: {
    color: '#E8F5E9',
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },

  collectionDay: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: '800',
    marginTop: 10,
  },

  collectionTime: {
    color: '#F1F5F9',
    fontSize: 16,
    marginTop: 10,
    lineHeight: 22,
  },

  sectionTitle: {
    marginLeft: 22,
    marginTop: 30,
    marginBottom: 15,

    fontSize: 24,
    fontWeight: '700',

    color: '#1E293B',
  },

  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',

    paddingHorizontal: 20,

    paddingBottom: 40,
  },

});

export default styles;