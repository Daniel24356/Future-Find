
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Modal } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
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
import naira from '../assets/naira.png'
import erroricon from '../assets/DangerCircle.png'
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
  const [userID, setUserID] = useState("");
  const [userName, setUserName] = useState(null);
  const [showFundAccount, setShowFundAccount] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");


  // At the top of your component:
  const [fundAmount, setFundAmount] = useState('');
  const [showConfirmModal, setShowConfirmModal] = useState(false);


  const formatNumberWithCommas = (value) => {
    // Remove non-numeric characters
    const numericValue = value.replace(/[^0-9]/g, "");
    
    // Convert to number and format with commas
    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Mock function to simulate fetching user name from an ID
  const id = "ABC1234"
  const fetchUserName = (id) => {
    if (id === "ABC1234") {
      return "MALVIN YAABARI";
    }
    return null;
  };

  // Handle selecting a platform
  const handleSelectPlatform = (platform) => {
    setSelectedPlatform(platform.id);
    setAccountLogo(platform.image);
  };

   // Function to deselect (clear) selection
  //  const handleDeselectPlatform = () => {
  //   setSelectedPlatform(null);
  //   setAccountLogo(null);
  //   Keyboard.dismiss(); // Hide the keyboard
  // };

  // Handle ID submission


  const handleContinue = () => {
    const name = fetchUserName(userID);
    
    

    if (name) {
      setUserName(name);
      setShowFundAccount(true);
      setErrorMessage("");
    } else {
      setUserName(null);
      setShowFundAccount(false);
      setErrorMessage("Unverified user ID"); 
    }

    if (fundAmount) {
      setShowConfirmModal(true);
    }
  

    
  };

  return (

//     <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
        <ScrollView>
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

                <TextInput 
                  style={styles.input} 
                  placeholder="Enter your ID" 
                  value={userID}
                  onChangeText={setUserID}
                />

                {errorMessage ? (
                  <View style={styles.errorBox}>
                    <ImageBackground
                    source={erroricon}
                    resizeMode="cover"
                    style={styles.errorIcon}
                    />
                    <Text style={styles.errorText}>{errorMessage}</Text>
                  </View>
                  ) : null}
                  {userName && (
                  <View style={styles.userNameBox}>
                    <Text style={styles.userName}>{userName}</Text>
                  </View>
                )}
              </View>
            )}

            {showFundAccount && (
              <View style={styles.fundAccountBox}>
                <View style={styles.fundTitle}>
                  <Text style={styles.fundTitleTxt}>Fund account</Text>
                  <Text style={styles.betUserID}>{id}</Text>
                </View>

                <View style={styles.fundInputBox}>
                  <TextInput 
                    style={styles.fundInput} 
                    placeholder="Fund amount" 
                    keyboardType="numeric" 
                    value={fundAmount}
                    onChangeText={(text) => {
                      setFundAmount(formatNumberWithCommas(text));
                    }}
                  />

                  <ImageBackground
                    source={naira}
                    resizeMode="cover"
                    style={styles.naira}
                  />
                </View>
                
                <View style={styles.availableBalance}>
                  <Text style={styles.availableBalanceTxt}>Available Balance:</Text>

                  <Text style={styles.fundAmountInput}>₦{Number(20000).toLocaleString()}</Text>
                </View>
                
              </View>
            )}
          </View>
        </ScrollView>
        
        {/* Continue Button */}
        <CustomButton2
          title="Continue"
          textColor="white"
          backgroundColor={selectedPlatform ? "#442CF5" : "rgba(44, 20, 221, 0.3)"}
          width="93%"
          height={50}
          borderRadius={16}
          padding={8}
          onPress={handleContinue}
        />


        <Modal
          visible={showConfirmModal}
          transparent
          animationType="slide"
          onRequestClose={() => setShowConfirmModal(false)}
        >
          <TouchableOpacity
            style={styles.modalOverlay}
            activeOpacity={1}
            onPressOut={() => setShowConfirmModal(false)}
          >
            <View style={styles.modalContainer}>

              <View style={styles.modalTitleTxt}>
                <Text style={styles.modalTitle}>Confirm transaction</Text>
                <Text style={styles.modalSubtitle}>
                  You are about to complete the below transaction
                </Text>
              </View>

              {/* Transaction details (match your Figma) */}
              <View style={styles.betLoanDetailsBox}>

                <View style={styles.betLoanDetails}>
                  <Text style={styles.detailText}>Transaction type</Text>
                  <Text style={styles.detailText2}>Bet funding</Text>
                </View>

                <View style={styles.betLoanDetails}>
                  <Text style={styles.detailText}>Platform</Text>
                  <ImageBackground source={accountLogo} resizeMode="cover" style={styles.accountLogo} />
                </View>

                <View style={styles.betLoanDetails}>
                  <Text style={styles.detailText}>User ID</Text>
                  <Text style={styles.detailText2}>{userID}</Text>
                </View>
                
                <View style={styles.betLoanDetails}>
                  <Text style={styles.detailText}>Account name</Text>
                  <Text style={styles.detailText2}>{userName}</Text>
                </View>

                <View style={styles.betLoanDetails}>
                  <Text style={styles.detailText}>Amount</Text>
                  <Text style={styles.detailText2}>₦{fundAmount}</Text>
                </View>
                
              </View>

              <TouchableOpacity
                style={styles.confirmButton}
                onPress={() => {
                  // Handle final confirmation here
                  setShowConfirmModal(false);
                }}
              >
                <Text style={styles.confirmButtonText}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>


      </View>
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
  fundInputBox : {
    width: 308,
    height: 50,
    borderRadius: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    paddingTop: 8,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: "rgba(108, 114, 127, 0.1)",
  },
  fundInput: {
    width: 200,
    height: 50,
    paddingLeft: 12,
  },
  naira: {
    width: 16,
    height: 13.71,
  },
  userNameBox:{
    width: 308,
    height: 32,
    borderRadius: 10,
    backgroundColor: '#E5F6F0',
    paddingRight: 12,
    paddingBottom: 8,
    paddingLeft: 12,
    paddingTop: 8
  },
  userName: {
    fontSize: 14,
    lineHeight: 16.1,
    color: "#00A86B",
    fontWeight: 600,
    width: 119,
    height: 16,
  },
  fundAccountBox: {
    width: 328,
    height: 137,
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    display: 'flex',
    flexDirection: 'column',
    gap: 10
  },
  fundTitle: {
    width: 308,
    height: 24,
    display: 'flex',
    flexDirection: 'row',
    gap: 20
  },
  fundTitleTxt: {
    width: 221,
    height: 24,
    color: "#292B2D",
    lineHeight: 20,
    fontSize: 16,
    fontWeight: 400,
  },
  betUserID: {
    width: 67,
    height: 18,
    color: "#6C727F",
    lineHeight: 18,
    fontSize: 12,
    fontWeight: 400,
  },
  availableBalance: {
    width: 308,
    height: 18,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    display: 'flex',
    flexDirection:'row',
    gap: 20,
    paddingRight: 6,
    paddingLeft: 6
  },
  availableBalanceTxt: {
    width: 226,
    height: 18,
    color: "#292B2D",
    lineHeight: 18,
    fontSize: 12,
    fontWeight: 400,
  },
  fundAmountInput:{
    color: '#442CF5',
    width: 50,
    height: 18,
    lineHeight: 18,
    fontSize: 12,
    fontWeight: 400,
  },
  errorBox: {
    width: 308,
    height: 26,
    padding: 4,
    backgroundColor: "rgba(253, 60, 74, 0.07)",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },
  
  errorText: {
    color: "#FD3C4A",
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 18,
    width: 102,
    height: 18
  },
  errorIcon:{
    width: 14.33,
    height: 14.33,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 328,
    height: 375.37,
    padding: 20,
    borderRadius: 16,
    backgroundColor: '#FFF',
    bottom: -150,
    display: 'flex',
    flexDirection: 'column',
    gap: 20
  },
  modalTitleTxt: {
    width: 287,
    height: 90,
    display: 'flex',
    flexDirection: 'column',
    gap: 2
  },
  modalTitle: {
    width: 287,
    height: 32,
    fontSize: 24,
    fontWeight: 600,
    lineHeight: 32.4,
    textAlign: 'center',
    color: '#131313'
  },
  modalSubtitle: {
    width: 287,
    height: 48,
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 24,
    textAlign: 'center',
    color: '#292B2D'
  },
  betLoanDetailsBox: {
    backgroundColor: '#F5F7FF',
    width: 288,
    height: 155.37,
    borderRadius: 16,
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    gap: 10
  },
  betLoanDetails: {
    backgroundColor: '#F5F7FF',
    width: 268,
    height: 18,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  detailText: {
    color: '#6C727F',
    width: 105,
    height: 18,
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 18
  },
  detailText2: {
    color: '#292B2D',
    width: 110,
    height: 18,
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 18,
    textAlign: 'right'
  },
  confirmButton: {
    backgroundColor: '#442CF5',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
});
  
