import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import Svg, { Circle } from "react-native-svg";
const BVNScreen = () => {
    return (
        <SafeAreaView>
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
                         <Text style={styles.writeup}>BVN</Text>
                            </View>
                         </View>

                         <View style={styles.innerCont}>
                            <Text style={styles.title}>Verify your BVN</Text>
                             <Text style={styles.subtitle}>This is to verify your account</Text>

                              <TextInput
                                       style={styles.passwordInput}
                                       keyboardType="numeric"
                                       placeholder="Enter your bvn"
                                     />

                                     <Text style={styles.errormessage}><Image source={require("../assets/Danger-Circle.png")}/> The verification code is not correct</Text>

                                     <Text style={styles.errormessagegreen}>MALVIN YABAARI</Text>

                                     <TouchableOpacity style={styles.button}>
                                           <Text style={styles.buttonText}>Verify</Text>
                                     </TouchableOpacity>
                         </View>


    </SafeAreaView>
    )
}

export default BVNScreen

const styles = StyleSheet.create({
    minicontainer: {
     backgroundColor: "#442CF5",
     height: 120,
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
   passwordInput: {
     flexDirection: "row",
     alignItems: "center",
     backgroundColor: "white",
     padding: 15,
     paddingTop: 20,
     paddingBottom: 20,
     borderRadius: 18,
     marginBottom: 10,
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
     marginTop: 300
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
   errormessage: {
     color: "red",
     backgroundColor: "#FD3C4A12",
     padding: 7,
     borderRadius: 10,
     marginBottom: 25
   },
   errormessagegreen: {
    color: "#00A86B",
    backgroundColor: "#E5F6F0",
    padding: 7,
    borderRadius: 10,
    marginBottom: 25,
    fontWeight: "bold"
  }
 });
 