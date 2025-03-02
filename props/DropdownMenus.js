import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';

const DropdownMenus = ({maritalStatus, sourceOfIncome, employmentStatus, selectBank, savingPeriod}) => {
    const [ranges, setRanges] = useState('range1');

    const banksList = [
        {name:'Access Bank', image: require('../assets/popups/access_bank.png')},
        {name:'FCMB', image: require('../assets/popups/fcmb_logo.png')},
        {name:'Opay microfinance bank', image: require('../assets/popups/opay.png')},
        {name:'United bank for Africa', image: require('../assets/popups/uba_group.png')},
    ]
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
                        </Text> : 
                        employmentStatus?
                        <Text style={{fontSize:18,fontWeight:500,color:'#121826'}}>
                            Employment status
                        </Text> : 
                        selectBank?
                        <Text style={{fontSize:18,fontWeight:500,color:'#121826'}}>
                            Select bank
                        </Text> :
                        savingPeriod?
                        <Text style={{fontSize:18,fontWeight:500,color:'#121826'}}>
                            Saving period
                        </Text> : ''
                    }
                </View>

                {
                    selectBank &&
                    <View style={styles.input_wrapper}>
                        <Feather name="search" size={16} color="black" />

                        <TextInput
                            style={styles.input}
                            placeholder='Search banks'
                        />
                    </View>
                }

                {
                    savingPeriod &&
                    <View style={{gap:15}}>
                        <View style={{flexDirection:'row',gap:10}}>
                            <TouchableOpacity style={[styles.ranges, {borderColor: ranges==='range1'? '#442CF5':'#6C727F'}]} 
                                onPress={()=> setRanges('range1')}>
                                <Text style={{fontSize:10,color: ranges==='range1'? '#442CF5':'#6C727F'}}>7-60</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.ranges, {borderColor: ranges==='range2'? '#442CF5':'#6C727F'}]} 
                                onPress={()=> setRanges('range2')}>
                                <Text style={{fontSize:10,color:ranges==='range2'? '#442CF5':'#6C727F'}}>61-180</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.ranges, {borderColor: ranges==='range3'? '#442CF5':'#6C727F'}]} 
                                onPress={()=> setRanges('range3')}>
                                <Text style={{fontSize:10,color:ranges==='range3'? '#442CF5':'#6C727F'}}>181-364</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.ranges, {borderColor: ranges==='range4'? '#442CF5':'#6C727F'}]} 
                                onPress={()=> setRanges('range4')}>
                                <Text style={{fontSize:10,color:ranges==='range4'? '#442CF5':'#6C727F'}}>365-1000</Text>
                            </TouchableOpacity>
                        </View>

                        <ScrollView>
                            <View style={styles.days_option}>

                            </View>
                        </ScrollView>
                    </View>
                }
                
                <View>
                    {
                        maritalStatus?
                        <TouchableOpacity style={styles.option}>
                            <Text style={{fontSize:14,color:'#292B2D'}}>Married</Text>
                        </TouchableOpacity> : 
                        sourceOfIncome?
                        <TouchableOpacity style={styles.option}>
                            <Text style={{fontSize:14,color:'#292B2D'}}>Business</Text>
                        </TouchableOpacity> :
                        employmentStatus?
                        <TouchableOpacity style={styles.option}>
                            <Text style={{fontSize:14,color:'#292B2D'}}>Employed</Text>
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
                        </TouchableOpacity> :
                        employmentStatus?
                        <TouchableOpacity style={styles.option}>
                            <Text style={{fontSize:14,color:'#292B2D'}}>Self employed</Text>
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
                        </TouchableOpacity> : 
                        employmentStatus?
                        <TouchableOpacity style={styles.option}>
                            <Text style={{fontSize:14,color:'#292B2D'}}>Business owner</Text>
                        </TouchableOpacity> : ''
                    }

                    {
                        maritalStatus||sourceOfIncome||employmentStatus?
                        <TouchableOpacity style={styles.option}>
                            <Text style={{fontSize:14,color:'#292B2D'}}>Student</Text>
                        </TouchableOpacity> : ''
                    }


                    {
                        selectBank &&
                        banksList.map((bank, index)=>(
                            <TouchableOpacity style={styles.option}>
                                <Image source={bank.image} />
                                <Text style={{fontSize:14,color:'#292B2D'}}>{bank.name}</Text>
                            </TouchableOpacity>

                        ))
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
        flexDirection:'row',
        alignItems:'center',
        gap:10,
        paddingHorizontal:10,
        borderRadius:10
    },
    input_wrapper: {
        width:'100%',
        height:46,
        borderRadius:15,
        borderWidth:1,
        borderColor:'#EBEFFF',
        backgroundColor:'#FAFBFF',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:18,
        gap:5
    },
    input: {
        borderWidth:0,
        height:'100%',
        width:'100%',
        // backgroundColor:'red',
        fontSize:14,
        color:'#6C727F'
    },
    ranges: {
        flex:1,
        height:22,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        // borderColor:'#6C727F',
        borderRadius:10,
        paddingHorizontal:5
    },
    days_option: {
        height:40,
        flexDirection:'row',
    }
})