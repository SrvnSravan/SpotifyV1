import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    //Wait for 3 seconds and then navigate to the LoginScreen
    const timer = setTimeout(() => {
      navigation.navigate('LoginScreen');
    }, 3000);
    //Clean up the timer on unmount to avoid memory leaks
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View>
      <Image
        source={require('../assets/images/Splash.jpg')}
        style={styles.logo}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  logo: {
    height: 750,
    width: 400,
  },
});
