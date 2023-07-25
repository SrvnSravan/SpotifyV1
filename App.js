import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navigation from './app/navigators/Navigation';
import {NavigationContainer} from '@react-navigation/native';
import PremiumScreen from './app/screens/main-screens/PremiumScreen';


const App = () => {
  return (
    <NavigationContainer>
      <PremiumScreen />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
