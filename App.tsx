/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {
  HomeScreen,
  ShortsScreen,
  AddScreen,
  SearchScreen,
  ProfileScreen,
} from './src/screens';
import BottomNavigation from './src/components/BottomNavigation';
import {TabId} from './src/types';

const App = () => {
  const [activeTab, setActiveTab] = useState<TabId>('shorts');

  const handleTabPress = (tab: TabId) => {
    setActiveTab(tab);
  };

  const renderActiveScreen = () => {
    switch (activeTab) {
      case 'home':
        return <HomeScreen />;
      case 'shorts':
        return <ShortsScreen />;
      case 'add':
        return <AddScreen />;
      case 'search':
        return <SearchScreen />;
      case 'profile':
        return <ProfileScreen />;
      default:
        return <ShortsScreen />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <View style={styles.content}>
        {renderActiveScreen()}
      </View>
      <BottomNavigation activeTab={activeTab} onTabPress={handleTabPress} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  content: {
    flex: 1,
    marginBottom: 1, // Account for bottom navigation height
     
  },
});

export default App;
