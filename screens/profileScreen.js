import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
// import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


const profileScreen = () => {
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor='blue' />
        <SafeAreaView style={styles.safe_view} >
        <View style={styles.top_container}>
           <View style={styles.profile_1}> 
            <View style={styles.icon}><Entypo name="chevron-small-left" size={24} color="black" /></View>
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
                <View></View>

            </View>
            <View style={styles.section_1}></View>
        </View>
        </View>

        </SafeAreaView>
       
    </View>
  )
}


const styles = StyleSheet.create({
    container: { flex: 1, width:'100%', alignItems: 'center' , backgroundColor: 'white', },
    text: { fontSize: 20, marginBottom: 20 },

    safe_view:{flex: 1, backgroundColor:'BLUE', width:'100%'},

    top_container:{
        width:'100%',
        height:90,
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
        backgroundColor:'red'
    },
  
    mid_container:{
        width:328,
        height:437,
        backgroundColor:'purple',
        // flex:1,
        alignItems:'center',
        marginTop:23
    },
    section:{
        width:181,
        height:158,
        backgroundColor:'white'
    }

   


  });
  
  export default profileScreen
