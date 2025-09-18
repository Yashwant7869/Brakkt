import {StyleSheet, View, Alert, Share} from 'react-native';

import React, {useState} from 'react';
import Shorts from './Shorts';

type Item = {
  id: string;
  url: string;
  likes?: number;
  comments?: number;
  isLiked?: boolean;
};

const items: Item[] = [
  {
    id: '001',
    url: 'https://youtube.com/shorts/Uj74798gItc',
    likes: 1200,
    comments: 45,
    isLiked: false,
  },
  {
    id: '002',
    url: 'https://youtube.com/shorts/HXyx8Sr5RTQ',
    likes: 850,
    comments: 23,
    isLiked: false,
  },
  {
    id: '003',
    url: 'https://youtube.com/shorts/QgAA_5IPNIs',
    likes: 2100,
    comments: 67,
    isLiked: false,
  },
  {
    id: '004',
    url: 'https://youtube.com/shorts/GFAa6l5zbHE',
    likes: 550,
    comments: 18,
    isLiked: false,
  },
  {
    id: '005',
    url: 'https://youtube.com/shorts/-IcYublDy7I',
    likes: 980,
    comments: 34,
    isLiked: false,
  },
  {
    id: '006',
    url: 'https://youtube.com/shorts/6a1tmHi6d60',
    likes: 1500,
    comments: 56,
    isLiked: false,
  },
  {
    id: '007',
    url: 'https://youtube.com/shorts/8Lt1hJnEcq0',
    likes: 720,
    comments: 29,
    isLiked: false,
  },
  {
    id: '008',
    url: 'https://youtube.com/shorts/266xNTZN5VI',
    likes: 1800,
    comments: 78,
    isLiked: false,
  },
  {
    id: '009',
    url: 'https://youtube.com/shorts/xZ48_razkME',
    likes: 640,
    comments: 21,
    isLiked: false,
  },
  {
    id: '010',
    url: 'https://youtube.com/shorts/qoM9tP69USo',
    likes: 1350,
    comments: 42,
    isLiked: false,
  },
];

const App = () => {
  const [shortsData, setShortsData] = useState(items);

  const handleLike = (id: string) => {
    setShortsData(prevData =>
      prevData.map(item =>
        item.id === id
          ? {
              ...item,
              isLiked: !item.isLiked,
              likes: item.isLiked ? (item.likes || 0) - 1 : (item.likes || 0) + 1,
            }
          : item,
      ),
    );
  };

  const handleComment = (id: string) => {
    Alert.alert('Comments', 'Comment feature would open here');
    // Navigate to comments screen or open comment modal
  };

  const handleShare = async (url: string) => {
    try {
      await Share.share({
        message: `Check out this amazing short: ${url}`,
        url: url,
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Shorts 
        items={shortsData} 
        onLike={handleLike}
        onComment={handleComment}
        onShare={handleShare}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
});

export default App;
