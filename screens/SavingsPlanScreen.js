import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const SavingsPlanScreen = () => {
  return (
    <>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="white" />
        <Text style={styles.headerText}>Create plan</Text>
      </View>

      <View style={styles.container}>
        {/* Title & Subtitle */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Create your savings plan</Text>
          <Text style={styles.subtitle}>
            Decide what and how to do your savings
          </Text>
        </View>

        {/* Input Fields */}
        <View style={styles.inputContainer}>
          {/* Savings Amount */}
          <View style={styles.inputBoxes}>
            <TextInput
              style={styles.input}
              placeholder="Savings amount"
              keyboardType="numeric"
              placeholderTextColor="#aaa"
            />
            <Image
              source={require("../assets/naira.png")}
              style={styles.logoIcon}
            />{" "}
          </View>
          <View style = {styles.flexedText}>
          <Text style={styles.balanceText}>
            Available Balance: 
          </Text>
          <Text style={styles.balance}>₦20,000</Text>
          </View>

          {/* Name this plan */}
          <TextInput
            style={styles.inputBox}
            placeholder="Name this plan"
            placeholderTextColor="#aaa"
          />

          {/* Withdrawal Date */}
          <View style={styles.inputBox}>
            <TextInput
              style={styles.input}
              placeholder="Withdrawal date"
              placeholderTextColor="#aaa"
            />
            <MaterialIcons name="calendar-today" size={20} color="#aaa" />
          </View>
        </View>

        {/* Continue Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6FE",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#5635D4",
    // paddingHorizontal: 20,
    height: 100,
  },
  headerText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  titleContainer: {
    marginTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "900",
    color: "#222",
  },
  subtitle: {
    fontSize: 15,
    color: "#666",
    marginTop: 10,
  },
  inputContainer: {
    marginTop: 20,
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingHorizontal: 15,
    borderRadius: 8,
    height: 50,
    marginBottom: 15,
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  currency: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  balanceText: {
    fontSize: 13,
    color: "#666",
    marginBottom: 30,
  },
  balance: {
    color: "#5635D4",
    fontWeight: "bold",
    marginLeft: 40,
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
  flexedText: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
    maxHeight: 50,
  },
  inputBoxes: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingHorizontal: 15,
    borderRadius: 8,
    height: 50,
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },
});

export default SavingsPlanScreen;
