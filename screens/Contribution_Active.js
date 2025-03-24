import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import TabBar from '../props/TabBar';
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomButton from '../props/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { ALL_CONTRIBUTION, JOIN_CONTRIBUTION } from '../API_URL';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { verifyIdentityAndJoin } from '../API_SERVICE';
import PopUpScreen from '../props/PopUpScreen';


const Contribution_Active = () => {

    const [popupVisible, setPopupVisible] = useState(false)
    const [popupType, setPopupType] = useState("success")
     const [joinedContribution, setJoinedContribution] = useState(false)
     const [contributions, setContributions] = useState([])
     const UserId = AsyncStorage.getItem("UserId")
     const contributionId = AsyncStorage.getItem("contributionId")

     useEffect(() =>{
                const getUserContribution = async () => {
                    try{
                      const response = await axios.get(`${ALL_CONTRIBUTION}/${id}`)
                      if(response.status === 200){
                       setContributions(response.data)
                      }
            
                    }catch(error){
                        Alert.alert("Error", error.response?.data?.message || "Something went wrong")
                    }
                 }
         
         getUserContribution()
     }, [])

     const verifyIdentityAndJoin = async () => {
        try{
            const response = await axios.post(`${JOIN_CONTRIBUTION}/${id}/join`, {
                UserId,
                contributionId
            },
        )
        if(response.status === 200){
            setJoinedContribution(true)
        }
        }catch(error){
            Alert.alert("Error", "Failed to join contribution. Try again.")
        }
     }
     
     

  const navigation = useNavigation();

  return (
    <View style={{flex:1, backgroundColor:'#F5F7FF'}}>
        <StatusBar backgroundColor='#F5F7FF' />
        <SafeAreaView style={{padding: 15, gap:12}}>
            <View style={styles.convenience}>
                <Text style={styles.conv_text1}>
                Start your group contributions today!
                </Text>
                <Text style={styles.conv_text2}>
                 Invite people to join your contribution
                </Text>
                <Image 
                    source={require('../assets/investing/Illustration_small.png')}
                    style={styles.conv_img}
                />
            </View>
               {contributions.length > 0 ? (
            <>
            <View style={styles.info}>
                      <View style={styles.info_1}>
                          <Text style={{ fontSize: 12, fontWeight: 400, color: '#6C727F' }}>Groups:</Text>
                          <Text style={{ fontSize: 14, fontWeight: 600, color: '#131313' }}>1</Text>
                      </View>

                      <View style={styles.create}>
                          <Text style={{ color: '#442CF5' }}>+ Create</Text>
                      </View>
                  </View><View style={styles.groups}>
                          <Text style={{ fontSize: 16, fontWeight: 400, color: '#292B2D' }}>
                              Created groups
                          </Text>

                          <TouchableOpacity onPress={() => navigation.navigate('groupDetails')} style={styles.green_group}>
                               {contributions.map((contribution) => (
                                    <>
                                    <View style={styles.copy}>
                                       <Text style={{ fontSize: 10, color: '#292B2D', fontWeight: 400 }}>Copy link</Text>
                                       <Ionicons name="copy" size={11} color="#442CF5" />
                                   </View><Image
                                           source={require('../assets/investing/green_comm.png')} /><Text style={{ fontSize: 14, color: '#292B2D', fontWeight: 500 }}>
                                           Saving groups {contribution.name}
                                       </Text>
                                       <View style={styles.green_group_info} key={contribution.id}>
                                           <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                               <Image
                                                   source={require('../assets/homePage/tab_contribution.png')}
                                                   style={{ width: 12, height: 10 }} />
                                               <Text style={styles.small_text}>{contribution.members.length}23/23{contribution.maxMembers} members</Text>
                                           </View>
                                           <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                                               <Image
                                                   source={require('../assets/investing/naira.png')} />
                                               <Text style={styles.small_text}>{contribution.amountPerUser}30,000/m</Text>
                                           </View>
                                           <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                                               <Image
                                                   source={require('../assets/investing/naira.png')} />
                                               <Text style={styles.small_text}>{contribution.amount * contribution.members.length}690,000/member</Text>
                                           </View>
                                       </View>
                                       </>
                               ))}
                              
                          </TouchableOpacity>
                      </View>
                      </> ) : (
                        <View style= {styles.noView}>
                           <Text style={styles.noGroup}>No Groups</Text>
                           <Text style={styles.notAny}>You don’t have any contribution, use the button below to create a new contribution group</Text>
                           <CustomButton
                           backgroundColor="#2C14DD"
                           title="Create"
                           onPress={() => navigation.navigate('Contribute')}
                           mtop= "0"
                           />
                        </View>
                      )}
                {/* NEW MEMBERS JOIN*/}
                {joinedContribution === true && (
                <View style={{alignItems:'center',paddingHorizontal:10,paddingBottom:10,gap:15}}>
                    <Text style={{fontSize:16,fontWeight:600,color:'#131313'}}>Groups invitation</Text>
                    <Text style={{fontSize:12,color:'#292B2D'}}>You have been invited to join this contribution</Text>
                    <View style={{flexDirection:'row',gap:20,marginTop:10}}>
                        <TouchableOpacity style={[styles.invite, {backgroundColor:'#FD3C4A0D'}]} onPress={setPopupType("caution")}>
                            <Text style={{fontSize:14,fontWeight:500,color:'#FD3C4A'}}>Decline</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.invite, {backgroundColor:'#2C14DD0D'}]}
                        onPress={verifyIdentityAndJoin && setPopupType("success")}>
                            <Text style={{fontSize:14,fontWeight:500,color:'#442CF5'}}>Join</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                )}

             
            <CustomButton 
                backgroundColor={'#2C14DD'}
                title={'Create my own group'}
                onPress={() => navigation.navigate('Contribute')}
            />

        </SafeAreaView>

        <TabBar contribution={true}/>
        {popupVisible && (
            <PopUpScreen 
            joinedSavingsGroup={popupType === "success"}
            declinedSavingsGroup={popupType === "caution"}
            onPress={setPopupVisible(false)}
            />
        )}
       
        
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
    },
    noView:{
        width: '100%',
        height: 196,
        borderRadius: 16,
        backgroundColor: '#fff',
        paddingTop: 30,
        paddingRight: 24,
        paddingBottom: 20,
        paddingLeft: 24,
        gap: 20
    },
    noGroup: {
        fontSize: 16,
        fontWeight: 600,
        color: "#131313",
        textAlign: 'center'
    },
    notAny:{
        fontSize: 12,
        fontWeight: 400,
        color: "#6C727F",
        textAlign: "center",
        lineHeight: 18
    }
})