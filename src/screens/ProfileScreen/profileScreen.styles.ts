import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },

  headerContainer: {
    backgroundColor: '#111',
    paddingBottom: 16,
    paddingTop: 16,
  },

  // Cover image if needed
  coverImageContainer: {
    height: 130,
    borderRadius: 8,
    overflow: 'hidden',
    marginHorizontal: 16,
  },
  coverImage: {
    width: '100%',
    height: '100%',
  },

  // Avatar
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: '#111',
    overflow: 'hidden',
    alignSelf: 'center',
    marginBottom: 8,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },

  // Display name row with button
  displayRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  displayName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 6,
  },

  // Username and bio
  username: {
    color: '#aaa',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 4,
  },
  bio: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    marginBottom: 12,
  },

  // Buttons
  editButton: {
    borderColor: '#0000',
    backgroundColor: '#0000',
  },
  followButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderColor: '#3b82f6',
    borderWidth: 1,
    backgroundColor: '#2563eb',
  },
  editRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editButtonText: {
    color: '#fff',
    marginLeft: 6,
  },

  // Stats row
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderColor: '#222',
    paddingVertical: 12,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#aaa',
    fontSize: 12,
  },

  // Tabs
  tabsContainer: {
    backgroundColor: '#111',
    borderBottomWidth: 1,
    borderColor: '#222',
  },
  tabRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  tabButton: {
    marginRight: 24,
    paddingVertical: 12,
  },
  tabText: {
    color: '#888',
    fontSize: 14,
  },
  activeTabText: {
    color: '#3b82f6',
    fontWeight: 'bold',
  },
  activeTabIndicator: {
    height: 2,
    backgroundColor: '#3b82f6',
    marginTop: 4,
    borderRadius: 2,
  },

  // Tweet card
  tweetCard: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#222',
  },
  tweetRow: {
    flexDirection: 'row',
  },
  tweetAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  tweetContent: {
    flex: 1,
  },
  tweetHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  tweetDisplayName: {
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 6,
  },
  tweetMeta: {
    color: '#888',
    fontSize: 12,
  },
  tweetText: {
    color: '#fff',
    marginBottom: 8,
  },
  tweetActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: 200,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    color: '#888',
    fontSize: 12,
    marginLeft: 4,
  },

  // Reels / Video cards
  reelCard: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#000',
  },
  reelImage: {
    width: width - 32,
    aspectRatio: 9 / 16,
  },
  playOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  reelFooter: {
    padding: 12,
  },
  reelUserRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  reelAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  reelUserName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  reelCaption: {
    color: '#fff',
    fontSize: 13,
    marginBottom: 8,
  },
  reelActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reelActionText: {
    color: '#fff',
    fontSize: 12,
    marginLeft: 4,
  },
});
