import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import EasyLoanProps from '../props/EasyLoanProps'
import ApplyLoanProps from '../props/ApplyLoanProps'
import Custom2Button from '../props/Custom2Button'
import TabBar from '../props/TabBar'
import CustomButton from '../props/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'

const LoanApplication = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex:1,position:'relative'}}>
      <StatusBar style='light'/>
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
            <Text style = {{textAlign: "center", lineHeight: 24, fontSize: 14}}>Easy loan application, you do not need any collateral at all.</Text>
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

          <View style = {styles.apply}>
            <View style = {styles.easySteps}>
              <Text style ={{color:"white",fontSize:12,fontWeight:500}}>Easy steps</Text>
            </View>
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

          <CustomButton  
            backgroundColor={'#2C14DD'}
            title={'Apply for loan'}
            onPress={()=> navigation.navigate('loanLandingScreen')}
          />

      </View>
          <TabBar loan={true}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      paddingHorizontal:15,
       backgroundColor: "#F5F7FF",
       flex: 1,
       alignItems: "center"
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
      width: '100%',
      height: 292,
      backgroundColor: "#FFFFFF",
      marginTop: -76,
      borderRadius: 16,
      padding: 20
    },
    easyText: {
      // width: 350,
      // height: 100,
      flex: 1,
      alignItems: "center",
      gap: 10,
      // backgroundColor:'red'
    },
    get: {
      width: 103,
      height:21,
      borderRadius: 12,
      backgroundColor: "#F5F7FF",
      color:'#240F51',
      fontSize:10,
      textAlign: "center",
      textAlignVertical:'center'
    },
    h3: {
       fontSize: 28,
       fontWeight:800,
       color: "#131313",
    },
    easyTextFlex: {
      width: '100%',
      height: 103,
      flexDirection: "row",
      borderRadius: 16,
      padding:10,
      backgroundColor: "#F5F7FF"
    },
    easySteps: {
      width: 75,
      height: 25,
      backgroundColor: "#240F51",
      borderRadius: 8,
      color: "white",
      position:'absolute',
      top:-12,
      left:10,
      justifyContent:'center',
      alignItems:'center'
    },
    apply: {
      width: "100%",
      height: 200,
      backgroundColor: "#FFFFFF",
      justifyContent:'space-between',
      borderRadius: 16,
      marginTop:30,
      paddingBottom: 10,
      paddingTop: 30,
      paddingHorizontal:10,
      position:'relative'
    },
    applyButton: {
      width: '100%',
      height: 100,
      marginTop:20
    }
})

export default LoanApplication
