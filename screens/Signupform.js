import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Checkbox } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";
import TopHeader from "../props/TopHeader";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUpForm() {
 const navigation = useNavigation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreed: false,
  });

  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [confirmSecureTextEntry, setConfirmSecureTextEntry] = useState(true);

  return (   
    <>
    <View style={{flex:1,backgroundColor: "#F5F7FF"}}>
    <SafeAreaView style={styles.container}>
      <TopHeader title="Sign Up" />
     
     <StatusBar backgroundColor="#442CF5" style="light"/>
    <ScrollView>
    {/* Header */}
    {/* <View style={styles.minicontainer}>
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
    <Text style={styles.writeup}>Sign Up</Text>
       </View>
    </View> */}




    <View style={styles.innerCont}>
      <Text style={styles.title}>Welcome to Future Fund</Text>
      <Text style={styles.subtitle}>Complete the sign up to get started</Text>

    {/* Input Fields */}
    <View style={styles.inputDiv}>
    <TextInput
      style={styles.input}
      placeholder="Full name"
      placeholderTextColor={'#6C727F'}
      value={form.name}
      onChangeText={(text) => setForm({ ...form, name: text })}
    />
    <TextInput
      style={styles.input}
      placeholder="Enter email"
      placeholderTextColor={'#6C727F'}
      keyboardType="email-address"
      value={form.email}
      onChangeText={(text) => setForm({ ...form, email: text })}
    />
    <TextInput
      style={styles.input}
      placeholder="Phone number"
      placeholderTextColor={'#6C727F'}
      keyboardType="phone-pad"
      value={form.phone}
      onChangeText={(text) => setForm({ ...form, phone: text })}
    />

    {/* Password Fields */}
    <View style={styles.passwordContainer}>
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={'#6C727F'}
        secureTextEntry={secureTextEntry}
        value={form.password}
        onChangeText={(text) => setForm({ ...form, password: text })}
      />
      <TouchableOpacity 
        style={styles.eye}
        onPress={() => setSecureTextEntry(!secureTextEntry)}>
        <Ionicons name={secureTextEntry ? "eye-off" : "eye"} size={20} color="gray" style={styles.iconstwo}/>
      </TouchableOpacity>
    </View>

    <View style={styles.passwordContainer}>
      <TextInput
        style={styles.input}
        placeholder="Confirm password"
        placeholderTextColor={'#6C727F'}
        secureTextEntry={confirmSecureTextEntry}
        value={form.confirmPassword}
        onChangeText={(text) => setForm({ ...form, confirmPassword: text })}
      />
      <TouchableOpacity 
        style={styles.eye}
        onPress={() => setConfirmSecureTextEntry(!confirmSecureTextEntry)}>
        <Ionicons name={confirmSecureTextEntry ? "eye-off" : "eye"} size={20} color="gray" style={styles.iconstwo}/>
      </TouchableOpacity>
    </View>
    </View>

    {/* Checkbox */}
    <View style={styles.checkboxContainer}>
      <Checkbox
        status={form.agreed ? "checked" : "unchecked"}
        onPress={() => setForm({ ...form, agreed: !form.agreed })}
        color="#2C14DD"
        uncheckedColor="#2C14DD"
      />
      <Text style={styles.termsText}>
        By signing up, you agree to the{" "}
        <Text style={styles.link}> Terms of Service</Text> and <Text style={styles.link}> Privacy Policy</Text>
      </Text>
    </View>

    {/* Sign Up Button */}
    <TouchableOpacity style={[styles.button, !form.agreed && styles.disabledButton]} disabled={!form.agreed}>
      <Text style={styles.buttonText}>Sign up</Text>
    </TouchableOpacity>

    <TouchableOpacity   onPress={() => navigation.navigate('Login')}  style={styles.secButton}>
      <Text style={styles.buttonTexttwo}>Sign in</Text>
    </TouchableOpacity>
   </View>
   </ScrollView>
  </SafeAreaView>
  </View>
    </>
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
  }
});
