import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from './CustomButton'

const PopUpScreen = ({
    otpResent, forgotPassword, accountSaved, resetPassword, logout, confirmSubmit,
    otpVerified, confirmLoanYes, confirmLoanNo
}) => {

  return (
    <View style={styles.background}>
        <SafeAreaView style={{flex:1, justifyContent:'flex-end', paddingBottom:30}}>
            <View style={styles.pop_up}>
                {
                    otpResent || forgotPassword || accountSaved || resetPassword||otpVerified||confirmLoanYes?
                    <Image 
                        source={require('../assets/popups/success.png')}
                    /> :
                    logout||confirmSubmit?
                    <Image 
                        source={require('../assets/popups/caution.png')}
                    /> : ''
                }

                {
                    otpResent || resetPassword? <Text style={styles.big_text}>Link resent</Text> :
                    forgotPassword? <Text style={styles.big_text}>Link Sent</Text> :
                    accountSaved? <Text style={styles.big_text}>Saved</Text> :
                    logout? <Text style={styles.big_text}>Log out</Text> :
                    confirmSubmit? <Text style={styles.big_text}>Submit application</Text> :
                    otpVerified? <Text style={styles.big_text}>Successful</Text> :
                    confirmLoanYes? <Text style={styles.big_text}>Awesome!</Text> : ''
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
                    </Text> : ''
                }

                <View style={{width:'100%'}}>
                    <CustomButton 
                        title={
                            otpResent||accountSaved||resetPassword||otpVerified? 'Okay' : forgotPassword? 'Done' : 
                            logout? 'Log out' : confirmSubmit? 'Submit application': ''
                        }
                        backgroundColor={'#2C14DD'}
                    />

                    {
                        logout||confirmSubmit?
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
        justifyContent:'flex-end',
        alignItems:'center',
        gap:10
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
    }
})