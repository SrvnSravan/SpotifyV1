import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LoginScreen from './app/screens/LoginScreen';
import HomeScreen from './app/screens/main-screens/HomeScreen';
import Navigation from './app/navigators/Navigation';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
   <Navigation />
   </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})