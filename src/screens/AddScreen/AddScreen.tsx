import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Alert,
  Image,
  Dimensions,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import {
  launchCamera,
  launchImageLibrary,
  ImagePickerResponse,
  MediaType,
} from 'react-native-image-picker';
import Video from 'react-native-video';
// Import IMG.LY SDKs
import {PhotoEditorModal} from 'react-native-photoeditorsdk';
import {VideoEditorModal} from 'react-native-videoeditorsdk';
// Alternative import if using @imgly/editor-react-native
// import { PhotoEditor, VideoEditor } from '@imgly/editor-react-native';

import styles from './AddScreen.styles';

const {width, height} = Dimensions.get('window');

interface MediaFile {
  uri: string;
  type: 'image' | 'video';
  fileName?: string;
}

const AddScreen: React.FC = () => {
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<MediaFile | null>(null);
  const [isPhotoEditorVisible, setIsPhotoEditorVisible] = useState(false);
  const [isVideoEditorVisible, setIsVideoEditorVisible] = useState(false);
  const videoRef = useRef<any>(null);

  // Request camera permission for Android
  const requestCameraPermission = async (): Promise<boolean> => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'This app needs access to your camera to take photos.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    }
    return true;
  };

  // Request storage permission for Android
  const requestStoragePermission = async (): Promise<boolean> => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission',
            message: 'This app needs access to your storage to select files.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    }
    return true;
  };

  // Handle image picker response
  const handleImagePickerResponse = (
    response: ImagePickerResponse,
    mediaType: 'image' | 'video',
  ) => {
    if (response.didCancel || response.errorMessage) {
      console.log('User cancelled or error occurred');
      return;
    }

    if (response.assets && response.assets[0]) {
      const asset = response.assets[0];
      const mediaFile: MediaFile = {
        uri: asset.uri || '',
        type: mediaType,
        fileName: asset.fileName,
      };

      // Open appropriate editor based on media type
      if (mediaType === 'image') {
        setSelectedMedia(mediaFile);
        setIsPhotoEditorVisible(true);
      } else if (mediaType === 'video') {
        setSelectedMedia(mediaFile);
        setIsVideoEditorVisible(true);
      }
    }
    setIsBottomSheetVisible(false);
  };

  // Take photo with camera
  const takePhoto = async () => {
    const hasPermission = await requestCameraPermission();
    if (!hasPermission) {
      Alert.alert('Permission Denied', 'Camera permission is required to take photos.');
      return;
    }

    const options = {
      mediaType: 'photo' as MediaType,
      quality: 0.8 as any,
      includeBase64: false,
      maxWidth: 1920,
      maxHeight: 1920,
    };

    launchCamera(options, (response) =>
      handleImagePickerResponse(response, 'image'),
    );
  };

  // Pick image from gallery
  const pickFromGallery = async () => {
    const hasPermission = await requestStoragePermission();
    if (!hasPermission) {
      Alert.alert('Permission Denied', 'Storage permission is required to access gallery.');
      return;
    }

    const options = {
      mediaType: 'photo' as MediaType,
      quality: 0.8 as any,
      includeBase64: false,
      maxWidth: 1920,
      maxHeight: 1920,
    };

    launchImageLibrary(options, (response) =>
      handleImagePickerResponse(response, 'image'),
    );
  };

  // Pick video from gallery
  const pickVideo = async () => {
    const hasPermission = await requestStoragePermission();
    if (!hasPermission) {
      Alert.alert('Permission Denied', 'Storage permission is required to access gallery.');
      return;
    }

    const options = {
      mediaType: 'video' as MediaType,
      quality: 0.8 as any,
      includeBase64: false,
      durationLimit: 60, // 60 seconds max
    };

    launchImageLibrary(options, (response) =>
      handleImagePickerResponse(response, 'video'),
    );
  };

  // Handle photo editor result
  const handlePhotoEditorResult = (result: any) => {
    setIsPhotoEditorVisible(false);
    if (result && result.image) {
      // Update selected media with edited image URI
      setSelectedMedia({
        uri: result.image,
        type: 'image',
        fileName: 'edited_image.jpg',
      });
    }
  };

  // Handle video editor result
  const handleVideoEditorResult = (result: any) => {
    setIsVideoEditorVisible(false);
    if (result && result.video) {
      // Update selected media with edited video URI
      setSelectedMedia({
        uri: result.video,
        type: 'video',
        fileName: 'edited_video.mp4',
      });
    }
  };

  // Handle photo editor error
  const handlePhotoEditorError = (error: any) => {
    setIsPhotoEditorVisible(false);
    Alert.alert('Editor Error', 'Failed to open photo editor');
    console.error('Photo editor error:', error);
  };

  // Handle video editor error
  const handleVideoEditorError = (error: any) => {
    setIsVideoEditorVisible(false);
    Alert.alert('Editor Error', 'Failed to open video editor');
    console.error('Video editor error:', error);
  };

  return (
    <View style={styles.container}>
      {/* Preview Area */}
      <View style={styles.previewContainer}>
        {selectedMedia ? (
          <View style={styles.mediaPreview}>
            {selectedMedia.type === 'image' ? (
              <Image source={{uri: selectedMedia.uri}} style={styles.previewImage as any} />
            ) : (
              <Video
                ref={videoRef}
                source={{uri: selectedMedia.uri}}
                style={styles.previewVideo}
                controls={true}
                resizeMode="contain"
                paused={true}
              />
            )}
            <Text style={styles.mediaInfo}>
              {selectedMedia.type === 'image' ? '📸 Photo' : '🎥 Video'}
              {selectedMedia.fileName && ` • ${selectedMedia.fileName}`}
            </Text>
          </View>
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateIcon}>📱</Text>
            <Text style={styles.emptyStateText}>No media selected</Text>
            <Text style={styles.emptyStateSubtext}>
              Tap the + button to add photos or videos
            </Text>
          </View>
        )}
      </View>

      {/* Floating Add Button */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => setIsBottomSheetVisible(true)}
        activeOpacity={0.8}>
        <Text style={styles.floatingButtonText}>+</Text>
      </TouchableOpacity>

      {/* Bottom Sheet Modal */}
      <Modal
        visible={isBottomSheetVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsBottomSheetVisible(false)}>
        <View style={styles.modalOverlay}>
          <TouchableOpacity
            style={styles.modalBackground}
            onPress={() => setIsBottomSheetVisible(false)}
          />
          <View style={styles.bottomSheet}>
            <View style={styles.bottomSheetHeader}>
              <View style={styles.dragIndicator} />
              <Text style={styles.bottomSheetTitle}>Add Media</Text>
            </View>

            <View style={styles.optionsContainer}>
              <TouchableOpacity style={styles.option} onPress={takePhoto}>
                <Text style={styles.optionIcon}>📷</Text>
                <Text style={styles.optionText}>Take Photo</Text>
                <Text style={styles.optionSubtext}>Camera</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={pickFromGallery}>
                <Text style={styles.optionIcon}>🖼️</Text>
                <Text style={styles.optionText}>Pick from Gallery</Text>
                <Text style={styles.optionSubtext}>Image</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={pickVideo}>
                <Text style={styles.optionIcon}>🎬</Text>
                <Text style={styles.optionText}>Pick Video</Text>
                <Text style={styles.optionSubtext}>Gallery</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setIsBottomSheetVisible(false)}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Photo Editor Modal */}
      {isPhotoEditorVisible && selectedMedia && (
        <PhotoEditorModal
          visible={isPhotoEditorVisible}
          image={selectedMedia.uri}
          onExport={handlePhotoEditorResult}
          onCancel={() => setIsPhotoEditorVisible(false)}
          onError={handlePhotoEditorError}
        />
      )}

      {/* Video Editor Modal */}
      {isVideoEditorVisible && selectedMedia && (
        <VideoEditorModal
          visible={isVideoEditorVisible}
          video={selectedMedia.uri}
          onExport={handleVideoEditorResult}
          onCancel={() => setIsVideoEditorVisible(false)}
          onError={handleVideoEditorError}
        />
      )}
    </View>
  );
};

export default AddScreen;