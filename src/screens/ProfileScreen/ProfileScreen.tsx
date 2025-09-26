import React, { useState } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, Image, Alert } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart, faComment, faRetweet, faShare, faEllipsisH, faUserPlus, faPen, faPlay } from '@fortawesome/free-solid-svg-icons';
import { styles } from './profileScreen.styles';
import TabNavigation from './components/TabNavigation';
import Header from '../../components/Header';
import TweetCard from '../HomeScreen/components/TweetCard';
import { mockTweets } from '../HomeScreen/mockTweets';

const mockUser = {
  id: '1',
  username: '@johndoe',
  displayName: 'John Doe',
  bio: 'Digital creator & developer 🚀\nBuilding amazing experiences\n📍 San Francisco',
  avatar: 'https://i.pravatar.cc/150?img=1',
  coverImage: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=400&h=200&fit=crop',
  stats: { posts: 1247, followers: 12500, following: 892 },
  isCurrentUser: true,
};

// const mockTweets = [
//   {
//     id: '1',
//     user: { username: '@johndoe', displayName: 'John Doe', avatar: 'https://i.pravatar.cc/40?img=1' },
//     content: 'Just shipped a new feature! 🚀',
//     timestamp: '2h',
//     stats: { likes: 24, retweets: 5, comments: 8 },
//   },
// ];


const ProfileHeader = ({ user, onEditProfile, onFollow }: any) => (
  <View style={styles.headerContainer}>
    <View style={styles.avatarContainer}>
      <Image source={{ uri: user.avatar }} style={styles.avatar} />
    </View>

    <View style={styles.displayRow}>
      <Text style={styles.displayName}>{user.displayName}</Text>
      <TouchableOpacity
        onPress={user.isCurrentUser ? onEditProfile : onFollow}
        style={user.isCurrentUser ? styles.editButton : styles.followButton}
      >
        <View style={styles.editRow}>
          <FontAwesomeIcon icon={user.isCurrentUser ? faPen : faUserPlus} color="#fff" size={16} />
          {/* <Text style={styles.editButtonText}>{user.isCurrentUser ? '' : 'Follow'}</Text> */}
        </View>
      </TouchableOpacity>
    </View>

    <Text style={styles.username}>{user.username}</Text>
    <Text style={styles.bio}>{user.bio}</Text>

   <View style={styles.statsRow}>
  <TouchableOpacity
    style={styles.statItem}
    onPress={() => Alert.alert('Posts', `You have ${user.stats.posts} posts`)}
  >
    <Text style={styles.statValue}>{user.stats.posts}</Text>
    <Text style={styles.statLabel}>Posts</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={styles.statItem}
    onPress={() => Alert.alert('Followers', `You have ${user.stats.followers} followers`)}
  >
    <Text style={styles.statValue}>{user.stats.followers}</Text>
    <Text style={styles.statLabel}>Followers</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={styles.statItem}
    onPress={() => Alert.alert('Following', `You are following ${user.stats.following} users`)}
  >
    <Text style={styles.statValue}>{user.stats.following}</Text>
    <Text style={styles.statLabel}>Following</Text>
  </TouchableOpacity>
</View>
  </View>
);

// for now we are using hardcoded tweets data from , import { mockTweets } from '../HomeScreen/mockTweets';
const TweetsCard = ({ tweets }: any) => (
  <>
    {tweets.map((tweet: any) => <TweetCard key={tweet.id} tweet={tweet} />)}
  </>
);

const ProfileScreen = () => {
  const [activeTab, setActiveTab] = useState('Tweets');
  
  const renderContent = () => {
    if (activeTab === 'Tweets') {
      return <TweetsCard tweets={mockTweets} />;
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header/>
        <ProfileHeader user={mockUser} onEditProfile={() => {}} onFollow={() => {}} />
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        {renderContent()}
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
