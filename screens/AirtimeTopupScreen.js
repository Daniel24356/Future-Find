import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
  FlatList,
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import TopHeader from "../props/TopHeader";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native'

export const providerIcons = {
  MTN: require("../assets/mtn.png"),
  GLO: require("../assets/glo.png"),
  Airtel: require("../assets/airtel.png"),
  "9Mobile": require("../assets/9MOBILE.png"),
};
// const BASE_URL = "https://future-fund-backend-production.up.railway.app/api/v1";

export const buyAirtime = async (network, phone, amount) => {
  const payload = { network, phone, amount };
  try {
    await AsyncStorage.setItem("transactionPayload", JSON.stringify(payload));
    console.log("Transaction payload stored successfully");
  } catch (error) {
    console.error("Error storing transaction payload", error);
  }
};

// render area
const AirtimeTopupScreen = () => {
  const [showProviderModal, setShowProviderModal] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [airtimeAmount, setAirtimeAmount] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  // const navigation = useNavigation()

  const providerList = [
    { id: "1", name: "MTN" },
    { id: "2", name: "GLO" },
    { id: "3", name: "Airtel" },
    { id: "4", name: "9Mobile" },
  ];

  const handleContinue = async () => {
    try {
      await buyAirtime(selectedProvider, phoneNumber, airtimeAmount);
      // navigation.navigate("ReviewTransaction"); //help me navigate the stuff pr0perly to this page
    } catch (error) {
      console.error("redirection failed", error);
    }
  };
 

  const validateForm = () => {
    const isValid =
      selectedProvider &&
      phoneNumber.length >= 10 &&
      !isNaN(phoneNumber) &&
      airtimeAmount &&
      !isNaN(airtimeAmount) &&
      parseFloat(airtimeAmount) > 0;
    setIsFormValid(isValid);
  };

  const onSelectProvider = (providerName) => {
    setSelectedProvider(providerName);
    setShowProviderModal(false);
    validateForm();
  };

  const currentProviderIcon = selectedProvider
    ? providerIcons[selectedProvider]
    : require("../assets/NairaImg.png");

  const renderProvider = ({ item }) => {
    const isSelected = item.name === selectedProvider;
    return (
      <TouchableOpacity
        style={styles.providerRow}
        onPress={() => onSelectProvider(item.name)}
      >
        <Image source={providerIcons[item.name]} style={styles.providerIcon} />
        <View style={isSelected}>{isSelected}</View>
        <Text style={styles.providerName}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      {/* <TopHeader title="Airtime topup" /> */}

      <View style={styles.container}>
        {/* Phone + Provider Section */}
        <View style={styles.phoneContainer}>
          <TouchableOpacity
            style={styles.selectContainer}
            onPress={() => setShowProviderModal(true)}
          >
            <Image source={currentProviderIcon} style={styles.networkIcon} />
            <MaterialIcons name="keyboard-arrow-down" size={24} color="#666" />
          </TouchableOpacity>

          {/* Phone Input */}
          <View style={styles.phoneInfo}>
            <TextInput
              style={styles.phoneInput}
              placeholder="Phone number"
              placeholderTextColor="#aaa"
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={(text) => {
                setPhoneNumber(text);
                validateForm();
              }}
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

          {/* Preset amounts */}
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
              <TouchableOpacity
                key={index}
                style={styles.amountBox}
                onPress={() => {
                  setAirtimeAmount(amount.replace("N", ""));
                  validateForm();
                }}
              >
                <Text style={styles.amountText}>{amount}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Custom amount input */}
          <View style={styles.amountInfo}>
            <TextInput
              style={styles.amountInput}
              placeholder="Amount"
              placeholderTextColor="#aaa"
              keyboardType="numeric"
              value={airtimeAmount}
              onChangeText={(text) => {
                setAirtimeAmount(text);
                validateForm();
              }}
            />
            <TouchableOpacity>
              <Image
                source={require("../assets/contact-icon.png")}
                style={styles.contactIcon}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Continue button */}
        <TouchableOpacity
          style={[styles.button, !isFormValid && styles.buttonDisabled]}
          onPress={handleContinue}
          // disabled={!isFormValid}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>

      {/* Provider selection modal */}
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

            {/* Provider list */}
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
};

export default AirtimeTopupScreen;

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
    marginRight: 10,
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
  lowerBody: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 4,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
  },
  balanceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoIcon: {
    width: 24,
    height: 24,
  },
  balanceText: {
    color: "#00A86B",
    marginLeft: 5,
    fontSize: 16,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 10,
  },
  amountBox: {
    backgroundColor: "#F5F7FF",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 16,
    marginBottom: 10,
    width: "22%",
    alignItems: "center",
    justifyContent: "center",
  },
  amountText: {
    fontSize: 13,
    fontWeight: "600",
  },
  amountInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "whitesmoke",
    padding: 4,
  },
  amountInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    height: 50,
  },
  button: {
    backgroundColor: "#2C14DD",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 30,
  },
  buttonDisabled: {
    backgroundColor: "#b8b2f4",
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
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxSelected: {
    borderColor: "#2C14DD",
    backgroundColor: "#F4F6FE",
  },
  checkboxInner: {
    width: 10,
    height: 10,
    backgroundColor: "#2C14DD",
    borderRadius: 2,
  },
});
