import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import CustomButton from "../props/CustomButton";
import TopHeader from "../props/TopHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import DropdownMenus from "../props/DropdownMenus";
import * as DocumentPicker from 'expo-document-picker';
import axios from 'axios';

const API_BASE_URL = 'YOUR_API_BASE_URL'; // Replace with your actual API base URL

export default function LoanLandingScreen() {
  const [formData, setFormData] = useState({
    amount: '',
    homeAddress: '',
    employmentStatus: '',
    maritalStatus: '',
    accountStatement: '',
  });
  const [employmentStatus, setEmploymentStatus] = useState(false);
  const [maritalStatus, setMaritalStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    // Amount validation
    const amountNum = Number(formData.amount);
    if (!amountNum) {
      newErrors.amount = 'Amount is required';
    } else if (amountNum < 1000) {
      newErrors.amount = 'Loan amount must be at least 1,000';
    }

    // Home address validation
    if (!formData.homeAddress.trim()) {
      newErrors.homeAddress = 'Home address is required';
    }

    // Employment status validation
    if (!formData.employmentStatus) {
      newErrors.employmentStatus = 'Employment status is required';
    }

    // Marital status validation
    if (!formData.maritalStatus) {
      newErrors.maritalStatus = 'Marital status is required';
    }

    // Account statement validation
    if (!formData.accountStatement) {
      newErrors.accountStatement = 'Account statement is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleEmploymentSelect = (selection) => {
    setFormData(prev => ({ ...prev, employmentStatus: selection }));
    setEmploymentStatus(false);
  };

  const handleMaritalSelect = (selection) => {
    setFormData(prev => ({ ...prev, maritalStatus: selection }));
    setMaritalStatus(false);
  };

  const handleFileUpload = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ['application/pdf', 'image/*'],
        copyToCacheDirectory: true,
      });

      if (result.type === 'success') {
        setLoading(true);
        
        // Create form data for file upload
        const fileFormData = new FormData();
        fileFormData.append('file', {
          uri: result.uri,
          type: result.mimeType,
          name: result.name,
        });

        // Upload file to get URL
        const uploadResponse = await axios.post(
          `${API_BASE_URL}/api/upload`,
          fileFormData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );

        if (uploadResponse.data.url) {
          setFormData(prev => ({ ...prev, accountStatement: uploadResponse.data.url }));
          Alert.alert('Success', 'Account statement uploaded successfully');
        }
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to upload account statement');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      Alert.alert('Error', 'Please fix the form errors before submitting');
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(`${API_BASE_URL}/api/loans/apply`, {
        amount: Number(formData.amount),
        homeAddress: formData.homeAddress,
        employmentStatus: formData.employmentStatus,
        maritalStatus: formData.maritalStatus,
        accountStatement: formData.accountStatement,
      });

      if (response.data.success) {
        Alert.alert('Success', 'Loan application submitted successfully');
        // Navigate or reset form here
      }
    } catch (error) {
      Alert.alert('Error', error.response?.data?.message || 'Failed to submit loan application');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {employmentStatus && (
        <DropdownMenus 
          employmentStatus={true} 
          onClose={() => setEmploymentStatus(false)} 
          employmentSelect={handleEmploymentSelect}
        />
      )}
      {maritalStatus && (
        <DropdownMenus 
          maritalStatus={true} 
          onClose={() => setMaritalStatus(false)} 
          maritalSelect={handleMaritalSelect}
        />
      )}
      <SafeAreaView>
        <StatusBar style="light" backgroundColor="#442CF5" />
        <View contentContainerStyle={styles.container}>
          <TopHeader title="Take loan" />

          <View style={styles.body}>
            <Text style={styles.header}>Let's know you better</Text>
            <Text style={styles.smallText}>Provide your accurate information</Text>

            <View>
              <TextInput
                style={[styles.input, errors.amount && styles.inputError]}
                placeholder="Amount of loan"
                keyboardType="numeric"
                value={formData.amount}
                onChangeText={(text) => setFormData(prev => ({ ...prev, amount: text }))}
              />
              {errors.amount && <Text style={styles.errorText}>{errors.amount}</Text>}
            </View>

            <TouchableOpacity 
              style={[styles.select, errors.employmentStatus && styles.inputError]} 
              onPress={() => setEmploymentStatus(true)}
            >
              <Text style={styles.selectText}>
                {formData.employmentStatus || 'Employment status'}
              </Text>
              <MaterialIcons name="keyboard-arrow-down" size={24} color="#666" />
            </TouchableOpacity>
            {errors.employmentStatus && (
              <Text style={styles.errorText}>{errors.employmentStatus}</Text>
            )}

            <TouchableOpacity 
              style={[styles.uploadButton, errors.accountStatement && styles.inputError]}
              onPress={handleFileUpload}
              disabled={loading}
            >
              <Text style={styles.uploadText}>
                {formData.accountStatement ? 'Account statement uploaded' : 'Upload account statement'}
              </Text>
              <MaterialIcons name="attach-file" size={20} color="#666" />
            </TouchableOpacity>
            {errors.accountStatement && (
              <Text style={styles.errorText}>{errors.accountStatement}</Text>
            )}

            <TouchableOpacity 
              style={[styles.select, errors.maritalStatus && styles.inputError]} 
              onPress={() => setMaritalStatus(true)}
            >
              <Text style={styles.selectText}>
                {formData.maritalStatus || 'Marital status'}
              </Text>
              <MaterialIcons name="keyboard-arrow-down" size={24} color="#666" />
            </TouchableOpacity>
            {errors.maritalStatus && (
              <Text style={styles.errorText}>{errors.maritalStatus}</Text>
            )}

            <View>
              <TextInput 
                style={[styles.input, errors.homeAddress && styles.inputError]}
                placeholder="Home address"
                value={formData.homeAddress}
                onChangeText={(text) => setFormData(prev => ({ ...prev, homeAddress: text }))}
              />
              {errors.homeAddress && (
                <Text style={styles.errorText}>{errors.homeAddress}</Text>
              )}
            </View>

            <View style={styles.button}>
              <CustomButton 
                title={loading ? "Processing..." : "Continue"} 
                backgroundColor="#2C14DD"
                onPress={handleSubmit}
                disabled={loading}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const additionalStyles = StyleSheet.create({
  inputError: {
    borderColor: '#FF0000',
    borderWidth: 1,
  },
  errorText: {
    color: '#FF0000',
    fontSize: 12,
    marginTop: 5,
    marginLeft: 5,
  },
});

export const styles = StyleSheet.create({
  ...StyleSheet.flatten(styles),
  ...additionalStyles,
});