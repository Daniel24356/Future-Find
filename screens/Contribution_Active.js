import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import TabBar from '../props/TabBar';
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomButton from '../props/CustomButton';


const Contribution_Active = () => {
  return (
    <View style={{flex:1, backgroundColor:'#F5F7FF'}}>
        <StatusBar backgroundColor='#F5F7FF' />
        <SafeAreaView style={{padding: 15, gap:12}}>
            <View style={styles.convenience}>
                <Text style={styles.conv_text1}>
                    Convenient way to grow your money
                </Text>
                <Text style={styles.conv_text2}>
                    Earn interest on all your savings
                </Text>
                <Image 
                    source={require('../assets/investing/Illustration_small.png')}
                    style={styles.conv_img}
                />
            </View>

            <View style={styles.info}>
                <View style={styles.info_1}>
                    <Text style={{fontSize:12,fontWeight:400,color:'#6C727F'}}>Groups:</Text>
                    <Text style={{fontSize:14,fontWeight:600,color:'#131313'}}>1</Text>
                </View>

                <View style={styles.create}>
                    <Text style={{color:'#442CF5'}}>+ Create</Text>
                </View>
            </View>

            <View style={styles.groups}>
                <Text style={{fontSize:16,fontWeight:400,color:'#292B2D'}}>
                    Created groups
                </Text>

                <View style={styles.green_group}>

                    <View style={styles.copy}>
                        <Text style={{fontSize:10,color:'#292B2D',fontWeight:400}}>Copy link</Text>
                        <Ionicons name="copy" size={11} color="#442CF5" />
                    </View>

                    <Image 
                        source={require('../assets/investing/green_comm.png')}
                    />
                    <Text style={{fontSize:14,color:'#292B2D',fontWeight:500}}>
                        Saving groups
                    </Text>

                    <View style={styles.green_group_info}>
                        <View style={{flexDirection:'row',alignItems:'center', gap:5}}>
                            <Image 
                                source={require('../assets/homePage/tab_contribution.png')}
                                style={{width:12,height:10}}
                            />
                            <Text style={styles.small_text}>23/23 members</Text>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center',gap:2}}>
                            <Image
                                source={require('../assets/investing/naira.png')}
                            />
                            <Text style={styles.small_text}>30,000/m</Text>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center',gap:2}}>
                            <Image
                                source={require('../assets/investing/naira.png')}
                            />
                            <Text style={styles.small_text}>690,000/member</Text>
                        </View>
                    </View>
                </View>

                <View style={{alignItems:'center',paddingHorizontal:10,paddingBottom:10,gap:15}}>
                    <Text style={{fontSize:16,fontWeight:600,color:'#131313'}}>Groups invitation</Text>
                    <Text style={{fontSize:12,color:'#292B2D'}}>You have been invited to join this contribution</Text>
                    <View style={{flexDirection:'row',gap:20,marginTop:10}}>
                        <TouchableOpacity style={[styles.invite, {backgroundColor:'#FD3C4A0D'}]}>
                            <Text style={{fontSize:14,fontWeight:500,color:'#FD3C4A'}}>Decline</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.invite, {backgroundColor:'#2C14DD0D'}]}>
                            <Text style={{fontSize:14,fontWeight:500,color:'#442CF5'}}>Join</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <CustomButton 
                backgroundColor={'#2C14DD'}
                title={'Create my own group'}
            />

        </SafeAreaView>

        <TabBar contribution={true}/>
        
    </View>
  )
}

export default Contribution_Active;

const styles = StyleSheet.create({
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
        position:'absolute',
        right: 0,
    },
    info: {
        flexDirection:'row',
        justifyContent:'space-between'
    },
    info_1: {
        flexDirection:'row',
        gap:5,
        alignItems:'center'
    },
    create: {
        width:'fit-content',
        height:32,
        backgroundColor:'#FFFF',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:10,
        borderRadius:14
    },
    groups: {
        minHeight:156,
        borderRadius:16,
        backgroundColor:'#FFFF',
        padding:12,
        justifyContent:'space-between',
        gap:15
    },
    green_group: {
        height:92,
        backgroundColor:'#E5F6F0',
        borderRadius:10,
        justifyContent:'space-between',
        padding:12,
        position:'relative'
    },
    green_group_info: {
        flexDirection:'row',
        justifyContent:'space-between'
    },
    small_text: {
        fontSize:10,
        color:'#6C727F'
    },
    copy: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:70,
        height:20,
        backgroundColor:'#FFFF',
        borderRadius:10,
        paddingHorizontal:5,
        gap:5,
        position:'absolute',
        right:12,
        top:12
    },
    invite: {
        flex:1,
        height:36,
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center'
    }
})