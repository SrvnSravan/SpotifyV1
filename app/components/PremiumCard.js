import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PremiumCard = ({heading, subHeading, subHeading2, subHeading3, subHeading4}) => {
  return (
    <View style={styles.cardContainer}>
        <Text style={styles.cardsHeading}>{heading}</Text>
        <Text style={styles.cardsSubHeading}>{subHeading}</Text>
        <Text style={styles.cardsSubHeading}>{subHeading2}</Text>
        <Text style={styles.cardsSubHeading}>{subHeading3}</Text>
        <Text style={styles.cardsSubHeading}>{subHeading4}</Text>
      </View>
  )
}

export default PremiumCard

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: "#333333",
        // width: 370,
        // height: 300,
        borderRadius: 10,
        margin: 10
      },
      cardsHeading: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        margin: 20
      },
      cardsSubHeading: {
        color: "white",
        padding: 15,
        fontWeight: "bold",
        marginLeft: 10
      }
})