import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import TopHeader from '../props/TopHeader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ProfileContext } from './ProfileContext';
import { useContext } from 'react';

const Settings = () => {

    const { profilePic, updateProfilePic } = useContext(ProfileContext);
     const navigation = useNavigation();

     const handleLogout = async () => {
        try {
            // Remove user tokens and ID from storage
            await AsyncStorage.removeItem("userToken");
            await AsyncStorage.removeItem("userId");
    
            // Set profile picture back to default from assets using context
            const defaultProfilePic = require('../assets/Group 20474.png'); // Use the default profile image from assets
            
            // Accessing context to update the profile picture globally
            if (updateProfilePic) {
                updateProfilePic(defaultProfilePic); // Reset profile picture to default
            }
    
            console.log("User logged out successfully!");
    
            // Reset navigation to Login screen
            navigation.reset({
                index: 0,
                routes: [{ name: "Login" }],
            });
    
        } catch (error) {
            console.error("Logout Error:", error);
            alert("Logout failed. Please try again.");
        }
    };
    
    
    
    

    return (
        <View style={styles.container}>
            {/* <View style={styles.subContainer}>
                <View style={styles.icon}>
                    <View style={styles.iconBox}>
                        <Ionicons name="chevron-back" size={20} color="black" />
                    </View>
                    <Text style={styles.reset}>Settings</Text>
                </View>
            </View> */}
            <TopHeader title="Settings" />

            <View style={styles.partTwo}>
                <Text style={styles.general}>General</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Resetpassword')} style={styles.green}>
                    <Image source={require('../assets/key.png')} />
                    <Text>Reset Password</Text>
                    <Entypo name="chevron-right" size={24} color="black" style={{ position: 'absolute', right: 5 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Notifications')} style={styles.green}>
                    <Image source={require('../assets/notification.png')} />
                    <Text>Notifications</Text>
                    <Entypo name="chevron-right" size={24} color="black" style={{ position: 'absolute', right: 5 }} />
                </TouchableOpacity>
                <View style={styles.partThree}>
                    <Text style={styles.general}>Policy</Text>
                    <View style={styles.green}>
                        <Image source={require('../assets/policy.png')} />
                        <Text>Privacy Policy</Text>
                        <Entypo name="chevron-right" size={24} color="black" style={{ position: 'absolute', right: 5 }} />
                    </View>
                </View>
            </View>
            <TouchableOpacity style={{ backgroundColor: "blue", padding: 12, marginRight: 20, marginLeft: 20, borderRadius: 10, alignItems: "center", marginTop: 200, justifyContent: "center" }} onPress={handleLogout}>
                <Text style={{ color: "white", fontSize: 16, fontWeight: "bold", textAlign: "center" }}>
                    Log Out
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Settings

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f5f7ff",
        flex: 1,
    },
    subContainer: {
        backgroundColor: "#442cf5",
        height: 150,
    },
    icon: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 15,
        gap: 10,
        paddingTop: 90,
    },
    iconBox: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: "white",
        padding: 5
    },
    reset: {
        color: "white"
    },
    partTwo: {
        // backgroundColor: "red",
        // height: 350,
        paddingTop: 20,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 50,
        borderRadius: 10,
        alignItems: "start",
        gap: 15
    },
    green: {
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        padding: 12,
        position: "relative",
        borderRadius: 10
    },

    partThree: {
        marginTop: 20,
        gap: 10,
    },
})