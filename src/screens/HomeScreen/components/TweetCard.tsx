import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faComment, faHeart, faChartBar } from '@fortawesome/free-regular-svg-icons';
import { faRetweet, faArrowUpFromBracket, faHeart as faHeartSolid, faCheck } from '@fortawesome/free-solid-svg-icons';
import { styles } from './TweetCard.style';

interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  isVerified: boolean;
}

interface Tweet {
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

interface Props {
  tweet: Tweet;
}

const TweetCard: React.FC<Props> = ({ tweet }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(tweet.likes);
  const [isRetweeted, setIsRetweeted] = useState(false);
  const [retweetsCount, setRetweetsCount] = useState(tweet.retweets);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
  };

  const handleRetweet = () => {
    setIsRetweeted(!isRetweeted);
    setRetweetsCount(isRetweeted ? retweetsCount - 1 : retweetsCount + 1);
  };

  const handleReply = () => console.log(`Reply pressed for tweet ID: ${tweet.id}`);
  const handleView = () => console.log(`View pressed for tweet ID: ${tweet.id}`);
  const handleShare = () => console.log(`Share pressed for tweet ID: ${tweet.id}`);

  const formatNumber = (num: number): string => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  return (
    <View style={styles.tweetContainer}>
      <View style={styles.tweetHeader}>
        <Image source={{ uri: tweet.user.avatar }} style={styles.avatar} />
        <View style={styles.userInfo}>
          <View style={styles.nameRow}>
            <Text style={styles.userName}>{tweet.user.name}</Text>
            {tweet.user.isVerified && (
              <View style={styles.verifiedBadge}>
                <FontAwesomeIcon icon={faCheck} color='white' size={10} />
              </View>
            )}
            <Text style={styles.userHandle}>{tweet.user.username}</Text>
            <Text style={styles.timestamp}>· {tweet.timestamp}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.moreButton}>
          <Text style={styles.moreIcon}>⋯</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tweetContent}>
        <Text style={styles.tweetText}>{tweet.content}</Text>
        {tweet.image && (
          <Image source={{ uri: tweet.image }} style={styles.tweetImage} />
        )}
      </View>

      <View style={styles.tweetActions}>
        <TouchableOpacity style={styles.actionButton} onPress={handleReply}>
          <FontAwesomeIcon icon={faComment} size={16} style={styles.actionIcon} />
          <Text style={styles.actionCount}>{formatNumber(tweet.replies)}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={handleRetweet}>
          <FontAwesomeIcon icon={faRetweet} size={16} style={[styles.actionIcon, isRetweeted && styles.retweetedIcon]} />
          <Text style={[styles.actionCount, isRetweeted && styles.retweetedIcon]}>
            {formatNumber(retweetsCount)}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={handleLike}>
          <FontAwesomeIcon icon={isLiked ? faHeartSolid : faHeart} size={16} style={[styles.actionIcon, isLiked && styles.likedIcon]} />
          <Text style={[styles.actionCount, isLiked && styles.likedIcon]}>
            {formatNumber(likesCount)}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={handleView}>
          <FontAwesomeIcon icon={faChartBar} size={16} style={styles.actionIcon} />
          <Text style={styles.actionCount}>{tweet.views}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={handleShare}>
          <FontAwesomeIcon icon={faArrowUpFromBracket} size={16} style={styles.actionIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TweetCard;
