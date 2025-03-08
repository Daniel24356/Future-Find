import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import OnboardingCard from '../props/OnboardingCard'
import { useNavigation } from '@react-navigation/native'


const OnboardingScreen2 = () => {
    const navigate = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar style='light' />
        <View style={styles.image_container}>
            <View style={styles.skip}>
                <TouchableOpacity style={styles.skip_opacity}>
                    <Text style={styles.text} onPress={()=> navigate.navigate("onboarding3")}>
                        Skip
                    </Text>
                </TouchableOpacity>
            </View>
            <Image 
                source={require("../assets/onboarding/Illustrations1.png")} 
                style={styles.bundle}
            />
            
        </View>

        <View style={styles.message_container}>
            <OnboardingCard 
                headText={"Gain total control of your money"}
                parText={"Track your transaction easily, with categories and financial report"}
                butnText={"Continue"}
                page2={true}
            />
        </View>
    </SafeAreaView>
  )
}

export default OnboardingScreen2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#4C36ED',
        
    },
    text: {
        color: '#ffff',
        fontSize:14
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
    bundle: {
        position: 'absolute',
        bottom: -10
    },
    shadow: {
        position: 'absolute',
        bottom: 0,
        backgroundColor:'red'
    },
    message_container: {
        flex: 1,
        width: '100%',
        // backgroundColor: 'black',
        justifyContent: 'center'
    },
    skip: {
        width: 61,
        height: 33,
        position: 'absolute',
        top: 25,
        right: 0
    },
    skip_opacity: {
        width: '100%',
        height: '100%',
        borderRadius: 16,
        backgroundColor: '#6654ef',
        justifyContent: 'center',
        alignItems: 'center'
    }
})