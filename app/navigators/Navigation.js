import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/main-screens/HomeScreen';
import SplashScreen from '../screens/SplashScreen';
import BottomTabs from '../navigators/BottomTabs';
import LikedSongsScreen from '../screens/LikedSongsScreen';
import ChooseDOBScreen from '../screens/ChooseDOBScreen';
import AccountCreationScreen from '../screens/AccountCreationScreen';
import ChooseGender from '../screens/ChooseGenderScreen';
import ChooseNameScreen from '../screens/ChooseNameScreen';
import ChooseMusicTypeScreen from '../screens/ChooseMusicTypeScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LikedSongsScreen"
        component={LikedSongsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChooseDOBScreen"
        component={ChooseDOBScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AccountCreationScreen"
        component={AccountCreationScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChooseGenderScreen"
        component={ChooseGender}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChooseNameScreen"
        component={ChooseNameScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChooseMusicTypeScreen"
        component={ChooseMusicTypeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
