// Alternative approach using file URIs for local videos
// You can use this if require() doesn't work properly

import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Shorts from '../Shorts';

// Sample data for the shorts - using file URIs for local video files
const sampleShortsAlternative = [
  {
    id: '1',
    url: {uri: 'file:///android_asset/video1.mp4'}, // For Android
    // For iOS: url: {uri: 'video1'} // assuming files are in bundle
    likes: 1200,
    comments: 89,
    isLiked: false,
    title: 'Sample Short 1',
  },
  {
    id: '2',
    url: {uri: 'file:///android_asset/video2.mp4'},
    likes: 854,
    comments: 23,
    isLiked: true,
    title: 'Sample Short 2',
  },
  {
    id: '3',
    url: {uri: 'file:///android_asset/video3.mp4'},
    likes: 2100,
    comments: 156,
    isLiked: false,
    title: 'Sample Short 3',
  },
];

// If you need to use this alternative approach:
// 1. Move video files from public/video/ to android/app/src/main/assets/ for Android
// 2. Add videos to iOS bundle for iOS
// 3. Replace sampleShorts with sampleShortsAlternative in ShortsScreen component

export default sampleShortsAlternative;