import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { styles } from './ComposeButton.style';

interface Props {
  onPress?: () => void;
}

const ComposeButton: React.FC<Props> = ({ onPress }) => (
  <TouchableOpacity style={styles.composeButton} onPress={onPress}>
    <FontAwesomeIcon icon={faPlus} color='white' />
  </TouchableOpacity>
);

export default ComposeButton;
