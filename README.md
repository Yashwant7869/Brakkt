there is some problem in Addscreen and dependency related things. Now i am moving to implement some pages implementation along with left side drawer 

the new branch will be creating for video and image editing module

For run the application 

 cd android
./gradlew clean
cd ..
npx react-native run-android



//updated data structure

// Example data structure for your shorts items
const exampleItem = {
  id: '1',
  url: require('./path/to/video.mp4'),
  likes: 1234,
  comments: 56,
  isLiked: false,
  description: 'This is an amazing video showing some cool content! #trending #viral #awesome',
  user: {
    id: 'user123',
    username: '@johndoe',
    profileImage: 'https://example.com/profile.jpg', // or null for default
    isFollowing: false,
  },
};
