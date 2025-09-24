import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsisV, faGear, faSearch } from '@fortawesome/free-solid-svg-icons';
import { styles } from './header.styles';

const Header: React.FC = () => {
  // --- Mock functions for now ---
  const handleProfilePress = () => console.log('Profile pressed (mock)');
  const handleMoreOptionsPress = () => console.log('More options pressed (mock)');
  const onSearch = () => console.log('Search pressed (mock)');

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handleProfilePress}>
        <Image 
          source={{ uri: 'https://avatar.iran.liara.run/public/21' }} 
          style={styles.logo} 
        />
      </TouchableOpacity>

      <View style={styles.logoSpacer} />

      <TouchableOpacity style={styles.headerButton} onPress={onSearch}>
        <FontAwesomeIcon icon={faSearch} size={22} color="white" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.headerButton} onPress={handleMoreOptionsPress}>
        <FontAwesomeIcon icon={faEllipsisV} size={22} color="white" />
      </TouchableOpacity>

      
    </View>
  );
};

export default Header;
