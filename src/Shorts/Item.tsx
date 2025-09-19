import React, {useRef, useState} from 'react';
import Video, {VideoRef} from 'react-native-video';
import {
  View,
  TouchableOpacity,
  Text,
  LayoutRectangle,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHeart,
  faComment,
  faShare,
  faPlay,
  faPause,
  faPlus,
  faBars,
  faSearch,
  faEllipsisV,
  faCamera,
} from '@fortawesome/free-solid-svg-icons';
import {faHeart as faHeartRegular} from '@fortawesome/free-regular-svg-icons';
import {Slider} from '@miblanchard/react-native-slider';
import {styles} from './styles'; // Import styles from the separate file
import OptionsBottomSheet from '../components/verticalEclipsOptions/OptionsBottomSheet'; // Import the new component

// --- Type Definition ---
type ShortItemProps = {
  index: number;
  url: any;
  paused: boolean;
  layout: LayoutRectangle;
  playing: boolean;
  visible: boolean;
  item: any;
  onLike?: (id: string) => void;
  onComment?: (id: string) => void;
  onShare?: (url: string) => void;
  onFollow?: (userId: string) => void;
  onList?: (userId: string) => void;
  onSearch?: () => void;
  onMoreOptions?: () => void;
};

// --- ActionButton Component (Unchanged) ---
const ActionButton = ({
  onPress,
  icon,
  count,
  isActive,
}: {
  onPress: () => void;
  icon: any;
  count?: number;
  isActive?: boolean;
}) => (
  <TouchableOpacity style={styles.actionButton} onPress={onPress}>
    <FontAwesomeIcon
      icon={icon}
      size={24}
      color={isActive ? '#ff3040' : 'white'}
    />
    {count !== undefined && count > 0 && (
      <Text style={styles.actionCount}>
        {count > 999 ? `${Math.floor(count / 1000)}K` : count}
      </Text>
    )}
  </TouchableOpacity>
);

// --- ProfileSection Component (Unchanged) ---
const ProfileSection = ({
  user,
  description,
  onFollow,
}: {
  user: any;
  description: string;
  onFollow: () => void;
}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isFollowing, setIsFollowing] = useState(user?.isFollowing ?? false);

  const handleFollowToggle = () => {
    setIsFollowing(!isFollowing);
    onFollow?.();
  };

  const userInfo = user || {
    username: 'Anonymous',
    profileImage: null,
    id: 'default',
  };

  const safeDescription = description || '';
  const truncatedDescription =
    safeDescription.length > 100
      ? safeDescription.substring(0, 100) + '...'
      : safeDescription;

  return (
    <View style={styles.profileSection}>
      <View style={styles.userInfoRow}>
        <View style={styles.profileImageContainer}>
          <Image
            source={
              userInfo.profileImage
                ? {uri: userInfo.profileImage}
                : require('../assest/user.png')
            }
            style={styles.profileImage}
          />
          {!isFollowing && (
            <TouchableOpacity
              style={styles.followIconButton}
              onPress={handleFollowToggle}>
              <FontAwesomeIcon icon={faPlus} size={12} color="white" />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.userDetails}>
          <Text style={styles.username}>{userInfo.username}</Text>
          <TouchableOpacity
            style={styles.followButton}
            onPress={handleFollowToggle}>
            <Text style={styles.followButtonText}>
              {isFollowing ? 'Unfollow' : 'Follow'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {safeDescription.length > 0 && (
        <TouchableOpacity
          style={styles.descriptionContainer}
          onPress={() => setShowFullDescription(!showFullDescription)}
          activeOpacity={0.7}>
          <Text style={styles.description}>
            {showFullDescription ? safeDescription : truncatedDescription}
            {safeDescription.length > 100 && (
              <Text style={styles.moreText}>
                {showFullDescription ? ' Show less' : ' more'}
              </Text>
            )}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

// --- Main ShortItem Component ---
const ShortItem: React.FC<ShortItemProps> = ({
  url,
  paused,
  layout,
  playing,
  item,
  onLike,
  onComment,
  onShare,
  onFollow,
  onList,
  onSearch,
  onMoreOptions,
}) => {
  const videoRef = useRef<VideoRef>(null);
  const [isLocallyPaused, setIsLocallyPaused] = useState(false);
  const [showPlayIcon, setShowPlayIcon] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);
  const [showOptionsBottomSheet, setShowOptionsBottomSheet] = useState(false); // New state

  const handleScreenPress = () => {
    setIsLocallyPaused(!isLocallyPaused);
    setShowPlayIcon(!isLocallyPaused);

    if (!isLocallyPaused) {
      setTimeout(() => setShowPlayIcon(false), 1000);
    }
  };

  const handleLoad = (data: any) => setDuration(data.duration);

  const handleProgress = (data: any) => {
    if (!isSeeking) {
      setCurrentTime(data.currentTime);
    }
  };

  const onSlidingComplete = (value: number[]) => {
    const newTime = value[0];
    videoRef.current?.seek(newTime);
    setCurrentTime(newTime);
    setIsSeeking(false);
  };

  // Handle options button press
  const handleMoreOptionsPress = () => {
    setShowOptionsBottomSheet(true);
    onMoreOptions?.();
  };

  // Mock handlers for bottom sheet options
  const handleDescription = () => {
    console.log('Description pressed');
    // TODO: Implement description functionality
  };

  const handleSaveToPlaylist = () => {
    console.log('Save to playlist pressed');
    // TODO: Implement save to playlist functionality
  };

  const handleCaptions = () => {
    console.log('Captions pressed');
    // TODO: Implement captions functionality
  };

  const handleQuality = () => {
    console.log('Quality pressed');
    // TODO: Implement quality functionality
  };

  const handleNotInterested = () => {
    console.log('Not interested pressed');
    // TODO: Implement not interested functionality
  };

  const handleDontRecommend = () => {
    console.log('Don\'t recommend pressed');
    // TODO: Implement don't recommend functionality
  };

  const handleReport = () => {
    console.log('Report pressed');
    // TODO: Implement report functionality
  };

  const handleSendFeedback = () => {
    console.log('Send feedback pressed');
    // TODO: Implement send feedback functionality
  };

  const handleTermsOfService = () => {
    console.log('Terms of Service pressed');
    // TODO: Implement terms of service functionality
  };

  const handlePrivacyPolicy = () => {
    console.log('Privacy Policy pressed');
    // TODO: Implement privacy policy functionality
  };

  const isVideoPaused = paused || !playing || isLocallyPaused;

  return (
    <View style={[styles.container, {height: layout.height}]}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        {isVideoPaused ? (
          <>
            <FontAwesomeIcon icon={faCamera} size={22} color="white" />
            <View style={styles.logoSpacer} />
          </>
        ) : (
          <View style={styles.logoSpacer} />
        )}
        <TouchableOpacity style={styles.headerButton} onPress={onSearch}>
          <FontAwesomeIcon icon={faSearch} size={22} color="white" />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.headerButton} 
          onPress={handleMoreOptionsPress} // Updated to use local handler
        >
          <FontAwesomeIcon icon={faEllipsisV} size={22} color="white" />
        </TouchableOpacity>
      </View>

      {/* Video Container */}
      <TouchableWithoutFeedback onPress={handleScreenPress}>
        <View style={styles.videoContainer}>
          <Video
            ref={videoRef}
            source={url}
            style={[styles.video, {height: layout.height, width: layout.width}]}
            paused={isVideoPaused}
            repeat
            resizeMode="cover"
            muted={false}
            volume={1.0}
            playInBackground={false}
            playWhenInactive={false}
            onLoad={handleLoad}
            onProgress={handleProgress}
          />

          {showPlayIcon && (
            <View style={styles.playIconContainer}>
              <FontAwesomeIcon
                icon={isLocallyPaused ? faPlay : faPause}
                size={60}
                color="rgba(255, 255, 255, 0.8)"
              />
            </View>
          )}

          <View style={styles.sliderContainer}>
            <Slider
              value={currentTime}
              minimumValue={0}
              maximumValue={duration > 0 ? duration : 1}
              minimumTrackTintColor="#ff3040"
              maximumTrackTintColor="rgba(255, 255, 255, 0.3)"
              thumbStyle={styles.thumb}
              trackStyle={styles.track}
              onSlidingStart={() => setIsSeeking(true)}
              onSlidingComplete={onSlidingComplete}
              onValueChange={value => setCurrentTime(value[0])}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>

      {/* Profile Section */}
      <ProfileSection
        user={item?.user}
        description={item?.description || ''}
        onFollow={() => onFollow?.(item?.user?.id || 'default')}
      />

      {/* Actions Container */}
      <View style={styles.actionsContainer}>
        <ActionButton
          onPress={() => onLike?.(item?.id || 'default')}
          icon={item?.isLiked ? faHeart : faHeartRegular}
          count={item?.likes || 0}
          isActive={item?.isLiked || false}
        />
        <ActionButton
          onPress={() => onComment?.(item?.id || 'default')}
          icon={faComment}
          count={item?.comments || 0}
        />
        <ActionButton onPress={() => onShare?.(url)} icon={faShare} />
        <ActionButton onPress={() => onList?.(url)} icon={faBars} />
      </View>

      {/* Options Bottom Sheet */}
      <OptionsBottomSheet
        visible={showOptionsBottomSheet}
        onClose={() => setShowOptionsBottomSheet(false)}
        onDescription={handleDescription}
        onSaveToPlaylist={handleSaveToPlaylist}
        onCaptions={handleCaptions}
        onQuality={handleQuality}
        onNotInterested={handleNotInterested}
        onDontRecommend={handleDontRecommend}
        onReport={handleReport}
        onSendFeedback={handleSendFeedback}
        onTermsOfService={handleTermsOfService}
        onPrivacyPolicy={handlePrivacyPolicy}
      />
    </View>
  );
};

export default ShortItem;