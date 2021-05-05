import React from 'react';
import {View, FlatList, Dimensions} from 'react-native';
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
    {
      id: 'p2',
      videoUri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
      user: {
        id: 'u1',
        imageUri:
          'https://toplist.vn/images/800px/thor-khong-phai-mot-vi-than-407917.jpg',
        username: 'Tu Le Thanh 2',
      },
      description: 'My favorite movie',
      song: 'NF - The search',
      songImage: '',
      likes: 123,
      comments: 12,
      shares: 44,
    },
    {
      id: 'p3',
      videoUri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
      user: {
        id: 'u1',
        imageUri:
          'https://toplist.vn/images/800px/thor-khong-phai-mot-vi-than-407917.jpg',
        username: 'Tu Le Thanh 3',
      },
      description: 'My favorite movie',
      song: 'NF - The search',
      songImage: '',
      likes: 452,
      comments: 19,
      shares: 452,
    },
    {
      id: 'p4',
      videoUri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
      user: {
        id: 'u1',
        imageUri:
          'https://toplist.vn/images/800px/thor-khong-phai-mot-vi-than-407917.jpg',
        username: 'Tu Le Thanh 4',
      },
      description: 'My favorite movie',
      song: 'NF - The search',
      songImage: '',
      likes: 321,
      comments: 15,
      shares: 56,
    },
  ];

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({item}) => <Post post={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').height - 67}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
      />
    </View>
  );
};

export default Home;
