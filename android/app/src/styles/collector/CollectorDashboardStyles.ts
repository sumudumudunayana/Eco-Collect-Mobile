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

  welcomeContainer: {
    marginBottom: 25,
  },

  greeting: {
    fontSize: 18,
    color: '#64748B',
  },

  collectorName: {
    fontSize: 30,
    fontWeight: '700',
    color: '#1E293B',
    marginTop: 4,
  },

  date: {
    marginTop: 6,
    fontSize: 15,
    color: '#94A3B8',
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 15,
    marginTop: 10,
  },

  summaryRow: {
    flexDirection: 'row',
    marginHorizontal: -6,
    marginBottom: 8,
  },

  actionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 10,
  },


  
});

export default styles;