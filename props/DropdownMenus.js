import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';

const DropdownMenus = ({maritalStatus, sourceOfIncome}) => {
  return (
    <View style={styles.background}>
        <SafeAreaView style={{flex:1, justifyContent:'flex-end', paddingBottom:30}}>
            <View style={styles.pop_up}>

                <View style={{height:68,justifyContent:'space-between'}}>
                    <Ionicons name="close-outline" size={24} color="black" />

                    {
                        maritalStatus?
                        <Text style={{fontSize:18,fontWeight:500,color:'#121826'}}>
                            Marital status
                        </Text> : 
                        sourceOfIncome?
                        <Text style={{fontSize:18,fontWeight:500,color:'#121826'}}>
                            Source of income
                        </Text> : ''
                    }
                </View>

                <View>
                    {
                        maritalStatus?
                        <TouchableOpacity style={styles.option}>
                            <Text style={{fontSize:14,color:'#292B2D'}}>Married</Text>
                        </TouchableOpacity> : 
                        sourceOfIncome?
                        <TouchableOpacity style={styles.option}>
                            <Text style={{fontSize:14,color:'#292B2D'}}>Business</Text>
                        </TouchableOpacity> : ''
                    }

                    {
                        maritalStatus?
                        <TouchableOpacity style={styles.option}>
                            <Text style={{fontSize:14,color:'#292B2D'}}>Single</Text>
                        </TouchableOpacity> : 
                        sourceOfIncome?
                        <TouchableOpacity style={styles.option}>
                            <Text style={{fontSize:14,color:'#292B2D'}}>Freelance</Text>
                        </TouchableOpacity> : ''
                    }

                    {
                        maritalStatus?
                        <TouchableOpacity style={styles.option}>
                            <Text style={{fontSize:14,color:'#292B2D'}}>Divorced</Text>
                        </TouchableOpacity> : 
                        sourceOfIncome?
                        <TouchableOpacity style={styles.option}>
                            <Text style={{fontSize:14,color:'#292B2D'}}>E-commerce</Text>
                        </TouchableOpacity> : ''
                    }

                    {
                        maritalStatus||sourceOfIncome?
                        <TouchableOpacity style={styles.option}>
                            <Text style={{fontSize:14,color:'#292B2D'}}>Student</Text>
                        </TouchableOpacity> : ''
                    }
                </View>

            </View>
        </SafeAreaView>

    </View>
  )
}

export default DropdownMenus;

const styles = StyleSheet.create({
    background: {
        flex:1,
        width:'100%',
        height:'100%',
        backgroundColor:'#00000080',
        paddingHorizontal:15,
        position:'absolute',
        top:0,
        left:0,
        zIndex:10
    },
    pop_up: {
        width:'100%',
        backgroundColor:'#FFFF',
        borderRadius:15,
        padding:20,
        gap:12
    },
    option: {
        height:44,
        justifyContent:'center',
        paddingHorizontal:10,
        borderRadius:10
    }
})