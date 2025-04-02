import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image, TextInput,
  ScrollView,
  Animated
} from "react-native";
import TopHeader from "../props/TopHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../props/CustomButton";
import DropdownMenus from "../props/DropdownMenus";
import { StatusBar } from "expo-status-bar";
import axios from "axios";
import VerificationPopup from "../props/VerificationPopup";
import { useNavigation } from "@react-navigation/native";
import PopUpScreen from "../props/PopUpScreen";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import AsyncStorage from "@react-native-async-storage/async-storage";
const URL = "https://future-fund-backend-production.up.railway.app/api/v1/wallet";


const FinalWithdrawal =()=> {
  const navigation = useNavigation();
  const [activeButton, setActiveButton] = useState(false);
  const [bank, setBank] = useState(null);
  const [selectBank, setSelectBank] = useState(false);
  const [amount, setAmount] = useState(0);
  const [accNumber, setAccNumber] = useState(0);
  const [accBalance, setAccBalance] = useState(0);
  const [verification, setVerification] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errorPrompt, setErrorPrompt] = useState(false);
  const bars = [useRef(new Animated.Value(1)).current, useRef(new Animated.Value(1)).current, useRef(new Animated.Value(1)).current, useRef(new Animated.Value(1)).current];

  useEffect(() => {
    const animateBar = (bar, delay) => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(bar, { toValue: 2.5, duration: 200, useNativeDriver: true }),
          Animated.timing(bar, { toValue: 1, duration: 200, useNativeDriver: true }),
        ]),
        { delay }
      ).start();
    };
    bars.forEach((bar, index) => {
      animateBar(bar, index * 100);
    });
  }, []);

  useEffect(()=>{
    const getBalance = async ()=>{
      try {
        const userID = await AsyncStorage.getItem('userId');
        if(userID){
          axios.get(`${URL}/getUserBalance/${userID}`)
          .then((response)=>{
            setAccBalance(response.data.balance);
            setLoading(false);
          })
        }

      } catch (error) {
        alert("error getting balance");
      }
    };
    getBalance();
  },[success]);

  useEffect(()=>{
    if(amount.toString().length > 2 && bank && accNumber.toString().length === 10){
      if(!activeButton){
        setActiveButton(true);
      }
    }else{
      if(activeButton){
        setActiveButton(false);
      }
    }
  },[amount, bank, accNumber]);

 useEffect(()=>{
  if(amount > accBalance) {
    if(errorPrompt){
      null
    }else{
      setErrorPrompt(true);
    }
  }else{
    if(errorPrompt){
      setErrorPrompt(false);
    }
  }
 },[amount])

  const handleSelect = (selectedBank)=>{
    setBank(selectedBank);
    setSelectBank(false);
  };

  const handleWithdrawal = async ()=>{
    try {
      const userID = await AsyncStorage.getItem('userId');
      if(userID){
      axios.post(`${URL}/withdrawal`, {userId: userID, amount: Number(amount)})
      .then((response)=>{
        console.log(response.data);
        setSuccess(true);
        setAmount(0);
        setBank(null);
        setAccNumber(0);
      })
    }
    } catch (error) {
      console.log(error);
    }
  };

    return (
      <View style={{flex:1,backgroundColor:'#F5F7FF'}}>
        <StatusBar style="light" backgroundColor="#442CF5"/>
        <SafeAreaView style={{flex:1}}>
          <TopHeader title="Withdrawal" onRightPress={() => console.log("Settings Pressed")} />

          <ScrollView style={{flex:1}}>
        
            <View style={{padding: 15,gap:30}}>

              <View style={styles.card}>

                <View style={styles.lockIcon}>
                  <Image source={require("../assets/Upload.png")} />
                </View>

                <View style={{alignItems:'center'}}>
                  <Text style={styles.totalInterest}>Total available amount</Text>
                  {
                    loading?
                    <View style={styles.loader}>
                      {bars.map((bar, index) => (
                        <Animated.View key={index} style={[styles.bar, { transform: [{ scaleY: bar }] }]} />
                      ))}
                    </View>
                    :
                    <Text style={styles.amount}>{`N${accBalance.toLocaleString()}`}</Text>
                  }
                </View>


              </View>

              <View>

                {/* AMOUNT INPUT */}
                <View>
                  <View style={[styles.passwordContainer, errorPrompt && {borderWidth:1,borderColor:'red'}]}>
                    <TextInput
                      style={styles.passwordInput}
                      placeholder="Amount"
                      placeholderTextColor={'#6C727F'}
                      keyboardType="numeric"
                      value={amount}
                      onChangeText={(text)=> setAmount(text)}
                    />
                    <Image source={require("../assets/NairaImg.png")}/>
                  </View>
                  {
                    errorPrompt &&
                    <View style={styles.error}>
                      <Image
                        source={require("../assets/Danger-Circle.png")}
                        style={{width:14,height:14}}
                      />
                      <Text style={{fontSize:12,color:'#FD3C4A'}}>Insufficient balance</Text>
                    </View>
                  }
                </View>

                <View style={{flexDirection: "row",height:25,justifyContent: "flex-end", gap: 20,marginTop:10}}>
                    <TouchableOpacity style={styles.selector}>
                        <Text style={{fontSize:14,color: "#442CF5"}}>All</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.selector}>
                        <Text style={{fontSize:14,color: "#442CF5"}}>50%</Text>
                    </TouchableOpacity>
                </View>

                <View style={{gap:10,marginTop:10}}>
                  <TouchableOpacity style={styles.select_div} onPress={()=>setSelectBank(true)}>
                    {
                      bank?
                      <Text style={{fontSize:14,color:'#6C727F'}}>{bank.name}</Text> :
                      <Text style={{fontSize:14,color:'#6C727F'}}>Select bank</Text>
                    }
                    <Image source={require("../assets/arrow.png")}/>
                  </TouchableOpacity>

                  {/* ACCOUNT NUMBER INPUT */}
                  <View style={styles.passwordContainer}>
                    <TextInput
                      style={styles.passwordInput}
                      placeholder="Account number"
                      placeholderTextColor={'#6C727F'}
                      keyboardType="numeric"
                      maxLength={10}
                      value={accNumber}
                      onChangeText={(text)=> setAccNumber(text)}
                    />
                  </View>
                </View>

              </View>

            </View>
          </ScrollView>

          <View style={{paddingHorizontal:15, paddingBottom:20,paddingTop:10}}>
            {
              activeButton?
              <CustomButton
                backgroundColor={'#2C14DD'}
                title={'Continue'}
                onPress={handleWithdrawal}
              /> 
              :
              <View style={styles.button}>
                <Text style={styles.buttonText}>Continue</Text>
              </View>
            }
          </View>

        </SafeAreaView>
        {
          selectBank ?
          <DropdownMenus 
            selectBank={true}
            onClose={()=> setSelectBank(false)}
            selectedBank={handleSelect}
          /> :
          verification ?
          <VerificationPopup
            confirmVerification={true}
          /> :
          success?
          <PopUpScreen
            withdrawalSuccess={true}
            onPress={()=> setSuccess(false)}
          /> :''
        }
      </View>
  )
}

export default FinalWithdrawal

const styles = StyleSheet.create({
    header: {
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "space-between",
      padding: 15,
      backgroundColor: "#4A3AFF",
      height: 120
    },
    headerTitle: {
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
    },
    card: {
      // backgroundColor: "white",
      borderRadius: 16,
      paddingTop: 20,
      paddingBottom:10,
      paddingHorizontal:10,
      alignItems: "center",
      marginTop: 15,
      gap:15
    },
    lockIcon: {
      backgroundColor: "#442CF5",
      height:60,
      width:60,
      borderRadius: '50%',
      justifyContent:'center',
      alignItems:'center'
    },
    totalInterest: {
      fontSize: 14,
      color: "#6C727F",
    },
    amount: {
      fontSize: 24,
      fontWeight: 700,
      color: "#131313",
    },
    info: {
      flex:1,
      backgroundColor: "#F5F7FF", 
      flexDirection: "row", 
      padding: 10, 
      borderRadius: 10, 
      gap: 10
    },
    details: {
      width: "100%",
      padding: 10,
      backgroundColor: "#f3f3ff",
      borderRadius: 10
    },
    detailText: {
      fontSize: 14,
      color: "#555",
      paddingVertical: 2,
    },
    warningBox: {
      backgroundColor: "#FFFAEC",
      paddingHorizontal: 6,
      paddingVertical:4,
      borderRadius: 10,
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      gap: 10
    },
    warningText: {
      fontSize: 10,
      color:'#292B2D',
      lineHeight:18
    },
    button: {
      height:50,
      backgroundColor: "#b9b3f5",
      borderRadius: 16,
      alignItems: "center",
      justifyContent:'center'
    },
    buttonText: {
      color: "#FCFCFC",
      fontSize: 14,
      fontWeight: 600,
    },

    capital: {
      color: "#6C727F",
      fontSize:12
    },
    number: {
      fontSize: 14,
      fontWeight: 600,
      color:'#131313'
    },

    lock: {
      width:30,
      height:30,
      backgroundColor: "#442CF5",
      borderRadius: '50%',
      justifyContent:'center',
      alignItems:'center'
      },
      passwordContainer: {
        height:50,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        paddingHorizontal: 12,
        borderRadius: 16,
        gap:10
      },
      passwordInput: {
        flex: 1,
        // backgroundColor:'red'
      },
      selector: {
        backgroundColor: "white", 
        borderColor: "#442CF5", 
        borderWidth: 1, 
        borderRadius: 10, 
        paddingHorizontal:20,
        height:'100%',
        justifyContent:'center'
      },
      select_div: {
        height:50,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'white',
        borderRadius:16,
        paddingHorizontal:15
      },
      loader: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical:12
      },
      bar: {
        width: 3,
        height: 6,
        marginHorizontal: 9,
        borderRadius: 10,
        backgroundColor: "#442CF5",
      },
      error: {
        height:26,
        flexDirection:'row',
        alignItems:'center',
        gap:5,
        backgroundColor:'#FD3C4A12',
        paddingHorizontal:6,
        borderRadius:10,
        marginTop:5
      }
  });
  