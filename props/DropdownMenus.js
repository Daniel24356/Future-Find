import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';

const DropdownMenus = ({maritalStatus, sourceOfIncome, employmentStatus, selectBank, savingPeriod, paymentInterval, selectProvider,
    exportAs, selectDate, onClose, maritalSelect, employmentSelect
}) => {
    const [ranges, setRanges] = useState('range1');
    const [checked, setChecked] = useState(0);
    const [checkedDate, setCheckedDate] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [bankSearch, setBankSearch] = useState([]);

    const rangeOne = Array.from({length:60-7+1}, (_,i)=> i + 7);
    const rangeTwo = Array.from({length:180-61+1}, (_,i)=> i + 61);
    const rangeThree = Array.from({length:364-181+1}, (_,i)=> i + 181);
    const rangeFour = Array.from({length:1000-365+1}, (_,i)=> i + 365);

    const banksList = [
        {name:'Access Bank', image: require('../assets/popups/access_bank.png')},
        {name:'FCMB', image: require('../assets/popups/fcmb_logo.png')},
        {name:'Opay microfinance bank', image: require('../assets/popups/opay.png')},
        {name:'United bank for Africa', image: require('../assets/popups/uba_group.png')},
    ]
    const providerList = [
        {name:'PHEDC'}, {name:'AEDC'}, {name:'BEDC'}, {name:'EKEDC'}, {name:'IBEDC'}, {name:'IKEDC'}, {name:'JEDC'}
    ]
    const months = [
        "January, 2025","February, 2025","March, 2025","April, 2025","May, 2025","June, 2025","July, 2025","August, 2025",
        "September, 2025","October, 2025","November, 2025","December, 2025"
    ]

    useEffect(()=>{
        const runSearch =()=>{
            if(searchValue){
                const searching = banksList.filter((bank)=> bank.name.toLowerCase().includes(searchValue.toLowerCase()) );
                setBankSearch(searching);
            }
        }
        runSearch();
    },[searchValue]);

  return (
    <View style={styles.background}>
        <SafeAreaView style={{flex:1, justifyContent:'flex-end', paddingBottom:30}}>
            <View style={styles.pop_up}>

                <View style={{height:68,justifyContent:'space-between'}}>
                    <Ionicons name="close-outline" size={24} color="black" onPress={onClose}/>
                    <Ionicons name="close-outline" size={24} color="black" onPress={onClose}/>

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
                        </Text> :
                        paymentInterval?
                        <Text style={{fontSize:18,fontWeight:500,color:'#121826'}}>
                            Payment interval
                        </Text> :
                        selectProvider?
                        <Text style={{fontSize:18,fontWeight:500,color:'#121826'}}>
                            Select provider
                        </Text> :
                        exportAs?
                        <Text style={{fontSize:18,fontWeight:500,color:'#121826'}}>
                            Export as
                        </Text> : 
                        selectDate?
                        <Text style={{fontSize:18,fontWeight:500,color:'#121826'}}>
                            Select date
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
                            value={searchValue}
                            onChangeText={ (text)=>{ setSearchValue(text); }}
                        />
                    </View>
                }

                {
                    savingPeriod &&
                    <View style={{gap:10}}>
                        <View style={{flexDirection:'row',gap:10,marginTop:10}}>
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

                            <FlatList style={{height:360}}
                                
                                data={
                                    ranges==='range1'? rangeOne : ranges==='range2'? rangeTwo :
                                    ranges==='range3'? rangeThree : ranges==='range4'? rangeFour : []
                                }
                                keyExtractor={(day)=>day.name}
                                renderItem={(day)=>(
                                    <View style={styles.days_option} key={day.index}>
                                        <Pressable onPress={()=> setChecked(day.item)}>
                                            <View style={[styles.check_box, {backgroundColor: checked===day.item? '#2C14DD':'#FFFF'}]}></View>
                                        </Pressable>
                                        <Text style={{fontSize:14,color:'#292B2D'}}>{day.item} days</Text>
                                    </View>
                                )}
                            /> 
                    </View>
                }

                {
                    selectDate &&
                    <FlatList style={{height:360}}
                        data={months}
                        keyExtractor={(month)=>month}
                        renderItem={(month)=>(
                            <View style={styles.days_option} key={month.index}>
                                <Pressable onPress={()=> setCheckedDate(month)}>
                                    <View style={[styles.check_box, {backgroundColor: checkedDate===month? '#2C14DD':'#FFFF'}]}></View>
                                </Pressable>
                                <Text style={{fontSize:14,color:'#292B2D'}}>{month.item}</Text>
                            </View>
                        )}
                    />
                }
                
                <View>
                    {
                        maritalStatus?
                        <TouchableOpacity style={styles.option} onPress={()=>maritalSelect('Married')}>
                            <Text style={{fontSize:14,color:'#292B2D'}}>Married</Text>
                        </TouchableOpacity> : 
                        sourceOfIncome?
                        <TouchableOpacity style={styles.option}>
                            <Text style={{fontSize:14,color:'#292B2D'}}>Business</Text>
                        </TouchableOpacity> :
                        employmentStatus?
                        <TouchableOpacity style={styles.option} onPress={()=>employmentSelect('Employed')}>
                            <Text style={{fontSize:14,color:'#292B2D'}}>Employed</Text>
                        </TouchableOpacity> :
                         paymentInterval?
                         <TouchableOpacity style={styles.option}>
                             <Text style={{fontSize:14,color:'#292B2D'}}>Weekly</Text>
                         </TouchableOpacity> :
                         exportAs?
                         <TouchableOpacity style={styles.option}>
                             <Text style={{fontSize:14,color:'#292B2D'}}>PDF</Text>
                         </TouchableOpacity> : ''
                    }

                    {
                        maritalStatus?
                        <TouchableOpacity style={styles.option} onPress={()=>maritalSelect('Single')}>
                            <Text style={{fontSize:14,color:'#292B2D'}}>Single</Text>
                        </TouchableOpacity> : 
                        sourceOfIncome?
                        <TouchableOpacity style={styles.option}>
                            <Text style={{fontSize:14,color:'#292B2D'}}>Freelance</Text>
                        </TouchableOpacity> :
                        employmentStatus?
                        <TouchableOpacity style={styles.option} onPress={()=>employmentSelect('Self employed')}>
                            <Text style={{fontSize:14,color:'#292B2D'}}>Self employed</Text>
                        </TouchableOpacity> :
                         paymentInterval?
                         <TouchableOpacity style={styles.option}>
                             <Text style={{fontSize:14,color:'#292B2D'}}>Monthly</Text>
                         </TouchableOpacity> :
                         exportAs?
                         <TouchableOpacity style={styles.option}>
                             <Text style={{fontSize:14,color:'#292B2D'}}>Excel</Text>
                         </TouchableOpacity> : ''
                    }

                    {
                        maritalStatus?
                        <TouchableOpacity style={styles.option}onPress={()=>maritalSelect('Divorced')} >
                            <Text style={{fontSize:14,color:'#292B2D'}}>Divorced</Text>
                        </TouchableOpacity> : 
                        sourceOfIncome?
                        <TouchableOpacity style={styles.option}>
                            <Text style={{fontSize:14,color:'#292B2D'}}>E-commerce</Text>
                        </TouchableOpacity> : 
                        employmentStatus?
                        <TouchableOpacity style={styles.option} onPress={()=>employmentSelect('Business owner')}>
                            <Text style={{fontSize:14,color:'#292B2D'}}>Business owner</Text>
                        </TouchableOpacity> :
                        exportAs?
                        <TouchableOpacity style={styles.option}>
                            <Text style={{fontSize:14,color:'#292B2D'}}>Word</Text>
                        </TouchableOpacity> : ''
                    }

                    {
                        maritalStatus||sourceOfIncome||employmentStatus?
                        <TouchableOpacity style={styles.option} onPress={
                            maritalSelect?
                            ()=>maritalSelect('Student') :
                            employmentStatus?
                            ()=>employmentSelect('Student') : ''
                        }>
                            <Text style={{fontSize:14,color:'#292B2D'}}>Student</Text>
                        </TouchableOpacity> : ''
                    }


                    {
                        selectBank && searchValue.length < 1?
                        banksList.map((bank, index)=>(
                            <TouchableOpacity style={styles.option} key={index} onPress={()=>selectedBank(bank)}>
                                <Image source={bank.image} />
                                <Text style={{fontSize:14,color:'#292B2D'}}>{bank.name}</Text>
                            </TouchableOpacity>

                        )) :
                        selectBank && searchValue.length > 0?
                        bankSearch.map((bank, index)=>(
                            <TouchableOpacity style={styles.option} key={index} onPress={()=>selectedBank(bank)}>
                                <Image source={bank.image} />
                                <Text style={{fontSize:14,color:'#292B2D'}}>{bank.name}</Text>
                            </TouchableOpacity>

                        )) :
                        selectProvider?
                        providerList.map((provider, index)=>(
                            <TouchableOpacity style={styles.option} key={index}>
                                {/* <Image source={provider.image} /> */}
                                <Text style={{fontSize:14,color:'#292B2D'}}>{provider.name}</Text>
                            </TouchableOpacity>

                        )) : []
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
        alignItems:'center',
        paddingHorizontal:8,
        gap:10
    },
    check_box: {
        width:18,
        height:18,
        borderRadius:5,
        borderWidth:1,
        borderColor:'#6C727F1A'
    }
})