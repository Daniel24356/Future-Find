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
      <View style={styles.topPart}>
        <Ionicons name="arrow-back" size={24} color="white" />
        <Text style={styles.appTitle}>Airtime topup</Text>
      </View>

      {/* <TopHeader title="Airtime topup" /> */}

      <View style={styles.container}>
        {/* Input Section */}
        <View style={styles.phoneContainer}>
          <View style={styles.selectContainer}>
            <Image source={require("../assets/9MOBILE.png")} />
            <MaterialIcons name="keyboard-arrow-down" size={24} color="#666" />
          </View>

          <View style={styles.phoneInfo}>
            <TextInput
              style={styles.phoneInput}
              placeholder="Phone number"
              placeholderTextColor="#aaa"
              keyboardType="phone-pad"
            />
            <TouchableOpacity>
              <Image
                source={require("../assets/contact-icon.png")}
                style={styles.contactIcon}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Airtime Amount Section */}

        <View style={styles.lowerBody}>
          <View style={styles.row}>
            <Text style={styles.label}>Airtime amount</Text>
            <View style={styles.balanceContainer}>
              <Image
                source={require("../assets/wallet-logo.png")}
                style={styles.logoIcon}
              />
              <Text style={styles.balanceText}>+ N160</Text>
            </View>
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
          <View style={styles.amountInfo}>
  <TextInput
    style={styles.amountInput}
    placeholder="Amount"
    placeholderTextColor="#aaa"
    keyboardType="numeric"
  />
  <TouchableOpacity>
    <Image
      source={require("../assets/contact-icon.png")}
      style={styles.contactIcon}
    />
  </TouchableOpacity>
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
  appTitle: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
  },
  balanceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  balanceText: {
    color: "#00A86B",
    marginLeft: 5,
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 4,
    marginBottom: 20,
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
    paddingHorizontal: 16,
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
  phoneContainer: {
    flexDirection: "row",
    gap: 10,
    marginTop: 30,
    marginBottom: 0,
  },
  selectContainer: {
    flexDirection: "row",
    height: 50,
    gap: 5,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginRight: 10,
    backgroundColor: "#FFFFFF",
  },
  networkIcon: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
  phoneInfo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    height: 50,
    borderRadius: 8,
    padding: 5,
    paddingHorizontal: 8,
  },
  phoneNumber: {
    fontSize: 16,
    color: "#333",
    fontWeight: "600",
  },
  contactIcon: {
    width: 24,
    height: 24,
    tintColor: "#aaa",
    marginLeft: 10,
  },
  lowerBody: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginTop: 20,
  },
  phoneInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    height: 90,
  },
  amountInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "gainsboro",
    padding: 4,
  },
  amountInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    height: 50,
  },
  
});
