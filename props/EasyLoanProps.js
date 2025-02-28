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
        width: 110,
        height: 85,
        // backgroundColor: "red",
        flexDirection: "column",
        alignItems: "center"
    },
    easy: {
        fontWeight: 400,
    },
    easyImg: {
        width: 42,
        height: 40.73,
        marginBottom: 8
    },
    easyT: {
        fontSize: 13,
        fontWeight: 200
    }
})

export default EasyLoanProps