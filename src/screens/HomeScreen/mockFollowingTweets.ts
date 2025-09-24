export const mockFollowingTweets: Tweet[] = [
  {
    id: 'f1',
    user: {
      id: '101',
      name: 'John Doe',
      username: '@johndoe',
      avatar: 'https://example.com/avatar1.jpg',
      isVerified: true,
    },
    content: 'Just launched my new project! Excited to share it with everyone.',
    timestamp: '2h',
    likes: 42,
    retweets: 12,
    replies: 8,          // fixed
    views: '1.2K',       // added
    image: 'https://example.com/project-image.jpg',
  },
  {
    id: 'f2',
    user: {
      id: '102',
      name: 'Jane Smith',
      username: '@janesmith',
      avatar: 'https://example.com/avatar2.jpg',
      isVerified: false,
    },
    content: 'Beautiful sunset today! Nature never fails to amaze me.',
    timestamp: '4h',
    likes: 128,
    retweets: 34,
    replies: 23,         // fixed
    views: '2.5K',       // added
    image: 'https://example.com/sunset.jpg',
  },
];
