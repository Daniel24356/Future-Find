import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import { StatusBar } from 'expo-status-bar';

const EditProfileScreen = () => {
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor='blue' />
        <View style={styles.top_container}>
           <View style={styles.profile_1}> 
            <View style={styles.icon}><Entypo name="chevron-small-left" size={24} color="black" /></View>
            <Text style={styles.icon_text}>Edit Profile</Text>
           </View>
        </View>

        <View style={styles.image_section}></View>
        
      <Text>EditProfileScreen</Text>
    </View>
  )
}

export default EditProfileScreen

const styles = StyleSheet.create({
    container: { flex: 1, width:'100%', alignItems: 'center' , backgroundColor: 'white', },
    top_container:{
        width:'100%',
        height:100,
        backgroundColor:'blue',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    profile_1:{
        width:'30%',
        height:40,
        // backgroundColor:'red',
        marginLeft:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        marginTop:20
    },
    
    icon:{
        width:28,
        height:28,
        backgroundColor:'white',
        borderRadius:9,  
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',  
        // paddingTop:30
    },

    icon_text:{
    //    fontWeight:600,
       color:'white',
       fontSize:16,
       lineHeight:20,
       alignContent:'center'
    },
})