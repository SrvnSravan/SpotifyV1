import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const SearchCards = ({backgroundColor, title}) => {
  return (
    <TouchableOpacity>
    <View style={[styles.container, {backgroundColor}]}>
      <Text style={styles.text}>{title}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default SearchCards

const styles = StyleSheet.create({
    container: {
        width: 175,
        height: 100,
        borderRadius: 5,
        margin: 10
    },
    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 15,
        padding: 10
    }
})