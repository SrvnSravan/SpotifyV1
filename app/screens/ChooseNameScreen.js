import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Datepicker from '../components/DatePicker';
import NormalButton from '../components/NormalButton';
import LoginButtons from '../components/LoginButton';
import SearchBar from '../components/SearchBar';

const ChooseNameScreen = ({navigation}) => {
  return (
    <LinearGradient colors={['#040306', '#131624']} style={{flex: 1}}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={require('../assets/images/back.png')}
          style={styles.backButton}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Create account</Text>
        </View>
      </View>

      <View>
        <Text style={styles.heading}>What's your name?</Text>
        <SearchBar />
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            This appears on your Spotify profile
          </Text>
          <Text style={styles.description}>
            By taping 'Create Account' you agree to the Spotify terms and use.
          </Text>
        </View>
        <NormalButton
          onPress={() => {
            navigation.navigate('ChooseMusicTypeScreen');
          }}
          title={'Next'}
        />
      </View>
    </LinearGradient>
  );
};

export default ChooseNameScreen;

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  backButton: {
    height: 30,
    width: 30,
    margin: 10,
  },
  heading: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 50,
    margin: 10,
  },
  datePicker: {
    margin: 35,
    marginBottom: 50,
  },
  description: {
    color: 'white',
    marginTop: 50,
    fontWeight: 'bold',
    margin: 10,
  },
  descriptionContainer: {
    marginTop: 20,
  },
  subHeading: {
    color: 'green',
    fontWeight: 'bold',
  },
});
