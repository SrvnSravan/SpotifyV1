import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'

const TopBar = () => {
  return (
    <SafeAreaView>
    <View style={{flexDirection: 'row', padding: 5}}>
      <Image
        source={require('../assets/images/th.jpg')}
        style={styles.logo}
      />
      <Text style={styles.textContainer}>Good Morning</Text>
      <View style={{flexDirection: 'row', paddingRight: 25}}>
      <Image source={require("../assets/images/bell.png")}
      style={styles.bellIcon}/>
      </View>
      <View style={{ paddingRight: 25}}>
      <Image source={require("../assets/images/clock-icon.png")}
      style={styles.clockIcon}/>
      </View>
      <View style={{ paddingRight: 5}}>
      <Image source={require("../assets/images/settings.jpg")}
      style={styles.settingsIcon}/>
      </View>
      
    </View>
  </SafeAreaView>
  )
}

export default TopBar

const styles = StyleSheet.create({
    logo: {
      height: 40,
      width: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
    },
    textContainer: {
      flex: 1,
      fontSize: 20,
      fontWeight: 'bold',
      padding: 5,
      color: "white"
    },
    bellIcon: {
      height: 30,
      width: 30,
    },
    clockIcon: {
      height: 30,
      width: 30
    },
    settingsIcon: {
      height: 30,
      width: 30,
    }
  });
