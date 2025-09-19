import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';

// --- Import Font Awesome components and icons ---
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faComment, faHeart, faChartBar } from '@fortawesome/free-regular-svg-icons';
import { faRetweet, faArrowUpFromBracket, faHeart as faHeartSolid, faGear, faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';


// Types for future API integration
interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  isVerified: boolean;
}

interface Tweet {
  id: string;
  user: User;
  content: string;
  timestamp: string;
  replies: number;
  retweets: number;
  likes: number;
  views: string;
  image?: string;
}

// Mock data - replace with API calls later
const mockTweets: Tweet[] = [
  {
    id: '1',
    user: {
      id: '1',
      name: 'Barack Obama',
      username: '@BarackObama',
      avatar: 'https://avatar.iran.liara.run/public/6',
      isVerified: true,
    },
    content: 'This commentary offers a clear, powerful statement of why freedom of speech is at the heart of democracy and must be defended, whether the speaker is Charlie Kirk or Jimmy Kimmel, MAGA supporters or MAGA opponents.',
    timestamp: '9h',
    replies: 9900,
    retweets: 16800,
    likes: 184000,
    views: '13.7M',
  },
  {
    id: '2',
    user: {
      id: '2',
      name: 'Zack',
      username: '@Asmongold',
      avatar: 'https://avatar.iran.liara.run/public/46',
      isVerified: true,
    },
    content: `A few days ago my father passed away.

It's difficult for me to even find the words for the emptiness it leaves me with, he was my last family member in the state and I was there with him until the end.

I will endure, but I don't think I'll ever be the same

I love you, Pa`,
    timestamp: '15h',
    replies: 2500,
    retweets: 850,
    likes: 45600,
    views: '2.1M',
    image: 'https://th.bing.com/th/id/R.2385ff8a52793bc74c835cab557a2f99?rik=T2MNoZH2HHvqWw&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f01%2f111509-landscape-nature.jpg&ehk=ufwETSINPVhGrhOVR60lLxMuOTB1rEHjaa33l%2bymDEs%3d&risl=&pid=ImgRaw&r=0',
  },
  {
  id: '3',
  user: {
    id: '3',
    name: 'Emily Carter',
    username: '@TechieEmily',
    avatar: 'https://avatar.iran.liara.run/public/47',
    isVerified: false,
  },
  content: `Just wrapped up my first hackathon as a team lead! 🚀  
Learned so much about collaboration, problem-solving, and pushing through when things got tough.  
Proud of my team for building something amazing overnight!`,
  timestamp: '8h',
  replies: 320,
  retweets: 150,
  likes: 4200,
  views: '340K',
  image: 'https://th.bing.com/th/id/R.616a8f9fc897e4be3450e83cc349163b?rik=99NhcoYMbpPmbA&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f01%2f200876-nature-landscape-water.jpg&ehk=QcolhuooocpOvG0IUsYFYzY1xMzqLRuXNENX8S3%2btyI%3d&risl=&pid=ImgRaw&r=0',
},

{
  id: '4',
  user: {
    id: '4',
    name: 'Marcus Lee',
    username: '@FitnessWithMarcus',
    avatar: 'https://via.placeholder.com/50x50/32cd32/fff?text=M',
    isVerified: true,
  },
  content: `Hit a new personal record today: 405 lbs deadlift! 💪  
Two years ago, I couldn’t even lift half that. Progress is slow, but consistency wins every time.  
If you're struggling, keep going—you’re stronger than you think.`,
  timestamp: '12h',
  replies: 210,
  retweets: 95,
  likes: 5800,
  views: '480K',
  image: 'https://via.placeholder.com/300x200/90ee90/fff?text=Gym+PR',
},

{
  id: '5',
  user: {
    id: '5',
    name: 'Sophia Nguyen',
    username: '@SophiaTravels',
    avatar: 'https://via.placeholder.com/50x50/1e90ff/fff?text=S',
    isVerified: false,
  },
  content: `Standing at the edge of the Grand Canyon today left me speechless.   
Photos will never capture the feeling of seeing it in person.  
Travel reminds me how big and beautiful the world is.`,
  timestamp: '1d',
  replies: 180,
  retweets: 220,
  likes: 7300,
  views: '610K',
  image: 'https://via.placeholder.com/300x200/87cefa/fff?text=Grand+Canyon',
},

{
  id: '6',
  user: {
    id: '6',
    name: 'David Kim',
    username: '@CodeWizardDK',
    avatar: 'https://via.placeholder.com/50x50/8a2be2/fff?text=D',
    isVerified: true,
  },
  content: `Shipped my first open-source library today! 🎉  
It’s surreal to think something I built might help developers worldwide.  
The coding community has given me so much—this is my way of giving back.`,
  timestamp: '5h',
  replies: 90,
  retweets: 130,
  likes: 3600,
  views: '210K',
  image: 'https://via.placeholder.com/300x200/9370db/fff?text=Open+Source',
},

{
  id: '7',
  user: {
    id: '7',
    name: 'Lena Martinez',
    username: '@ChefLena',
    avatar: 'https://via.placeholder.com/50x50/f08080/fff?text=L',
    isVerified: false,
  },
  content: `Tried a new recipe tonight—homemade gnocchi with creamy pesto sauce. 🥔🌿  
It took longer than expected, but wow… totally worth every second.  
Cooking is my therapy.`,
  timestamp: '3h',
  replies: 75,
  retweets: 40,
  likes: 2100,
  views: '95K',
  image: 'https://via.placeholder.com/300x200/f4a460/fff?text=Homemade+Gnocchi',
},

];

// --- UPDATED: Individual Tweet Component with State and Handlers ---
const TweetCard: React.FC<{ tweet: Tweet }> = ({ tweet }) => {
  // --- State for interaction toggles and counts ---
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(tweet.likes);
  const [isRetweeted, setIsRetweeted] = useState(false);
  const [retweetsCount, setRetweetsCount] = useState(tweet.retweets);

  // --- Mock Functions for actions ---
  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
  };

  const handleRetweet = () => {
    setIsRetweeted(!isRetweeted);
    setRetweetsCount(isRetweeted ? retweetsCount - 1 : retweetsCount + 1);
  };
  
  const handleReply = () => console.log(`Reply pressed for tweet ID: ${tweet.id}`);
  const handleView = () => console.log(`View pressed for tweet ID: ${tweet.id}`);
  const handleShare = () => console.log(`Share pressed for tweet ID: ${tweet.id}`);

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toString();
  };

  return (
    <View style={styles.tweetContainer}>
      <View style={styles.tweetHeader}>
        <Image source={{ uri: tweet.user.avatar }} style={styles.avatar} />
        <View style={styles.userInfo}>
          <View style={styles.nameRow}>
            <Text style={styles.userName}>{tweet.user.name}</Text>
            {tweet.user.isVerified && (
              <View style={styles.verifiedBadge}>
                <FontAwesomeIcon icon={faCheck} color='white' />
                 
              </View>
            )}
            <Text style={styles.userHandle}>{tweet.user.username}</Text>
            <Text style={styles.timestamp}>· {tweet.timestamp}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.moreButton}>
          <Text style={styles.moreIcon}>⋯</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tweetContent}>
        <Text style={styles.tweetText}>{tweet.content}</Text>
        {tweet.image && (
          <Image source={{ uri: tweet.image }} style={styles.tweetImage} />
        )}
      </View>

      {/* --- Action buttons with onPress handlers and dynamic styles --- */}
      <View style={styles.tweetActions}>
        <TouchableOpacity style={styles.actionButton} onPress={handleReply}>
          <FontAwesomeIcon icon={faComment} size={16} style={styles.actionIcon} />
          <Text style={styles.actionCount}>{formatNumber(tweet.replies)}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton} onPress={handleRetweet}>
          <FontAwesomeIcon icon={faRetweet} size={16} style={[styles.actionIcon, isRetweeted && styles.retweetedIcon]} />
          <Text style={[styles.actionCount, isRetweeted && styles.retweetedIcon]}>
            {formatNumber(retweetsCount)}
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton} onPress={handleLike}>
          <FontAwesomeIcon icon={isLiked ? faHeartSolid : faHeart} size={16} style={[styles.actionIcon, isLiked && styles.likedIcon]} />
          <Text style={[styles.actionCount, isLiked && styles.likedIcon]}>
            {formatNumber(likesCount)}
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton} onPress={handleView}>
          <FontAwesomeIcon icon={faChartBar} size={16} style={styles.actionIcon} />
          <Text style={styles.actionCount}>{tweet.views}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton} onPress={handleShare}>
          <FontAwesomeIcon icon={faArrowUpFromBracket} size={16} style={styles.actionIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Header Component
const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Image 
          source={{ uri: 'https://avatar.iran.liara.run/public/21' }} 
          style={styles.profileIcon} 
        />
      </TouchableOpacity>
      
      <Text style={styles.logo}></Text>
      
      <TouchableOpacity>
        <FontAwesomeIcon icon={faGear} size={20} style={{ color: '#fff' }} />
      </TouchableOpacity>
    </View>
  );
};

// Tab Navigation Component
const TabNavigation: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<'forYou' | 'following'>('forYou');

  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity 
        style={[styles.tab, activeTab === 'forYou' && styles.activeTab]}
        onPress={() => setActiveTab('forYou')}
      >
        <Text style={[styles.tabText, activeTab === 'forYou' && styles.activeTabText]}>
          For you
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[styles.tab, activeTab === 'following' && styles.activeTab]}
        onPress={() => setActiveTab('following')}
      >
        <Text style={[styles.tabText, activeTab === 'following' && styles.activeTabText]}>
          Following
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// Main Home Component
const HomeScreen: React.FC = () => {
  // This function will be replaced with actual API call
  const fetchTweets = (): Tweet[] => {
    return mockTweets;
  };

  const tweets = fetchTweets();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      <Header />
      <TabNavigation />
      
      <ScrollView 
        style={styles.feedContainer}
        showsVerticalScrollIndicator={false}
      >
        {tweets.map((tweet) => (
          <TweetCard key={tweet.id} tweet={tweet} />
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.composeButton}>
        
        <FontAwesomeIcon icon={faPlus} color='white' />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#000',
  },
  profileIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  logo: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  settingsIcon: {
    fontSize: 20,
  },
  tabContainer: {
    marginTop: 2,
    marginBottom: 6,
    flexDirection: 'row',
    backgroundColor: '#000',
    borderWidth: 0.6,
    borderBottomColor: '#333',
    borderColor: '#333',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#1d9bf0',
  },
  tabText: {
    color: '#71767b',
    fontSize: 16,
    fontWeight: '500',
  },
  activeTabText: {
    color: '#fff',
  },
  feedContainer: {
    flex: 1,
  },
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
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  userInfo: {
    flex: 1,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  userName: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 4,
  },
  verifiedBadge: {
    backgroundColor: '#1d9bf0',
    borderRadius: 10,
    width: 18,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 4,
  },
  verifiedIcon: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  userHandle: {
    color: '#71767b',
    fontSize: 15,
    marginRight: 4,
  },
  timestamp: {
    color: '#71767b',
    fontSize: 15,
  },
  moreButton: {
    padding: 4,
  },
  moreIcon: {
    color: '#71767b',
    fontSize: 16,
  },
  tweetContent: {
    marginLeft: 52,
  },
  tweetText: {
    color: '#fff',
    fontSize: 15,
    lineHeight: 20,
    marginBottom: 12,
  },
  tweetImage: {
    width: '100%',
    height: 200,
    borderRadius: 16,
    marginBottom: 12,
  },
  tweetActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 52,
    marginTop: 8,
    maxWidth: 350,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionIcon: {
    color: '#71767b',
    marginRight: 4,
  },
  actionCount: {
    color: '#71767b',
    fontSize: 13,
  },
  // --- ADDED: Styles for active (toggled) buttons ---
  likedIcon: {
    color: '#f91880', // Pink color for liked state
  },
  retweetedIcon: {
    color: '#00ba7c', // Green color for retweeted state
  },
  composeButton: {
    position: 'absolute',
    bottom: 20,
    right: 16,
    backgroundColor: '#1d9bf0',
    width: 50,
    height: 50,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  composeIcon: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default HomeScreen;