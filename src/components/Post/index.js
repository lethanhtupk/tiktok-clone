import React, {useState} from 'react';
import {
  TouchableWithoutFeedback,
  View,
  Text,
  Image,
  Animated,
  Easing,
} from 'react-native';
import Video from 'react-native-video';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import PauseIcon from '../../components/PauseIcon';

const Post = () => {
  const [isPause, setIsPause] = useState(false);

  const onPlayPausePress = () => {
    setIsPause(!isPause);
  };

  const spinValue = new Animated.Value(0);

  // First set up animation
  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear, // Easing is an additional import from react-native
      useNativeDriver: true, // To make use of native driver for performance
    }),
  ).start();

  // Next, interpolate beginning and end values (in this case 0 and 1)
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <TouchableWithoutFeedback onPress={onPlayPausePress}>
      <View style={styles.container}>
        {isPause ? (
          <View style={styles.pauseIcon}>
            <PauseIcon />
          </View>
        ) : null}

        <Video
          source={{
            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          }}
          style={styles.video}
          paused={isPause}
          onError={e => console.log(e)}
          resizeMode={'cover'}
          repeat={true}
        />

        <View style={styles.uiComponent}>
          <View style={styles.rightContainer}>
            <View style={styles.profilePictureContainer}>
              <Image
                style={styles.profilePicture}
                source={{
                  uri:
                    'https://toplist.vn/images/800px/thor-khong-phai-mot-vi-than-407917.jpg',
                }}
              />
            </View>
            <View style={styles.iconContainer}>
              <AntDesign name="heart" size={40} color="white" />
              <Text style={styles.statsLabel}>123</Text>
            </View>
            <View style={styles.iconContainer}>
              <FontAwesome name="commenting" size={40} color="white" />
              <Text style={styles.statsLabel}>123</Text>
            </View>
            <View style={styles.iconContainer}>
              <Fontisto name="share-a" size={32} color="white" />
              <Text style={styles.statsLabel}>123</Text>
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <View>
              <Text style={styles.handle}>@TuLeThanh</Text>
              <Text style={styles.description}>My favorite movie</Text>
              <View style={styles.songRow}>
                <Entypo name="beamed-note" size={24} color="white" />
                <Text style={styles.songName}>Nf - The search</Text>
              </View>
            </View>
            {/* <Animated.Image
            style={{...styles.songImage, transform: [{rotate: spin}]}}
            source={{
              uri:
                'https://toplist.vn/images/800px/thor-khong-phai-mot-vi-than-407917.jpg',
            }}
          /> */}
            <Animated.Image
              style={{...styles.songImage, transform: [{rotate: spin}]}}
              source={{
                uri:
                  'https://toplist.vn/images/800px/thor-khong-phai-mot-vi-than-407917.jpg',
              }}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Post;
