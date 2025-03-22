import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import TopHeader from '../props/TopHeader';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'

const RepayLoan = () => {
    const [loanDetails, setLoansDetails] = useState({

        totalAmount: 0, 
        loanAmount: 0,
        interestRate: 0,
        interestAmount: 0,
        repaymentDue: "", 
        loading: true,
        error: null

    }); 

    const fetchLoanDetails = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/v1/loan/getUserActiveLoan`);
            const data = response.data;
            console.log(data);
            setLoansDetails({
                totalAmount: data.totalAmount,
                loanAmount: data.loanAmount,
                interestRate: data.interestRate,
                interestAmount: data.interestAmount,
                repaymentDue: data.repaymentDue,
                loading: false,
                error: null
            });
        } catch (error) {
            setLoansDetails(prev => ({
                ...prev,
                loading: false,
                error: 'failed to fetch loan details'
            }));
            Alert.alert('Error', 'Failed to fetch loan details');
        }
    };

    const handleRepayLoan = async () => {
        try {
            await axios.post(`${API_BASE_URL}/api/loans/repay`);
            Alert.alert('Success', 'loan repayment initiated successfully');
            fetchLoanDetails();
        } catch (error) {
            Alert.alert('Error', 'Failed to process loan payment');
        }
    };

    useEffect(() => {
        fetchLoanDetails();
    }, []);

    if (loanDetails.loading) {
        return (
            <View style={styles.container}>
                <TopHeader title="Repay loan" />
                <View style={[styles.contpartTwo, { justifyContent: 'center'}]}>
                    <Text>Loading loan details...</Text>
                </View>
            </View>
        );
    }
    if (loanDetails.error) {
        return (
            <View style={styles.container}>
                <TopHeader title="Repay loan" />
                <View style={[styles.contpartTwo, { justifyContent: 'center'}]}>
                    <Text>Error: {loanDetails.error}</Text>
                </View>
            </View>
        );
    }
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
                    <Text style={{ fontSize: 39, fontWeight: 'bold', textAlign: 'center', paddingTop: 15 }}>
                        N{loanDetails.totalAmount.toLocaleString()}
                    </Text>
                    <ScrollView>
                        <View style={styles.loanAmount}>
                            <View style={styles.interest}>
                                <Text style={{ fontSize: 18 }}>Loan amount</Text>
                                <Text style={{ fontSize: 18, }}>N{loanDetails.loanAmount.toLocaleString()}</Text>
                            </View>
                            <View style={styles.interest}>
                                <Text style={{ fontSize: 18 }}>Interest</Text>
                                <Text style={{ fontSize: 18 }}> {loanDetails.interestRate}% ({loanDetails.interestAmount.toLocaleString()})</Text>
                            </View>
                            <View style={styles.interest}>
                                <Text style={{ fontSize: 18 }}>Total amount</Text>
                                <Text style={{ fontSize: 18 }}>{loanDetails.totalAmount.toLocaleString()}</Text>
                            </View>
                            <View style={styles.interest}>
                                <Text style={{ fontSize: 18 }}>Repayment due</Text>
                                <Text style={{ fontSize: 18 }}>{new Date(loanDetails.repaymentDue).toLocaleDateString()}</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
            <View style={styles.bottonCon}>
                <TouchableOpacity style={styles.button} onPress={handleRepayLoan}> 
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