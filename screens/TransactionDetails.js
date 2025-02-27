import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const TransactionDetails = () => {
  return (
    <View style={styles.transDetailsBody}>
      <View style={styles.header}>
        <Text style={styles.headTxt}>Transaction Details</Text>
      </View>
      
    </View>
  )
}

export default TransactionDetails

const styles = StyleSheet.create({
    transDetailsBody:{
        backgroundColor: '#F5F7FF',
        flex: 1,
        flexDirection: 'column',
        // justifyContent: 'center',
    },
    header:{
        backgroundColor: '#442CF5',
        justifyContent: 'center',
        paddingLeft: 50,
        width: 360,
        height: 106
    },
    headTxt:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    }
})