import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {flex: 1, position: 'relative', backgroundColor: 'black'},
  videoContainer: {flex: 1, justifyContent: 'center'},
  video: {position: 'absolute', top: 0, left: 0, bottom: 0, right: 0},
  
headerContainer: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  flexDirection: 'row',
  justifyContent: 'space-between', // Changed to space-between
  alignItems: 'center',
  paddingHorizontal: 15,
  paddingTop: 50, // Adjust as needed for status bar
  zIndex: 10,
  // Added a gradient background for better visibility of header elements
  backgroundColor: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)',
},
headerButton: {
  position: 'relative',
  marginLeft: 20,
  padding: 8,
},
headerLogo: { // New style for the logo
  width: 40, // Adjust size as needed
  height: 40, // Adjust size as needed
  resizeMode: 'contain',
},
logoSpacer: { // New spacer style
  flex: 1, // Pushes the search and ellipsis icons to the right
},
  playIconContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  sliderContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 10,
  },
  track: {
    height: 3,
    borderRadius: 2,
  },
  thumb: {
    width: 12,
    height: 12,
    backgroundColor: 'white',
  },
  actionsContainer: {
    position: 'absolute',
    right: 16,
    bottom: 100,
    alignItems: 'center',
    zIndex: 2,
  },
  actionButton: {
    alignItems: 'center',
    marginVertical: 12,
    paddingHorizontal: 8,
  },
  actionCount: {
    color: 'white',
    fontSize: 11,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 2,
  },
  profileSection: {
    position: 'absolute',
    left: 16,
    bottom: 30,
    right: 80,
    zIndex: 2,
  },
  userInfoRow: {flexDirection: 'row', alignItems: 'center', marginBottom: 12},
  profileImageContainer: {position: 'relative', marginRight: 12},
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'white',
  },
  followIconButton: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    backgroundColor: '#ff3040',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  userDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    color: 'white',
    fontSize: 14,
    marginRight: 8,
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 2,
    flexShrink: 1,
  },
  followButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 4,
  },

  
  followButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 2,
  },
  descriptionContainer: {maxWidth: '90%'},
  description: {
    color: 'white',
    fontSize: 13,
    lineHeight: 18,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 2,
  },
  moreText: {color: 'rgba(255, 255, 255, 0.8)', fontWeight: '600'},
});