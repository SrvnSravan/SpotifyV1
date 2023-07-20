import {StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import LoginButtons from '../components/LoginButton';
import LinearGradient from 'react-native-linear-gradient';

const LoginScreen = ({navigation}) => {
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
          title={'Sign up for free'}
          pressable={true}
          buttonText={true}
          onPress={() => navigation.navigate('HomeScreen')}
        />
        <LoginButtons title={'Continue with Google'} pressable={false} />
        <LoginButtons title={'Continue  with Facebook'} pressable={false} />
        <TouchableOpacity>
        <View style={styles.loginTextContainer}>
        <Text style={styles.loginText}>Log in</Text>
        </View>
        </TouchableOpacity>
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
  loginText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15
  },
  loginTextContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop:10
  }
});

export default LoginScreen;
