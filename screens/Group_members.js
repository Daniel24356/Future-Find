import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Ionicons from '@expo/vector-icons/Ionicons';


const Group_members = () => {
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
                     <View style={styles.options_butn}>
                                    <Text style={{fontSize:12,fontWeight:400,
                                        color:'#442CF5',}}>
                                        Group info
                                    </Text>
                                </View>
                                <View style={[styles.options_butn, {borderWidth:1,borderColor:'#442CF5'}]}>
                                    <Text style={{fontSize:12,fontWeight:400,color:'#6C727F'}}>
                                        All members
                                    </Text>
                     </View>
            </View>

            
            <View style={styles.third_section}>
               <View style={styles.first}>
                   
               </View>

               <View style={styles.second}>

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
        height:27,
        flexDirection:'row',
        justifyContent:'space-between',
        gap:10,
        marginTop:20,
        paddingHorizontal:15
    }
})