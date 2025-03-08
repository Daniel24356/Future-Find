import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const Payments = () => {
    return (
        <View style={styles.container}>
            <View style={styles.con_two}>
                <View style={styles.innerconttwo}>
                    <View style={styles.smallBox}>
                        <Ionicons name="chevron-back" size={20} color="black" />
                    </View>
                    <Text style={styles.pay}>Payment</Text>
                </View>
            </View>

            <View style={styles.contpartTwoo}>
                <View style={styles.contpartTwo}>
                    <Image
                        source={require('../assets/rename.png')}
                        style={styles.centeredImage}
                    />
                    <Text style={{ textAlign: 'center', fontSize: 17 }}>Total amount avaliable</Text>
                    <Text style={{ fontSize: 39, fontWeight: 'bold', textAlign: 'center'}}>40,000</Text>
                    <ScrollView>
                        <View style={styles.loanAmount}>
                            <View style={styles.interest}>
                                <Text style={{ fontSize: 16, color: "#6C727F" }}>Contribution fee</Text>
                                <Text style={{ fontSize: 16, color: "#6C727F" }}>N30,000</Text>
                            </View>
                            <View style={styles.interest}>
                                <Text style={{ fontSize: 16, color: "#6C727F" }}>Contribution charges</Text>
                                <Text style={{ fontSize: 16, color: "#6C727F" }}> N50</Text>
                            </View>
                            <View style={styles.interest}>
                                <Text style={{ fontSize: 16, color: "#6C727F" }}>Total amount</Text>
                                <Text style={{ fontSize: 16, color: "#6C727F" }}>N30,030</Text>
                            </View>
                            <View style={styles.interest}>
                                <Text style={{ fontSize: 16, color: "#6C727F" }}>Withdrawal date</Text>
                                <Text style={{ fontSize: 16, color: "#6C727F" }}>17 jul,2024</Text>
                            </View>
                        </View>
                    </ScrollView>
                    <View style={styles.totalAmount}>
                        <View style={styles.subAm}>
                            <Text style={{ fontSize: 18, color: "#8f94A3", textAlign: "left" }}>Total Amount</Text>
                            <Text style={{ fontSize: 16, color: "black", textAlign: "left" }}>20,030</Text>
                        </View>
                        <View style={styles.subAmm}>
                            <Text style={{ fontSize: 16, }}>₦</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.bottonCon}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Pay Now</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default Payments

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f5f7ff",
        flex: 1,
    },


    con_two: {
        backgroundColor: "#442cf5",
        height: 125,
        marginBottom: 20
    },
    smallBox: {
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: "white",
        padding: 5
    },
    innerconttwo: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 15,
        gap: 10,
        paddingTop: 90,
    },
    pay: {
        color: "white"
    },
    contpartTwo: {
        backgroundColor: "white",
        padding: 20,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        borderRadius: 10,
        // gap: 10
    },
    loanAmount: {
        backgroundColor: "#f5f7ff",
        padding: 20,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        borderRadius: 10,
    },
    interest: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10
    },
    bottonCon: {
        padding: 20,
        color: "white"
    },
    button: {
        backgroundColor: "#4a3aff",
        padding: 15,
        borderRadius: 15,
        alignItems: "center",
        marginTop: 140,
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold"
    },
    centeredImage: {
        alignSelf: 'center',
    },
    totalAmount: {
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#8f94A3',
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10
    },
    subAm: {
        // backgroundColor: "red",
        width: "60%",
        alignItems: "start"
    },
    subAmm: {
        width: "30%",
        alignItems: "flex-end"
    }

})