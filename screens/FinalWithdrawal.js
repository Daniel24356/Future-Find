import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; 
const FinalWithdrawal =()=> {
    return (
        <SafeAreaView style={styles.container}>
         <View style={styles.header}>
                <View style={{flexDirection: "row", gap: 20, alignItems: "center"}}>
                <TouchableOpacity>
                  <Ionicons name="chevron-back" size={24} color="black" style={{backgroundColor: "white", borderRadius: 10, padding: 5}} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Withdrawal</Text>
                </View>
              </View>

               <View style={{padding: 10}}>
                    <View style={styles.card}>
                      <View style={styles.lockIcon}>
                        <Image source={require("../assets/Upload.png")}/>
                      </View>
                      <Text style={styles.totalInterest}>Total available amount</Text>
                      <Text style={styles.amount}>N150,000</Text>
                    </View>

                    <View>
                       <View>
                           
                       </View>
                    </View>
                </View>
    </SafeAreaView>
    )
}

export default FinalWithdrawal

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f3f3ff",
    },
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
      backgroundColor: "white",
      borderRadius: 10,
      padding: 20,
      alignItems: "center",
      marginTop: 50
    },
    lockIcon: {
      backgroundColor: "#442CF5",
      padding: 15,
      borderRadius: 50,
      marginBottom: 10,
    },
    totalInterest: {
      fontSize: 16,
      color: "#777",
    },
    amount: {
      fontSize: 28,
      fontWeight: "bold",
      color: "#000",
      marginVertical: 5,
    },
    sliderContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 10,
    },
    slider: {
      flex: 1,
      marginHorizontal: 10,
    },
    sliderLabel: {
      fontSize: 14,
      color: "#555",
    },
    dayCount: {
      fontSize: 12,
      color: "#777",
      marginBottom: 10,
      textAlign: "left",
      marginRight: 260
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
      padding: 10,
      marginVertical: 10,
      borderRadius: 5,
      width: "100%",
      flexDirection: "row",
    },
    warningText: {
      fontSize: 12,
      textAlign: "center",
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
  });
  