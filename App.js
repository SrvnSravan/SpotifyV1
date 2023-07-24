import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LoginScreen from './app/screens/LoginScreen';
import HomeScreen from './app/screens/main-screens/HomeScreen';
import Navigation from './app/navigators/Navigation';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from './app/screens/SplashScreen';
import SearchBar from './app/components/SearchBar';
import SearchScreen from './app/screens/main-screens/SearchScreen';

const App = () => {
  return (
    <NavigationContainer>
      <SearchBar />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
