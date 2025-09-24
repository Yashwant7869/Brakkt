import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  tweetContainer: {
    backgroundColor: '#000',
    borderBottomWidth: 0.5,
    borderBottomColor: '#333',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  tweetHeader: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 12 },
  userInfo: { flex: 1 },
  nameRow: { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' },
  userName: { color: '#fff', fontSize: 15, fontWeight: 'bold', marginRight: 4 },
  verifiedBadge: { backgroundColor: '#1d9bf0', borderRadius: 10, width: 18, height: 18, alignItems: 'center', justifyContent: 'center', marginRight: 4 },
  userHandle: { color: '#71767b', fontSize: 15, marginRight: 4 },
  timestamp: { color: '#71767b', fontSize: 15 },
  moreButton: { padding: 4 },
  moreIcon: { color: '#71767b', fontSize: 16 },
  tweetContent: { marginLeft: 52 },
  tweetText: { color: '#fff', fontSize: 15, lineHeight: 20, marginBottom: 12 },
  tweetImage: { width: '100%', height: 200, borderRadius: 16, marginBottom: 12 },
  tweetActions: { flexDirection: 'row', justifyContent: 'space-between', marginLeft: 52, marginTop: 8, maxWidth: 350 },
  actionButton: { flexDirection: 'row', alignItems: 'center' },
  actionIcon: { color: '#71767b', marginRight: 4 },
  actionCount: { color: '#71767b', fontSize: 13 },
  likedIcon: { color: '#f91880' },
  retweetedIcon: { color: '#00ba7c' },
});
