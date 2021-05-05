import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import plusIcon from '../assets/images/plus-icon.png';

const Tab = createBottomTabNavigator();

const HomeBottomTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: {
          backgroundColor: '#000',
        },
        activeTintColor: '#fff',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <Entypo name="home" size={24} color="#fff" />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: () => <AntDesign name="search1" size={24} color="#fff" />,
        }}
      />
      <Tab.Screen
        name="Upload"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Image
              source={plusIcon}
              style={styles.plusIcon}
              resizeMode="contain"
            />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="InBox"
        component={Home}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="message-minus-outline"
              size={24}
              color="#fff"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Ionicons name="person-outline" size={24} color="#fff" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  plusIcon: {
    height: 30,
  },
});

export default HomeBottomTabs;
