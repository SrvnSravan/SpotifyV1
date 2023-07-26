import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import SearchCards from '../components/SearchCards'

const ChooseMusicTypeScreen = () => {
  return (
    <LinearGradient colors={['#040306', '#131624']} style={{flex: 1}}>
      <Text style={styles.text}>What music do you like?</Text>
      <ScrollView>
      <View style={{flexDirection: "row"}}>
        <SearchCards backgroundColor={'yellow'}title={'Hindi'}/>
        <SearchCards backgroundColor={'orange'} title={'English'}/>
      </View>
      <View style={{flexDirection: "row"}}>
        <SearchCards backgroundColor={'purple'} title={'Marati'}/>
        <SearchCards backgroundColor={'red'} title={'Tamil'}/>
      </View>
      <View style={{flexDirection: "row"}}>
        <SearchCards backgroundColor={'grey'} title={'Punjabi'}/>
        <SearchCards backgroundColor={'green'} title={'Telugu'}/>
      </View>
      <View style={{flexDirection: "row"}}>
        <SearchCards backgroundColor={'cyan'} title={'Gujarati'}/>
        <SearchCards backgroundColor={'blue'} title={'Kannada'}/>
      </View>
     
      
      </ScrollView>
    </LinearGradient>
  )
}

export default ChooseMusicTypeScreen

const styles = StyleSheet.create({
    text: {
        color: "white",
        fontSize: 40,
        fontWeight: "bold",
        margin: 10
    }
})