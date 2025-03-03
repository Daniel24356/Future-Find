import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';

const TransactionItem = ({ imageSource, title, amount, amountColor, time }) => {
    return (
        <View style={styles.transactionItem}>
            <Image source={imageSource} style={styles.transactionImage} />
            <View style={styles.textContainer}>
                <Text style={styles.transactionTitle}>{title}</Text>
                <Text style={[styles.transactionAmount, { color: amountColor }]}>{amount}</Text>
            </View>
            <Text style={styles.transactionTime}>{time}</Text>
        </View>
    );
};

const Transactions = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <View style={styles.wrapper}>
                        <View style={styles.iconBox}>
                            <Ionicons name="chevron-back" size={20} color="black" />
                        </View>
                        <Text style={styles.headerTitle}>Transactions</Text>
                    </View>
                    <View style={styles.wrapper}>
                        <View style={styles.iconBox}>
                            <Ionicons name="filter" size={20} color="#6C727F" />
                        </View>
                    </View>
                </View>
                <View style={styles.searchBoxWrapper}>
                    <TextInput style={styles.searchBox} placeholder="Search transactions" />
                </View>
            </View>

            <ScrollView style={styles.transactionList}>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Today</Text>
                    <TransactionItem 
                        imageSource={require('../assets/greenircle.png')}
                        title="Loan Payment"
                        amount="+ N23000"
                        amountColor="green"
                        time="3:40 PM"
                    />
                    <TransactionItem 
                        imageSource={require('../assets/homePage/repay.png')}
                        title="Repaid Loan"
                        amount="- N23000"
                        amountColor="red"
                        time="3:40 PM"
                    />
                    <TransactionItem 
                        imageSource={require('../assets/rename.png')}
                        title="Withdrawal"
                        amount="- N23000"
                        amountColor="red"
                        time="3:40 PM"
                    />
                </View>
                
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Yesterday</Text>
                    <TransactionItem 
                        imageSource={require('../assets/homePage/contribute.png')}
                        title="Electricity Bill"
                        amount="- N23000"
                        amountColor="red"
                        time="3:40 PM"
                    />
                    <TransactionItem 
                        imageSource={require('../assets/greenbabe.png')}
                        title="Cashback"
                        amount="+ N160"
                        amountColor="green"
                        time="3:40 PM"
                    />
                    <TransactionItem 
                        imageSource={require('../assets/homePage/repay.png')}
                        title="Repaid Loan"
                        amount="- N23000"
                        amountColor="red"
                        time="3:40 PM"
                    />
                    <TransactionItem 
                        imageSource={require('../assets/rename.png')}
                        title="Withdrawal"
                        amount="- N23000"
                        amountColor="red"
                        time="3:40 PM"
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default Transactions;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F5F7FF",
        flex: 1,
    },
    header: {
        backgroundColor: "#442cf5",
        paddingTop: 70,
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    headerContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    iconBox: {
        backgroundColor: "white",
        padding: 8,
        borderRadius: 10,
    },
    headerTitle: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 10,
    },
    wrapper: {
        flexDirection: "row",
        alignItems: "center",
    },
    searchBoxWrapper: {
        marginTop: 10,
    },
    searchBox: {
        backgroundColor: "white",
        borderRadius: 10,
        padding: 10,
        fontSize: 14,
    },
    transactionList: {
        padding: 15,
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 8,
    },
    transactionItem: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: 15,
        marginBottom: 10,
        justifyContent: "space-between",
    },
    transactionImage: {
        width: 40,
        height: 40,
        marginRight: 15,
    },
    textContainer: {
        flex: 1,
    },
    transactionTitle: {
        fontSize: 14,
        fontWeight: "bold",
    },
    transactionAmount: {
        fontSize: 14,
    },
    transactionTime: {
        fontSize: 12,
        color: "#6C727F",
    },
});
