import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
  Alert,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ReviewTransactionScreen = ({ navigation }) => {
  const [transactionData, setTransactionData] = useState(null);
  const [isFetching, setIsFetching] = useState(true); // For retrieving data
  const [confirmLoading, setConfirmLoading] = useState(false); // For API call
  const [error, setError] = useState("");

  // Retrieve the stored transaction data when the component mounts
  useEffect(() => {
    const fetchTransactionData = async () => {
      try {
        const storedData = await AsyncStorage.getItem("transactionPayload");
        if (storedData) {
          setTransactionData(JSON.parse(storedData));
        }
      } catch (error) {
        console.error("Error reading transaction payload", error);
      } finally {
        setIsFetching(false);
      }
    };
    fetchTransactionData();
  }, []);

  const handleConfirmPayment = async () => {
    if (!transactionData) return;
    setConfirmLoading(true);
    setError("");

    // Prepare payload for the API call
    const payload = {
      network: transactionData.network,
      phone: transactionData.phone,
      amount: transactionData.amount,
    };

    try {
      // Make the API call using axios
      const response = await axios.post(
        "https://future-fund-backend-production.up.railway.app/api/v1/vtpass/airtime",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Airtime purchase successful:", response.data);
      Alert.alert("Success", `${response.data.response_description}`);
    } catch (error) {
      console.error("Error purchasing airtime", error);
      setError("Transaction failed. Please try again.");
    } finally {
      setConfirmLoading(false);
    }
  };

  if (isFetching) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#2C14DD" />
      </SafeAreaView>
    );
  }

  if (!transactionData) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>No transaction data found</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Review Transaction</Text>

      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.label}>Provider</Text>
          <Text style={styles.value}>
            {transactionData.network || "N/A"}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Amount</Text>
          <Text style={styles.value}>
            ₦{transactionData.amount || "0"}.00
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Total</Text>
          <Text style={styles.value}>
            ₦{transactionData.amount || "0"}.00
          </Text>
        </View>
      </View>

      <View style={[styles.row, styles.number]}>
        <Text style={styles.label}>Mobile Number</Text>
        <Text style={styles.value}>
          {transactionData.phone || "N/A"}
        </Text>
      </View>

      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : null}

      <TouchableOpacity
        style={styles.button}
        onPress={handleConfirmPayment}
        disabled={confirmLoading}
      >
        {confirmLoading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Confirm Payment</Text>
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ReviewTransactionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    color: "#444",
  },
  value: {
    fontSize: 16,
    fontWeight: "600",
  },
  content: {
    backgroundColor: "whitesmoke",
    flexDirection: "column",
    gap: 20,
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
  },
  number: {
    backgroundColor: "whitesmoke",
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#2C14DD",
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginBottom: 10,
  },
});
