import React, { useState, useEffect, useRef } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image } from "react-native";
import { Checkbox } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import Svg, { Circle } from "react-native-svg";
const OTPScreen = ({ duration = 40 }) => {
    const otpLength = 4;
    const [otp, setOtp] = useState(new Array(otpLength).fill(""));
    const [timeLeft, setTimeLeft] = useState(duration);
    const [showResend, setShowResend] = useState(false);
    const [focusedIndex, setFocusedIndex] = useState(null);

    const inputs = useRef([]);

    const handleChange = (text, index) => {
      if (text.length > 1) {
        text = text[text.length - 1]; // Keep only the last digit
      }
      
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);
  
      if (text && index < otpLength - 1) {
        inputs.current[index + 1].focus();
      }
    };
  
    const handleKeyPress = (e, index) => {
      if (e.nativeEvent.key === "Backspace" && index > 0 && otp[index] === "") {
        inputs.current[index - 1].focus();
      }
    };

    const handleFocus = (index) => {
      setFocusedIndex(index);
    };
  
    const handleBlur = () => {
      setFocusedIndex(null);
    };

    useEffect(() => {
        if (timeLeft > 0) {
          const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
          return () => clearTimeout(timer);
        } else {
          setShowResend(true);
        }
      }, [timeLeft]);

  const handleResend = () => {
    setTimeLeft(duration);
    setShowResend(false);
  };

  const radius = 20;
  const strokeWidth = 4;
  const circumference = 2 * Math.PI * radius;
  const progress = (timeLeft / duration) * circumference;
    return (
        <SafeAreaView style={styles.container}>
              <View style={styles.minicontainer}>
                     <View style={styles.innerdiv}>
                       <View>
                       <TouchableOpacity style={styles.backButton}>
                     <Ionicons 
              name="chevron-back" 
              size={25} 
              color="black"  
            />
                  </TouchableOpacity>
                       </View>
                  <Text style={styles.writeup}>Verification</Text>
                     </View>
                  </View>

                  <View style={styles.innerCont}>
                      <Text style={styles.title}>Account Verification</Text>
                      <Text style={styles.subtitle}>We've sent you a one time password (OTP) to your email</Text>

                      <View style={{flexDirection: "row", justifyContent: "space-between"}}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          ref={(ref) => (inputs.current[index] = ref)}
          style={[
            styles.passwordInput,
            focusedIndex === index && { borderColor: "blue" }, // Change border color on focus
          ]}
          keyboardType="numeric"
          maxLength={1}
          value={digit}
          onChangeText={(text) => handleChange(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          onFocus={() => handleFocus(index)}
          onBlur={handleBlur}
        />
      ))}
    </View>

     <View>
           <Text style={styles.errormessage}><Image source={require("../assets/Danger-Circle.png")}/> The verification code is not correct</Text>
        </View>
                      <Text style={styles.subtitlemax}>Didnt't receive an OTP, resend in:</Text>

                      <View style={styles.contain}>
      {showResend ? (
        <TouchableOpacity style={styles.resendButton} onPress={handleResend}>
          <Text style={styles.resendText}>Resend</Text>
        </TouchableOpacity>
      ) : (
        <>
          <Svg height="50" width="50">
            <Circle cx="25" cy="25" r={radius} stroke="#ddd" strokeWidth={strokeWidth} fill="none" />
            <Circle
              cx="25"
              cy="25"
              r={radius}
              stroke={timeLeft <= 5 ? "red" : timeLeft <= 10 ? "green" : "blue"}
              strokeWidth={strokeWidth}
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={circumference - progress}
              strokeLinecap="round"
            />
          </Svg>
          <Text style={styles.text}>{timeLeft}</Text>
        </>
      )}
    </View>
                  </View>
        </SafeAreaView>
    )
}

export default OTPScreen

const styles = StyleSheet.create({
    minicontainer: {
        backgroundColor: "#442CF5",
        height: 120,
       },
        container: {
        flex: 1,
        backgroundColor: "#f3f3ff",
      },
      innerCont: {
          padding: 20
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
         marginTop: 50,
        marginBottom: 10,
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 10,
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
        marginBottom: 30,
        marginTop: 10
      },
      subtitlemax: {
        color: "#5e5e5e",
        marginBottom: 20,
        marginTop: 30,
        textAlign: "center"
      },
      passwordInput: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        paddingTop: 8,
        paddingRight: 12,
        paddingBottom: 8,
        paddingLeft: 12,
        borderRadius: 18,
        marginBottom: 10,
        fontSize: 20,
        height: 60,
        width: 70,
        textAlign: "center", 
        fontWeight: "bold",
        borderWidth: 1,  // Ensure there's a border
        borderColor: "white",  // Default border color
      },
      contain: {
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
      },
      text: {
        position: "absolute",
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
      },
  resendButton: {
    padding: 15,
    paddingLeft: 35,
    paddingRight: 35,
    backgroundColor: "white",
    borderRadius: 20,
  },
  resendText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#240F51",
  },
 errormessage: {
   color: "red",
   backgroundColor: "#FD3C4A12",
   padding: 7,
   borderRadius: 10,
   marginBottom: 25
 }
})