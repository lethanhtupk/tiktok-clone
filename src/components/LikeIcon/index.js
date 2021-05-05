import React, {useRef, useState} from 'react';
import {TouchableOpacity, Animated, StyleSheet, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const LikeIcon = ({likes}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesNum, setLikesNum] = useState(likes);

  const likedValue = useRef(new Animated.Value(0)).current;

  const onLikePress = () => {
    Animated.spring(likedValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start(() => likedValue.setValue(0));
    let plusLike;
    isLiked === false ? (plusLike = 1) : (plusLike = -1);
    setIsLiked(!isLiked);
    setLikesNum(likesNum + plusLike);
  };

  const scaleIn = likedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const scaleOut = likedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  return (
    <TouchableOpacity onPress={onLikePress}>
      <Animated.View
        style={[
          StyleSheet.absoluteFillObject,
          {transform: [{scale: isLiked ? scaleOut : scaleIn}]},
        ]}>
        <AntDesign name="heart" size={40} color="white" />
      </Animated.View>

      <Animated.View
        style={[{transform: [{scale: isLiked ? scaleIn : scaleOut}]}]}>
        <AntDesign name="heart" size={40} color="red" />
      </Animated.View>
      <Text style={styles.statsLabel}>{likesNum}</Text>
    </TouchableOpacity>
  );
};

export default LikeIcon;
