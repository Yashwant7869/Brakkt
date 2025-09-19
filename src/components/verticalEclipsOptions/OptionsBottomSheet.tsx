import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faFileAlt,
  faBookmark,
  faClosedCaptioning,
  faCog,
  faTimesCircle,
  faFlag,
  faCommentSlash,
  faInfoCircle,
  faShieldAlt,
} from '@fortawesome/free-solid-svg-icons';
import {styles} from './styles';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

interface OptionItem {
  id: string;
  title: string;
  icon: any;
  onPress: () => void;
}

interface OptionsBottomSheetProps {
  visible: boolean;
  onClose: () => void;
  onDescription?: () => void;
  onSaveToPlaylist?: () => void;
  onCaptions?: () => void;
  onQuality?: () => void;
  onNotInterested?: () => void;
  onDontRecommend?: () => void;
  onReport?: () => void;
  onSendFeedback?: () => void;
  onTermsOfService?: () => void;
  onPrivacyPolicy?: () => void;
}

const OptionsBottomSheet: React.FC<OptionsBottomSheetProps> = ({
  visible,
  onClose,
  onDescription,
  onSaveToPlaylist,
  onCaptions,
  onQuality,
  onNotInterested,
  onDontRecommend,
  onReport,
  onSendFeedback,
  onTermsOfService,
  onPrivacyPolicy,
}) => {
  const slideAnim = useRef(new Animated.Value(SCREEN_HEIGHT)).current;
  const backdropOpacity = useRef(new Animated.Value(0)).current;

  const options: OptionItem[] = [
    {
      id: 'description',
      title: 'Description',
      icon: faFileAlt,
      onPress: () => {
        onDescription?.();
        handleClose();
      },
    },
    {
      id: 'saveToPlaylist',
      title: 'Save to playlist',
      icon: faBookmark,
      onPress: () => {
        onSaveToPlaylist?.();
        handleClose();
      },
    },
    {
      id: 'captions',
      title: 'Captions',
      icon: faClosedCaptioning,
      onPress: () => {
        onCaptions?.();
        handleClose();
      },
    },
    {
      id: 'quality',
      title: 'Quality',
      icon: faCog,
      onPress: () => {
        onQuality?.();
        handleClose();
      },
    },
    {
      id: 'notInterested',
      title: 'Not interested',
      icon: faTimesCircle,
      onPress: () => {
        onNotInterested?.();
        handleClose();
      },
    },
    {
      id: 'dontRecommend',
      title: "Don't recommend this channel",
      icon: faCommentSlash,
      onPress: () => {
        onDontRecommend?.();
        handleClose();
      },
    },
    {
      id: 'report',
      title: 'Report',
      icon: faFlag,
      onPress: () => {
        onReport?.();
        handleClose();
      },
    },
    {
      id: 'sendFeedback',
      title: 'Send feedback',
      icon: faInfoCircle,
      onPress: () => {
        onSendFeedback?.();
        handleClose();
      },
    },
    {
      id: 'termsOfService',
      title: 'Terms of Service',
      icon: faShieldAlt,
      onPress: () => {
        onTermsOfService?.();
        handleClose();
      },
    },
    {
      id: 'privacyPolicy',
      title: 'Privacy Policy',
      icon: faShieldAlt,
      onPress: () => {
        onPrivacyPolicy?.();
        handleClose();
      },
    },
  ];

  const handleClose = () => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: SCREEN_HEIGHT,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(backdropOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      onClose();
    });
  };

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: SCREEN_HEIGHT * 0.4, // Show from bottom to mid screen
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(backdropOpacity, {
          toValue: 0.5,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      slideAnim.setValue(SCREEN_HEIGHT);
      backdropOpacity.setValue(0);
    }
  }, [visible]);

  const renderOptionItem = (option: OptionItem) => (
    <TouchableOpacity
      key={option.id}
      style={styles.optionItem}
      onPress={option.onPress}
      activeOpacity={0.7}>
      <FontAwesomeIcon
        icon={option.icon}
        size={20}
        color="#FFFFFF"
        style={styles.optionIcon}
      />
      <Text style={styles.optionText}>{option.title}</Text>
    </TouchableOpacity>
  );

  return (
    <Modal
      transparent
      visible={visible}
      animationType="none"
      onRequestClose={handleClose}>
      <View style={styles.container}>
        {/* Backdrop */}
        <TouchableWithoutFeedback onPress={handleClose}>
          <Animated.View
            style={[
              styles.backdrop,
              {
                opacity: backdropOpacity,
              },
            ]}
          />
        </TouchableWithoutFeedback>

        {/* Bottom Sheet */}
        <Animated.View
          style={[
            styles.bottomSheet,
            {
              transform: [{translateY: slideAnim}],
            },
          ]}>
          {/* Handle bar */}
          <View style={styles.handleContainer}>
            <View style={styles.handle} />
          </View>

          {/* Options list */}
          <ScrollView
            style={styles.optionsContainer}
            showsVerticalScrollIndicator={false}>
            {options.map(renderOptionItem)}
          </ScrollView>
        </Animated.View>
      </View>
    </Modal>
  );
};
 
export default OptionsBottomSheet;