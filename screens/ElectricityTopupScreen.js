import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function ElectricityTopupScreen() {
  const [activeTab, setActiveTab] = useState("Prepaid");

  return (
    <>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="#FFF" />
        <Text style={styles.headerTitle}>Electricity topup</Text>
      </View>

      <View style={styles.container}>
        <View style={styles.tabRow}>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === "Prepaid" && styles.activeTab,
            ]}
            onPress={() => setActiveTab("Prepaid")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "Prepaid" && styles.activeTabText,
              ]}
            >
              Prepaid
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === "Postpaid" && styles.activeTab,
            ]}
            onPress={() => setActiveTab("Postpaid")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "Postpaid" && styles.activeTabText,
              ]}
            >
              Postpaid
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Service provider"
            placeholderTextColor="#888"
          />
          <MaterialIcons name="keyboard-arrow-down" size={20} color="#888" />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter meter number"
            placeholderTextColor="#888"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Amount"
            placeholderTextColor="#888"
            keyboardType="numeric"
          />
          <Ionicons name="cash-outline" size={20} color="#888" />
        </View>

        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#442CF5",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  headerTitle: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },

  container: {
    flex: 1,
    backgroundColor: "#F4F6FE",
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  tabRow: {
    flexDirection: "row",
    marginBottom: 20,
  },
  tabButton: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingVertical: 10,
    borderRadius: 10,
    marginRight: 5,
    alignItems: "center",
  },
  tabText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#666",
  },
  activeTab: {
    backgroundColor: "#EFEFEF",
  },
  activeTabText: {
    color: "#442CF5",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },

  continueButton: {
    backgroundColor: "#C2B8FC",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 30,
  },
  continueButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
