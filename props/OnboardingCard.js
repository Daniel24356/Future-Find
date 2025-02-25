import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton'
import { ActivityIndicator } from 'react-native'


const OnboardingCard = ({headText, parText}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>
        {headText}
      </Text>
      <Text style={styles.paragraph}>
        {parText}
      </Text>

      <View style={styles.indicator}>
        <ActivityIndicator/>
      </View>

      <CustomButton
        title={'Continue'}
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
        width: 100,
    }
})