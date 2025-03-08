import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

const Group_Details = () => {
 const navigation = useNavigation();

  return (
    <View style={{flex:1, position:'relative'}}>
        <StatusBar backgroundColor='#442CF5' style='light'/>
        <SafeAreaView style={{flex:1,backgroundColor:'#F5F7FF',gap:35}}>
            <View style={styles.container}>
                <View style={{flexDirection:'row', alignItems:'center',gap:10}}>
                    <View style={styles.back}>
                        <EvilIcons name="chevron-left" size={30} color="black" />
                    </View>
                    <Text style={{color:'#FFFF',fontSize:16,fontWeight:600}}>Details</Text>
                </View>
                <View style={styles.create}>
                    <Text style={{color:'#292B2D', fontSize:20}}>+ </Text>
                    <Text style={{color:'#292B2D',fontWeight:400}}>Create</Text>
                </View>
            </View>

            <View style={{paddingHorizontal:15,gap:10}}>
                <View style={styles.options}>
                    <View style={[styles.options_butn, {borderWidth:1,borderColor:'#442CF5'}]}>
                        <Text style={{fontSize:12,fontWeight:400,
                            color:'#442CF5',}}>
                            Group info
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Group_members')} style={styles.options_butn}>
                        <Text style={{fontSize:12,fontWeight:400,color:'#6C727F'}}>
                            All members
                        </Text>
                    </TouchableOpacity>
                </View>

                
                <View style={styles.group_container}>
                    <View style={styles.group_1}>
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

                        <View style={styles.group_2}>
                            <Text style={[styles.group2_text, {top:0,left:0}]}>
                                Paid members
                            </Text>
                            <Text style={[styles.group2_text, {top:0,right:0}]}>
                                23
                            </Text>
                            <View style={{height:7,backgroundColor:'#F5F7FF'}}>
                                <View style={styles.progress_bar}>
                                    <View style={styles.circle}>
                                        <Text style={[styles.group2_text, {bottom:-17}]}>
                                            7
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={{fontSize:12,color:'#292B2D'}}>This month</Text>
                        <Text style={{fontSize:12,color:'#292B2D'}}>Jun,2024</Text>
                    </View>

                    <View style={styles.members}>
                        <View style={{flexDirection:'row',gap:10,height:45}}>
                            <View style={styles.members_numbers}>
                                <Text style={{fontSize:14,fontWeight:500,color:'#292B2D'}}>N200,000</Text>
                                <Text style={{fontSize:10,fontWeight:400,color:'#6C727F'}}>Amount received</Text>
                            </View>
                            <View style={[styles.members_numbers, {borderColor:'#00A86B'}]}>
                                <Text style={{fontSize:14,fontWeight:500,color:'#292B2D'}}>20/23</Text>
                                <Text style={{fontSize:10,fontWeight:400,color:'#6C727F'}}>Paid members</Text>
                            </View>
                        </View>

                        <Text style={{fontSize:12,fontWeight:400,color:'#292B2D'}}>paying member</Text>

                        <View style={styles.member_info}>
                            <View style={styles.profile_img}>
                                <Image
                                    source={require('../assets/investing/profile_pic.png')}
                                />
                            </View>

                            <View>
                                <Text style={{fontSize:14,fontWeight:500,color:'#292B2D'}}>King Alex Ade</Text>
                                <Text style={{fontSize:10,fontWeight:400,color:'#6C727F'}}>kingalexade@gmail.com</Text>
                            </View>

                            <View style={styles.status_div}>
                                <Text style={{fontSize:10,fontWeight:400,color:'#FFC93D'}}>Pending</Text>
                            </View>
                        </View>
                    </View>

                </View>
            </View>

        </SafeAreaView>

    </View>
  )
}

export default Group_Details;

const styles = StyleSheet.create({
    container: {
        height:55,
        backgroundColor:'#442CF5',
        paddingHorizontal:15,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    back: {
        backgroundColor:'#FFFF',
        width:28,
        height:28,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    create: {
        width:'fit-content',
        height:28,
        backgroundColor:'#FFFF',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:10,
        borderRadius:14,
        
    },
    options: {
        height:27,
        flexDirection:'row',
        justifyContent:'space-between',
        gap:10
    },
    options_butn: {
        flex:1,
        borderRadius:10,
        backgroundColor:'#FFFF',
        justifyContent:'center',
        alignItems:'center'
    },
    group_container: {
        height:365,
        // backgroundColor:'red',
        gap:10
    },
    group_1: {
        height:180,
        borderRadius: 15,
        backgroundColor:'#FFFF',
        padding:10,
        justifyContent:'space-between'
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
    group_2: {
        height:48,
        // backgroundColor:'pink',
        justifyContent:'center',
        paddingTop:5,
        position:'relative'
    },
    progress_bar: {
        width:130,
        height:'100%',
        backgroundColor:'#442CF5',
        justifyContent:'center',
        borderRadius:10,
        position:'relative'
    },
    circle: {
        width:12,
        height:12,
        borderRadius:'50%',
        alignItems:'center',
        backgroundColor:'#FFFF',
        borderWidth:1,
        borderColor:'#442CF5',
        position:'absolute',
        right:-5
    },
    group2_text: {
        fontSize:12,
        fontWeight:400,
        color:'#292B2D',
        position:'absolute',
    },
    members: {
        borderRadius:15,
        backgroundColor:'#FFFF',
        padding:10,
        gap:10
    },
    members_numbers: {
        flex:1,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#442CF5',
        justifyContent:'center',
        paddingHorizontal:10
    },
    member_info: {
        height:45,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:10,
        borderWidth:1,
        borderColor:'#6C727F1A',
        borderRadius:10,
        gap:10,
        position:'relative'
    },
    status_div: {
        height:16,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        backgroundColor:'#FFC93D1A',
        paddingHorizontal:5,
        position:'absolute',
        right:10
    },
    profile_img: {
        width:28,
        height:28,
        borderRadius:'50%',
        justifyContent:'center',
        alignItems:'center'
    }
})