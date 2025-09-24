import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  tabContainer: {
    marginTop: 2,
    marginBottom: 6,
    flexDirection: 'row',
    backgroundColor: '#000',
   
    borderBottomColor: '#333',
    borderColor: '#333',
  },
  tab: { flex: 1, alignItems: 'center', paddingVertical: 10 },
  activeTab: { borderBottomWidth: 2, borderBottomColor: '#1d9bf0' },
  tabText: { color: '#71767b', fontSize: 16, fontWeight: '500' },
  activeTabText: { color: '#fff' },
});
