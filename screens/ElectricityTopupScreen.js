import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
} from "react-native";
import axios from "axios";
import { MaterialIcons } from "@expo/vector-icons";
import TopHeader from "../props/TopHeader";
import DropdownMenus from "../props/DropdownMenus";

const verifyMeterNumber = async (meterNumber, disco, type) => {
  const payload = { meterNumber, disco, type };

  try {
    const response = await axios.post(
      "https://future-fund-backend-production.up.railway.app/api/v1/vtpass/verifyMeter",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("meter number verified successfully", response.data);
    return response.data;
  } catch (error) {
    console.error("Error verifying meter number:", error);
    throw error; // Rethrow so we can catch it in handleContinue
  }
};

const payElectricity = async (disco, meterNumber, amount, type, phone) => {
  const payload = { disco, meterNumber, amount, type, phone };

  try {
    const response = await axios.post(
      "https://future-fund-backend-production.up.railway.app/api/v1/vtpass/electricity",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("electricity purchase response: ", response.data);
    return response.data;
  } catch (error) {
    console.error("Error purchasing electricity:", error);
    throw error;
  }
};

export default function ElectricityTopupScreen() {
  const [activeTab, setActiveTab] = useState("Prepaid");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState("");
  const [meterNumber, setMeterNumber] = useState("");
  const [amount, setAmount] = useState("");

  // Optional: If you want to pass a phone to payElectricity
  const [phone, setPhone] = useState("");

  // Callback when a provider is chosen from the dropdown
  const handleSelectProvider = (providerName) => {
    setSelectedProvider(providerName);
    setShowDropdown(false);
  };

  // Updated handleContinue
  const handleContinue = async () => {
    if (!selectedProvider) {
      Alert.alert("Error", "Please select a provider");
      return;
    }
    if (!meterNumber || !amount) {
      Alert.alert("Error", "Please enter meter number and amount");
      return;
    }

    // "prepaid" or "postpaid"
    const type = activeTab.toLowerCase();

    try {
      // 1) Verify meter number
      const verifyResponse = await verifyMeterNumber(
        meterNumber,
        selectedProvider,
        type
      );

      if (!verifyResponse?.success) {
        // If verification fails, show error
        Alert.alert(
          "Error",
          verifyResponse?.message || "Meter validation failed"
        );
        return;
      }

      // 2) Pay for electricity if meter is valid
      // Replace "phone" with actual user phone or remove if not required
      const payResponse = await payElectricity(
        selectedProvider,
        meterNumber,
        parseInt(amount),
        type,
        phone || "08011111111"
      );

      if (payResponse?.success) {
        Alert.alert("Success", "Electricity purchase successful!");
      } else {
        Alert.alert("Error", payResponse?.message || "Purchase failed");
      }
    } catch (error) {
      Alert.alert("Error", error.message || "An error occurred");
    }
  };

  return (
    <>
      <TopHeader title="Electricity" />

      <View style={styles.container}>
        {/* Tabs for Prepaid/Postpaid */}
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

        {/* Provider Selection */}
        <TouchableOpacity
          style={styles.inputContainer}
          onPress={() => setShowDropdown(true)}
        >
          <Text style={styles.providerText}>
            {selectedProvider ? selectedProvider : "Select Provider"}
          </Text>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="#666" />
        </TouchableOpacity>

        {/* Meter Number Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter meter number"
            placeholderTextColor="#888"
            keyboardType="numeric"
            value={meterNumber}
            onChangeText={setMeterNumber}
          />
        </View>

        {/* Amount Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Amount"
            placeholderTextColor="#888"
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
          />
          <Image
            source={require("../assets/NairaImg.png")}
            style={styles.contactIcon}
          />
        </View>

        {/* Optional: If you need to collect phone */}
        {/* <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter phone number"
            placeholderTextColor="#888"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
        </View> */}

        {/* Continue Button */}
        <TouchableOpacity
          style={styles.continueButton}
          onPress={handleContinue}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>

      {/* Dropdown for Provider Selection */}
      {showDropdown && (
        <DropdownMenus
          selectProvider
          onClose={() => setShowDropdown(false)}
          onSelectProvider={handleSelectProvider}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
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
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 60,
    marginBottom: 15,
  },
  providerText: {
    fontSize: 16,
    color: "#333",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  contactIcon: {
    width: 24,
    height: 24,
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
