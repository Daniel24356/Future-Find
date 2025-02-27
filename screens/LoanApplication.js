import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const LoanApplication = () => {
  return (
    <View>
      <View style = {styles.topDiv}>
        <View style = {styles.overlay}>
          <Image style = {styles.image} source={require('../assets/Coint.png')}/>
          <Image style = {styles.image1} source={require('../assets/Coint.png')}/>
          <Image style = {styles.image3} source={require('../assets/Coint.png')}/>
        </View>
      </View>
        <Text>Loan Application
        </Text>
        <View></View>
        <View></View>
        <View></View>
        <View></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
       
    },

    topDiv: {
      height: 158,
      // backgroundColor: "#442CF5"
    },
    overlay: {
      height: 158,
      backgroundColor: "#442CF5",
      flex: 1,
      flexDirection: "row",
    },
    image3: {
      width: 118.88,
      height:100,
      top:58,
      border: "solid, red",
      left: 340
    },
    image: {
      width: 118.88,
      height:100,
      top: 58,
      left: -16
    },
    image1: {
      width: 268.75,
      height: 168.75,
      opacity: 50
    }
    

})

export default LoanApplication
