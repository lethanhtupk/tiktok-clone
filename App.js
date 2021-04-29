import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Home from './src/screens/Home';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </>
  );
};

export default App;
