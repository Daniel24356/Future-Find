import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from './CustomButton'

const PopUpScreen = () => {
  return (
    <View style={styles.background}>
        <SafeAreaView style={{flex:1, justifyContent:'flex-end', paddingBottom:30}}>
            <View style={styles.pop_up}>
                <Image 
                    source={require('../assets/popups/success.png')}
                />

                <Text style={styles.big_text}>Link resent</Text>
                <Text style={styles.small_text}>
                    Check your email (malvindesigner@gmail.com) and use the sent OTP for your account verification
                </Text>

                <CustomButton 
                    title={'Okay'}
                    backgroundColor={'#2C14DD'}
                />
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
        backgroundColor:'#444444',
        paddingHorizontal:15,
        position:'absolute'
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