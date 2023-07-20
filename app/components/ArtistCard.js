import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ArtistCard = ({imgSource, title}) => {
  return (
    <TouchableOpacity>
    <View>
      <Image source={imgSource}
      style={styles.image}/>
      <Text style={styles.text}>{title}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default ArtistCard

const styles = StyleSheet.create({
    image: {
        width: 130,
        height: 130,
        borderRadius: 5,
        margin: 5
    },
    text: {
        color: "white",
        fontWeight: "bold",
        marginLeft: 10
    }
})