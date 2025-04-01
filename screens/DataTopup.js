import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
  FlatList,
  Alert,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import axios from "axios";
import TopHeader from "../props/TopHeader";

const providerIcons = {
  MTN: require("../assets/mtn.png"),
  GLO: require("../assets/glo.png"),
  Airtel: require("../assets/airtel.png"),
  "9Mobile": require("../assets/9MOBILE.png"),
};

const buyData = async (network, phone, billersCode, variation_code, amount) => {
  const payload = {
    network,
    phone,
    billersCode,
    variation_code,
    amount,
  };
  try {
    const response = await axios.post(
      "https://future-fund-backend-production.up.railway.app/api/v1/vtpass/data",
      payload,
      { headers: { "Content-Type": "application/json" } }
    );
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error("Error buying data:", error);
    throw error;
  }
};

// render area
export default function DataTopupScreen() {
  const [showProviderModal, setShowProviderModal] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedPlan, setSelectedPlan] = useState(null);

  const dataPlans = [
    {
      id: "1",
      title: "100MB/1d",
      price: 100,
      variation_code: "mtn-10mb-100",
      billersCode: "MTN90",
    },
    {
      id: "2",
      title: "200mb/d",
      price: 200,
      variation_code: "MTN200MB",
      billersCode: "MTN200",
    },
    {
      id: "3",
      title: "500mb/d",
      price: 500,
      variation_code: "MTN500MB",
      billersCode: "MTN500",
    },
    {
      id: "4",
      title: "1gb/d",
      price: 1000,
      variation_code: "MTN1GB",
      billersCode: "MTN1GB",
    },
  ];

  const providerList = [
    { id: "1", name: "MTN" },
    { id: "2", name: "GLO" },
    { id: "3", name: "Airtel" },
    { id: "4", name: "9Mobile" },
  ];

  const onSelectProvider = (providerName) => {
    setSelectedProvider(providerName);
    setShowProviderModal(false);
    setSelectedPlan(null);
  };

  const renderProvider = ({ item }) => {
    const isSelected = item.name === selectedProvider;
    return (
      <TouchableOpacity
        style={styles.providerRow}
        onPress={() => onSelectProvider(item.name)}
      >
        <Image source={providerIcons[item.name]} style={styles.providerIcon} />
        <Text style={styles.providerName}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const handleContinue = async () => {
    if (!selectedProvider) {
      Alert.alert("Error", "Please select a provider");
      return;
    }
    if (!phoneNumber) {
      Alert.alert("Error", "Please enter a phone number");
      return;
    }
    if (!selectedPlan) {
      Alert.alert("Error", "Please select a data plan");
      return;
    }
    try {
      const response = await buyData(
        selectedProvider.toLowerCase() + "-data",
        phoneNumber,
        selectedPlan.billersCode,
        selectedPlan.variation_code,
        selectedPlan.price
      );
      if (response.success) {
        Alert.alert("Success", "Data purchase successful!");
      }
    } catch (error) {
      Alert.alert("Error", error.message || "An error occurred");
    }
  };

  return (
    <>
      {/* <TopHeader title="Data topup" /> */}

      <View style={styles.container}>
        {/* Provider & Phone */}
        <View style={styles.phoneContainer}>
          <TouchableOpacity
            style={styles.selectContainer}
            onPress={() => setShowProviderModal(true)}
          >
            <Image
              source={
                selectedProvider
                  ? providerIcons[selectedProvider]
                  : require("../assets/9MOBILEs.png")
              }
              style={styles.logoIcon}
            />
            <MaterialIcons name="keyboard-arrow-down" size={24} color="#666" />
          </TouchableOpacity>

          <View style={styles.phoneInfo}>
            <TextInput
              style={styles.phoneInput}
              placeholder="Phone number"
              placeholderTextColor="#aaa"
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
            <TouchableOpacity>
              <Image
                source={require("../assets/contact-icon.png")}
                style={styles.contactIcon}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Tabs for Data Plans (Hot, Daily, Weekly, Monthly) */}
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

        {/* Data Plan Card */}
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

          {/* Data Plans Grid */}
          <FlatList
            data={dataPlans}
            keyExtractor={(item) => item.id}
            numColumns={4}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.planBox,
                  selectedPlan &&
                    selectedPlan.id === item.id &&
                    styles.selectedPlanBox,
                ]}
                onPress={() => setSelectedPlan(item)}
              >
                <Text style={styles.planTitle}>{item.title}</Text>
                <Text style={styles.planPrice}>₦{item.price}</Text>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Continue Button */}
        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>

      {/* Provider Dropdown Modal */}
      <Modal
        visible={showProviderModal}
        animationType="fade"
        transparent
        onRequestClose={() => setShowProviderModal(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            {/* Close & Title */}
            <View style={styles.modalHeader}>
              <TouchableOpacity
                onPress={() => setShowProviderModal(false)}
                style={styles.closeButton}
              >
                <Ionicons name="close-outline" size={24} color="#000" />
              </TouchableOpacity>
              <Text style={styles.modalTitle}>Select provider</Text>
            </View>

            {/* Provider List */}
            <FlatList
              data={providerList}
              keyExtractor={(item) => item.id}
              renderItem={renderProvider}
              style={{ marginTop: 10 }}
            />
          </View>
        </View>
      </Modal>
    </>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6FE",
    paddingHorizontal: 20,
  },
  phoneContainer: {
    flexDirection: "row",
    gap: 10,
    marginTop: 30,
  },
  selectContainer: {
    flexDirection: "row",
    height: 50,
    gap: 5,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  logoIcon: {
    width: 24,
    height: 24,
    marginLeft: 10,
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
  phoneInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  contactIcon: {
    width: 24,
    height: 24,
    tintColor: "#aaa",
    marginLeft: 10,
  },
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
    borderWidth: 1,
    borderColor: "#442CF5",
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
    borderRadius: 8,
    paddingVertical: 15,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "gainsboro",
  },
  selectedPlanBox: {
    borderWidth: 2,
    borderColor: "#442CF5",
  },
  planTitle: {
    fontSize: 12,
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
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "flex-end",
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  modalContainer: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 20,
    height: "auto",
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  closeButton: {
    marginRight: 10,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  providerRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  providerName: {
    fontSize: 16,
    color: "#292B2D",
    lineHeight: 30,
  },
  providerIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
});
