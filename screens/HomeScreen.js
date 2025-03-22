import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "react-native";
import TabBar from "../props/TabBar";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { useNavigation } from '@react-navigation/native';

import axios from "axios";
import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native-paper";
// import AsyncStorage from "@react-native-async-storage/async-storage";
const userID = "31417bb4-e6b1-4775-bb6e-d33e5d65b6d2"

import { ProfileContext } from "./ProfileContext";
import { useContext } from "react";import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


const HomeScreen = () => {
  const [user, setUser] = useState({ firstName: ""});
  const { profilePic } = useContext(ProfileContext);
 const navigation = useNavigation();

 const [balance, setBalance] = useState(0);
 const [loading, setLoading] = useState(true);
 

 const showBalance = async () => {
   try {
     const response = await axios.get(`http://192.168.145.144:5000/api/v1/wallet/getUserBalance/${userID}`)
      setBalance(response.data.balance);
      
     setBalance(response.data.balance); // Assuming API returns { balance: 20983 }
   } catch (error) {
     console.log("Error fetching balance:", error);
     setBalance(0); // Set balance to null if error
   } finally {
     setLoading(false);
   }
 };


 const fetchTransactions = async () => {
  try {
    setLoading(true);
    const response = await axios.get(`http://192.168.145.144:5000/api/v1/wallet/getUserTransactions/${userID}`);
    const transactions = response.data.transactions; // Ensure your API returns an array of transactions
    
    navigation.navigate('Transaction', { transactions });
  } catch (error) {
    console.log("Error fetching transactions:", error);
  } finally {
    setLoading(false);
  }
};


 useEffect(() => {
   showBalance();
 }, []);

 useEffect(() => {
  const fetchUserData = async () => {
      try {
          const token = await AsyncStorage.getItem("userToken");
          const userId = await AsyncStorage.getItem("userId");

          if (!token || !userId) {
              console.error("Authentication failed.");
              return;
          }

          const response = await axios.get(`http://192.168.160.138:5000/api/v1/users/${userId}`, {
              headers: { Authorization: `Bearer ${token}` },
          });

          if (response.status === 200) {
              const { firstName} = response.data;
              setUser({ firstName});
          }
      } catch (error) {
          console.error("Error fetching user data:", error.response?.data || error.message);
      }
  };

  fetchUserData();
}, []);
 
const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
};


  return (
    <>
      <View style={styles.container}>
        <StatusBar style="dark" />
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.user_info}>
            <TouchableOpacity onPress={() => navigation.navigate('profile')} style={styles.user_div}>
              <Image 
                source={profilePic}
                style={styles.image}
              />
              <View>
                <View style={styles.greeting}>
                  <Text style={styles.greetTxt1} >Hello </Text>
                  <Text style={styles.greetTxt2}>{user.firstName}</Text>
                </View>
                <Text style={styles.regText}>{getGreeting()}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Notification')}  style={styles.notification}>
              <Image source={require("../assets/homePage/bell.png")}/>
            </TouchableOpacity>
          </View>

          <View style={styles.user_below}>
            <View>
              <Text style={styles.text1}>Your loan balance</Text>
            </View>
            
            {loading ? (
              <ActivityIndicator size="large" color="white" />
            ) : (
              <Text style={styles.text2}>
                {balance !== null ? `N${balance.toLocaleString()}` : "Error fetching balance"}
              </Text>
            )}
            <Text style={styles.text3}>Repayment due: 28 March, 2025</Text>

            <TouchableOpacity onPress={fetchTransactions} style={styles.transactions}>
              {loading ? (
              <ActivityIndicator size="small" color="white" />
              ) : (
              <>
              <Text style={styles.trans_text}>Transactions</Text>
             <Image source={require("../assets/homePage/chevron_img.png")} />
              </>
               )}
           </TouchableOpacity>


          </View>

          <View style={styles.loanContainer}>
            <TouchableOpacity style={styles.loan1} onPress={() => navigation.navigate('loanLandingScreen')}>
              <Image  source={require("../assets/homePage/get_loan.png")} style={styles.loan_icon} />
              <Text style={styles.small_text}>Take loan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loan1} onPress={() => navigation.navigate('finalwithdrawal')}>
              <Image source={require("../assets/homePage/withdraw.png")}/>
              <Text style={styles.small_text}>Withdraw</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loan1} onPress={() => navigation.navigate('repayLoan')}>
              <Image source={require("../assets/homePage/repay.png")}/>
              <Text style={styles.small_text}>Repay loan</Text>
            </TouchableOpacity>
          </View>
              
          <View style={styles.loanContainer2}>
            <TouchableOpacity onPress={() => navigation.navigate('airtime')} style={styles.loan2}>
              <View style={styles.small_logo}>
                <Image source={require("../assets/homePage/airtime.png")}/>
              </View>
              <Text style={styles.small_text}>Airtime</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('data')} style={styles.loan2}>
              <View style={styles.small_logo}>
                <Image source={require("../assets/homePage/data.png")}/>
              </View>
              <Text style={styles.small_text}>Data</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('electricity')} style={styles.loan2}>
              <View style={styles.small_logo}>
                <Image source={require("../assets/homePage/electricity.png")}/>
              </View>
              <Text style={styles.small_text}>Electricity</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('BetAccount')} style={styles.loan2}>
              <View style={styles.small_logo}>
                <Image source={require("../assets/homePage/bet_acc.png")}/>
              </View>
              <Text style={styles.small_text}>Bet account</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.investMain}>
            <TouchableOpacity onPress={() => navigation.navigate('investment')} style={styles.invest}>
              <Image source={require("../assets/homePage/invest.png")}/>
              <View>
                <Text style={styles.invest_text1}>Invest your money</Text>
                <Text style={styles.invest_text2}>Earn interest on your invested money</Text>
              </View>
              <EvilIcons style={styles.chevron} name="chevron-right" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('contributionActive')}  style={styles.invest}>
            <Image source={require("../assets/homePage/contribute.png")}/>
            <View>
              <Text style={styles.invest_text1}>Start a contribution</Text>
              <Text style={styles.invest_text2}>Create and manage contribution group</Text>
            </View>
            <EvilIcons style={styles.chevron} name="chevron-right" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('loanLandingScreen')}  style={styles.invest}>
            <Image source={require("../assets/homePage/loan.png")}/>
            <View>
              <Text style={styles.invest_text1}>Easy loan</Text>
              <Text style={styles.invest_text2}>Take loan with ease without collateral</Text>
            </View>
            <EvilIcons style={styles.chevron} name="chevron-right" size={24} color="black" />
            </TouchableOpacity>
          </View>
            
        </SafeAreaView>

        <TabBar home={true}/>

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

  image:{
    width:40,
    height:40,
    borderRadius: 50
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
