import {StyleSheet, Dimensions} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;

export const styles = StyleSheet.create({
container: {
    flex: 1,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000000',
  },
  bottomSheet: {
    position: 'absolute' as const,
    bottom: 0,
    left: 0,
    right: 0,
    height: SCREEN_HEIGHT * 0.6,
    backgroundColor: '#1C1C1C',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
    flex: 1,
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

})