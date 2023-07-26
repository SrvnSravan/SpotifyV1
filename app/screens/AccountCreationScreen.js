import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import SearchBar from '../components/SearchBar';
import NormalButton from '../components/NormalButton';
import LoginButtons from '../components/LoginButton';

const AccountCreationScreen = ({navigation}) => {
  return (
    <LinearGradient colors={['#040306', '#131624']} style={{flex: 1}}>
      <Image
        source={require('../assets/images/back.png')}
        style={styles.backButton}
      />
      <Text style={styles.emailText}>Email oru username</Text>
      <View>
        <SearchBar />
      </View>
      <Text style={styles.passwordText}>Password</Text>
      <View>
        <SearchBar />
      </View>
      <View style={styles.normalButton}>
        <NormalButton title={'Login'} onPress={()=> {navigation.navigate('ChooseDOBScreen')}}/>
      </View>
      <LoginButtons title={'Log in without password'} />
    </LinearGradient>
  );
};

export default AccountCreationScreen;

const styles = StyleSheet.create({
  emailText: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  passwordText: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 100,
    marginLeft: 10,
  },
  normalButton: {
    marginTop: 100,
  },
  backButton: {
    height: 30,
    width: 30,
    margin: 10,
  },
});
