import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from './CustomButton';

const ConfirmTransactionPopup = ({electricityTransaction, airtimeTransaction, dataTransaction, betTransaction}) => {
  return (
    <View style={styles.background}>
        <SafeAreaView style={{flex:1, justifyContent:'flex-end', paddingBottom:30}}>
            <View style={styles.pop_up}>

                <View style={{alignItems:'center'}}>
                    <Text style={{fontSize:24,fontWeight:600,color:'#131313',marginBottom:12}}>Confirm transaction</Text>
                    <Text style={{fontSize:14,color:'#292B2D',marginBottom:20,textAlign:'center', lineHeight:24}}>
                        You are about to complete the below transaction
                    </Text>
                </View>

                <View style={{backgroundColor:'#F5F7FF',borderRadius:16,padding:10,width:'100%',gap:10}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',height:18}}>
                        <Text style={styles.text_1}>Transaction type</Text>
                        <Text style={styles.text_2}>
                            {
                                airtimeTransaction? 'Airtime top-up' :
                                dataTransaction? 'Data top-up': 
                                electricityTransaction? 'Electricity bill':
                                betTransaction? 'Bet funding' :''
                            }
                        </Text>
                    </View>
                    {
                        electricityTransaction?
                        <View style={{flexDirection:'row',justifyContent:'space-between',height:18}}>
                            <Text style={styles.text_1}>Service type</Text>
                            <Text style={styles.text_2}>Prepaid</Text>
                        </View> :''
                    }
                    {
                        electricityTransaction?
                        <View style={{flexDirection:'row',justifyContent:'space-between',height:18}}>
                            <Text style={styles.text_1}>Service provider</Text>
                            <Text style={styles.text_2}>PHEDC</Text>
                        </View> :''
                    }
                    {
                        electricityTransaction?
                        <View style={{flexDirection:'row',justifyContent:'space-between',height:18}}>
                            <Text style={styles.text_1}>Meter number</Text>
                            <Text style={styles.text_2}>09093284414</Text>
                        </View> :''
                    }
                    {
                        electricityTransaction?
                        <View style={{flexDirection:'row',justifyContent:'space-between',height:18}}>
                            <Text style={styles.text_1}>Compound name</Text>
                            <Text style={styles.text_2}>Malvin Yaabari</Text>
                        </View> :''
                    }
                    {
                        betTransaction?
                        <View style={{flexDirection:'row',justifyContent:'space-between',height:18}}>
                            <Text style={styles.text_1}>Platform</Text>
                            <Text style={styles.text_2}>Bet9ja</Text>
                        </View> :''
                    }
                    {
                        betTransaction?
                        <View style={{flexDirection:'row',justifyContent:'space-between',height:18}}>
                            <Text style={styles.text_1}>User ID</Text>
                            <Text style={styles.text_2}>B9-HS7834</Text>
                        </View> :''
                    }
                    {
                        betTransaction?
                        <View style={{flexDirection:'row',justifyContent:'space-between',height:18}}>
                            <Text style={styles.text_1}>Account name</Text>
                            <Text style={styles.text_2}>Malvin Yaabari</Text>
                        </View> :''
                    }
                    {
                        dataTransaction||airtimeTransaction?
                        <View style={{flexDirection:'row',justifyContent:'space-between',height:18}}>
                            <Text style={styles.text_1}>Network</Text>
                            <Text style={styles.text_2}>9mobile</Text>
                        </View> :''
                    }
                    {
                        dataTransaction||airtimeTransaction?
                        <View style={{flexDirection:'row',justifyContent:'space-between',height:18}}>
                            <Text style={styles.text_1}>Phone number</Text>
                            <Text style={styles.text_2}>09093284414</Text>
                        </View> :''
                    }
                    

                    <View style={{flexDirection:'row',justifyContent:'space-between',height:18}}>
                        <Text style={styles.text_1}>Amount</Text>
                        <Text style={styles.text_2}>₦400</Text>
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

export default ConfirmTransactionPopup;

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