import React from 'react';
import {View} from 'react-native';
import Post from '../../components/Post';

const Home = () => {
  const posts = [
    {
      id: 'p1',
      videoUri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
      user: {
        id: 'u1',
        imageUri:
          'https://toplist.vn/images/800px/thor-khong-phai-mot-vi-than-407917.jpg',
        username: 'Tu Le Thanh',
      },
      description: 'My favorite movie',
      song: 'NF - The search',
      songImage: '',
      likes: 123,
      comments: 12,
      shares: 44,
    },
  ];
  return (
    <View>
      <Post post={posts[0]} />
    </View>
  );
};

export default Home;
