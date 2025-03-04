import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import EasyLoanProps from '../props/EasyLoanProps'
import ApplyLoanProps from '../props/ApplyLoanProps'
import Custom2Button from '../props/Custom2Button'

const ReviewLoan = () => {
  return (
    <View style = {styles.container}>
      <View style = {styles.topDiv}>
        <View style = {styles.overlay}>
          <Image style = {styles.image} source={require('../assets/applyLoan/Coint.png')}/>
          <Image style = {styles.image2} source={require('../assets/applyLoan/Coint.png')}/>
          <Image style = {styles.image3} source={require('../assets/applyLoan/Coint.png')}/>
        </View>
      </View>
      <View style ={styles.easyLoan}>
        <View style = {styles.easyText}>
          <Text style = {{textAlign: "center", lineHeight: 27, fontSize: 18}}>Easy loan application, you do not need any collateral at all.</Text>
          <Text style = {styles.get}>You can get up to</Text>
          <Text style = {styles.h3}>N8,500,000</Text>
        </View>
        <View style = {styles.easyTextFlex}>
          <EasyLoanProps
          easyImage= {require('../assets/applyLoan/easyLoan 1.png')}
          easyText = "Easy loan"
          easyPrice = "N50k - N2.5M"
          />
          <EasyLoanProps
          easyImage= {require('../assets/applyLoan/easyLoan 2.png')}
          easyText = "Low interest"
          easyPrice = "5% - 10%"
          />
          <EasyLoanProps
          easyImage= {require('../assets/applyLoan/easyLoan 3.png')}
          easyText = "Pay in bit"
          easyPrice = "Monthly/quaterly"
          />
        </View>

      </View>
        <View style = {styles.review}>
           <Image style= {{width: 28, height: 28}} source = {require('../assets/applyLoan/nullOrange.png')}/>
           <Text style = {{width: 335, fontSize: 15, lineHeight: 23}}>We're currently reviewing your loan application, we'll update you once we're done</Text>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
       backgroundColor: "#F5F7FF",
       flex: 1,
       alignContent: "center"
    },

    topDiv: {
      height: 158,
    },
    overlay: {
      height: 158,
      backgroundColor: "#442CF5",
      flex: 1,
      flexDirection: "row",
    },  
    image: {
      width: 100,
      height: 75,
      top: 83,
      left: -19
    },
    image2: {
      width: 268.75,
      height: 163.75,
      opacity: 50,
      rotation: -10.4
    },
    image3: {
      width: 100,
      height: 85,
      top: 72,
      left: 2
    },
    easyLoan: {
      width: 392,
      height: 315,
      backgroundColor: "#FFFFFF",
      marginTop: -76,
      borderRadius: 16,
      marginLeft: 17,
      padding: 20
    },
    easyText: {
      width: 350,
      height: 100,
      paddingLeft: 40,
      paddingRight: 40,
      flex: 1,
      alignItems: "center",
      gap: 18
    },
    get: {
      width: 120,
      borderRadius: 12,
      backgroundColor: "#F5F7FF",
      textAlign: "center"
    },
    h3: {
       fontSize: 35,
       fontWeight: "bold",
       color: "#131313",
    },
    easyTextFlex: {
      width: 350,
      height: 105,
      flexDirection: "row",
      borderRadius: 16,
      paddingBottom: 12,
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 12,
      backgroundColor: "#F5F7FF"
    },
    review:{
        width: 392,
        height: 65,
        backgroundColor: "#FFFAEC",
        borderRadius: 16,
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
        gap: 12,
        marginLeft: 17,
        marginTop: 15
    }
})

export default ReviewLoan
