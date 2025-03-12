import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

const EasyLoanProps = ({easyText, easyPrice, easyImage}) => {
    return (
        <View style = {styles.contain}>
            <Image style = {styles.easyImg} source ={easyImage}/>
            <Text style = {styles.easy}>{easyText}</Text>
            <Text style = {styles.easyT}>{easyPrice}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    contain:{
        flex:1,
        // backgroundColor: "red",
        alignItems: "center",
        justifyContent:'center',
    },
    easy: {
        fontWeight: 400,
        fontSize:12,
        color:'#292B2D',
        lineHeight:18
    },
    easyImg: {
        width: 34,
        height: 34,
        marginBottom: 8
    },
    easyT: {
        fontSize: 10,
        fontWeight: 400,
        color:'#6C727F'
    }
})

export default EasyLoanProps