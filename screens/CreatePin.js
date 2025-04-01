import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, SafeAreaView, StatusBar } from "react-native";
import TopHeader from "../props/TopHeader";

const CreatePin = () => {
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [error, setError] = useState("");

  const handleSave = () => {
    if (pin.length !== 4 || confirmPin.length !== 4) {
      setError("Both fields must contain 4 digits.");
      return;
    }
    if (pin !== confirmPin) {
      setError("Pins do not match.");
      return;
    }
    setError(""); // Clear error if everything is fine
    console.log("PIN successfully created:", pin);
    // Proceed with further logic (e.g., saving PIN securely)
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#F5F7FF" }}>
      <SafeAreaView style={{ flex: 1, justifyContent: "space-between" }}>
        <StatusBar backgroundColor="#442CF5" style="light" />
        
        <View>
          <TopHeader title="Create Pin" />
          
          <View style={styles.innerCont}>
            <Text style={styles.title}>Create your 4-Digit Pin</Text>
            <Text style={styles.subtitle}>This pin will be used upon transactions</Text>

            {/* Input Fields */}
            <View style={styles.inputDiv}>
              <TextInput
                style={styles.input}
                placeholder="Enter Pin"
                keyboardType="numeric"
                maxLength={4}
                secureTextEntry={true}
                value={pin}
                onChangeText={(text) => setPin(text)}
              />
              
              <TextInput
                style={styles.input}
                placeholder="Confirm Pin"
                keyboardType="numeric"
                maxLength={4}
                secureTextEntry={true}
                value={confirmPin}
                onChangeText={(text) => setConfirmPin(text)}
              />

              {error ? (
                <View style={styles.errormessage}>
                  <Image source={require("../assets/Danger-Circle.png")} style={{ width: 16, height: 16 }} />
                  <Text style={styles.error}>{error}</Text>
                </View>
              ) : null}
            </View>
          </View>
        </View>

        {/* Save Button */}
        <View style={styles.buttons_div}>
          <TouchableOpacity
            style={[styles.button, (!pin || !confirmPin || pin !== confirmPin) && styles.disabledButton]}
            onPress={handleSave}
            disabled={!pin || !confirmPin || pin !== confirmPin}
          >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};


export default CreatePin

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

