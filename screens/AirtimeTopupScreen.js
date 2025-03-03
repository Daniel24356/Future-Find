import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For icons
import { MaterialIcons } from "@expo/vector-icons"; 
import TopHeader from "../props/TopHeader";

const AirtimeTopupScreen = () => {
  return (
    <>
      {/* Top Section */}
      {/* <View style={styles.topPart}>
        <Ionicons name="arrow-back" size={24} color="white" />
        <Text style={styles.appTitle}>Airtime topup</Text>
      </View> */}

<TopHeader title="Airtime" />

      <View style={styles.container}>
        {/* Input Section */}
        <View style={styles.smallSelect}>
          <Image
            source={require("../assets/9MOBILE.png")}
            style={styles.logo}
          />
          <MaterialIcons name="keyboard-arrow-down" size={24} color="#666" />
        </View>

        <View style={styles.card}>
          <View style={styles.row}>
            <TextInput
              style={styles.input}
              placeholder="Phone number"
              placeholderTextColor="#aaa"
            />
            <Image
              source={require("../assets/contact-icon.png")}
              style={styles.logo}
            />
          </View>
        </View>

        {/* Airtime Amount Section */}
        <Text style={styles.label}>Airtime amount</Text>
        <View style={styles.row}>
          <Ionicons name="wallet-outline" size={18} color="#442CF5" />
          <Text style={styles.balanceText}>+ N160</Text>
        </View>

        <View style={styles.grid}>
          {[
            "N100",
            "N200",
            "N300",
            "N400",
            "N500",
            "N600",
            "N700",
            "N1000",
          ].map((amount, index) => (
            <TouchableOpacity key={index} style={styles.amountBox}>
              <Text style={styles.amountText}>{amount}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.card}>
          <View style={styles.row}>
            <TextInput
              style={styles.input}
              placeholder="Amount"
              placeholderTextColor="#aaa"
              keyboardType="numeric"
            />
            <Ionicons name="cash-outline" size={20} color="#aaa" />
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default AirtimeTopupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6FE",
    paddingHorizontal: 20,
  },
  topPart: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#442CF5",
    height: 100,
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  appTitle: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 5,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 20,
  },
  balanceText: {
    color: "#442CF5",
    fontWeight: "bold",
    marginLeft: 5,
  },
  input: {
    flex: 1,
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
    color: "#333",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 10,
  },
  amountBox: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
    width: "22%",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  amountText: {
    fontSize: 13,
    fontWeight: "600",
  },
  button: {
    backgroundColor: "#C2B8FC",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
  smallSelect: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 5,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    width: 59,
    flexDirection:"row",
    gap: 10,
  },
});
