import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from './CustomButton';

const ConfirmSavingsPopup = () => {
  return (
    <View style={styles.background}>
        <SafeAreaView style={{flex:1, justifyContent:'flex-end', paddingBottom:30}}>
            <View style={styles.pop_up}>

                <View style={{alignItems:'center'}}>
                    <Text style={{fontSize:24,fontWeight:600,color:'#131313',marginBottom:12}}>Confirm savings</Text>
                    <Text style={{fontSize:14,color:'#292B2D',marginBottom:20}}>You are about to create this savings plan</Text>
                </View>

                <View style={{backgroundColor:'#F5F7FF',borderRadius:16,padding:10,width:'100%',gap:10}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',height:18}}>
                        <Text style={styles.text_1}>Plan name</Text>
                        <Text style={styles.text_2}>Fixed plan</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',height:18}}>
                        <Text style={styles.text_1}>Plan title</Text>
                        <Text style={styles.text_2}>My savings 1</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',height:18}}>
                        <Text style={styles.text_1}>Amount</Text>
                        <Text style={styles.text_2}>₦150,000</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',height:18}}>
                        <Text style={styles.text_1}>Duration</Text>
                        <Text style={styles.text_2}>60days</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',height:18}}>
                        <Text style={styles.text_1}>Withdrawal date</Text>
                        <Text style={styles.text_2}>17, July,2025</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',height:18}}>
                        <Text style={styles.text_1}>Interest</Text>
                        <Text style={styles.text_2}>15%/year</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',height:18}}>
                        <Text style={styles.text_1}>Total amount in return</Text>
                        <Text style={styles.text_2}>₦175,000</Text> 
                    </View>
                </View>

                <CustomButton
                    backgroundColor={'#2C14DD'}
                    title={'Confirm'}
                />
            </View>
        </SafeAreaView>
    </View>
  )
}

export default ConfirmSavingsPopup;

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
        // gap:12
    },
    text_1: {
        fontSize:12,
        color:'#6C727F'
    },
    text_2: {
        fontSize:12,
        color:'#292B2D'
    }
})