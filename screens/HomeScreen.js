import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "react-native";
import TabBar from "../props/TabBar";
import EvilIcons from '@expo/vector-icons/EvilIcons';

const HomeScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <StatusBar style="dark" />
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.user_info}>
            <View style={styles.user_div}>
              <Image 
                source={require("../assets/homePage/Group_20105.png")}
              />
              <View>
                <View style={styles.greeting}>
                  <Text style={styles.greetTxt1} >Hello </Text>
                  <Text style={styles.greetTxt2}>Malvin</Text>
                </View>
                <Text style={styles.regText}>Good morning</Text>
              </View>
            </View>
            <View style={styles.notification}>
              <Image source={require("../assets/homePage/bell.png")}/>
            </View>
          </View>

          <View style={styles.user_below}>
            <View>
              <Text style={styles.text1}>Your loan balance</Text>
            </View>
            <Text style={styles.text2}>N20,983</Text>
            <Text style={styles.text3}>Repayment due: 28 March, 2025</Text>

            <View style={styles.transactions}>
              <Text style={styles.trans_text}>Transactions</Text>
              <Image source={require("../assets/homePage/chevron_img.png")}/>
            </View>
          </View>

          <View style={styles.loanContainer}>
            <View style={styles.loan1}>
              <Image source={require("../assets/homePage/get_loan.png")} style={styles.loan_icon} />
              <Text style={styles.small_text}>Take loan</Text>
            </View>
            <View style={styles.loan1}>
              <Image source={require("../assets/homePage/withdraw.png")}/>
              <Text style={styles.small_text}>Withdraw</Text>
            </View>
            <View style={styles.loan1}>
              <Image source={require("../assets/homePage/repay.png")}/>
              <Text style={styles.small_text}>Repay loan</Text>
            </View>
          </View>

          <View style={styles.loanContainer2}>
            <View style={styles.loan2}>
              <View style={styles.small_logo}>
                <Image source={require("../assets/homePage/airtime.png")}/>
              </View>
              <Text style={styles.small_text}>Airtime</Text>
            </View>
            <View style={styles.loan2}>
              <View style={styles.small_logo}>
                <Image source={require("../assets/homePage/data.png")}/>
              </View>
              <Text style={styles.small_text}>Data</Text>
            </View>
            <View style={styles.loan2}>
              <View style={styles.small_logo}>
                <Image source={require("../assets/homePage/electricity.png")}/>
              </View>
              <Text style={styles.small_text}>Electricity</Text>
            </View>
            <View style={styles.loan2}>
              <View style={styles.small_logo}>
                <Image source={require("../assets/homePage/bet_acc.png")}/>
              </View>
              <Text style={styles.small_text}>Bet account</Text>
            </View>
          </View>

          <View style={styles.investMain}>
            <View style={styles.invest}>
              <Image source={require("../assets/homePage/invest.png")}/>
              <View>
                <Text style={styles.invest_text1}>Invest your money</Text>
                <Text style={styles.invest_text2}>Earn interest on your invested money</Text>
              </View>
              <EvilIcons style={styles.chevron} name="chevron-right" size={24} color="black" />
            </View>
            <View style={styles.invest}>
            <Image source={require("../assets/homePage/contribute.png")}/>
            <View>
              <Text style={styles.invest_text1}>Start a contribution</Text>
              <Text style={styles.invest_text2}>Create and manage contribution group</Text>
            </View>
            <EvilIcons style={styles.chevron} name="chevron-right" size={24} color="black" />
            </View>
            <View style={styles.invest}>
            <Image source={require("../assets/homePage/loan.png")}/>
            <View>
              <Text style={styles.invest_text1}>Easy loan</Text>
              <Text style={styles.invest_text2}>Take loan with ease without collateral</Text>
            </View>
            <EvilIcons style={styles.chevron} name="chevron-right" size={24} color="black" />
            </View>
          </View>


        </SafeAreaView>
          <TabBar/>
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: "#f4f6fe",
    position:'relative'

  },
  safeArea: {
    flex: 1,
    gap: 15,
    paddingHorizontal: 15,
  },
  user_info: {
    width: "100%",
    flexDirection: "row",
    height: 60,
    justifyContent: "space-between",
    alignItems:'center'
},
  user_div: {
    width: "75%",
    flexDirection: 'row',
    gap: 10,
    // backgroundColor:'blue',
    // justifyContent: "center",
    alignItems: 'center'
  },
  greeting: {
      flexDirection: 'row',
  },
  greetTxt1: {
      fontSize: 16,
      color: '#240F51',
      fontWeight: 400
  },
  greetTxt2: {
    fontSize: 16,
    color: '#240F51',
    fontWeight: 500
  },
  regText: {
      fontSize: 14,
    color: '#240F51',
    fontWeight: 400
  },
  notification: {
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#FFFF',
    borderRadius: 10
},
user_below: {
  backgroundColor: "rgb(68,44,245)",
  width: '100%',
  height: 124,
  borderRadius: 15,
  paddingTop: 10,
  paddingLeft: 10,
  position:'relative'
},
text1:{
  fontSize: 12,
   color: '#FAFBFF'
},
text2:{
  fontSize: 28,
  fontWeight: 800,
  color: 'white',
  marginTop: 10,
},
text3:{
  fontSize: 12,
   color: '#FAFBFF',
   marginTop: 10,
},
transactions: {
  width: 97,
  height: 22,
  flexDirection: 'row',
  backgroundColor: '#2C14DD',
  borderRadius: 10,
  justifyContent:'center',
  paddingHorizontal: 6,
  justifyContent:'space-between',
  alignItems:'center',
  position:'absolute',
  right: 10,
  top: 10
},
trans_text: {
  color:'#FAFBFF',
  fontSize: 10
},
loanContainer: {
  width:'100%',
  height: 106,
  flexDirection: 'row',
  justifyContent: 'space-between',
  backgroundColor:'#FFFF',
  padding: 10,
  borderRadius: 16,
},
  loan1:{
    flex:'1',
    alignItems: 'center',
    justifyContent: 'center',
    width: 89.33,
    height: 86,
    backgroundColor: '#f5f7ff',
    borderRadius: 16
  },
  loan_icon: {
    width: 38
  },
  small_text:{
    fontSize: 12,
    color: '#292B2D',
    marginTop: 10
  },
  loanContainer2: {
    height: 86,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor:'#FFFF',
    borderRadius: 16,
  },
  loan2: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
  },
  small_logo: {
    width: 38,
    height: 38,
    backgroundColor:'#f4f6fe',
    borderRadius: 10,
    justifyContent:'center',
    alignItems:'center'
  },
  investMain:{
    height: 185,
    flexDirection:'column',
    gap: 8,
  },
  invest:{
    height: 55,
    flexDirection: 'row',
    alignItems:'center',
    gap:10,
    backgroundColor:'#FFFF',
    borderRadius: 16,
    padding: 10,
    position:'relative'
  },
  invest_text1: {
    fontSize: 13,
    color:'292B2D',
    fontWeight: 500
  },
  invest_text2: {
    fontSize: 11,
    color:'292B2D',
    fontWeight: 400
  },
  chevron: {
    position:'absolute',
    right: 10
  }
});
