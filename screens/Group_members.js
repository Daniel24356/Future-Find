import { Image, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { ALL_MEMBERS } from '../API_URL';

const Group_members = () => {

    const [members, setMembers] = useState([])

    useEffect(() => {
        const getContributionMembers = async () =>{
            try{
                const response = await axios.get(`${ALL_MEMBERS}/${id}`)
                if(response.status === 200){
                    setMembers(response.data.members)
                }
            }catch(error){
                Alert.alert("Error, Something went wrong", error.response.data.message)
            }
        }
    }, [])

    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor='#442CF5' style='light'/>
        <SafeAreaView style={styles.safe_view}>
            <View style={styles.top}>
                <View style={{flexDirection:'row', alignItems:'center',gap:10}}>
                    <View style={styles.back}>
                        <EvilIcons name="chevron-left" size={30} color="black" />
                    </View>
                    <Text style={{color:'#FFFF',fontSize:16,fontWeight:600,}}>Details</Text>
                </View>
                <View style={styles.create}>
                    <Text style={{color:'#292B2D', fontSize:20}}>+ </Text>
                    <Text style={{color:'#292B2D',fontWeight:400}}>Create</Text>
                </View>
            </View>

            <View style={styles.options}>
                               <TouchableOpacity onPress={() => navigation.navigate('groupDetails')} style={styles.options_butn}>
                                    <Text style={{fontSize:12,fontWeight:400,
                                        color:'#442CF5',}}>
                                        Group info
                                    </Text>
                                </TouchableOpacity>
                                <View style={[styles.options_butn, {borderWidth:1,borderColor:'#442CF5'}]}>
                                    <Text style={{fontSize:12,fontWeight:400,color:'#6C727F'}}>
                                        All members
                                    </Text>
                     </View>
            </View>

            
            <View style={styles.third_section}>
               <View style={styles.first}>
                   <Text style={{fontSize:12,fontWeight:400,paddingLeft:10}}>23 {members.length}members</Text>
                 <View style={styles.export}>
                      <View style={styles.inner}>
                          <Image source={require("../assets/calendar.png")}/>
                          <Text style={{fontSize:12,fontWeight:400,}}>jun,2024</Text>
                     </View>
                     <View style={styles.inner}>
                          <Image source={require("../assets/calendar.png")}/>
                          <Text style={{fontSize:12,fontWeight:400,}}>Export</Text>
                     </View>
                 </View> 
              </View>

               <View style={styles.first}>
                <View style={styles.inner2}><Text style={{fontSize:12,fontWeight:400,color:'#6C727F'}}>All</Text></View>
                <View style={styles.inner3}><Text style={{fontSize:12,fontWeight:400,color:'#6C727F'}}>Paid</Text></View>
                <View style={styles.inner3}><Text style={{fontSize:12,fontWeight:400,color:'#6C727F'}}>Unpaid</Text></View>
                <View style={styles.inner3}><Text style={{fontSize:12,fontWeight:400,color:'#6C727F'}}>Received</Text></View>

               </View>
            </View>

            <View style={styles.section}>
                <View style={styles.sub_sec}>
                    <View style={styles.box1}>
                        <View style={styles.img}>
                            <Image source={require("../assets/Ellipse 814.png")}/>
                        </View>
                        <View style={styles.texts}>
                            <Text style={styles.text1}>King Alex Ade</Text>
                            <Text style={styles.text2}>Kingalexade@gmail.com</Text>
                        </View>

                    </View>
                    <View style={styles.paid}>
                    <Text style={{fontSize:12,fontWeight:400,color:'#6C727F'}}>Paid</Text>
                    </View>
                </View>
                <View style={styles.sub_sec}>
                    <View style={styles.box1}>
                        <View style={styles.img}>
                            <Image source={require("../assets/Ellipse 814.png")}/>
                        </View>
                        <View style={styles.texts}>
                            <Text style={styles.text1}>King Alex Ade</Text>
                            <Text style={styles.text2}>Kingalexade@gmail.com</Text>
                        </View>

                    </View>
                    <View style={styles.paid}>
                    <Text style={{fontSize:12,fontWeight:400,color:'#6C727F'}}>Paid</Text>
                    </View>
                </View>
                <View style={styles.sub_sec}>
                    <View style={styles.box1}>
                        <View style={styles.img}>
                            <Image source={require("../assets/Ellipse 814.png")}/>
                        </View>
                        <View style={styles.texts}>
                            <Text style={styles.text1}>King Alex Ade</Text>
                            <Text style={styles.text2}>Kingalexade@gmail.com</Text>
                        </View>

                    </View>
                    <View style={styles.paid}>
                    <Text style={{fontSize:12,fontWeight:400,color:'#6C727F'}}>Paid</Text>
                    </View>
                </View>
                <View style={styles.sub_sec}>
                    <View style={styles.box1}>
                        <View style={styles.img}>
                            <Image source={require("../assets/Ellipse 814.png")}/>
                        </View>
                        <View style={styles.texts}>
                            <Text style={styles.text1}>King Alex Ade</Text>
                            <Text style={styles.text2}>Kingalexade@gmail.com</Text>
                        </View>

                    </View>
                    <View style={styles.paid}>
                    <Text style={{fontSize:12,fontWeight:400,color:'#6C727F'}}>Paid</Text>
                    </View>
                </View>
                <View style={styles.sub_sec}>
                    <View style={styles.box1}>
                        <View style={styles.img}>
                            <Image source={require("../assets/Ellipse 814.png")}/>
                        </View>
                        <View style={styles.texts}>
                            <Text style={styles.text1}>King Alex Ade</Text>
                            <Text style={styles.text2}>Kingalexade@gmail.com</Text>
                        </View>

                    </View>
                    <View style={styles.paid}>
                    <Text style={{fontSize:12,fontWeight:400,color:'#6C727F'}}>Paid</Text>
                    </View>
                </View>
                <View style={styles.sub_sec}>
                    <View style={styles.box1}>
                        <View style={styles.img}>
                            <Image source={require("../assets/Ellipse 814.png")}/>
                        </View>
                        <View style={styles.texts}>
                            <Text style={styles.text1}>King Alex Ade</Text>
                            <Text style={styles.text2}>Kingalexade@gmail.com</Text>
                        </View>

                    </View>
                    <View style={styles.paid}>
                    <Text style={{fontSize:12,fontWeight:400,color:'#6C727F'}}>Paid</Text>
                    </View>
                </View>
                <View style={styles.sub_sec}>
                    <View style={styles.box1}>
                        <View style={styles.img}>
                            <Image source={require("../assets/Ellipse 814.png")}/>
                        </View>
                        <View style={styles.texts}>
                            <Text style={styles.text1}>King Alex Ade</Text>
                            <Text style={styles.text2}>Kingalexade@gmail.com</Text>
                        </View>

                    </View>
                    <View style={styles.paid}>
                    <Text style={{fontSize:12,fontWeight:400,color:'#6C727F'}}>Paid</Text>
                    </View>
                </View>
                <View style={styles.sub_sec}>
                    <View style={styles.box1}>
                        <View style={styles.img}>
                            <Image source={require("../assets/Ellipse 814.png")}/>
                        </View>
                        <View style={styles.texts}>
                            <Text style={styles.text1}>King Alex Ade</Text>
                            <Text style={styles.text2}>Kingalexade@gmail.com</Text>
                        </View>

                    </View>
                    <View style={styles.paid}>
                    <Text style={{fontSize:12,fontWeight:400,color:'#6C727F'}}>Paid</Text>
                    </View>
                </View>
                <View style={styles.sub_sec}>
                    <View style={styles.box1}>
                        <View style={styles.img}>
                            <Image source={require("../assets/Ellipse 814.png")}/>
                        </View>
                        <View style={styles.texts}>
                            <Text style={styles.text1}>King Alex Ade</Text>
                            <Text style={styles.text2}>Kingalexade@gmail.com</Text>
                        </View>

                    </View>
                    <View style={styles.paid}>
                    <Text style={{fontSize:12,fontWeight:400,color:'#6C727F'}}>Paid</Text>
                    </View>
                </View>
                <View style={styles.sub_sec}>
                    <View style={styles.box1}>
                        <View style={styles.img}>
                            <Image source={require("../assets/Ellipse 814.png")}/>
                        </View>
                        <View style={styles.texts}>
                            <Text style={styles.text1}>King Alex Ade</Text>
                            <Text style={styles.text2}>Kingalexade@gmail.com</Text>
                        </View>

                    </View>
                    <View style={styles.paid}>
                    <Text style={{fontSize:12,fontWeight:400,color:'#6C727F'}}>Paid</Text>
                    </View>
                </View>
            </View>




        </SafeAreaView>

         
       
    </View>
  )
}

export default Group_members

const styles = StyleSheet.create({
    container: { flex: 1, width:'100%',  backgroundColor:'#F5F7FF' },
    safe_view:{flex: 1, backgroundColor:'BLUE', width:'100%'},
    top:{
        width:'100%',
        height:90,
        backgroundColor:'#442CF5',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:15
    },
    back: {
        backgroundColor:'#FFFF',
        width:28,
        height:28,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
      
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
        gap:10,
        marginTop:20,
        paddingHorizontal:15
    },
    options_butn: {
        flex:1,
        borderRadius:10,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
    },
    third_section:{
        width:329,
        height:80,
        marginTop:20,
        marginHorizontal:15,
        backgroundColor:'white',
        borderRadius:10,
        flexDirection:'column',
        gap:15
    },
    first:{
        width:308,
        height:26,
        justifyContent:'space-between',
        flexDirection:'row',
        paddingTop:12,
        // backgroundColor:'red'
        paddingHorizontal:5
    },

    export:{
        width:167,
        height:21,
        gap :20,
        // backgroundColor:'red',
        flexDirection:'row'

    },
    inner:{
        width:81,
        height:21,
        borderRadius:8,
        gap:10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5F7FF'
    },
    inner2:{
        width:66,
        height:22,
        borderRadius:20,
        backgroundColor:'#FFFFFF',
        borderWidth:1,
        borderColor:'#442CF5',
        alignItems:'center',
        color:'#442CF5',
        
    },
    inner3:{
        width:66,
        height:22,
       borderRadius:10,
       borderColor:'#6C727F1A',
       borderWidth:1,
        alignItems:'center'
    },
    section:{
        width:'100%',
        height:544,
        gap:5,
        // backgroundColor:'red',
        marginTop:8,
        paddingHorizontal:15

    },
    sub_sec:{
        width:'100%',
        height:45,
        borderRadius:10,
        backgroundColor:'#FFFFFF',
        alignItems:'center',
        justifyContent:'center',
        gap:1,
        flexDirection:'row',
        // paddingHorizontal:17
    },




    text1:{
        fontSize:13,
    },
    text2:{
        fontSize:10,
        lineHeight:10,
        color:'#6C727F',
    },
    box1:{
        width:269,
        height:34,
        gap:8,
        // backgroundColor:'pink',
        flexDirection:'row'
    },
    img:{
        width:28,
        height:28,
    },
    texts:{
        width:125,
        height:32,
        // backgroundColor:'blue',
        lineHeight:1,
        justifyContent:'center'
    },
    paid:{
        width:39,
        height:16,
        borderRadius:10,
        backgroundColor:'#2C14DD0D',
        alignItems:'center'
    }
    
})