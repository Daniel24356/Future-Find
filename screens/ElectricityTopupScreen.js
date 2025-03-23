import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import axios from "axios";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import TopHeader from "../props/TopHeader";
import DropdownMenus from "../props/DropdownMenus";

// Replace with your actual API key if required
const API_KEY = "YOUR_API_KEY_HERE";

// Inline API call functions
const validateMeterNumber = async (service, smartNo, type) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/v1/transactions/validateMeterNumber",
      {
        apiKey: API_KEY,
        service,
        smartNo,
        type,
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.description?.response_description ||
          "Transaction failed"
      );
    }
    throw new Error("An unexpected error occurred");
  }
};

const generateElectricityToken = async (
  service,
  accountno,
  vcode,
  amount,
  ref
) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/v1/transactions/generateElectricityToken",
      {
        apiKey: API_KEY,
        service,
        accountno,
        vcode,
        amount,
        ref,
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.description?.response_description ||
          "Transaction failed"
      );
    }
    throw new Error("An unexpected error occurred");
  }
};

export default function ElectricityTopupScreen() {
  const [activeTab, setActiveTab] = useState("Prepaid");
  const [showDropdown, setShowDropdown] = useState(false);
  // The selected provider will be used as the service parameter
  const [selectedProvider, setSelectedProvider] = useState("");
  const [meterNumber, setMeterNumber] = useState("");
  const [amount, setAmount] = useState("");

  // Callback when a provider is chosen from the dropdown
  const handleSelectProvider = (providerName) => {
    setSelectedProvider(providerName);
    setShowDropdown(false);
  };

  // Handle the Continue button press
  const handleContinue = async () => {
    if (!selectedProvider) {
      Alert.alert("Error", "Please select a provider");
      return;
    }
    if (!meterNumber || !amount) {
      Alert.alert("Error", "Please enter meter number and amount");
      return;
    }

    // Use the selectedProvider as the service parameter
    const service = selectedProvider;
    // The type is based on activeTab: "prepaid" or "postpaid"
    const type = activeTab.toLowerCase();
    try {
      // Validate the meter number first
      const validationResponse = await validateMeterNumber(
        service,
        meterNumber,
        type
      );

      if (validationResponse.success) {
        const vcode = validationResponse.vcode; // extract verification code
        const ref = `electricity-${Date.now()}`; // generate a unique reference

        // Generate the electricity token
        const tokenResponse = await generateElectricityToken(
          service,
          meterNumber,
          vcode,
          parseFloat(amount),
          ref
        );

        if (tokenResponse.success) {
          Alert.alert("Success", "Electricity token: " + tokenResponse.token);
        } else {
          Alert.alert(
            "Error",
            tokenResponse.message || "Token generation failed"
          );
        }
      } else {
        Alert.alert(
          "Error",
          validationResponse.message || "Meter validation failed"
        );
      }
    } catch (error) {
      Alert.alert("Error", error.message);
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
