import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import Entypo from '@expo/vector-icons/Entypo';
const Notification = () => {
    return (
        <View style={styles.container}>
            <View style={styles.con_two}>
                <View style={styles.innerconttwo}>
                    <View style={styles.wrapper}>
                        <View style={styles.smallBox}>
                            <Ionicons name="chevron-back" size={20} color="black" />
                        </View>
                        <Text style={styles.pay}>Notifications</Text>
                    </View>
                    <View style={styles.wrapperr}>
                        <View style={styles.smallBox}>
                            <Ionicons name="chevron-back" size={20} color="black" />
                        </View>
                    </View>
                </View>
            </View>
            <ScrollView style={styles.partTwo}>
                <View style={styles.today}>
                    <Text> Today</Text>
                    <View style={styles.todayText}>
                        <Image
                            source={require('../assets/rename.png')}
                            style={styles.centeredImage}
                        />
                        <View>
                            <Text style={{fontWeight: "bold" }}>50% Cashback </Text>
                            <Text>Get 50% cashback for Bet account funding</Text>
                        </View>
                        <Entypo name="chevron-small-right" size={24} color="black" />
                    </View>
                    <View style={styles.todayText}>
                        <Image
                            source={require('../assets/rename.png')}
                            style={styles.centeredImage}
                        />
                        <View>
                            <Text style={{fontWeight: "bold" }}>50% Cashback </Text>
                            <Text>Get 50% cashback for Bet account funding</Text>
                        </View>
                        <Entypo name="chevron-small-right" size={24} color="black" />
                    </View>
                </View>
                <View style={styles.today}>
                    <Text> Yesterday</Text>
                    <View style={styles.todayText}>
                        <Image
                            source={require('../assets/rename.png')}
                            style={styles.centeredImage}
                        />
                        <View>
                            <Text style={{fontWeight: "bold" }}>Loan Application</Text>
                            <Text>We'll get back to you regarding your loan</Text>
                        </View>
                        <Entypo name="chevron-small-right" size={24} color="black" />
                    </View>
                    <View style={styles.todayText}>
                        <Image
                            source={require('../assets/rename.png')}
                            style={styles.centeredImage}
                        />
                        <View>
                            <Text style={{fontWeight: "bold" }}>Loan Approved </Text>
                            <Text>Your loan has been approved</Text>
                        </View>
                        <Entypo name="chevron-small-right" size={24} color="black" />
                    </View>
                    <View style={styles.todayText}>
                        <Image
                            source={require('../assets/rename.png')}
                            style={styles.centeredImage}
                        />
                        <View>
                            <Text style={{fontWeight: "bold" }}>Repaid Loan</Text>
                            <Text>You repay 20,000 in clearing your loan</Text>
                        </View>
                        <Entypo name="chevron-small-right" size={24} color="black" />
                    </View>
                    <View style={styles.todayText}>
                        <Image
                            source={require('../assets/rename.png')}
                            style={styles.centeredImage}
                        />
                        <View>
                            <Text style={{fontWeight: "bold" }}>Withdrawal</Text>
                            <Text>-20,000</Text>
                        </View>
                        <Entypo name="chevron-small-right" size={24} color="black" />
                    </View>
                </View>
                <View style={styles.today}>
                    <Text>last 7 days</Text>
                    <View style={styles.todayText}>
                        <Image
                            source={require('../assets/rename.png')}
                            style={styles.centeredImage}
                        />
                        <View>
                            <Text style={{fontWeight: "bold" }}>Loan Ap </Text>
                            <Text>Get 50% cashback for Bet account funding</Text>
                        </View>
                        <Entypo name="chevron-small-right" size={24} color="black" />
                    </View>
                    <View style={styles.todayText}>
                        <Image
                            source={require('../assets/rename.png')}
                            style={styles.centeredImage}
                        />
                        <View>
                            <Text style={{fontWeight: "bold" }}>50% Cashback </Text>
                            <Text>Get 50% cashback for Bet account funding</Text>
                        </View>
                        <Entypo name="chevron-small-right" size={24} color="black" />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Notification

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
    innerconttwo: {
        // flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingTop: 70,
        gap: 10,
    },
    smallBox: {
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: "white",
        padding: 5
    },
    pay: {
        color: "white"
    },

    wrapper: {
        width: "80%",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 15,
        gap: 10,
    },
    wrapperr: {
        width: "80%",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 15,
        gap: 10,
    },
    partTwo: {
        // backgroundColor: "#FFFFFF",
        padding: 15,
        marginLeft: 6,
        marginRight: 6,
        gap: 10,

    },
    today: {
        // backgroundColor: "red",
        gap: 10
    },
    todayText: {
        padding: 20,
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        flexDirection: "row",
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 5,
        marginRight: 5
    },
    centeredImage: {
        width: 34,
        height: 34.73
    }
})