import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import TopHeader from '../props/TopHeader';

const RepayLoan = () => {
    return (
        <View style={styles.container}>
            {/* <View style={styles.con_two}>
                <View style={styles.innerconttwo}>
                    <View style={styles.smallBox}>
                        <Ionicons name="chevron-back" size={20} color="black" />
                    </View>
                    <Text style={styles.pay}>RepayLoan</Text>
                </View>
            </View> */}

<TopHeader title="Repay loan" />

            <View style={styles.contpartTwoo}>
                <View style={styles.contpartTwo}>
                    <Image source={require('../assets/group.png')} />
                    <Text style={{ textAlign: 'center', fontSize: 17 }}>Total Loan Amount</Text>
                    <Text style={{ fontSize: 39, fontWeight: 'bold', textAlign: 'center', paddingTop: 15 }}>N8,500,000</Text>
                    <ScrollView>
                        <View style={styles.loanAmount}>
                            <View style={styles.interest}>
                                <Text style={{ fontSize: 18 }}>Loan amount</Text>
                                <Text style={{ fontSize: 18, }}>N2,500,00</Text>
                            </View>
                            <View style={styles.interest}>
                                <Text style={{ fontSize: 18 }}>Interest</Text>
                                <Text style={{ fontSize: 18 }}>10% (250,000)</Text>
                            </View>
                            <View style={styles.interest}>
                                <Text style={{ fontSize: 18 }}>Total amount</Text>
                                <Text style={{ fontSize: 18 }}>2,750,000</Text>
                            </View>
                            <View style={styles.interest}>
                                <Text style={{ fontSize: 18 }}>Repayment due</Text>
                                <Text style={{ fontSize: 18 }}>28, Mar, 2027</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
            <View style={styles.bottonCon}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Repay Loan</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default RepayLoan

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f5f7ff",
        flex: 1,
    },


    con_two: {
        backgroundColor: "#442cf5",
        height: 150,
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
        marginTop: 50,
        borderRadius: 10,
        alignItems: "center"
    },
    loanAmount: {
        backgroundColor: "#f5f7ff",
        padding: 20,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 50,
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
        marginTop: 37,
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold"
    }
})