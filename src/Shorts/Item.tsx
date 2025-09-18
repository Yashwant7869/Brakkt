import React, {useRef} from 'react';
import YoutubePlayer, {
  YoutubeIframeRef,
} from '@dooboo/react-native-youtube-iframe';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  LayoutRectangle,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart, faComment, faShare } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';

export const getYoutubeIdFromURL = (url: string): string | undefined => {
  if (url.includes('?')) {
    const arr = url.split('?');
    arr.pop();

    url = arr[0];
  }

  const arr = url.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/);

  const youtubeId = undefined !== arr[2] ? arr[2].split(/[^\w-]/i)[0] : arr[0];

  if (youtubeId.includes('https://youtube.com/shorts/')) {
    return youtubeId.replace('https://youtube.com/shorts/', '');
  }

  return youtubeId;
};

type ShortItemProps = {
  index: number;
  url: string;
  paused: boolean;
  layout: LayoutRectangle;
  playing: boolean;
  visible: boolean;
  item: any;
  onLike?: (id: string) => void;
  onComment?: (id: string) => void;
  onShare?: (url: string) => void;
};

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

const ShortItem: React.FC<ShortItemProps> = ({
  index,
  url,
  paused,
  layout,
  playing,
  visible,
  item,
  onLike,
  onComment,
  onShare,
}) => {
  const youtubeId = getYoutubeIdFromURL(url);
  const youtubePlayerRef = useRef<YoutubeIframeRef>(null);

  return (
    <View style={[styles.container, {height: layout.height}]}>
      <YoutubePlayer
        ref={youtubePlayerRef}
        height={layout.height}
        width={layout.width}
        videoId={youtubeId}
        play={playing}
        onChangeState={(event: string) => {
          if (event === 'ended' && visible) {
            youtubePlayerRef?.current?.seekTo(0, true);
          }
        }}
        webViewProps={{
          injectedJavaScript: `
            var element = document.getElementsByClassName('container')[0];
            element.style.position = 'unset';
            true;
          `,
        }}
      />

      {/* Action buttons overlay */}
      <View style={styles.actionsContainer}>
        <ActionButton
          onPress={() => onLike?.(item.id)}
          icon={item.isLiked ? faHeart : faHeartRegular}
          count={item.likes}
          isActive={item.isLiked}
        />
        <ActionButton
          onPress={() => onComment?.(item.id)}
          icon={faComment}
          count={item.comments}
        />
        <ActionButton
          onPress={() => onShare?.(url)}
          icon={faShare}
        />
      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'black',
  },
  actionsContainer: {
    position: 'absolute',
    right: 16,
    bottom: 100, // Better positioning above bottom navigation
    alignItems: 'center',
    zIndex: 1,
  },
  actionButton: {
    alignItems: 'center',
    marginVertical: 12,
    paddingHorizontal: 8,
  },
  actionCount: {
    color: 'white',
    fontSize: 11,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 2,
  },
});

export default ShortItem;
