import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/main-screens/HomeScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
      <Stack.Navigator initialRouteName='LoginScreen'>
        <Stack.Screen name='LoginScreen' component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
  )
}

export default Navigation

