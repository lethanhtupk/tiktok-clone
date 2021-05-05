import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeBottomTabs from './HomeButtonTabNavigator';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeBottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
