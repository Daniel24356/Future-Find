import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const TabBar = ({home, loan, investment, contribution}) => {

     const navigation = useNavigation();
      
  return (
    <View style={styles.tab_bar}>
        <TouchableOpacity onPress={() => navigation.navigate('home')} style={styles.tab}>
            {
                home?
                <Image source={require("../assets/homePage/tab_home.png")}/> :
                <Image source={require("../assets/investing/home_null.png")}/>
            }
            <Text style={styles.tab_text}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
            {
                loan?
                <Image source={require("../assets/investing/loan_active.png")}/> :
                <Image source={require("../assets/homePage/tab_loan.png")}/>
            }
            <Text style={styles.tab_text}>Loan</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('investment')} style={styles.tab}>
            {
                investment?
                <Image source={require("../assets/investing/target.png")}/> :
                <Image source={require("../assets/homePage/tab_inv.png")}/>
            }
            <Text style={styles.tab_text}>Investment</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('contributionActive')} style={styles.tab}>
            {
                contribution?
                <Image source={require("../assets/investing/contribution_active.png")}/> :
                <Image source={require("../assets/homePage/tab_contribution.png")}/> 
            }
            <Text style={styles.tab_text}>Contribution</Text>
        </TouchableOpacity>
    </View>
  )
}

export default TabBar

const styles = StyleSheet.create({
    tab_bar:{
        height: 70,
        width: '100%',
        flexDirection: 'row',
        backgroundColor:'#FFFF',
        alignItems: 'center',
        position:'absolute',
        bottom: 0,
        right:0
    },
    tab: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        gap: 10
    },
    tab_text: {
        color: '#6C727F',
        fontSize: 12,
        fontWeight: 400
    }
})