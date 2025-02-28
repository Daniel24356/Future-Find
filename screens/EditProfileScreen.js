import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import { StatusBar } from 'expo-status-bar';
import CustomButton from '../props/CustomButton';
import EvilIcons from '@expo/vector-icons/EvilIcons';


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

        <View style={styles.image_section}>
        <Image source={require('../assets/Group 20474.png')} style={styles.image}/>
        </View>

        
         <View style={styles.container_input}>
          <TextInput style={styles.inputs} placeholder="Full Name" />
          <TextInput style={styles.inputs} placeholder="Phone Number" keyboardType="Number" />
         <TextInput style={styles.inputs} placeholder="Email" keyboardType="email-address" />
         <TextInput style={styles.inputs} placeholder="BVN" keyboardType="Number" />
          <View style={styles.bottom_comment}>
                <EvilIcons style={{color:'#292B2D', height:20, width:20}} name="exclamation" size={24} color="black" />
                <Text style={{color:'#292B2D', fontSize:12, fontWeight:400}}>
                    You can not edit your BVN
                </Text>
            </View>
          {/* <Button title="Sign Up" onPress={() => alert('Signup pressed')} />
          <Button title="Already have an account? Login" onPress={() => navigation.navigate('Login')} /> */}
       </View> 
        
        <View style={{width:'100%', paddingHorizontal:13}}>
       <CustomButton
        backgroundColor={'blue'}
        title={'Button'}

       />
       </View>

    </View>
  )
}

export default EditProfileScreen

const styles = StyleSheet.create({
    container: { flex: 1, width:'100%', alignItems: 'center' , backgroundColor: '#F5F7FF' },
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
        width:25,
        height:25,
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
       fontSize:15,
       lineHeight:20,
       alignContent:'center'
    },
    image_section:{
        width:181,
        height:150,
        // backgroundColor:'red',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },
    image:{
        width:90,
        height:90,
    },
    container_input: { width:'100%',  justifyContent: 'center', padding: 20, paddingTop:6,},
    inputs: {  padding: 10, marginBottom: 10, borderRadius: 10 , backgroundColor:'white', height:47},
    bottom_comment: {
        width:'100%',
        height: 20,
        flexDirection:'row',
        alignItems:'center',
        gap: 6,
        marginBottom:130
        
    }
   
})