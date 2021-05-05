import React, {useState, useMemo} from 'react';
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  Text,
  Image,
  Animated,
  Easing,
} from 'react-native';
import Video from 'react-native-video';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
// import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import PauseIcon from '../../components/PauseIcon';
import LikeIcon from '../LikeIcon';

const Post = ({post}) => {
  const [isPause, setIsPause] = useState(false);
  // const [isLiked, setIsLiked] = useState(false);

  const [postData, setPostData] = useState(post);

  const onPlayPausePress = () => {
    setIsPause(!isPause);
  };

  // const onPressLike = () => {
  //   let plusLike;
  //   isLiked === false ? (plusLike = 1) : (plusLike = -1);
  //   setIsLiked(!isLiked);
  //   setPostData({...postData, likes: postData.like + plusLike});
  // };

  // const someValue = useMemo(() => {}, [isLiked]);

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
            uri: postData.videoUri,
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
                  uri: postData.user.imageUri,
                }}
              />
            </View>

            <View style={styles.iconContainer}>
              <LikeIcon likes={post.likes} />
            </View>
            <TouchableOpacity>
              <View style={styles.iconContainer}>
                <FontAwesome name="commenting" size={40} color="white" />
                <Text style={styles.statsLabel}>{postData.comments}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.iconContainer}>
                <Fontisto name="share-a" size={32} color="white" />
                <Text style={styles.statsLabel}>{postData.shares}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomContainer}>
            <View>
              <Text style={styles.handle}>@{postData.user.username}</Text>
              <Text style={styles.description}>{postData.description}</Text>
              <View style={styles.songRow}>
                <Entypo name="beamed-note" size={24} color="white" />
                <Text style={styles.songName}>{postData.song}</Text>
              </View>
            </View>
            <Animated.Image
              style={{...styles.songImage, transform: [{rotate: spin}]}}
              source={{
                uri: postData.user.imageUri,
              }}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Post;
