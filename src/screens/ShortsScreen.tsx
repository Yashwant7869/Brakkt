import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Shorts from '../Shorts';

// Sample data for the shorts
const sampleShorts = [
  {
    id: '1',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    likes: 1200,
    comments: 89,
    isLiked: false,
    title: 'Sample Short 1',
  },
  {
    id: '2',
    url: 'https://www.youtube.com/watch?v=9bZkp7q19f0',
    likes: 854,
    comments: 23,
    isLiked: true,
    title: 'Sample Short 2',
  },
  {
    id: '3',
    url: 'https://www.youtube.com/watch?v=ScMzIvxBSi4',
    likes: 2100,
    comments: 156,
    isLiked: false,
    title: 'Sample Short 3',
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

  const handleShare = (url: string) => {
    console.log('Share short:', url);
    // TODO: Implement share functionality
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