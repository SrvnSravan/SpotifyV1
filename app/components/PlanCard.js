import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NormalButton from './NormalButton'

const PlanCard = ({ backgroundColor, title, title1, description, description1, description2}) => {
  return (
    <View style={[styles.cardContainer, {backgroundColor}]}>
        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
        <Text style={styles.cardsHeading}>{title}</Text>
        <Text style={styles.cardsHeading}>{title1}</Text>
        </View>
        <View style={{justifyContent: "center", alignItems: "center"}}>
        <Text style={styles.cardsSubHeading}>{description}</Text>
        <NormalButton title={'VIEW PLANS'}/>
        <Text style={styles.cardsSubHeading}>{description1}</Text>
        <Text style={styles.cardsSubHeading}>{description2}</Text>
        </View>
      </View>
  )
}

export default PlanCard

const styles = StyleSheet.create({
    cardContainer: {
        // width: 370,
        // height: 300,
        borderRadius: 10,
        margin: 10,
      },
      cardsHeading: {
        color: "white",
        fontSize: 30,
        margin: 20
      },
      cardsSubHeading: {
        color: "white",
        padding: 15,
        marginLeft: 10
      }
})