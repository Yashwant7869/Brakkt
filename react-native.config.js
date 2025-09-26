module.exports = {
  project: {
    android: {
      sourceDir: './android',
      appName: 'app',
      packageName: 'com.shortsexample',
    },
  },
  dependencies: {
    'react-native-svg': {
      platforms: {
        android: null, // disable Android platform auto linking
      },
    },
    'react-native-video': {
      platforms: {
        android: null, // disable Android platform auto linking
      },
    },
    'react-native-webview': {
      platforms: {
        android: null, // disable Android platform auto linking
      },
    },
    'react-native-image-picker': {
      platforms: {
        android: null, // disable Android platform auto linking
      },
    },
  },
};