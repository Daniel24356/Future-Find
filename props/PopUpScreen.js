import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from './CustomButton'
import Ionicons from '@expo/vector-icons/Ionicons';

const PopUpScreen = ({
    otpResent, forgotPassword, accountSaved, resetPassword, logout, confirmSubmit,
    otpVerified, confirmLoanYes, confirmLoanNo, withdrawalSuccess, savingsPlanCreated,
    contributionGroupCreated, joinedSavingsGroup, declinedSavingsGroup, contributionDone,
    paymentConfirmed
}) => {

  return (
    <View style={styles.background}>
        <SafeAreaView style={{flex:1, justifyContent:'flex-end', paddingBottom:30}}>
            <View style={styles.pop_up}>
                {
                    otpResent || forgotPassword || accountSaved || resetPassword||otpVerified||
                    confirmLoanYes||withdrawalSuccess||savingsPlanCreated||contributionGroupCreated||
                    joinedSavingsGroup||contributionDone||paymentConfirmed?
                    <Image 
                        source={require('../assets/popups/success.png')}
                        style={{marginBottom:5}}
                    /> :
                    logout||confirmSubmit||confirmLoanNo||declinedSavingsGroup?
                    <Image 
                        source={require('../assets/popups/caution.png')}
                        style={{marginBottom:5}}
                    /> : ''
                }

                {
                    otpResent || resetPassword? <Text style={styles.big_text}>Link resent</Text> :
                    forgotPassword? <Text style={styles.big_text}>Link Sent</Text> :
                    accountSaved? <Text style={styles.big_text}>Saved</Text> :
                    logout? <Text style={styles.big_text}>Log out</Text> :
                    confirmSubmit? <Text style={styles.big_text}>Submit application</Text> :
                    otpVerified||withdrawalSuccess||contributionGroupCreated||joinedSavingsGroup||
                    contributionDone? 
                    <Text style={styles.big_text}>Successful</Text> :
                    confirmLoanYes||savingsPlanCreated||paymentConfirmed? <Text style={styles.big_text}>Awesome!</Text> :
                    confirmLoanNo? <Text style={styles.big_text}>Oh No!</Text> : 
                    declinedSavingsGroup? <Text style={styles.big_text}>Decline</Text> : ''
                }

                {
                    otpResent?
                    <Text style={styles.small_text}>
                        Check your email (malvindesigner@gmail.com) and use the sent OTP for your account verification
                    </Text> :
                    forgotPassword? 
                    <Text style={styles.small_text}>
                        Check your email (malvindesigner@gmail.com) and follow the instructions to reset your password
                    </Text> :
                    accountSaved? 
                    <Text style={styles.small_text}>
                        Your account has been updated
                    </Text> :
                    resetPassword?
                    <Text style={styles.small_text}>
                        Check your email (malvindesigner@gmail.com) we've sent you the password reset link
                    </Text> :
                    logout?
                    <Text style={styles.small_text}>
                        Hello Malvin, are you sure you want to log out of your account?
                    </Text> :
                    confirmSubmit?
                    <Text style={styles.small_text}>
                        Hello Malvin, are you sure you want to submit this loan application?
                    </Text> :
                    otpVerified?
                    <Text style={styles.small_text}>
                        Congratulations!, we've verified your information, we'll update you on your loan application status
                    </Text> :
                    confirmLoanYes?
                    <Text style={styles.small_text}>
                        Thank you for letting us know that this loan has been disbursed to you
                    </Text> :
                    confirmLoanNo?
                    <Text style={styles.small_text}>
                        We recommend you check your internet status or restart your phone to be sure of this transaction
                    </Text> :
                    withdrawalSuccess?
                    <Text style={styles.small_text}>
                        Your transaction has been successful
                    </Text> :
                    savingsPlanCreated?
                    <Text style={styles.small_text}>
                        Your have successfully created your savings plan
                    </Text> :
                    contributionGroupCreated?
                    <Text style={styles.small_text}>
                        Your have successfully created your contribution group, you can invite members using the 
                        invitation link below
                    </Text> : 
                    joinedSavingsGroup?
                    <Text style={styles.small_text}>
                        Your have successfully joined the savings group
                    </Text> : 
                    declinedSavingsGroup?
                    <Text style={styles.small_text}>
                        Hello Malvin, are you sure you want to decline this invitation?
                    </Text> : 
                    contributionDone?
                    <Text style={styles.small_text}>
                        You have successfully made your contribution payment
                    </Text> : 
                    paymentConfirmed?
                    <Text style={styles.small_text}>
                        Thank you for confirming your payment
                    </Text> : ''
                }

                {
                    contributionGroupCreated &&
                    <View style={styles.copy}>
                        <Text style={{fontSize:14,color:'#292B2D',fontWeight:500}}>Invitation/link-here</Text>
                        <Ionicons name="copy" size={13} color="#442CF5" />
                    </View>
                }

                <View style={{width:'100%'}}>
                    <CustomButton 
                        title={
                            otpResent||accountSaved||resetPassword||otpVerified||confirmLoanYes||confirmLoanNo||
                            withdrawalSuccess||savingsPlanCreated||contributionGroupCreated||joinedSavingsGroup||
                            contributionDone||paymentConfirmed? 'Okay' : 
                            forgotPassword? 'Done' : 
                            logout? 'Log out' : confirmSubmit? 'Submit application':
                            declinedSavingsGroup? 'Decline' : ''
                        }
                        backgroundColor={'#2C14DD'}
                    />

                    {
                        logout||confirmSubmit||declinedSavingsGroup?
                        <CustomButton 
                            title={'Cancel'}
                            backgroundColor={'#EBECFD'}
                            mtop={10}
                            textColor='#240F51'
                        /> :''
                    }
                </View>
            </View>

        </SafeAreaView>
    </View>
  )
}

export default PopUpScreen

const styles = StyleSheet.create({
    background: {
        flex:1,
        width:'100%',
        height:'100%',
        backgroundColor:'#00000080',
        paddingHorizontal:15,
        position:'absolute',
        top:0,
        left:0,
        zIndex:10
    },
    pop_up: {
        width:'100%',
        backgroundColor:'#FFFF',
        borderRadius:15,
        padding:20,
        paddingTop:30,
        justifyContent:'flex-end',
        alignItems:'center',
        gap:12
    },
    big_text: {
        fontSize:24,
        fontWeight:600,
        color:'#240F51',

    },
    small_text: {
        fontSize:14,
        fontWeight:400,
        color:'#292B2D',
        textAlign:'center',
        lineHeight:24
    },
    copy: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        height:28,
        backgroundColor:'#F5F7FF',
        borderRadius:10,
        paddingHorizontal:10,
        gap:5,
    }
})