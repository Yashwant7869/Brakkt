export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  isVerified: boolean;
}

export interface Tweet {
  id: string;
  user: User;
  content: string;
  timestamp: string;
  replies: number;
  retweets: number;
  likes: number;
  views: string;
  image?: string;
}

export const mockTweets: Tweet[] = [
  {
    id: '1',
    user: {
      id: '1',
      name: 'Barack Obama',
      username: '@BarackObama',
      avatar: 'https://avatar.iran.liara.run/public/6',
      isVerified: true,
    },
    content: 'This commentary offers a clear, powerful statement of why freedom of speech is at the heart of democracy and must be defended, whether the speaker is Charlie Kirk or Jimmy Kimmel, MAGA supporters or MAGA opponents.',
    timestamp: '9h',
    replies: 9900,
    retweets: 16800,
    likes: 184000,
    views: '13.7M',
  },
  {
    id: '2',
    user: {
      id: '2',
      name: 'Zack',
      username: '@Asmongold',
      avatar: 'https://avatar.iran.liara.run/public/46',
      isVerified: true,
    },
    content: `A few days ago my father passed away.

It's difficult for me to even find the words for the emptiness it leaves me with, he was my last family member in the state and I was there with him until the end.

I will endure, but I don't think I'll ever be the same

I love you, Pa`,
    timestamp: '15h',
    replies: 2500,
    retweets: 850,
    likes: 45600,
    views: '2.1M',
    image: 'https://th.bing.com/th/id/R.2385ff8a52793bc74c835cab557a2f99?rik=T2MNoZH2HHvqWw&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f01%2f111509-landscape-nature.jpg&ehk=ufwETSINPVhGrhOVR60lLxMuOTB1rEHjaa33l%2bymDEs%3d&risl=&pid=ImgRaw&r=0',
  },
  {
    id: '3',
    user: {
      id: '3',
      name: 'Emily Carter',
      username: '@TechieEmily',
      avatar: 'https://avatar.iran.liara.run/public/47',
      isVerified: false,
    },
    content: `Just wrapped up my first hackathon as a team lead! 🚀  
Learned so much about collaboration, problem-solving, and pushing through when things got tough.  
Proud of my team for building something amazing overnight!`,
    timestamp: '8h',
    replies: 320,
    retweets: 150,
    likes: 4200,
    views: '340K',
    image: 'https://th.bing.com/th/id/R.616a8f9fc897e4be3450e83cc349163b?rik=99NhcoYMbpPmbA&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f01%2f200876-nature-landscape-water.jpg&ehk=QcolhuooocpOvG0IUsYFYzY1xMzqLRuXNENX8S3%2btyI%3d&risl=&pid=ImgRaw&r=0',
  },
  {
    id: '4',
    user: {
      id: '4',
      name: 'Marcus Lee',
      username: '@FitnessWithMarcus',
      avatar: 'https://via.placeholder.com/50x50/32cd32/fff?text=M',
      isVerified: true,
    },
    content: `Hit a new personal record today: 405 lbs deadlift! 💪  
Two years ago, I couldn’t even lift half that. Progress is slow, but consistency wins every time.  
If you're struggling, keep going—you’re stronger than you think.`,
    timestamp: '12h',
    replies: 210,
    retweets: 95,
    likes: 5800,
    views: '480K',
    image: 'https://via.placeholder.com/300x200/90ee90/fff?text=Gym+PR',
  },
  {
    id: '5',
    user: {
      id: '5',
      name: 'Sophia Nguyen',
      username: '@SophiaTravels',
      avatar: 'https://via.placeholder.com/50x50/1e90ff/fff?text=S',
      isVerified: false,
    },
    content: `Standing at the edge of the Grand Canyon today left me speechless.   
Photos will never capture the feeling of seeing it in person.   
Travel reminds me how big and beautiful the world is.`,
    timestamp: '1d',
    replies: 180,
    retweets: 220,
    likes: 7300,
    views: '610K',
    image: 'https://via.placeholder.com/300x200/87cefa/fff?text=Grand+Canyon',
  },
  {
    id: '6',
    user: {
      id: '6',
      name: 'David Kim',
      username: '@CodeWizardDK',
      avatar: 'https://via.placeholder.com/50x50/8a2be2/fff?text=D',
      isVerified: true,
    },
    content: `Shipped my first open-source library today! 🎉  
It’s surreal to think something I built might help developers worldwide.  
The coding community has given me so much—this is my way of giving back.`,
    timestamp: '5h',
    replies: 90,
    retweets: 130,
    likes: 3600,
    views: '210K',
    image: 'https://via.placeholder.com/300x200/9370db/fff?text=Open+Source',
  },
  {
    id: '7',
    user: {
      id: '7',
      name: 'Lena Martinez',
      username: '@ChefLena',
      avatar: 'https://via.placeholder.com/50x50/f08080/fff?text=L',
      isVerified: false,
    },
    content: `Tried a new recipe tonight—homemade gnocchi with creamy pesto sauce. 🥔🌿  
It took longer than expected, but wow… totally worth every second.  
Cooking is my therapy.`,
    timestamp: '3h',
    replies: 75,
    retweets: 40,
    likes: 2100,
    views: '95K',
    image: 'https://via.placeholder.com/300x200/f4a460/fff?text=Homemade+Gnocchi',
  },
];
