import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
// import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
// import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {

const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <StatusBar backgroundColor='blue' />
        <SafeAreaView style={styles.safe_view} >
        <View style={styles.top_container}>
           <View style={styles.profile_1}> 
            <TouchableOpacity onPress={() => navigation.navigate('home')} style={styles.icon}><Entypo name="chevron-small-left" size={24} color="black" /></TouchableOpacity>
            <Text style={styles.icon_text}>Profile</Text>
           </View>

           <View style={styles.profile_2}> 
           <MaterialCommunityIcons name="pencil" size={20} color="black" />
           <Text style={styles.icon_text2}>Edit</Text>
           </View>
          
        </View>
        <View style={styles.mid_holder}>
        <View style={styles.mid_container}>
            <View style={styles.section}>
              <Image source={require('../assets/Group 20105.png')} style={styles.image}/>
              <Text style={styles.text_1}>Malvin YaaBari</Text>
              <Text style={styles.text_2}>malvindesigner@gmail.com</Text>
            </View>

            <View style={styles.section_1}>
                {/* <View style={styles.account}>
                <MaterialCommunityIcons name="account" size={24} color="black" /> <Text>my acc</Text>
                </View> */}
                <View style={styles.account}>
                <Image source={require("../assets/prof.png")}/>
                <Text style={styles.textprof}>My account</Text>
                </View>
                <View style={styles.account}>
                <Image source={require("../assets/prof.png")}/>
                <Text style={styles.textprof}>My account</Text>
                </View>
                <View style={styles.account}>
                <Image source={require("../assets/prof.png")}/>
                <Text style={styles.textprof}>My account</Text>
                </View>
                <View style={styles.account}>
                <Image source={require("../assets/prof.png")}/>
                <Text style={styles.textprof}>My account</Text>
                </View>
            </View>

            <View style={styles.text_div}> 
                <Text style={styles.text_under}>You joined Future on September 2021, its been 1 month since then and our mission is still the same,
                    help you better manage your finances like a pro.
                </Text>
            </View>
        </View>
        </View>

        </SafeAreaView>
       
    </View>
  )
}


const styles = StyleSheet.create({
    container: { flex: 1, width:'100%', alignItems: 'center' , backgroundColor: '#F5F7FF', },
    text: { fontSize: 20, marginBottom: 20 },

    safe_view:{flex: 1, backgroundColor:'BLUE', width:'100%'},

    top_container:{
        width:'100%',
        height:70,
        backgroundColor:'blue',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    profile_1:{
        width:'25%',
        height:30,
        // backgroundColor:'red',
        marginLeft:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    
    icon:{
        width:28,
        height:28,
        backgroundColor:'white',
        borderRadius:9,  
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'  
    },

    icon_text:{
    //    fontWeight:600,
       color:'white',
       fontSize:16,
       lineHeight:20,
       alignContent:'center'
    },

    icon_text2:{
           color:'black',
           fontWeight:100,
           fontSize:16,
           lineHeight:20,
           alignContent:'center'
        },
         
    profile_2:{
        width:'17%',
        height:30,
        backgroundColor:'white',
        marginRight:13,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        borderRadius:15
    },
    mid_holder:{
        width:'100%',
        height:'500',
        // flex:1,
        alignItems:'center',
        // backgroundColor:'red'
    },
  
    mid_container:{
        width:328,
        height:600,
        // backgroundColor:'purple',
        // flex:1,
        alignItems:'center',
        marginTop:23
    },
    section:{
        width:181,
        height:158,
        // backgroundColor:'white',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        gap:4,
        marginBottom: 50
    },
    image:{
        width:90,
        height:90,
    },
    text_1:{
        fontSize:18,
    },
    text_2:{
        fontSize:14,
        lineHeight:24,
        color:'#6C727F',
    },
    section_1:{
        width:328,
        height:100,
        flex:1,
        flexDirection:'column',
        gap: 12,
      
    },
    account:{
        width:'100%',
        height:50,
        backgroundColor:'white',
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        gap: 10,
        paddingLeft:10,
        borderRadius: 13
        // gap

    },
    textprof:{
        fontSize: 19,
        fontWeight: 500
    },
    text_under:{
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 400,
        color: "#6C727F",
        marginTop:100,
        lineHeight: 23
    },
    //  text_div:{
    //   marginTop: 80
    //  }


   


  });
  
  export default ProfileScreen
