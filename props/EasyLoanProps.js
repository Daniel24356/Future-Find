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
        width: 89.33,
        height: 76.73,
        gap: 10,
        flexDirection: "column",
        alignItems: "center"
    },
    easy: {
        fontWeight: 400,
        fontSize: 12
    },
    easyImg: {
        width: 34,
        height: 34.73,
        marginBottom: 8
    },
    easyT: {
        fontSize: 10,
        fontWeight: 400,
        color: "#6C727F"
    }
})

export default EasyLoanProps