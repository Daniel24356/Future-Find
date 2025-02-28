import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';


const Settings = () => {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <View style={styles.icon}>
                    <View style={styles.iconBox}>
                        <Ionicons name="chevron-back" size={20} color="black" />
                    </View>
                    <Text style={styles.reset}>Settings</Text>
                </View>
            </View>
            <View style={styles.partTwo}>
                <Text style={styles.general}>General</Text>
                <View style={styles.green}>
                    <Image source={require('../assets/key.png')} />
                    <Text>Reset Password</Text>
                    <Entypo name="chevron-right" size={24} color="black" style={{ position: 'absolute', right: 5 }} />
                </View>
                <View style={styles.green}>
                    <Image source={require('../assets/notification.png')} />
                    <Text>Notifications</Text>
                    <Entypo name="chevron-right" size={24} color="black" style={{ position: 'absolute', right: 5 }} />
                </View>
                <View style={styles.partThree}>
                    <Text style={styles.general}>Policy</Text>
                    <View style={styles.green}>
                        <Image source={require('../assets/policy.png')} />
                        <Text>Privacy Policy</Text>
                        <Entypo name="chevron-right" size={24} color="black" style={{ position: 'absolute', right: 5 }} />
                    </View>
                </View>
            </View>
            <TouchableOpacity style={{ backgroundColor: "blue", padding: 12, marginRight: 20, marginLeft: 20, borderRadius: 10, alignItems: "center", marginTop: 200, justifyContent: "center" }}>
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