import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const SearchScreen = () => {
  return (
    <LinearGradient colors={['#040306', '#131624']} style={{flex: 1}}>
      <Text style={styles.text}>SearchScreen</Text>
    </LinearGradient>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  text: {
    color: "white"
  },
})