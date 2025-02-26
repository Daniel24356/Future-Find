import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "react-native";

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
                    <Ionicons name="notifications" size={24} color="black" />
                </View>
            </View>

            <View style={styles.user_below}>
                <View>
                    <Text style={styles.text1}>Your loan balance</Text>
                    <View>Transactions</View>
                </View>
                <Text style={styles.text2}>N20,983</Text>
                <Text style={styles.text3}>Repayment due: 28 March, 2025</Text>
            </View>

            <View style={styles.loanContainer}>
                <View style={styles.loan1}>
                    <Image source={require("../assets/onboarding/home-icon.png")}/>
                    <Text>Take loan</Text>
                </View>
                <View style={styles.loan1}>
                    <Image source={require("../assets/onboarding/home-icon.png")}/>
                    <Text>Take loan</Text>
                </View>
                <View style={styles.loan1}>
                    <Image source={require("../assets/onboarding/home-icon.png")}/>
                    <Text>Take loan</Text>
                </View>
            </View>

            <View style={styles.loanContainer2}>
                <View style={styles.loan2}>
                    <Image source={require("../assets/onboarding/home-icon.png")}/>
                    <Text>Take loan</Text>
                </View>
                <View style={styles.loan2}>
                    <Image source={require("../assets/onboarding/home-icon.png")}/>
                    <Text>Take loan</Text>
                </View>
                <View style={styles.loan2}>
                    <Image source={require("../assets/onboarding/home-icon.png")}/>
                    <Text>Take loan</Text>
                </View>
                <View style={styles.loan2}>
                    <Image source={require("../assets/onboarding/home-icon.png")}/>
                    <Text>Take loan</Text>
                </View>
            </View>

            <View style={styles.investMain}>
                <View style={styles.invest}>
                <Image source={require("../assets/onboarding/home-icon.png")}/>
                <View>
                    <Text>Invest your money</Text>
                    <Text>Earn interest on your invested money</Text>
                </View>
                </View>
                <View style={styles.invest}>
                <Image source={require("../assets/onboarding/home-icon.png")}/>
                <View>
                    <Text>Invest your money</Text>
                    <Text>Earn interest on your invested money</Text>
                </View>
                </View>
                <View style={styles.invest}>
                <Image source={require("../assets/onboarding/home-icon.png")}/>
                <View>
                    <Text>Invest your money</Text>
                    <Text>Earn interest on your invested money</Text>
                </View>
                </View>
            </View>

            <View style={styles.undercont}>
                <View>
                <Image source={require("../assets/onboarding/home-icon.png")}/>
                <Text>Home</Text>
                </View>
                <View>
                <Image source={require("../assets/onboarding/home-icon.png")}/>
                <Text>Home</Text>
                </View>
                <View>
                <Image source={require("../assets/onboarding/home-icon.png")}/>
                <Text>Home</Text>
                </View>
                <View>
                <Image source={require("../assets/onboarding/home-icon.png")}/>
                <Text>Home</Text>
                </View>
            </View>
        </SafeAreaView>
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
    paddingHorizontal: 15,
  },
  safeArea: {
    flex: 1,
    gap: 15
  },
  user_info: {
    width: "100%",
    flexDirection: "row",
    height: 60,
    justifyContent: "space-between",
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
    width: 45,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: 'red'
},
user_below: {
  backgroundColor: "rgb(68,44,245)",
  width: '100%',
  height: 124,
  borderRadius: 15,
  paddingTop: 10,
  paddingLeft: 10,
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
    justifyContent:'center'
  },
  investMain:{
    height: 185,
    flexDirection:'column',
    gap: 20,
    backgroundColor:'#FFFF',
  },
  invest:{
    flexDirection: 'row',
    gap:10
  },
  undercont:{
    flexDirection: 'row',
    gap: 20,
    backgroundColor:'black',
  }
});
