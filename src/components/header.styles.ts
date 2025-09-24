import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#000',
  },
  logo: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  headerButton: {
  position: 'relative',
  marginLeft: 20,
  padding: 8,
},
logoSpacer: { // New spacer style
  flex: 1, // Pushes the search and ellipsis icons to the right
},
});
