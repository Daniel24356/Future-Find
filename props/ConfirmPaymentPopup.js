import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton';

const ConfirmPaymentPopup = ({confirmPayment}) => {
  return (
    <View style={styles.background}>
        <SafeAreaView style={{flex:1, justifyContent:'flex-end', paddingBottom:30}}>
            <View style={styles.pop_up}>
                {
                    confirmPayment?
                    <View style={{alignItems:'center'}}>
                        <Text style={{fontSize:24,fontWeight:600,color:'#131313',marginBottom:12}}>Confirm payment</Text>
                        <Text style={{fontSize:14,color:'#292B2D',marginBottom:20}}>You are about to make this transaction</Text>
                    </View> : ''
                }

                <View style={{backgroundColor:'#F5F7FF',borderRadius:16,padding:10,width:'100%',gap:10}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',height:18}}>
                        <Text style={{fontSize:12,color:'#6C727F'}}>Transaction type</Text>
                        <Text style={{fontSize:12,color:'#292B2D'}}>Contribution</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',height:18}}>
                        <Text style={{fontSize:12,color:'#6C727F'}}>Contribution name</Text>
                        <Text style={{fontSize:12,color:'#292B2D'}}>Saving group</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',height:18}}>
                        <Text style={{fontSize:12,color:'#6C727F'}}>Contribution charges</Text>
                        <Text style={{fontSize:12,color:'#292B2D'}}>₦50</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',height:18}}>
                        <Text style={{fontSize:12,color:'#6C727F'}}>Contribution fee</Text>
                        <Text style={{fontSize:12,color:'#292B2D'}}>₦30,000</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',height:18}}>
                        <Text style={{fontSize:12,color:'#6C727F'}}>Total amount</Text>
                        <Text style={{fontSize:12,color:'#292B2D'}}>₦30,050</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',height:18}}>
                        <Text style={{fontSize:12,color:'#6C727F'}}>Withdrawal date</Text>
                        <Text style={{fontSize:12,color:'#292B2D'}}>17, July,2025</Text>
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

export default ConfirmPaymentPopup;

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
})