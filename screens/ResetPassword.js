import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
// import { TextInput } from 'react-native-gesture-handler';
import { useState } from 'react';

const ResetPassword = () => {
    const [form, setForm] = useState({
        email: ""
    })
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <View style={styles.icon}>
                    <View style={styles.iconBox}>
                        <Ionicons name="chevron-back" size={20} color="black" />
                    </View>
                    <Text style={styles.reset}>Reset Password</Text>
                </View>
            </View>
            <View style={styles.textCont}>
                <View style={styles.textStyling}>
                    <Text style={{ fontSize: 26, fontWeight: 'bold', textAlign: 'start', }}>Enter your email and we'll send you a link to reset your password. </Text>
                </View>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder='Enter email'
                        keyboardType='email-address'
                        value={form.email}
                        onChange={(text) => setForm({ ...form, email: text })}
                    />
                    <View style={styles.exist}>
                        <Text style={{color:'red'}}>
                            This email doesn't exist
                        </Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={{ backgroundColor: "blue", padding: 12, marginRight: 20, marginLeft: 20, borderRadius: 10, alignItems: "center", justifyContent: "center" }}>
                <Text style={{ color: "white", fontSize: 16, fontWeight: "bold", textAlign: "center" }}>
                    Send me a link
                </Text>
            </TouchableOpacity>

        </View>
    )
}

export default ResetPassword

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

    textCont: {
        backgroundColor: "#f5f7ff",

    },
    textStyling: {
        padding: 20,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 50,
        borderRadius: 10,
        alignItems: "center"
    },
    input: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 18,
        marginBottom: 10,
        marginRight: 20,
        marginLeft: 20,
        marginTop: 50,
        paddingTop: 25,
        paddingBottom: 25,
    },
    exist: {
        marginBottom: 250,
        marginRight: 20,
        marginLeft: 20,

    }
})