import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import TabBar from '../props/TabBar';

const Investment = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor:'#F5F7FF'}}>
        <StatusBar backgroundColor='#F5F7FF' style='dark' />
        <View style={styles.container}>
            <View style={styles.convenience}>
                <Text style={styles.conv_text1}>
                    Convenient way to grow your money
                </Text>
                <Text style={styles.conv_text2}>
                    Earn interest on all your savings
                </Text>
                <Image 
                    source={require('../assets/onboarding/Illustrations1.png')}
                    style={styles.conv_img}
                />
            </View>

            <View style={styles.balance}>
                <View style={styles.bal_box}>
                    <Image 
                        source={require('../assets/investing/wallet.png')}
                    />
                    <View>
                        <Text style={styles.bal_text1}>Total balance</Text>
                        <Text style={styles.bal_text2}>N120,500,000</Text>
                    </View>
                </View>
                <View style={styles.bal_box}>
                    <Image 
                        source={require('../assets/investing/interest.png')}
                    />
                    <View>
                        <Text style={styles.bal_text1}>Total interest</Text>
                        <Text style={styles.bal_text2}>NO</Text>
                    </View>
                </View>
            </View>

            <View style={styles.plans}>
                <Text style={styles.plans_text}>Investment plans</Text>

                <View style={styles.plans_pack}>
                    <TouchableOpacity style={styles.plans_box1}>
                        <Image 
                            source={require('../assets/investing/fixed_plan.png')}
                        />
                        <Text style={styles.plans_text1}>Fixed plan</Text>
                        <Text style={styles.plans_text2}>Earn 10% interest in return yearly</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.plans_box2}>
                        <Image 
                            source={require('../assets/investing/spend_save.png')}
                        />
                        <Text style={styles.plans_text1}>Spend & save</Text>
                        <Text style={styles.plans_text2}>Earn 8% interest in return yearly</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.plans_pack}>
                    <TouchableOpacity style={styles.plans_box3}>
                        <Image 
                            source={require('../assets/investing/safe_box.png')}
                        />
                        <Text style={styles.plans_text1}>SafeBox</Text>
                        <Text style={styles.plans_text2}>Earn 8% interest in return yearly</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.plans_box4}>
                        <Image 
                            source={require('../assets/investing/target.png')}
                        />
                        <Text style={styles.plans_text1}>Target</Text>
                        <Text style={styles.plans_text2}>Save up money daily as you spend</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={styles.bottom_comment}>
                <EvilIcons style={{color:'#292B2D', height:20, width:20}} name="exclamation" size={24} color="black" />
                <Text style={{color:'#292B2D', fontSize:12, fontWeight:400}}>
                    Choose the saving plan that best suits your needs
                </Text>
            </View>

        </View>

        <TabBar/>

    </SafeAreaView>
  )
}

export default Investment;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        gap:15
    },
    convenience: {
        width: '100%',
        height: 105,
        backgroundColor:'#442CF5',
        borderRadius: 16,
        padding: 15,
        justifyContent:'center',
        position:'relative'
    },
    conv_text1: {
        color:'#FFFF',
        fontSize: 16, 
        fontWeight: 600,
        width: 200,
        lineHeight: 20
    },
    conv_text2: {
        color:'#FFFF',
        fontSize: 12, 
        fontWeight: 400,
        lineHeight: 18,
        paddingTop: 5
    },
    conv_img: {
        width: 120,
        height: 120,
        position:'absolute',
        right: 10,
        top: -8
    },
    balance: {
        width: '100%',
        height: 55,
        flexDirection:'row',
        // backgroundColor:'red',
        gap: 10
    },
    bal_box: {
        flex: 1,
        backgroundColor:'#FFFF',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems:'center',
        paddingHorizontal: 12,
        gap:8
    },
    bal_text1: {
        fontSize: 12,
        color:'#6C727F'
    },
    bal_text2: {
        fontSize: 14,
        fontWeight: 600,
        color:'#131313'
    },
    plans: {
        width: '100%',
        height: 330,
        backgroundColor:'#FFFF',
        gap: 12,
        borderRadius: 15,
        padding: 12
    },
    plans_text: {
        color:'#292B2D',
        fontSize: 16,
        fontWeight: 400,
        marginBottom: 5
    },
    plans_pack: {
        width:'100%',
        height: 125,
        flexDirection:'row',
        gap: 12,
        // backgroundColor:'pink'
    },
    plans_box1: {
        flex: 1,
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingTop: 20,
        backgroundColor:'#E5F6F0'
    },
    plans_text1: {
        fontSize: 14,
        fontWeight: 500,
        color:'#292B2D',
        marginTop: 10
    },
    plans_text2: {
        fontSize: 11,
        fontWeight: 400,
        color:'#6C727F',
        marginTop: 4,
        width: 120
    },
    plans_box2: {
        flex: 1,
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingTop: 20,
        backgroundColor:'#FEFDE9'
    },
    plans_box3: {
        flex: 1,
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingTop: 20,
        backgroundColor:'#FFEBED'
    },
    plans_box4: {
        flex: 1,
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingTop: 20,
        backgroundColor:'#ECEAFE'
    },
    bottom_comment: {
        width:'100%',
        height: 20,
        flexDirection:'row',
        alignItems:'center',
        gap: 6,
        // backgroundColor:'red'
    }
})