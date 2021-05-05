import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Navigation from './src/navigation';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <Navigation />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;
