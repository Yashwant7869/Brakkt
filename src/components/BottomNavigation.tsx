import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faPlay,
  faPlus,
  faSearch,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {TabId, TabItem} from '../types';

type BottomNavigationProps = {
  activeTab: TabId;
  onTabPress: (tab: TabId) => void;
};

const BottomNavigation: React.FC<BottomNavigationProps> = ({
  activeTab,
  onTabPress,
}) => {
  const tabs: TabItem[] = [
    {id: 'home', icon: faHome, label: 'Home'},
    {id: 'shorts', icon: faPlay, label: 'Shorts'},
    {id: 'add', icon: faPlus, label: 'Add'},
    {id: 'search', icon: faSearch, label: 'Search'},
    {id: 'profile', icon: faUser, label: 'Profile'},
  ];

  return (
    <View style={styles.container}>
      {tabs.map(tab => (
        <TouchableOpacity
          key={tab.id}
          style={styles.tab}
          onPress={() => onTabPress(tab.id)}>
          <FontAwesomeIcon
            icon={tab.icon}
            size={tab.id === 'add' ? 28 : 24}
            color={
              activeTab === tab.id
                ? tab.id === 'add'
                  ? '#ff3040'
                  : '#ffffff'
                : '#888888'
            }
          />
          <Text
            style={[
              styles.tabLabel,
              {
                color:
                  activeTab === tab.id
                    ? tab.id === 'add'
                      ? '#ff3040'
                      : '#ffffff'
                    : '#888888',
              },
            ]}>
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#000000',
    paddingVertical: 8,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: '#333333',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  tabLabel: {
    fontSize: 10,
    fontWeight: '500',
    marginTop: 4,
    textAlign: 'center',
  },
});

export default BottomNavigation;