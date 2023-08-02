import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navigation from './app/navigators/Navigation';
import {NavigationContainer} from '@react-navigation/native';
import PremiumScreen from './app/screens/main-screens/PremiumScreen';
import AccountCreationScreen from './app/screens/AccountCreationScreen';
import SearchScreen from './app/screens/main-screens/SearchScreen';
import ChooseDOBScreen from './app/screens/ChooseDOBScreen';
import ChooseGender from './app/screens/ChooseGenderScreen';
import ChooseNameScreen from './app/screens/ChooseNameScreen';
import ChooseMusicTypeScreen from './app/screens/ChooseMusicTypeScreen';
import SongsListScreen from './app/screens/SongsListScreen';


const App = () => {
  return (
    <NavigationContainer>
      <SongsListScreen />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
