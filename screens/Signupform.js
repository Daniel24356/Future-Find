import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from "react-native";
import { Checkbox } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import TopHeader from "../props/TopHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios" 
import PopUpScreen from "../props/PopUpScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SignUpForm() {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    agreed: false,
  });

  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [confirmSecureTextEntry, setConfirmSecureTextEntry] = useState(true);
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupType, setPopupType] = useState("success");

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const handleSignUp = async () => {
    if (!form.firstName  || !form.email || !form.password || !form.confirmPassword) {
      setPopupMessage("All fields are required");
      setPopupType("caution");
      setPopupVisible(true);
      return false;
    }
    if (!validateEmail(form.email)) {
      setPopupMessage("Invalid Email");
      setPopupType("caution");
      setPopupVisible(true);
      return false;
    }
    if (form.password.length < 6) {
      setPopupMessage("Password must be 6 or more characters long");
      setPopupType("caution");
      setPopupVisible(true);
      return false;
    }
    if (form.password !== form.confirmPassword) {
      setPopupMessage("Passwords do not match");
      setPopupType("caution");
      setPopupVisible(true);
      return false;
    }
    if (!form.agreed) {
      setPopupMessage("You must agree to the terms and conditions");
      setPopupType("caution");
      setPopupVisible(true);
      return false;
    }

    try {
        // Step 1: Register the user
        const response = await axios.post("http://192.168.160.138:5000/api/v1/users/", {
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            phoneNumber: form.phoneNumber,
            password: form.password,
        });
    
        // ✅ Store the token from response
        // const token = response.data.token; // Ensure your API returns a token
        // if (token) {
        //     await AsyncStorage.setItem("userToken", token);
        //     console.log("Token stored successfully!");
        // } else {
        //     console.error("No token received from API.");
        // }
    
        // // Step 2: Send OTP
        // await axios.post("http://192.168.160.138:5000/api/v1/otp/send-otp", {
        //     applicationId: "A162193AA2D4A4D38D6B55FB9F5B5BC2", // Replace with actual value
        //     messageId: "E894D7141D7C8CB717B24656511D0697", // Replace with actual value
        //     phoneNumber: form.phoneNumber,
        // });
    
        // Step 3: Reset the form and navigate to OTP screen
        setForm({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            password: "",
            confirmPassword: "",
            agreed: false,
        });
    
        navigation.navigate("home");
    
    } catch (error) {
        console.error("Error:", error.response ? error.response.data : error.message);
        setPopupMessage("Registration failed. Please try again.");
        setPopupType("caution");
        setPopupVisible(true);
    }
  };
  

  return (
    <View style={{ flex: 1, backgroundColor: "#F5F7FF" }}>
      <SafeAreaView style={styles.container}>
        <TopHeader title="Sign Up" />
        <StatusBar backgroundColor="#442CF5" style="light" />
        <ScrollView>
          <View style={styles.innerCont}>
            <Text style={styles.title}>Welcome to Future Fund</Text>
            <Text style={styles.subtitle}>Complete the sign-up to get started</Text>
            
            {/* Input Fields */}
            <View style={styles.inputDiv}>
              <TextInput
                style={styles.input}
                placeholder="First name"
                value={form.firstName}
                onChangeText={(text) => setForm({ ...form, firstName: text })}
              />
               <TextInput
                style={styles.input}
                placeholder="Last name"
                value={form.lastName}
                onChangeText={(text) => setForm({ ...form, lastName: text })}
              /> 
              <TextInput
                style={styles.input}
                placeholder="Enter email"
                keyboardType="email-address"
                value={form.email}
                onChangeText={(text) => setForm({ ...form, email: text })}
              />

              <TextInput
                style={styles.input}
                placeholder="Enter Phone Number"
                keyboardType="phone-pad"
                value={form.phoneNumber}
                onChangeText={(text) => setForm({ ...form, phoneNumber: text })}
              />
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Password(6 or more characters)"
                  secureTextEntry={secureTextEntry}
                  value={form.password}
                  onChangeText={(text) => setForm({ ...form, password: text })}
                />
                <TouchableOpacity style={styles.eye} onPress={() => setSecureTextEntry(!secureTextEntry)}>
                  <Ionicons name={secureTextEntry ? "eye-off" : "eye"} size={20} color="gray" />
                </TouchableOpacity>
              </View>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Confirm password"
                  secureTextEntry={confirmSecureTextEntry}
                  value={form.confirmPassword}
                  onChangeText={(text) => setForm({ ...form, confirmPassword: text })}
                />
                <TouchableOpacity style={styles.eye} onPress={() => setConfirmSecureTextEntry(!confirmSecureTextEntry)}>
                  <Ionicons name={confirmSecureTextEntry ? "eye-off" : "eye"} size={20} color="gray" />
                </TouchableOpacity>
              </View>
            </View>

            {/* Checkbox */}
            <View style={styles.checkboxContainer}>
              <Checkbox
                status={form.agreed ? "checked" : "unchecked"}
                onPress={() => setForm({ ...form, agreed: !form.agreed })}
              />
              <Text style={styles.termsText}>
                By signing up, you agree to the <Text style={styles.link}>Terms of Service</Text> and <Text style={styles.link}>Privacy Policy</Text>
              </Text>
            </View>

            {/* Sign Up Button */}
            <TouchableOpacity style={[styles.button, (!form.agreed || !form.firstName || !form.lastName || !form.email ||!form.phoneNumber || !form.password || !form.confirmPassword) && styles.disabledButton]} onPress={handleSignUp}  disabled={!form.agreed || !form.firstName || !form.lastName || !form.email || !form.phoneNumber || !form.password || !form.confirmPassword}>
              <Text style={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>
            <TouchableOpacity   onPress={() => navigation.navigate('Login')}  style={styles.secButton}>
                        <Text style={styles.buttonTexttwo}>Sign In</Text>
                      </TouchableOpacity>
            {popupVisible && (
        <PopUpScreen 
          accountSaved={popupType === "success"}
          forgotPassword={popupType === "caution"}
          onPress={() => setPopupVisible(false)} // Hide popup when clicking "Okay"
        />
      )}
          </View>
        </ScrollView>
      </SafeAreaView>
      {/* <PopUpScreen otpResent={true}/> */}
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
   minicontainer: {
    backgroundColor: "#442CF5",
    height: 75,
   },
    container: {
    flex: 1,
  },
  innerCont: {
    padding: 15
  }, 

  inputDiv: {
     paddingTop: 5,
    //  backgroundColor:'red',
    gap:10
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
  },
  passwordContainer: {
    justifyContent:'center',
    // backgroundColor: "red",
    position:'relative'
  },
  checkboxContainer: {
    height:37,
    flexDirection: "row",
    alignItems: "center",
    marginTop:15,
    marginBottom: 25,
    // backgroundColor:'red'
  },
  termsText: {
    flex: 1,
    fontSize: 12,
    color: "#292B2D",
  
  },
  link: {
    color: "#442CF5",
    // fontWeight: "bold",
  },
  button: {
    height:50,
    backgroundColor: "#4a3aff",
    borderRadius: 15,
    alignItems: "center",
    justifyContent:'center',
    marginTop: 32
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
  eye: {
    position:'absolute',
    right:12
  },
  iconstwo: {
    color: "navy"
  },
  secButton: {
    height:50,
    backgroundColor: "#e9e9fe",
    borderRadius: 15,
    alignItems: "center",
    justifyContent:'center',
    marginTop: 15
  },

  buttonTexttwo:{
     color: "#240F51",
     fontSize:14,
     fontWeight:600
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
});
