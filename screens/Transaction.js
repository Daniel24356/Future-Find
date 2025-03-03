import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';

const TransactionItem = ({ imageSource, title, amount, amountStyle, time }) => {
    return (
        <View style={styles.transactionItem}>
            <Image source={imageSource} style={styles.transactionImage} />
            <View style={styles.textContainer}>
                <Text style={styles.transactionTitle}>{title}</Text>
                <Text style={[styles.transactionAmount, amountStyle]}>{amount}</Text>
            </View>
            <Text style={styles.transactionTime}>{time}</Text>
        </View>
    );
};

const Transactions = () => {
    return (
        <View style={styles.container}>
            {/* Header Section */}
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
                <View style={styles.searchBox}>
                    <Ionicons name="search" size={20} color="#6C727F" />
                    <TextInput placeholder="Search transactions" style={styles.searchInput} />
                </View>
            </View>

            {/* Transactions List */}
            <ScrollView style={styles.transactionList}>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Today</Text>
                    <TransactionItem 
                        imageSource={require('../assets/greenircle.png')}
                        title="Loan Payment"
                        amount="+ N23000"
                        amountStyle={styles.positiveAmount}
                        time="3:40 PM"
                    />
                    <TransactionItem 
                        imageSource={require('../assets/homePage/repay.png')}
                        title="Repaid Loan"
                        amount="- N23000"
                        amountStyle={styles.negativeAmount}
                        time="3:40 PM"
                    />
                    <TransactionItem 
                        imageSource={require('../assets/rename.png')}
                        title="Withdrawal"
                        amount="- N23000"
                        amountStyle={styles.negativeAmount}
                        time="3:40 PM"
                    />
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Yesterday</Text>
                    <TransactionItem 
                        imageSource={require('../assets/homePage/contribute.png')}
                        title="Electricity Bill"
                        amount="- N23000"
                        amountStyle={styles.negativeAmount}
                        time="3:40 PM"
                    />
                    <TransactionItem 
                        imageSource={require('../assets/greenbabe.png')}
                        title="Cashback"
                        amount="+ N160"
                        amountStyle={styles.positiveAmount}
                        time="3:40 PM"
                    />
                    <TransactionItem 
                        imageSource={require('../assets/homePage/repay.png')}
                        title="Repaid Loan"
                        amount="- N23000"
                        amountStyle={styles.negativeAmount}
                        time="3:40 PM"
                    />
                    <TransactionItem 
                        imageSource={require('../assets/rename.png')}
                        title="Withdrawal"
                        amount="- N23000"
                        amountStyle={styles.negativeAmount}
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
        height: 140,
        paddingTop: 50,
        paddingHorizontal: 20,
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
    },
    wrapper: {
        flexDirection: "row",
        alignItems: "center",
    },
    searchBox: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
    },
    searchInput: {
        marginLeft: 10,
        flex: 1,
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
        marginRight: 10,
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
        fontWeight: "bold",
    },
    positiveAmount: {
        color: "green",
    },
    negativeAmount: {
        color: "red",
    },
    transactionTime: {
        fontSize: 12,
        color: "#6C727F",
    },
});
