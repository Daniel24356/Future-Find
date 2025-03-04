
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import back from '../assets/back.png';
import bet9ja from '../assets/bet9ja.png';
import betking from '../assets/betking.png';
import sportybet from '../assets/sportybet.png';
import nairabet from '../assets/nairabet.png';
import onexbet from '../assets/onexbet.png';
import betwinner from '../assets/betwinner.png';
import wgb from '../assets/wgb.png';
import surebet from '../assets/surebet.png';
import merrybet from '../assets/merrybet.png';
import betway from '../assets/betway.png';
import CustomButton2 from '../props/CustomButton2';
import { SafeAreaView } from 'react-native-safe-area-context';
import TopHeader from '../props/TopHeader';

const platforms = [
  { id: 'bet9ja', image: bet9ja },
  { id: 'betking', image: betking },
  { id: 'sportybet', image: sportybet },
  { id: 'nairabet', image: nairabet },
  { id: '1xbet', image: onexbet },
  { id: 'betwinner', image: betwinner },
  { id: 'wgb', image: wgb },
  { id: 'surebet', image: surebet },
  { id: 'merrybet', image: merrybet },
  { id: 'betway', image: betway },
];

const BetAccount = () => {
  const navigation = useNavigation();
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [accountLogo, setAccountLogo] = useState(null);

  // Function to select a platform
  const handleSelectPlatform = (platform) => {
    setSelectedPlatform(platform.id);
    setAccountLogo(platform.image);
  };

  // Function to deselect (clear) selection
  const handleDeselectPlatform = () => {
    setSelectedPlatform(null);
    setAccountLogo(null);
    Keyboard.dismiss(); // Hide the keyboard
  };

  return (
    <>
    <TopHeader title="Bet Account" />

     <TouchableWithoutFeedback onPress={handleDeselectPlatform}>
      <SafeAreaView style={styles.BetAccount}>
        {/* Header */}
        {/* <View style={styles.header}>
          <ImageBackground source={back} resizeMode="cover" style={styles.back} />
          <Text style={styles.headTxt}>Bet account</Text>
        </View> */}
        

        {/* Betting Platforms */}
        <View style={styles.BetAccountBody}>
          <View style={styles.betPlatformsBox}>
            <Text style={styles.selectPlatform}>Select platform</Text>
            <View style={styles.betPlatforms}>
              {platforms.map((platform) => (
                <TouchableOpacity
                  key={platform.id}
                  style={[
                    styles.betSites,
                    selectedPlatform === platform.id && styles.selectedImage,
                  ]}
                  onPress={() => handleSelectPlatform(platform)}
                >
                  <ImageBackground source={platform.image} resizeMode="cover" style={styles.betImage} />
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Account Info (Visible Only When a Platform is Selected) */}
          {selectedPlatform && (
            <View style={styles.accountInfoBox}>
              <View style={styles.accountInfo}>
                <Text style={styles.accountText}>Account info</Text>
                <ImageBackground source={accountLogo} resizeMode="cover" style={styles.accountLogo} />
              </View>
              <TextInput style={styles.input} placeholder="Enter your ID" />
            </View>
          )}
        </View>

        {/* Continue Button */}
        <CustomButton2
          title="Continue"
          textColor="white"
          backgroundColor={selectedPlatform ? "#442CF5" : "rgba(44, 20, 221, 0.3)"}
          width="93%"
          height={50}
          borderRadius={16}
          padding={8}
          onPress={() => navigation.navigate('TransactionDetails')}
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
    </>
   
  );
};

export default BetAccount;

const styles = StyleSheet.create({
  BetAccount: {
    backgroundColor: '#F5F7FF',
    flex: 1,
    gap: 40,
    alignItems: 'center',
    width: "100%",
    height: 812,
  },
  header: {
    backgroundColor: '#442CF5',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingLeft: 16,
    width: "100%",
    height: 115,
    gap: 10,
    paddingBottom: 12,
  },
  headTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  BetAccountBody: {
    width: "100%",
    height: 'auto',
    alignItems: 'center',
    gap: 30,
  },
  back: {
    width: 28,
    height: 28,
  },
  betPlatformsBox: {
    width: "93%",
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 16,
  },
  selectPlatform: {
    fontSize: 16,
    color: '#292B2D',
  },
  betPlatforms: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  betSites: {
    width: 90,
    height: 60,
    borderRadius: 10,
    overflow: 'hidden',
  },
  selectedImage: {
    borderWidth: 1,
    borderColor: '#442CF5',
  },
  betImage: {
    width: '100%',
    height: '100%',
  },
  accountInfoBox: {
    width: "93%",
    height: 140,
    padding: 10,
    gap: 20,
    borderRadius: 16,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  accountInfo: {
    width: "93%",
    height: 29.22,
    gap: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  accountText: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 24.3,
    color: '#292B2D',
  },
  accountLogo: {
    width: 75,
    height: 29.22,
    borderRadius: 16,
    
  },
  input: {
    width: "93%",
    height: 50,
    borderWidth: 1,
    borderColor: 'rgba(108, 114, 127, 0.1)',
    borderRadius: 16,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 12,
    paddingRight: 12,
    marginTop: 5,
  },
});
  
