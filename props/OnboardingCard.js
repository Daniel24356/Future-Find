import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton'
import { ActivityIndicator } from 'react-native'


const OnboardingCard = ({headText, parText, butnText, onPress, page1, page2, page3}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>
        {headText}
      </Text>
      <Text style={styles.paragraph}>
        {parText}
      </Text>

      <View style={styles.indicator}>
        <View style={page1? styles.loader : styles.loader2}></View>
        <View style={page2? styles.loader : styles.loader2}></View>
        <View style={page3? styles.loader : styles.loader2}></View>
      </View>

      <CustomButton
        title={butnText}
        backgroundColor={'#2C14DD'}
        onPress={onPress}
      />
    </View>
  )
}

export default OnboardingCard

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: "fit-content",
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 25,
        paddingBottom: 20,
        paddingTop: 30,
        borderRadius: 15,
        gap: 15
    },
    head: {
        fontSize: 24,
        fontWeight: 600,
        color: '#240F51',
        textAlign:'center',
        lineHeight: 32,
        width: 270,
    },
    paragraph: {
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 24,
        color: '#292B2D',
        textAlign: 'center'
    },
    indicator: {
        width: 40,
        height: 25,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3
    },
    loader: {
        width: 6,
        height: 18,
        backgroundColor: '#2C14DD',
        borderRadius: 56
    },
    loader2: {
        width: 6,
        height: 6,
        backgroundColor: '#BBBBBB',
        borderRadius: 56
    }
})