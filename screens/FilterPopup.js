import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomButton from '../props/CustomButton';

const FilterPopup = () => {
    const [loanActive, setLoanActive] = useState(true);
    const [withdrawalActive, setWithdrawalActive] = useState(true);
    const [subscriptionActive, setSubscriptionActive] = useState(false);

  return (
    <View style={styles.background}>
      <SafeAreaView style={{flex:1, justifyContent:'flex-end', paddingBottom:30}}>
        <View style={styles.pop_up}>
            <View style={styles.top}>
                <Ionicons name="close-outline" size={24} color="black" />
                <Text style={{fontSize:16,color:'#121826'}}>Filters</Text>
                <Text style={{fontSize:14,fontWeight:500,color:'#442CF5'}}>Reset</Text>
            </View>

            <View style={styles.date_div}>
                <View>
                    <Text style={{fontSize:12,color:'#5C616F'}}>Date</Text>
                    <Text style={{fontSize:14,fontWeight:500,color:'#040C22'}}>01 Sept 2021 - 10 Sept 2021</Text>
                </View>
                <Image
                    source={require('../assets/popups/Calendar.png')}
                />
            </View>

            <Text style={{fontSize:14,color:'#240F51',marginTop:15}}>Services</Text>

            <View style={{width:'100%',gap:5}}>
                <View style={styles.option}>
                    <Text style={{fontSize:16,fontWeight:500,color:'#292B2D'}}>Loan</Text>
                    {
                        loanActive?
                        <TouchableOpacity onPress={()=>setLoanActive(false)}>
                            <Image
                                source={require('../assets/popups/Toggle_active.png')}
                            />
                        </TouchableOpacity> :
                        <TouchableOpacity onPress={()=>setLoanActive(true)}>
                            <Image
                                source={require('../assets/popups/Toggle_inactive.png')}
                            />
                        </TouchableOpacity>
                    }
                </View>

                <View style={styles.option}>
                    <Text style={{fontSize:16,fontWeight:500,color:'#292B2D'}}>Withdrawal</Text>
                    {
                        withdrawalActive?
                        <TouchableOpacity onPress={()=>setWithdrawalActive(false)}>
                            <Image
                                source={require('../assets/popups/Toggle_active.png')}
                            />
                        </TouchableOpacity> :
                        <TouchableOpacity onPress={()=>setWithdrawalActive(true)}>
                            <Image
                                source={require('../assets/popups/Toggle_inactive.png')}
                            />
                        </TouchableOpacity>
                    }
                </View>

                <View style={styles.option}>
                    <Text style={{fontSize:16,fontWeight:500,color:'#292B2D'}}>Subscriptions</Text>
                    {
                        subscriptionActive?
                        <TouchableOpacity onPress={()=>setSubscriptionActive(false)}>
                            <Image
                                source={require('../assets/popups/Toggle_active.png')}
                            />
                        </TouchableOpacity> :
                        <TouchableOpacity onPress={()=>setSubscriptionActive(true)}>
                            <Image
                                source={require('../assets/popups/Toggle_inactive.png')}
                            />
                        </TouchableOpacity>
                    }
                </View>
            </View>

            <CustomButton
                title={'Filter'}
                backgroundColor={'#2C14DD'}
            />
        </View>
      </SafeAreaView>
    </View>
  )
}

export default FilterPopup;

const styles = StyleSheet.create({
    background: {
        flex:1,
        width:'100%',
        height:'100%',
        backgroundColor:'#00000080',
        paddingHorizontal:15,
        position:'absolute',
        top:0,
        left:0,
        zIndex:10
    },
    pop_up: {
        width:'100%',
        backgroundColor:'#FFFF',
        borderRadius:15,
        paddingHorizontal:20,
        paddingBottom:20,
        paddingTop:10,
        justifyContent:'flex-end',
        gap:12
    },
    top: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        height:35, 
        width:'100%'
    },
    date_div: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'100%',
        height:60,
        backgroundColor:'#F5F7FF',
        borderRadius:15,
        paddingHorizontal:20
    },
    option: {
        width:'100%',
        height:48,
        flexDirection:'row',
        borderWidth:1,
        borderColor:'#F5F7FF',
        borderRadius:15,
        alignItems:'center',
        paddingHorizontal:10,
        justifyContent:'space-between'
    }
})