import {StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';
import React, {Component} from 'react';
import LoginButtons from '../components/LoginButton';
import LinearGradient from 'react-native-linear-gradient';
const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#040306', '#131624']} style={styles.gradient}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/Spotify.png')}
            style={styles.logo}
          />
        </View>
        <Text style={styles.text}>Millions of Songs Free on Spotify!</Text>
        <LoginButtons
          title={'Sign in with Spotify'}
          pressable={true}
          buttonText={true}
          onPress={this.handleButtonPress}
        />
        <LoginButtons title={'Continue with phone number'} pressable={false} />
        <LoginButtons title={'Continue with Google'} pressable={false} />
        <LoginButtons title={'Sign in with Facebook'} pressable={false} />
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  logo: {
    height: 80,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 80,
  },
});

export default LoginScreen;
