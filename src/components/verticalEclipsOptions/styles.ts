import {StyleSheet, Dimensions} from 'react-native';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');
const BOTTOM_SHEET_HEIGHT = SCREEN_HEIGHT * 0.6; 

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000000',
  },
   bottomSheet: {
    // ...
    height: BOTTOM_SHEET_HEIGHT, // This now uses the 90% height
    backgroundColor: '#1C1C1C',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'column',
  },
  handleContainer: {
    alignItems: 'center' as const,
    paddingVertical: 12,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: '#666666',
    borderRadius: 2,
  },
  optionsContainer: {
    flex: 1, // <-- FIX: Added
    paddingHorizontal: 0,
  },
  optionItem: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#333333',
  },
  optionIcon: {
    marginRight: 16,
    width: 24,
  },
  optionText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '400',
  },
});