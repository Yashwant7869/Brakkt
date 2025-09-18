import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AddScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Add screen Here we can pickup the video and edit them for Editing and Posting
        
      </Text>
    </View>
  );
}; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 18,
    color: '#333333',
    textAlign: 'center',
  },
});

export default AddScreen;