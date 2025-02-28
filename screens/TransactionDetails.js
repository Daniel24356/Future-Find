import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import CustomButton from '../props/CustomButton'
import back from '../assets/back.png'
import Vector from '../assets/Vector.png'
import vectorBg from '../assets/vectorBg.png'
import opay from '../assets/opay.png'

const TransactionDetails = () => {
    const navigation = useNavigation();
    
  return (
    <View style={styles.transacDetails}>
      <View style={styles.header}>
        <ImageBackground
            source={back}
            resizeMode='cover'
            style={styles.image}
        ></ImageBackground>
        <Text style={styles.headTxt}>Transaction Details</Text>
      </View>

      <View style={styles.transacDetailsBody}>

        <View style={styles.withdrawNotiBox}>
            <ImageBackground source={vectorBg} resizeMode='cover' style={styles.vectorBg}></ImageBackground>
            <ImageBackground source={Vector} resizeMode='cover' style={styles.vector}></ImageBackground>

            <View style={styles.withdrawNoti}>
                <View style={styles.accWithdrawnTo}>
                    <Text style={styles.withdrewTxt}>Withdrew to:</Text>

                    <View style={styles.acctDetails}>
                        <ImageBackground source={opay} resizeMode='contain' style={styles.bank}></ImageBackground>
                        <Text style={styles.acctNo}>9093284414</Text>
                    </View>
                    
                </View>

                <Text style={styles.amount}>₦{Number(20000).toLocaleString()}</Text>
                
                {/* <Button title="Successful" onPress={() => navigation.navigate('')} style={styles.success}/> */}
                <TouchableOpacity style={styles.successBtn}>
                    <Text style={styles.successTxt}>Successful</Text>
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.details}>

            <View style={styles.senderInfoBox}>

                <View style={styles.senderInfo}>
                    <Text style={styles.amountTitle}>Amount</Text>
                    <Text style={styles.amount2}>₦{Number(20000).toLocaleString()}</Text>
                </View>

                <View style={styles.senderInfo}>
                    <Text style={styles.amountTitle}>Fee</Text>
                    <Text style={styles.amount2}>₦{Number(10).toLocaleString()}</Text>
                </View>

                <View style={styles.senderInfo}>
                    <Text style={styles.amountTitle}>Total Amount</Text>
                    <Text style={styles.amount2}>₦{Number(20000).toLocaleString()}</Text>
                </View>

            </View>

            <View style={styles.receiveInfo}>

                <View style={styles.receiverInfo}>
                    <Text style={styles.amountTitle}>Recipient</Text>
                    <View style={styles.receiverDetails}>
                        <Text style={styles.amount2}>Malvin Yaabari</Text>
                        <Text style={styles.amount2}>OPay Microfinance Bank</Text>
                        <Text style={styles.amount2}>9093284414</Text>
                    </View>
                </View>

                <View style={styles.senderInfo}>
                    <Text style={styles.amountTitle}>Transaction type</Text>
                    <Text style={styles.amount2}>Transfer to bank</Text>
                </View>

                <View style={styles.senderInfo}>
                    <Text style={styles.amountTitle}>Transaction id</Text>
                    <Text style={styles.amount2}>0933837238572321</Text>
                </View>

                <View style={styles.senderInfo}>
                    <Text style={styles.amountTitle}>Date</Text>
                    <Text style={styles.amount2}>11 Jun, 2024 - 12:00: 34AM</Text>
                </View>

            </View>

        </View>


        <View style={styles.transacBtns}>
            <CustomButton 
                title="Download receipt" 
                backgroundColor="#2C14DD" 
                width={328}
                height={50}
                borderRadius={16}
                padding={8}
                onPress={() => navigation.navigate('TransactionDetails')} 
            />

            <CustomButton 
                title="Report this transaction" 
                textColor="rgba(36, 15, 81, 1)"
                backgroundColor="rgba(44, 20, 221, 0.05)" 
                width={328}
                height={50}
                borderRadius={16}
                padding={8}
                onPress={() => navigation.navigate('TransactionDetails')} 
            />
        </View>
        
        
      </View>
      
    </View>
  )
}

export default TransactionDetails

const styles = StyleSheet.create({
    transacDetails:{
        backgroundColor: '#F5F7FF',
        flex: 1,
        gap: 40,
        padding: 0,
        flexDirection: 'column',
        alignItems: 'center',
        width: 360,
        height: 812,
    },
    header:{
        backgroundColor: '#442CF5',
        display: 'flex',
        flexDirection: 'row', // Add this to align items in a row
        alignItems: 'center',
        paddingTop: 50,
        paddingLeft: 16,
        width: 360,
        height: 115,
        gap: 10,
        paddingBottom: 12
    },
    headTxt:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    transacDetailsBody: {
        width: 328,
        height: 463.28,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center',
        gap: 30,
        // backgroundColor: 'blue'
    },
    image: {
        width: 28,
        height: 28
    },
    vectorBg: {
        width: 60,
        height: 61.28,
    },
    vector: {
        width: 28,
        height: 29.05,
        top: -47,
        // top: 14.16,
        // left: 100.5,
    },
    acctDetails:{
        width: 134,
        height: 24,
        gap: 4,
        display: 'flex', 
        flexDirection: 'row',
        alignItems: 'center'
    },
    bank: {
        width: 44,
        height: 14.52,
    },
    acctNo: {
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 24
    },
    withdrewTxt:{
        color: '#6C727F',
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 24
    },
    withdrawNotiBox: {
        width: 229,
        height: 171.28,
        display: 'flex',
        flexDirection: 'column',
        // gap: 8,
        alignItems: 'center',
        // backgroundColor: 'red'
    },
    withdrawNoti: {
        width: 229,
        height: 165,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        alignItems: 'center',
        // backgroundColor: 'black'
    },
    accWithdrawnTo: {
        width: 229,
        height: 24,
        display: 'flex',
        flexDirection: 'row', // Add this to align items in a row
        alignItems: 'center', // Ensures vertical alignment
        gap: 10,
        // backgroundColor: 'red' 
    },
    amount:{
        fontWeight: 700,
        fontSize: 24,
        lineHeight: 32.4,
        color: '#240F51',
        width: 105,
        height: 32,
        // backgroundColor: 'white'
    },
    successBtn:{
        color: 'white',
        backgroundColor: '#00A86B',
        width: 85,
        height: 22,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 2,
        // paddingRight: 10,
        paddingBottom: 4,
        paddingLeft: 5,
        border: 0,
        borderRadius: 30,
        gap: 10
    },
    successTxt:{
        color: 'white',
        fontWeight: 600,
        fontSize: 12,
        lineHeight: 18,
        width: 65,
        height: 18,
    },
    details:{
        width: 328,
        height: 262,
        gap: 10,
        display: 'flex',
        flexDirection: 'column'
    },
    senderInfoBox: {
        width: 328,
        height: 94,
        gap: 10,
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 16,
        backgroundColor: '#FFFFFF'
    },
    receiveInfo: {
        width: 328,
        height: 158,
        gap: 10,
        padding: 10,
        borderRadius: 16,
        backgroundColor: '#FFFFFF'
    },
    transacBtns: {
        width: 328,
        height: 110,
        // gap: 1,
        display: 'flex',
        flexDirection: 'column',
        // backgroundColor: '#FFF00F'
    },
    senderInfo: {
        width: 308,
        height: 18,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    amountTitle:{
        fontWeight: 400,
        fontSize: 12,
        lineHeight: 18,
        color: '#6C727F',
    },
    amount2:{
        fontWeight: 400,
        fontSize: 12,
        lineHeight: 18,
        color: '#292B2D',
    },
    receiverInfo: {
        width: 308,
        height: 54,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    receiverDetails: {
        width: 138,
        height: 54,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-end'
    },

})