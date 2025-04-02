import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import TopHeader from "../props/TopHeader";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";

const LoginScreen = () => {
const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const navigation = useNavigation();

  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [confirmSecureTextEntry, setConfirmSecureTextEntry] = useState(true);

  const validateForm = () => {
    let valid = true;
    let newErrors = { email: "", password: "" };

    if (!form.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }

    if (!form.password) {
      newErrors.password = "Password is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };
  const handleLogin = async () => {
      setErrors({ email: "", password: "" });
  
      if (!form.email) {
          setErrors((prev) => ({ ...prev, email: "Please enter your email" }));
          return;
      }
      if (!form.password) {
          setErrors((prev) => ({ ...prev, password: "Please enter your password" }));
          return;
      }
  
   
    try {
      const response = await axios.post("https://future-fund-backend-production.up.railway.app/api/v1/login/", {
        email: form.email,
        password: form.password,
      });
      
       console.log("API Response:", response.data);
  
          const { accessToken, refreshToken } = response.data;
          if (!accessToken) {
              console.error("Login successful but no token received.");
              return;
          }
  
          await AsyncStorage.setItem("userToken", accessToken);
          console.log("Token stored successfully!");
  
          console.log("jwtDecode function:", jwtDecode); // Debugging
  
          const decodedToken = jwtDecode(accessToken);
          console.log("Decoded Token:", decodedToken);
  
          const userId = decodedToken?.id || decodedToken?.userId;
          if (userId) {
              await AsyncStorage.setItem("userId", userId);
              console.log("User ID stored successfully!", userId);
          } else {
              console.error("User ID not found in token.");
          }
  
          setForm({ email: "", password: "" });
          navigation.navigate("home");
  
      } catch (error) {
          console.log("Login Error:", error.response?.data || error.message);
  
          const errorMsg = error.response?.data?.error || error.response?.data?.message || "Login failed. Please try again.";
          if (errorMsg.toLowerCase().includes("email")) {
              setErrors((prev) => ({ ...prev, email: "This email doesn't exist" }));
          } else if (errorMsg.toLowerCase().includes("password")) {
              setErrors((prev) => ({ ...prev, password: "You've entered an incorrect password" }));
          } else {
              alert(errorMsg);
          }
      }
  };
  

  
  return (
    <View style={{flex:1,backgroundColor: "#F5F7FF"}}>
      <SafeAreaView style={{flex:1,justifyContent:'space-between'}}>
        <StatusBar backgroundColor="#442CF5" style="light"/>

        <View>
          <TopHeader title="Sign in" />

          <View style={styles.innerCont}>
            <Text style={styles.title}>We missed you!</Text>
            <Text style={styles.subtitle}>Enter your account detail to login</Text>

            {/* Input Fields */}
            <View style={styles.inputDiv}>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter email"
                  keyboardType="email-address"
                  value={form.email}
                  onChangeText={(text) => setForm({ ...form, email: text })}
                />

{errors.email ? (
                  <View style={styles.errormessage}>
                    <Image source={require("../assets/Danger-Circle.png")} style={{ width: 16, height: 16 }} />
                    <Text style={styles.error}>{errors.email}</Text>
                  </View>
                ) : null}
              </View>

              {/* Password Fields */}
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  secureTextEntry={secureTextEntry}
                  value={form.password}
                  onChangeText={(text) => setForm({ ...form, password: text })}
                />
                <TouchableOpacity 
                  style={styles.eye}
                  onPress={() => setSecureTextEntry(!secureTextEntry)}>
                  <Ionicons name={secureTextEntry ? "eye-off" : "eye"} size={20} color="gray" style={styles.iconstwo}/>
                </TouchableOpacity>

                {errors.password ? (
                  <View style={styles.errormessage}>
                    <Image source={require("../assets/Danger-Circle.png")} style={{ width: 16, height: 16 }} />
                    <Text style={styles.error}>{errors.password}</Text>
                  </View>
                ) : null}
              </View>

            </View>



            <View style={styles.forgot}>
            <TouchableOpacity>
              <Text style={{fontSize:12,color:'#292B2D'}}>Forgotten Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.reset}>
              <Text style={{fontSize:14,fontWeight:500,color:'#442CF5'}}>Reset</Text>
            </TouchableOpacity>
            </View>

          </View>
        </View>

        <View style={styles.buttons_div}>
          {/* Sign Up Button */}
          <TouchableOpacity style={[styles.button, (!form.email || !form.password) && styles.disabledButton]} onPress={handleLogin} disabled={!form.email || !form.password}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity   onPress={() => navigation.navigate('Signup')}  style={styles.secButton}>
            <Text style={styles.buttonTexttwo}>Register</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};


export default LoginScreen;

const styles = StyleSheet.create({
  container: {
  flex: 1,
 },
 innerCont: {
  padding: 15,
  // backgroundColor:'red'
 }, 

 inputDiv: {
    paddingTop: 5,
    gap:12,
    // backgroundColor:'red'
 },

 innerdiv: {
     flex: 1,
     flexDirection: "row",
     alignItems: "flex-end",
     paddingBottom: 10,
     gap: 110,
     paddingLeft: 13
 },
 title: {
  fontSize: 24,
  fontWeight: 700,
  color: "#240F51",
  marginTop: 10,
},
subtitle: {
  fontSize: 14,
  color: "#292B2D",
  marginBottom: 20,
  marginTop: 10
},
input: {
  height:50,
  width:'100%',
  backgroundColor: "white",
  paddingHorizontal:12,
  borderRadius: 16,
  marginBottom: 10
},
passwordContainer: {
  justifyContent:'center',
  // backgroundColor: "red",
  gap:5,
  position:'relative'
},
eye: {
  position:'absolute',
  right:12,
  top:15
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
  height:50,
   backgroundColor: "#2C14DD",
   borderRadius: 15,
   alignItems: "center",
   justifyContent:'center',
   marginTop: 37
 },
 buttonText: {
   color: "#FCFCFC",
   fontSize: 14,
   fontWeight: 600,
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
   backgroundColor: "#2C14DD0D",
   padding: 15,
   borderRadius: 15,
   alignItems: "center",
   marginTop: 15
 },

 buttonTexttwo:{
    color: "#240F51",
    fontSize:14,
    fontWeight: 600
 }, 

 reset: {
  height:32,
  width:64,
  backgroundColor: "#2C14DD08",
  borderRadius: 10,
  justifyContent:'center',
  alignItems:'center'
 },
 forgot: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor:'red',
    marginTop:20
 },
 errormessage: {
  flexDirection:'row',
  gap:3,
  color: "red",
  backgroundColor: "#FD3C4A12",
  paddingHorizontal:6,
  paddingVertical:4,
  borderRadius: 10,
 },
 error: {
  fontSize:12,
  color:'#FD3C4A'
 },
 buttons_div: {
  paddingHorizontal:15,
  paddingVertical:30
 }
});

