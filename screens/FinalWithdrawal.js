import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image, TextInput,
  ScrollView
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; 
const FinalWithdrawal =()=> {
    return (
        <ScrollView style={styles.container}>
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
                        <Image source={require("../assets/Upload.png")} style={{width: 30}}/>
                      </View>
                      <Text style={styles.totalInterest}>Total available amount</Text>
                      <Text style={styles.amount}>N150,000</Text>

                      <View style={{flexDirection: "row", alignItems: "center", gap: 15}}>
                      <View style={{backgroundColor: "#F5F7FF", flexDirection: "row", padding: 15, borderRadius: 10, gap: 10}}>
                       <View style={styles.lock}>
                          <Image source={require("../assets/Wallet.png")}/>
                      </View>
                      <View>
                      <Text style={styles.capital}>Your Capital</Text>
                      <Text style={styles.number}>N150,000</Text>
                      </View>
                       </View>

                       <View style={{backgroundColor: "#F5F7FF", flexDirection: "row", padding: 15, borderRadius: 10, gap: 10}}>
                       <View style={styles.locktwo}>
                          <Image source={require("../assets/Dolls.png")}/>
                      </View>
                      <View>
                      <Text style={styles.capital}>Total Interest</Text>
                      <Text style={styles.number}>N50.00</Text>
                      </View>
                       </View>
                      </View>

                      <View style={styles.warningBox}>
                            <Image source={require("../assets/Danger.png")}/>
                                <Text style={styles.warningText}>
                                  You cannot withdraw your interest since your durations has not been completed
                                </Text>
                              </View>

                    </View>


                    <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 25}}>
                        <Text>Early Withdrawal Fee</Text>
                        <Text style={{color: "red"}}>- N10.00</Text>
                    </View>

                     <View style={styles.passwordContainer}>
                          <TextInput
                            style={styles.passwordInput}
                            placeholder="Amount"
                            value=""
                          />
                           <Image source={require("../assets/NairaImg.png")}/>
                        
                        </View>

                        <View style={{flexDirection: "row", alignItems: "center", justifyContent: "flex-end", gap: 20}}>
                            <TouchableOpacity style={{backgroundColor: "white", borderColor: "#442CF5", borderWidth: 1, borderRadius: 10, padding: 5, paddingLeft: 24,  paddingRight: 24}}>
                                <Text style={{color: "#442CF5"}}>All</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{backgroundColor: "white", borderColor: "#442CF5", borderWidth: 1, borderRadius: 10, padding: 5, paddingLeft: 24,  paddingRight: 24}}>
                                <Text style={{color: "#442CF5"}}>50%</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.passwordContainer}>
                          <TextInput
                            style={styles.passwordInput}
                            placeholder="Select bank"
                            value=""
                          />
                           <Image source={require("../assets/arrow.png")}/>
                        
                        </View>

                        <View style={styles.passwordContainer}>
                          <TextInput
                            style={styles.passwordInput}
                            placeholder="Account number"
                            value=""
                          />
                        
                        </View>

                         <TouchableOpacity style={styles.button}>
                                  <Text style={styles.buttonText}>Continue</Text>
                                </TouchableOpacity>
                </View>
    </ScrollView>
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
      marginTop: 15
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
      marginTop: 20,
      borderRadius: 5,
    //   width: "100%",
      flexDirection: "row",
      alignItems: "center",
      gap: 10
    },
    warningText: {
      fontSize: 12,
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

    capital: {
        color: "#6C727F",
    },

    number: {
        fontSize: 18,
        fontWeight: "bold"
    },

    lock: {
        backgroundColor: "#442CF5",
        padding: 15,
        borderRadius: 50,
      },

      locktwo: {
        backgroundColor: "#00A86B",
        padding: 15,
        borderRadius: 50,
      },
      passwordContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        padding: 10,
        borderRadius: 18,
        marginBottom: 10,
        marginTop: 15
      },
      passwordInput: {
        flex: 1,
      },
  });
  