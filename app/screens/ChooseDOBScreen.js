import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Datepicker from '../components/DatePicker';
import NormalButton from '../components/NormalButton';
import LoginButtons from '../components/LoginButton';

const ChooseDOBScreen = ({navigation}) => {
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
        <Text style={styles.heading}>What's your date of birth?</Text>
        <View style={styles.datePicker}>
          <Datepicker />
        </View>
        <NormalButton
          title={'Next'}
          onPress={() => {
            navigation.navigate('ChooseGenderScreen');
          }}
        />
      </View>
    </LinearGradient>
  );
};

export default ChooseDOBScreen;

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
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 50,
  },
  datePicker: {
    margin: 35,
    marginBottom: 50,
  },
});
