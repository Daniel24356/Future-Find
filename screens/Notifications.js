
import { View, Text, StyleSheet, ImageBackground, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import back from '../assets/back.png';

const Notifications = () => {
  const navigation = useNavigation();

  // Store states separately for each switch
  const [toggles, setToggles] = useState({
    transactionAlert: false,
    updateAlert: false,
    marketingInfo: false,
  });

  // Function to toggle a specific switch
  const toggleSwitch = (key) => {
    setToggles((prevState) => ({
      ...prevState,
      [key]: !prevState[key], // Toggle the specific switch
    }));
  };

  return (
    <View style={styles.notification}>
      <View style={styles.header}>
        <ImageBackground source={back} resizeMode='cover' style={styles.back} />
        <Text style={styles.headTxt}>Notifications</Text>
      </View>

      <View style={styles.setNotiBox}>
        <Text style={styles.setNotiTxt}>Set Notifications</Text>

        <View style={styles.notiSettings}>
          {/* Transaction Alert Toggle */}
          <View style={styles.settings}>
            <Text style={styles.settingsTxt}>Transaction alert</Text>
            <Switch
              trackColor={{ false: "#E8E8E8", true: "#00A86B" }}
              thumbColor={toggles.transactionAlert ? "#FFFFFF" : "#FFFFFF"}
              ios_backgroundColor="#E8E8E8"
              onValueChange={() => toggleSwitch("transactionAlert")}
              value={toggles.transactionAlert}
            />
          </View>

          {/* Update Alert Toggle */}
          <View style={styles.settings}>
            <Text style={styles.settingsTxt}>Update alert</Text>
            <Switch
              trackColor={{ false: "#E8E8E8", true: "#00A86B" }}
              thumbColor={toggles.updateAlert ? "#FFFFFF" : "#FFFFFF"}
              ios_backgroundColor="#E8E8E8"
              onValueChange={() => toggleSwitch("updateAlert")}
              value={toggles.updateAlert}
            />
          </View>

          {/* Marketing Information Toggle */}
          <View style={styles.settings}>
            <Text style={styles.settingsTxt}>Marketing information</Text>
            <Switch
              trackColor={{ false: "#E8E8E8", true: "#00A86B" }}
              thumbColor={toggles.marketingInfo ? "#FFFFFF" : "#FFFFFF"}
              ios_backgroundColor="#E8E8E8"
              onValueChange={() => toggleSwitch("marketingInfo")}
              value={toggles.marketingInfo}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

  export default Notifications

  const styles = StyleSheet.create({
      notification: {
        backgroundColor: '#F5F7FF',
        flex: 1,
        gap: 40,
        flexDirection: 'column',
        alignItems: 'center',
        width: 360,
        height: 812,
      },
      header: {
        backgroundColor: '#442CF5',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 50,
        paddingLeft: 16,
        width: 360,
        height: 115,
        gap: 10,
        paddingBottom: 12
      },
      back: {
        width: 28,
        height: 28
      },
      headTxt: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
      },
      setNotiBox: {
        width: 328,
        height: 192,
        flexDirection: 'column',
        gap: 20,
      },
      setNotiTxt: {
        width: 123,
        height: 20,
        color: '#240F51',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 20
      },
      notiSettings: {
        width: 328,
        height: 152,
        flexDirection: 'column',
        gap: 10,
      },
      settings: {
        width: 328,
        height: 44,
        borderRadius: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#FFFFFF'
      },
      settingsTxt: {
        color: '#292B2D',
        width: 268,
        height: 20
      }
    });

