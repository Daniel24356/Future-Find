import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import TopHeader from "../props/TopHeader";

export default function DataTopupScreen() {
  return (
    <>
      {/* Top Header */}
      {/* <View style={styles.topPart}>
        <Ionicons name="arrow-back" size={24} color="#FFF" />
        <Text style={styles.appTitle}>Data topup</Text>
      </View> */}

      <TopHeader title="Data topup"/>

      <View style={styles.container}>
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

        {/* Tabs (Hot, Daily, Weekly, Monthly) */}
        <View style={styles.tabRow}>
          <TouchableOpacity style={[styles.tabButton, styles.activeTab]}>
            <Text style={[styles.tabText, styles.activeTabText]}>Hot</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButton}>
            <Text style={styles.tabText}>Daily</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButton}>
            <Text style={styles.tabText}>Weekly</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButton}>
            <Text style={styles.tabText}>Monthly</Text>
          </TouchableOpacity>
        </View>

        {/* Data Plan Grid */}
        <View style={styles.planCard}>
          <View style={styles.row}>
            <Text style={styles.label}>Data plan</Text>
            <View style={styles.balanceContainer}>
              <Image
                source={require("../assets/wallet-logo.png")}
                style={styles.logoIcon}
              />
              <Text style={styles.balanceText}>+ N160</Text>
            </View>
          </View>

          <View style={styles.grid}>
            {/* Sample data repeated. Replace with dynamic data if needed */}
            {Array(16)
              .fill(0)
              .map((_, index) => (
                <View style={styles.planBox} key={index}>
                  <Text style={styles.planTitle}>90mb/d</Text>
                  <Text style={styles.planPrice}>N100</Text>
                </View>
              ))}
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
      
    </>
  );
}

export const styles = StyleSheet.create({
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
  logoIcon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  /* Tabs (Hot, Daily, Weekly, Monthly) */
  tabRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  tabButton: {
    flex: 1,
    backgroundColor: "#FFF",
    borderRadius: 15,
    marginRight: 5,
    paddingVertical: 3,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  tabText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
  },
  activeTab: {
    borderBlockColor: "#442CF5",
    borderWidth: 1,
  },
  activeTabText: {
    color: "#442CF5",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 4,
    marginBottom: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: "400",
  },
  balanceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  balanceText: {
    color: "#442CF5",
    fontWeight: "bold",
    marginLeft: 5,
  },

  planCard: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  planBox: {
    width: "20%",
    borderRadius: 10,
    paddingVertical: 15,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "gainsboro",
    borderRadius: 8,
  },
  planTitle: {
    fontSize: 14,
    fontWeight: "400",
    color: "#333",
  },
  planPrice: {
    fontSize: 10,
    paddingVertical: 4,
    paddingHorizontal: 8,
    fontWeight: "500",
    color: "#777",
    marginTop: 5,
    backgroundColor: "#F8F9FC",
    borderRadius: 8,
  },

  /* Continue Button */
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
  phoneInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
});
