import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  // Main Container
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  
  // Preview Area Styles
  previewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 100, // Space for floating button
  },
  
  mediaPreview: {
    width: '100%',
    alignItems: 'center',
  },
  
  previewImage: {
    width: width * 0.85,
    height: width * 0.85,
    borderRadius: 16,
    backgroundColor: '#e9ecef',
    resizeMode: 'cover',
  },
  
  previewVideo: {
    width: width * 0.85,
    height: (width * 0.85) * (9/16), // 16:9 aspect ratio
    borderRadius: 16,
    backgroundColor: '#000',
  },
  
  mediaInfo: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: '600',
    color: '#495057',
    textAlign: 'center',
  },
  
  // Empty State Styles
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  
  emptyStateIcon: {
    fontSize: 64,
    marginBottom: 16,
    opacity: 0.6,
  },
  
  emptyStateText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#6c757d',
    marginBottom: 8,
    textAlign: 'center',
  },
  
  emptyStateSubtext: {
    fontSize: 14,
    color: '#adb5bd',
    textAlign: 'center',
    lineHeight: 20,
    maxWidth: 250,
  },
  
  // Floating Action Button
  floatingButton: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    zIndex: 1000,
  },
  
  floatingButtonText: {
    fontSize: 28,
    color: '#fff',
    fontWeight: '300',
    lineHeight: 28,
  },
  
  // Modal Overlay Styles
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  
  modalBackground: {
    flex: 1,
  },
  
  // Bottom Sheet Styles
  bottomSheet: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingBottom: 34, // Safe area bottom
    maxHeight: height * 0.6,
    minHeight: 300,
  },
  
  bottomSheetHeader: {
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
    marginHorizontal: 20,
  },
  
  dragIndicator: {
    width: 36,
    height: 4,
    backgroundColor: '#dee2e6',
    borderRadius: 2,
    marginBottom: 16,
  },
  
  bottomSheetTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#212529',
  },
  
  // Options Container
  optionsContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 12,
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e9ecef',
    minHeight: 64,
  },
  
  optionPressed: {
    backgroundColor: '#e7f3ff',
    borderColor: '#007bff',
    transform: [{scale: 0.98}],
  },
  
  optionIcon: {
    fontSize: 24,
    marginRight: 16,
    width: 32,
    textAlign: 'center',
  },
  
  optionText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#212529',
  },
  
  optionSubtext: {
    fontSize: 14,
    color: '#6c757d',
    fontWeight: '400',
  },
  
  // Cancel Button
  cancelButton: {
    marginHorizontal: 20,
    marginTop: 16,
    paddingVertical: 16,
    backgroundColor: '#6c757d',
    borderRadius: 12,
    alignItems: 'center',
    minHeight: 50,
    justifyContent: 'center',
  },
  
  cancelButtonPressed: {
    backgroundColor: '#5a6268',
    transform: [{scale: 0.98}],
  },
  
  cancelButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  
  // Loading States
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2000,
  },
  
  loadingContent: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 12,
    alignItems: 'center',
    minWidth: 120,
  },
  
  loadingText: {
    marginTop: 12,
    fontSize: 14,
    color: '#495057',
    fontWeight: '500',
  },
  
  // Error States
  errorContainer: {
    backgroundColor: '#f8d7da',
    borderColor: '#f5c6cb',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginHorizontal: 20,
    marginBottom: 16,
  },
  
  errorText: {
    color: '#721c24',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
  },
  
  // Responsive Styles - separate styles instead of nested
  smallScreenPreviewImage: {
    width: width * 0.9,
    height: width * 0.9,
  },
  smallScreenPreviewVideo: {
    width: width * 0.9,
    height: (width * 0.9) * (9/16),
  },
  
  // Dark Mode Support (optional)
  darkContainer: {
    backgroundColor: '#1a1a1a',
  },
  
  darkBottomSheet: {
    backgroundColor: '#2d2d2d',
  },
  
  darkOption: {
    backgroundColor: '#3d3d3d',
    borderColor: '#4d4d4d',
  },
  
  darkText: {
    color: '#ffffff',
  },
  
  darkSubtext: {
    color: '#cccccc',
  },
});