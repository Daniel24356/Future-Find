import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import OnboardingCard from '../props/OnboardingCard'


const OnboardingScreen1 = () => {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar style='light' />
        <View style={styles.image_container}>
            <Image 
                source={require("../assets/onboarding/3.png")} 
                style={styles.img_3}
            />
            <Image
                source={require("../assets/onboarding/6.png")}
                style={styles.img_6}
            />
            <Image
                source={require("../assets/onboarding/Ellipse_76.png")}
                style={styles.shadow}
            />
        </View>

        <View style={styles.message_container}>
            <OnboardingCard 
                headText={"You ought to know where your money goes"}
                parText={"Get an overview of how you are performing and motivate yourself to achieve even more"}
            />
        </View>
    </SafeAreaView>
  )
}

export default OnboardingScreen1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#442cf5',
        
    },
    text: {
        color: '#ffff',
        fontSize:25
    },
    image_container: {
        flex:1,
        width: '100%',
        // backgroundColor:'red',
        position:'relative',
        justifyContent:'center',
        alignItems:'center'
    },
    img_3: {
        position:'absolute',
        right: 10,
        bottom: 40
    },
    img_6: {
        position: 'absolute',
        bottom: 140,
        right: 140
    },
    shadow: {
        position: 'absolute',
        bottom: 0,
    },
    message_container: {
        flex: 1,
        width: '100%',
        // backgroundColor: 'black',
        justifyContent: 'center'
    }
})