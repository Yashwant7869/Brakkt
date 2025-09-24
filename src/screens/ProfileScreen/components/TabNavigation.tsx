import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './TabNavigation.style';

interface Props {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

// Array of tabs
const tabs = ['Tweets', 'Reels', 'Repost', 'Like'];

const TabNavigation: React.FC<Props> = ({ activeTab, setActiveTab }) => (
  <View style={styles.tabContainer}>
    {tabs.map((tab) => (
      <TouchableOpacity
        key={tab}
        style={[styles.tab, activeTab === tab && styles.activeTab]}
        onPress={() => setActiveTab(tab)}
      >
        <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
          {tab}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
);

export default TabNavigation;
