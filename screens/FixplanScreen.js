import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; 
import Slider from "@react-native-community/slider";
import { useNavigation } from '@react-navigation/native';

const FixPlanScreen = () => {
  const [days, setDays] = useState(5);
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={{flexDirection: "row", gap: 20, alignItems: "center"}}>
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={24} color="black" style={{backgroundColor: "white", borderRadius: 10, padding: 5}} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Fix plan</Text>
        </View>
        <TouchableOpacity style={styles.createButton}>
          <Text style={styles.createText}>+ Create</Text>
        </TouchableOpacity>
      </View>

      {/* Interest Card */}
      <View style={{padding: 10}}>
      <View style={styles.card}>
        <View style={styles.lockIcon}>
          <Image source={require("../assets/Union.png")}/>
        </View>
        <Text style={styles.totalInterest}>Total interest</Text>
        <Text style={styles.amount}>N{days * 10}.00</Text>

        {/* Progress Bar */}
        <View style={{flexDirection: "row", justifyContent: "space-between", gap: 220}}>
        <Text style={styles.sliderLabel}>Days</Text>
        <Text style={styles.sliderLabel}>30 days</Text>
        </View>
        <View style={styles.sliderContainer}>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={30}
            step={1}
            minimumTrackTintColor={
              days <= 10 ? "red" : days <= 20 ? "blue" : "green"
            }
            maximumTrackTintColor="#ddd"
            thumbTintColor="white"
            value={days}
            onValueChange={(value) => setDays(value)}
          />
        </View>
        <Text style={styles.dayCount}>{days} days</Text>

        {/* Plan Details */}
        <View style={styles.details}>
          <Text style={styles.detailText}>Plan name                                                               Fixed plan</Text>
          <Text style={styles.detailText}>Plan title                                                             My savings 1</Text>
          <Text style={styles.detailText}>Amount                                                                  N150,000</Text>
          <Text style={styles.detailText}>Duration                                                                      60 days</Text>
          <Text style={styles.detailText}>Withdrawal date                                            17 Jul, 2024</Text>
          <Text style={styles.detailText}>Interest                                                                     15%/year</Text>
        </View>

        {/* Warning Message */}

        {/* Withdrawal Button */}
      </View>
      <View style={styles.warningBox}>
      <Image source={require("../assets/Danger.png")}/>
          <Text style={styles.warningText}>
            You can withdraw anytime, but withdrawing before the maturity 
            period means losing interest and being charged a fee.
          </Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={() => navigation.navigate('finalwithdrawal')}>Request withdrawal</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FixPlanScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f3f3ff",
    },
    header: {
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "space-between",
      padding: 15,
      backgroundColor: "#4A3AFF",
      height: 120
    },
    headerTitle: {
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
    },
    createButton: {
      backgroundColor: "white",
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 20,
    },
    createText: {
      fontSize: 14,
      fontWeight: "bold",
    },
    card: {
      backgroundColor: "white",
      borderRadius: 10,
      padding: 20,
      alignItems: "center",
      marginTop: 50
    },
    lockIcon: {
      backgroundColor: "#00A86B",
      padding: 15,
      borderRadius: 50,
      marginBottom: 10,
    },
    totalInterest: {
      fontSize: 16,
      color: "#777",
    },
    amount: {
      fontSize: 28,
      fontWeight: "bold",
      color: "#000",
      marginVertical: 5,
    },
    sliderContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 10,
    },
    slider: {
      flex: 1,
      marginHorizontal: 10,
    },
    sliderLabel: {
      fontSize: 14,
      color: "#555",
    },
    dayCount: {
      fontSize: 12,
      color: "#777",
      marginBottom: 10,
      textAlign: "left",
      marginRight: 260
    },
    details: {
      width: "100%",
      padding: 10,
      backgroundColor: "#f3f3ff",
      borderRadius: 10
    },
    detailText: {
      fontSize: 14,
      color: "#555",
      paddingVertical: 2,
    },
    warningBox: {
      backgroundColor: "#FFFAEC",
      padding: 10,
      marginVertical: 10,
      borderRadius: 5,
      width: "100%",
      flexDirection: "row",
    },
    warningText: {
      fontSize: 12,
      textAlign: "center",
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
  });
  