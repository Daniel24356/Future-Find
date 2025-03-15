import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import OnboardingCard from '../props/OnboardingCard'
import { useNavigation } from '@react-navigation/native'


const OnboardingScreen1 = () => {
    const navigate = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar style='light' />
        <View style={styles.image_container}>
            <View style={styles.skip}>
                <TouchableOpacity style={styles.skip_opacity} onPress={()=> navigate.navigate("Login")}>
                    <Text style={styles.text}>
                        Skip
                    </Text>
                </TouchableOpacity>
            </View>
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
                butnText={"Continue"}
                page1={true}
                onPress={()=> navigate.navigate("onboarding2")}
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
    shadow: {
        position: 'absolute',
        bottom: 0,
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