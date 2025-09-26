export interface Tweet {
  id: string;
  user: {
    id: string;
    name: string;
    username: string;
    avatar: string;
    verified?: boolean;
  };
  content: string;
  timestamp: Date | string;
  likes: number;
  retweets: number;
  replies: number;
  views?: number;
  images?: string[];
  video?: string;
  isLiked?: boolean;
  isRetweeted?: boolean;
  isBookmarked?: boolean;
}

export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  bio?: string;
  verified?: boolean;
  followers: number;
  following: number;
  tweets: number;
  location?: string;
  website?: string;
  joinDate: Date | string;
}