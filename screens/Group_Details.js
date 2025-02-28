import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import EvilIcons from '@expo/vector-icons/EvilIcons';

const Group_Details = () => {
  return (
    <View style={{flex:1}}>
        <StatusBar backgroundColor='#442CF5' style='light'/>
        <SafeAreaView style={{flex:1,backgroundColor:'#F5F7FF',gap:5}}>
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

        </SafeAreaView>
      <Text>Group_Details</Text>
    </View>
  )
}

export default Group_Details;

const styles = StyleSheet.create({
    container: {
        height:53,
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
})