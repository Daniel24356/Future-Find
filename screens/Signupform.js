import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Checkbox } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

export default function SignUpForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreed: false,
  });

  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [confirmSecureTextEntry, setConfirmSecureTextEntry] = useState(true);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.minicontainer}>
         <View style={styles.innerdiv}>
         <TouchableOpacity style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" style={styles.icon}/>
      </TouchableOpacity>
      <Text style={styles.writeup}>Sign Up</Text>
         </View>
      </View>

     <View style={styles.innerCont}>
     <Text style={styles.title}>Welcome to Future Fund</Text>
      <Text style={styles.subtitle}>Complete the sign up to get started</Text>

      {/* Input Fields */}
      <View style={styles.inputDiv}>
      <TextInput
        style={styles.input}
        placeholder="Full name"
        value={form.name}
        onChangeText={(text) => setForm({ ...form, name: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter email"
        keyboardType="email-address"
        value={form.email}
        onChangeText={(text) => setForm({ ...form, email: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone number"
        keyboardType="phone-pad"
        value={form.phone}
        onChangeText={(text) => setForm({ ...form, phone: text })}
      />

      {/* Password Fields */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry={secureTextEntry}
          value={form.password}
          onChangeText={(text) => setForm({ ...form, password: text })}
        />
        <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
          <Ionicons name={secureTextEntry ? "eye-off" : "eye"} size={24} color="gray" style={styles.iconstwo}/>
        </TouchableOpacity>
      </View>

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Confirm password"
          secureTextEntry={confirmSecureTextEntry}
          value={form.confirmPassword}
          onChangeText={(text) => setForm({ ...form, confirmPassword: text })}
        />
        <TouchableOpacity onPress={() => setConfirmSecureTextEntry(!confirmSecureTextEntry)}>
          <Ionicons name={confirmSecureTextEntry ? "eye-off" : "eye"} size={24} color="gray" style={styles.iconstwo}/>
        </TouchableOpacity>
      </View>
      </View>

      {/* Checkbox */}
      <View style={styles.checkboxContainer}>
        <Checkbox
          status={form.agreed ? "checked" : "unchecked"}
          onPress={() => setForm({ ...form, agreed: !form.agreed })}
          color="blue"
        />
        <Text style={styles.termsText}>
          By signing up, you agree to the{" "}
          <Text style={styles.link}>Terms of Service</Text> and <Text style={styles.link}>Privacy Policy</Text>
        </Text>
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity style={[styles.button, !form.agreed && styles.disabledButton]} disabled={!form.agreed}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secButton}>
        <Text style={styles.buttonTexttwo}>Sign In</Text>
      </TouchableOpacity>
     </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
   minicontainer: {
    backgroundColor: "#4a3aff",
    height: 115,
   },
    container: {
    flex: 1,
    backgroundColor: "#f3f3ff",
  },

  innerCont: {
      padding: 20
  }, 

  inputDiv: {
     paddingTop: 5
  },

  innerdiv: {
      flex: 1,
      flexDirection: "row",
      alignItems: "flex-end",
      paddingBottom: 10,
      gap: 110,
      paddingLeft: 13
  },
  writeup: {
       color: "#fff",
       fontWeight: "bold",
       fontSize: 18,
       paddingBottom: 15
  },
  backButton: {
    marginTop: 30,
    marginBottom: 10,
    padding: 10,
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: 900,
    color: "navy",
    marginTop: 15,
  },
  subtitle: {
    fontSize: 16,
    color: "#5e5e5e",
    marginBottom: 20,
    marginTop: 10
  },
  input: {
    backgroundColor: "white",
    padding: 17,
    borderRadius: 18,
    marginBottom: 10,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 18,
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 15
  },
  termsText: {
    flex: 1,
    fontSize: 14,
    color: "#5e5e5e",
  },
  link: {
    color: "#4a3aff",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#4a3aff",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 37
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  disabledButton: {
    backgroundColor: "#c3b3ff",
  },

  icon: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    fontSize: 24,
    color: "black"
  },
  iconstwo: {
    color: "navy"
  },
  secButton: {
    backgroundColor: "#e9e9fe",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 15
  },

  buttonTexttwo:{
     color: "navy"
  }
});
