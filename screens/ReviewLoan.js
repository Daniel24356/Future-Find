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
           <Image style= {{width: 24, height: 24}} source = {require('../assets/applyLoan/nullOrange.png')}/>
           <Text style = {{width: 274, fontSize: 12, lineHeight: 18}}>We're currently reviewing your loan application, we'll update you once we're done</Text>
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
   width: 328,
   height: 291.73,
   backgroundColor: "#FFFFFF",
   marginTop: -76,
   borderRadius: 16,
   marginLeft: 16,
   padding: 20
 },
 easyText: {
   width: 288,
   height: 79,
   flex: 1,
   alignItems: "center",
   gap: 10
 },
 get: {
   width: 103,
   height: 21,
   borderRadius: 12,
   backgroundColor: "#F5F7FF",
   textAlign: "center"
 },
 h3: {
    fontSize: 28,
    fontWeight: 800,
    color: "#131313",
 },
 easyTextFlex: {
   width: 288,
   height: 100.73,
   flexDirection: "row",
   borderRadius: 16,
   paddingBottom: 12,
   paddingLeft: 10,
   paddingRight: 10,
   paddingTop: 12,
   backgroundColor: "#F5F7FF"
 },
    review:{
        width: 328,
        height: 56,
        backgroundColor: "#FFFAEC",
        borderRadius: 16,
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        gap: 12,
        marginLeft: 16,
        marginTop: 15
    }
})

export default ReviewLoan
