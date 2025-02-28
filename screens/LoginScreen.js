import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image } from "react-native";
import { Checkbox } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigation = useNavigation();

  const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [confirmSecureTextEntry, setConfirmSecureTextEntry] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
    {/* Header */}
    <View style={styles.minicontainer}>
       <View style={styles.innerdiv}>
         <View>
         <TouchableOpacity style={styles.backButton}>
       <Ionicons 
name="chevron-back" 
size={25} 
color="black"  
/>
    </TouchableOpacity>
         </View>
    <Text style={styles.writeup}>Sign In</Text>
       </View>
    </View>

   <View style={styles.innerCont}>
   <Text style={styles.title}>We missed you!</Text>
    <Text style={styles.subtitle}>Enter your account detail to login</Text>

    {/* Input Fields */}
    <View style={styles.inputDiv}>
    <TextInput
      style={styles.input}
      placeholder="Enter email"
      keyboardType="email-address"
      value={form.email}
      onChangeText={(text) => setForm({ ...form, email: text })}
    />
    <View>
       <Text style={styles.errormessage}><Image source={require("../assets/Vector.png")}/> This email doesnt exist</Text>
    </View>

    {/* Password Fields */}
    <View style={styles.passwordContainer}>
      <TextInput
        style={styles.passwordInput}
        placeholder="Password"
        secureTextEntry={secureTextEntry}
        value={form.password}
        onChangeText={(text) => setForm({ ...form, password: text })}
      />
      <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
        <Ionicons name={secureTextEntry ? "eye-off" : "eye"} size={24} color="gray" style={styles.iconstwo}/>
      </TouchableOpacity>
    </View>
    </View>

    <View>
       <Text style={styles.errormessage}><Image source={require("../assets/Vector.png")}/> Youve entered an incorrect password</Text>
    </View>

    <View style={styles.forgot}>
    <TouchableOpacity>
      <Text>Forgotten Password?</Text>
    </TouchableOpacity>

    <TouchableOpacity>
      <Text style={styles.reset}>Reset</Text>
    </TouchableOpacity>
    </View>

    {/* Sign Up Button */}
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('home')}>
      <Text style={styles.buttonText}>Sign In</Text>
    </TouchableOpacity>

    <TouchableOpacity   onPress={() => navigation.navigate('Signup')}  style={styles.secButton}>
      <Text style={styles.buttonTexttwo}>Register</Text>
    </TouchableOpacity>
   </View>
  </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  minicontainer: {
   backgroundColor: "#442CF5",
   height: 115,
  },
   container: {
   flex: 1,
   backgroundColor: "#f3f3ff",
 },
 innerCont: {
     padding: 20
 }, 

 inputDiv: {
    paddingTop: 5
 },

 innerdiv: {
     flex: 1,
     flexDirection: "row",
     alignItems: "flex-end",
     paddingBottom: 10,
     gap: 110,
     paddingLeft: 13
 },
 writeup: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 18,
      paddingBottom: 15
 },
 backButton: {
    marginTop: 50,
   marginBottom: 10,
   // padding: 10,
   // borderRadius: 50,
   // marginBottom: 20,
   // flex: 1,
   // flexDirection: "row",
   width: 30,
   height: 30,
   justifyContent: "center",
   alignItems: "center",
   backgroundColor: "white",
   borderRadius: 10,
 },
 title: {
   fontSize: 30,
   fontWeight: 900,
   color: "navy",
   marginTop: 15,
 },
 subtitle: {
   fontSize: 16,
   color: "#5e5e5e",
   marginBottom: 20,
   marginTop: 10
 },
 input: {
   backgroundColor: "white",
   padding: 17,
   borderRadius: 18,
   marginBottom: 10,
 },
 passwordContainer: {
   flexDirection: "row",
   alignItems: "center",
   backgroundColor: "white",
   padding: 15,
   borderRadius: 18,
   marginBottom: 10,
 },
 passwordInput: {
   flex: 1,
 },
 checkboxContainer: {
   flexDirection: "row",
   alignItems: "center",
   marginBottom: 25,
 },
 termsText: {
   flex: 1,
   fontSize: 14,
   color: "#5e5e5e",
 
 },
 link: {
   color: "#4a3aff",
   fontWeight: "bold",
 },
 button: {
   backgroundColor: "#4a3aff",
   padding: 15,
   borderRadius: 15,
   alignItems: "center",
   marginTop: 37
 },
 buttonText: {
   color: "white",
   fontSize: 16,
   fontWeight: "bold",
 },
 disabledButton: {
   backgroundColor: "#c3b3ff",
 },

 icon: {
   backgroundColor: "#fff",
   padding: 15,
   borderRadius: 10,
   fontSize: 24,
   color: "black",
   width: 40,
   height: 40
 },
 iconstwo: {
   color: "navy"
 },
 secButton: {
   backgroundColor: "#e9e9fe",
   padding: 15,
   borderRadius: 15,
   alignItems: "center",
   marginTop: 15
 },

 buttonTexttwo:{
    color: "navy"
 }, 

 reset: {
  color: "#2C14DD",
  fontWeight: "bold",
  fontSize: 17,
  backgroundColor: "#2C14DD08",
  padding: 13,
  borderRadius: 10
 },
 forgot: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 15,
    paddingBottom: 100
 },
 errormessage: {
   color: "red",
   backgroundColor: "#FD3C4A12",
   padding: 7,
   borderRadius: 10,
   marginBottom: 25
 }
});

export default LoginScreen;
