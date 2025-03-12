import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const VerificationPopup = ({accountVerification, confirmVerification}) => {
  return (
    <View style={styles.background}>
      <SafeAreaView style={{flex:1, justifyContent:'flex-end', paddingBottom:30}}>
        <View style={styles.pop_up}>
            <Text style={styles.head_text}>Verification</Text>

            {
                accountVerification?
                <Text style={styles.body_text}>
                    We've sent a one time password (OTP) to your email (malvindesigner@gmail.com) to confirm you're the one
                </Text> : 
                confirmVerification?
                <Text style={styles.body_text}>
                    Confirm this transaction by entering the OTP sent to your email
                </Text> : ''
            }

            <View style={{height:60,flexDirection:'row',gap:15,marginVertical:15}}>
                <View style={styles.input_div}>
                    <TextInput
                        style={styles.input}
                        maxLength={1}
                        inputMode='numeric'
                    />
                </View>
                <View style={styles.input_div}>
                    <TextInput
                        style={styles.input}
                        maxLength={1}
                        inputMode='numeric'
                    />
                </View>
                <View style={styles.input_div}>
                    <TextInput
                        style={styles.input}
                        maxLength={1}
                        inputMode='numeric'
                    />
                </View>
                <View style={styles.input_div}>
                    <TextInput
                        style={styles.input}
                        maxLength={1}
                        inputMode='numeric'
                    />
                </View>
            </View>

            <View style={{alignItems:'center',gap:10}}>
                <Text style={{fontSize:12,color:'#292B2D'}}>
                    Didn't receive an OTP? Resned in:
                </Text>

                <View style={styles.circle}>
                    <Text style={{fontSize:14,fontWeight:500,color:'#292B2D'}}>
                        38
                    </Text>
                </View>
            </View>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default VerificationPopup;

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
    head_text: {
        fontSize:24,
        fontWeight:600,
        color:'#131313'
    },
    body_text: {
        fontSize:14,
        fontWeight:400,
        color:'#292B2D',
        lineHeight:24,
        textAlign:'center'
    },
    input_div: {
        flex:1,
        borderRadius:16,
        borderWidth:1,
        borderColor:'#2C14DD1A',
        justifyContent:'center',
        alignItems:'center',
    },
    input: {
        fontSize:24,
        fontWeight:600,
        color:'#6C727F'
    },
    circle: {
        width:36,
        height:36,
        borderRadius:'50%',
        borderWidth:3,
        borderColor:'#2C14DD08',
        justifyContent:'center',
        alignItems:'center',
    }
})