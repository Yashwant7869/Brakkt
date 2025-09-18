import React, {useState} from 'react';
import {View, StyleSheet, Share, Alert} from 'react-native';
import Shorts from '../Shorts';

// Sample data for the shorts - using local video files
const sampleShorts = [
  {
    id: '1',
    url: require('../../public/video/video1.mp4'),
    likes: 1200,
    comments: 89,
    isLiked: false,
    title: 'Sample Short 1',
    description: 'This is an amazing short video! Check out this cool content that I created just for you. #trending #viral #awesome',
    user: {
      id: 'user1',
      username: '@johndoe',
      profileImage: null,
      isFollowing: false,
    },
  },
  {
    id: '2',
    url: require('../../public/video/video2.mp4'),
    likes: 854,
    comments: 23,
    isLiked: true,
    title: 'Sample Short 2',
    description: 'Another cool video with some interesting content. Hope you enjoy it!',
    user: {
      id: 'user2',
      username: '@janedoe',
      profileImage: null,
      isFollowing: true,
    },
  },
  {
    id: '3',
    url: require('../../public/video/video3.mp4'),
    likes: 2100,
    comments: 156,
    isLiked: false,
    title: 'Sample Short 3',
    description: 'Amazing content here! This is a longer description to test the expandable functionality of the description text. Let\'s see how it looks when it gets truncated and then expanded.',
    user: {
      id: 'user3',
      username: '@mikejohnson',
      profileImage: null,
      isFollowing: false,
    },
  },
];

const ShortsScreen: React.FC = () => {
  const [shorts, setShorts] = useState(sampleShorts);

  const handleLike = (id: string) => {
    setShorts(prevShorts =>
      prevShorts.map(short =>
        short.id === id
          ? {
              ...short,
              isLiked: !short.isLiked,
              likes: short.isLiked ? short.likes - 1 : short.likes + 1,
            }
          : short,
      ),
    );
  };

  const handleComment = (id: string) => {
    console.log('Comment on short:', id);
    // TODO: Implement comment functionality
  };

  const handleFollow = (userId: string) => {
    setShorts(prevShorts =>
      prevShorts.map(short =>
        short.user.id === userId
          ? {
              ...short,
              user: {
                ...short.user,
                isFollowing: !short.user.isFollowing,
              },
            }
          : short,
      ),
    );
    console.log('Follow/Unfollow user:', userId);
  };

  const handleShare = async (url: string) => {
    try {
      // Find the short item to get its title
      const shortItem = shorts.find(short => short.url === url);
      const title = shortItem?.title || 'Check out this short video!';

      const result = await Share.share({
        message: `${title}\n\nShared from Shorts App`,
        title: title,
        // For local files, you might want to share a web URL instead
        // url: 'https://your-app-domain.com/shorts/' + shortItem?.id,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('Shared with activity type:', result.activityType);
        } else {
          console.log('Shared successfully');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Share dismissed');
      }
    } catch (error: any) {
      Alert.alert('Error', 'Failed to share content');
      console.error('Share error:', error.message);
    }
  };

  const handleRefresh = () => {
    console.log('Refreshing shorts...');
    // TODO: Implement refresh functionality
  };

  const handleEndReached = () => {
    console.log('Load more shorts...');
    // TODO: Implement load more functionality
  };

  return (
    <View style={styles.container}>
      <Shorts
        items={shorts}
        onLike={handleLike}
        onComment={handleComment}
        onShare={handleShare}
        onFollow={handleFollow}
        onRefresh={handleRefresh}
        onEndReached={handleEndReached}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default ShortsScreen;