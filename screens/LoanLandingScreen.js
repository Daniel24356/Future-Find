import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; 
import CustomButton from "../props/CustomButton";

export default function LoanLandingScreen() {
  return (
    <View contentContainerStyle={styles.container}>
      {/* Top Header Bar */}
      <View style={styles.topPart}>
        <Text style={styles.appTitle}>Loan Application</Text>
        
      </View>

      {/* Body Section */}
      <View style={styles.body}>
        <Text style={styles.header}>Let's know you better</Text>
        <Text style={styles.smallText}>Provide your accurate information</Text>

        {/* Loan Amount Input */}
        <TextInput
          style={styles.input}
          placeholder="Amount of loan"
          keyboardType="numeric"
        />

        {/* Employment Status (Dropdown) */}
        <TouchableOpacity style={styles.select}>
          <Text style={styles.selectText}>Employment status</Text>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="#666" />
        </TouchableOpacity>

        {/* Upload Account Statement */}
        <TouchableOpacity style={styles.uploadButton}>
          <Text style={styles.uploadText}>Upload account statement</Text>
          <MaterialIcons name="attach-file" size={20} color="#666" />
        </TouchableOpacity>

        {/* Marital Status (Dropdown) */}
        <TouchableOpacity style={styles.select}>
          <Text style={styles.selectText}>Marital status</Text>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="#666" />
        </TouchableOpacity>

        {/* Home Address Input */}
        <TextInput style={styles.input} placeholder="Home address" />

        {/* Terms & Conditions Checkbox */}
        <View style={styles.termsContainer}>
          <TouchableOpacity style={styles.checkbox} />
          <Text style={styles.termsText}>
            By signing up, you agree to the{" "}
            <Text style={styles.linkText}>Terms of Service</Text> and{" "}
            <Text style={styles.linkText}>Privacy Policy</Text>
          </Text>
        </View>
        <View style={styles.button}>
          <CustomButton title="Continue" backgroundColor="#2C14DD" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingBottom: 20 },
  topPart: {
    backgroundColor: "#442CF5",
    height: 100,
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  appTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginTop: 30,
    marginBottom: -20,
  },
  body: { padding: 15, backgroundColor: "#f0f0f0", height: 1000 },
  header: { fontSize: 26, fontWeight: "900", marginTop: 20 },
  smallText: { marginTop: 9, fontSize: 14 },

  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: "#333",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginTop: 20,
  },

  select: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginTop: 20,
  },

  selectText: { fontSize: 16, color: "#666" },

  uploadButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  uploadText: { fontSize: 16, color: "#666" },

  button:{
    marginTop: 200
  },

  termsContainer: { flexDirection: "row", alignItems: "center", marginTop: 20 },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 2,
    borderColor: "#666",
    borderRadius: 4,
    marginRight: 10,
  },
  termsText: { fontSize: 14, color: "#666" },
  linkText: { color: "#442CF5", textDecorationLine: "underline" },
});
