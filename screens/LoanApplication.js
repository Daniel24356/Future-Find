import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import EasyLoanProps from '../props/EasyLoanProps'
import ApplyLoanProps from '../props/ApplyLoanProps'
import Custom2Button from '../props/Custom2Button'

const LoanApplication = () => {
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
        <View style = {styles.easySteps}>
          <Text style ={{color: "white"}}>Easy steps</Text>
          </View>
        <View style = {styles.apply}>
          <ApplyLoanProps
          applyImage = {require('../assets/applyLoan/apply 1.png')}
          applyText= "Apply for loan"
          applyPrice= "Enter the required information about you and your financial status"
          />
          <ApplyLoanProps
          applyImage = {require('../assets/applyLoan/apply 2.png')}
          applyText= "Enter your desired amount"
          applyPrice= "Upon approval, enter the amount of loan suitable for you"
          />
          <ApplyLoanProps
          applyImage = {require('../assets/applyLoan/apply 3.png')}
          applyText= "That’s it!"
          applyPrice= "Once you been credited your loan, you can then withdraw to your desired bank account"
          />
        </View>
        
        <View style = {styles.applyButton}>
        <Custom2Button 
        backgroundColor = "#2C14DD"
        title = "Apply for loan"
        />
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
    easySteps: {
      width: 74.41,
      height: 25,
      paddingLeft: 14,
      paddingRight: 14,
      paddingTop: 4,
      paddingBottom: 4,
      backgroundColor: "#240F51",
      borderRadius: 8,
      color: "white",
      marginLeft: 30,
      marginTop: 20,
      top: 10,
      zIndex: 10,
      textAlign: "center"
    },
    apply: {
      width: 328,
      height: 199,
      backgroundColor: "#FFFFFF",
      borderRadius: 16,
      flexDirection: "column",
      gap: 12,
      marginLeft: 16,
      paddingBottom: 10,
      paddingTop: 30,
      paddingLeft: 10,
      paddingRight: 10
    },
    applyButton: {
      width: 328,
      height: 50,
      marginLeft: 16,
      top: 617.73
    }
})

export default LoanApplication
