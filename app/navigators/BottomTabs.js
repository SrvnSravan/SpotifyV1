import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/main-screens/HomeScreen';
import LibraryScreen from '../screens/main-screens/LibraryScreen';
import SearchScreen from '../screens/main-screens/SearchScreen';
import PremiumScreen from '../screens/main-screens/PremiumScreen';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name='HomeScreen' component={HomeScreen} options={{headerShown: false}}/>
        <Tab.Screen name='SearchScreen' component={SearchScreen} options={{headerShown: false}}/>
        <Tab.Screen name='LibraryScreen' component={LibraryScreen} options={{headerShown: false}}/>
        <Tab.Screen name='PremiumScreen' component={PremiumScreen} options={{headerShown: false}}/>
    </Tab.Navigator>
  )
}

export default BottomTabs;

