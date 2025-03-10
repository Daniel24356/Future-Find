import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import OnboardingCard from '../props/OnboardingCard'
import { useNavigation } from '@react-navigation/native'


const OnboardingScreen3 = () => {
 const navigate = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar style='light' />
        <View style={styles.image_container}>
            <View style={styles.skip}>
                <TouchableOpacity style={styles.skip_opacity}>
                    <Text style={styles.text} onPress={()=> navigate.navigate("Signup")}>
                        Skip
                    </Text>
                </TouchableOpacity>
            </View>
            <Image 
                source={require("../assets/onboarding/Illustrations.png")} 
                style={styles.img}
            />
            
        </View>

        <View style={styles.message_container}>
            <OnboardingCard 
                headText={"Plan ahead and manage your money better"}
                parText={"Setup your budget for each category, so you're in control. Track categories you spend the most money on"}
                butnText={"Get started"}
                page3={true}
                onPress={()=> navigate.navigate("Signup")}
            />
        </View>
    </SafeAreaView>
  )
}

export default OnboardingScreen3;

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
    img: {
        position:'absolute',
        bottom: -15
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
    },
    tolu: {
        width: '100%'
    }
})