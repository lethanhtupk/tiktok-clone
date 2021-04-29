import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';

const PauseIcon = () => {
  return (
    <FontAwesome5
      name="play"
      color="#e6f2e9"
      size={40}
      style={styles.pauseIcon}
    />
  );
};

export default PauseIcon;
