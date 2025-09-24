import React, { useState } from 'react';
import { SafeAreaView, StatusBar, ScrollView, StyleSheet } from 'react-native';
import TweetCard from './components/TweetCard';
import TabNavigation from './components/TabNavigation';
import ComposeButton from './components/ComposeButton';
import { styles } from './HomeScreen.style'
import Header from '../../components/Header';

import { mockTweets } from './mockTweets';
import { mockFollowingTweets } from './mockFollowingTweets';

const HomeScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'forYou' | 'following'>('forYou');

  // Simple function to get tweets based on active tab
  const getCurrentTweets = () => {
    return activeTab === 'following' ? mockFollowingTweets : mockTweets;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Header />
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <ScrollView style={styles.feedContainer} showsVerticalScrollIndicator={false}>
        {getCurrentTweets().map(tweet => <TweetCard key={tweet.id} tweet={tweet} />)}
      </ScrollView>
      <ComposeButton />
    </SafeAreaView>
  );
};

export default HomeScreen;
