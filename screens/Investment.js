import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';


const Investment = () => {
    return (
        <View style={styles.container}>
            <View style={styles.con_two}>
                <View style={styles.innerconttwo}>
                    <View style={styles.smallBox}>
                        <Ionicons name="chevron-back" size={20} color="black" />
                    </View>
                    <Text style={styles.pay}>Fix plan</Text>
                </View>
            </View>
            <View style={styles.contpartTwoo}>
                <View style={styles.compartTwo}>
                    <View style={styles.fixPlan}>
                        <View style={styles.fix}>
                            <Image
                                source={require('../assets/homePage/invest.png')}
                                style={styles.centeredImage}
                            />
                        </View>
                        <View style={styles.plan}>
                            <Text style={{ color: "black", fontWeight: "bold" }}>fix plan</Text>
                            <Text style={{ color: "black", font: "18" }}>Deposite a fix amount and earn massive return</Text>
                        </View>
                    </View>
                    <View style={styles.partTwo}>
                        <Text style={styles.general}>Plan details</Text>
                        <View style={styles.green}>
                            <ScrollView contentContainerStyle={{ alignItems: 'flex-start' }}>
                                <View style={styles.loanAmount}>
                                    <View style={styles.interest}>
                                        <Text style={{ fontSize: 16 }}>Minimum Amount</Text>
                                        <Text style={{ fontSize: 16, }}>N5,000</Text>
                                    </View>
                                    <View style={styles.interest}>
                                        <Text style={{ fontSize: 16 }}>Tenor </Text>
                                        <Text style={{ fontSize: 16 }}> 30 days</Text>
                                    </View>
                                    <View style={styles.interest}>
                                        <Text style={{ fontSize: 16 }}>Saving duration</Text>
                                        <Text style={{ fontSize: 16 }}>7-100 days</Text>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>

                    </View>
                </View>
            </View>
            <View style={styles.withdraw}>
                <View style={styles.fixx}>
                    <SimpleLineIcons name="exclamation" size={15} color="black" />
                </View>
                <View style={styles.plann}>
                    <Text style={{ color: "black", font: "18" }}>You can withdraw anytime you want, but withdrawal without the maturity period means losing the interest and being charged a fee. </Text>
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

export default Investment

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F5F7FF",
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
        paddingTop: 75,
    },
    compartTwo: {
        backgroundColor: "#FFFFFF",
        padding: 15,
        marginLeft: 20,
        marginRight: 20,
        // marginTop: 50,
        borderRadius: 15,
        gap: 10,

    },
    pay: {
        color: "white"
    },
    fixPlan: {
        padding: 10,
        gap: 10,
        backgroundColor: "#FDF9B7",
        display: "flex",
        flexDirection: "row",
        borderRadius: 10
    },
    fix: {
        width: 50,
        // backgroundColor: "blue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    plan: {
        // backgroundColor: "red",
        width: '80%',
        flexDirection: 'column'

    },
    centeredImage: {
        width: 40,
        height: 40,

    },
    partTwo: {
        borderRadius: 10,
        alignItems: "start",
        gap: 15,
        backgroundColor: "#FFFFFF",

    },
    green: {
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "flex-start",
        // paddingTop: 30,
        position: "relative",
        borderRadius: 10
    },
    loanAmount: {
        width: "100%",
        backgroundColor: "#f5f7ff",
        borderRadius: 10,
    },
    interest: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10
    },
    withdraw: {
        padding: 15,
        // marginLeft: 20,
        // marginRight: 20,
        borderRadius: 10,
        idth: "268px",
        height: "94px",
        padding: 10,
        gap: 10,
        display: "flex",
        flexDirection: "row"
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
        marginTop: 260,
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold"
    },
    fixx: {
        width: 30,
        display: "flex",
        justifyContent: "start",
        alignItems: "flex-end"
    },
    plann: {
        width: '90%',
        justifyContent: "start",
        flexDirection: 'column',
        paddingRight: 11 

    },
})