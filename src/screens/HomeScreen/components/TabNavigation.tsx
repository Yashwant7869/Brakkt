import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './TabNavigation.style';

interface Props {
  activeTab: 'forYou' | 'following';
  setActiveTab: (tab: 'forYou' | 'following') => void;
}

const TabNavigation: React.FC<Props> = ({ activeTab, setActiveTab }) => (
  <View style={styles.tabContainer}>
    <TouchableOpacity style={[styles.tab, activeTab === 'forYou' && styles.activeTab]} onPress={() => setActiveTab('forYou')}>
      <Text style={[styles.tabText, activeTab === 'forYou' && styles.activeTabText]}>For you</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.tab, activeTab === 'following' && styles.activeTab]} onPress={() => setActiveTab('following')}>
      <Text style={[styles.tabText, activeTab === 'following' && styles.activeTabText]}>Following</Text>
    </TouchableOpacity>
  </View>
);

export default TabNavigation;
