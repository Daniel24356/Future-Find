// import { Button, Text , Image, TextInput, View} from 'react-native'
// import CustomButton from '../props/CustomButton'


// const Withdrawal = () => {
//     const [activeButton, setActiveButton] = useState(false);
//     const [bank, setBank] = useState(null);
//     const [selectBank, setSelectBank] = useState(false);
//     const [amount, setAmount] = useState(0);
//     const [accNumber, setAccNumber] = useState(0);
//     const [accBalance, setAccBalance] = useState(0);

//     useEffect(()=>{
//     const getBalance = async ()=>{
//         axios.get(`${URL}12208cd0-2e23-42ef-ac42-1c2ed9041104`)
//         .then((response)=>{
//         setAccBalance(response.data.balance);
//         })
//     };
//     getBalance();
//     },[]);

//     useEffect(()=>{
//     if(amount.toString().length > 2 && bank && accNumber.toString().length === 10){
//         if(!activeButton){
//         setActiveButton(true);
//         }
//     }else{
//         if(activeButton){
//         setActiveButton(false);
//         }
//     }
//     },[amount, bank, accNumber]);

//     const handleSelect = (selectedBank)=>{
//     setBank(selectedBank);
//     setSelectBank(false);
//     };

//     return(
//         <View style={{flex:1,backgroundColor:'#F5F7FF'}}>
//             <StatusBar style="light" backgroundColor="#442CF5"/>
//             <SafeAreaView style={{flex:1}}>
//                 <TopHeader title="Withdrawal" onRightPress={() => console.log("Settings Pressed")} />
    
//                 <ScrollView style={{flex:1}}>
            
//                 <View style={{padding: 15,gap:30}}>
    
//                     <View style={styles.card}>
    
//                     <View style={styles.lockIcon}>
//                         <Image source={require("../assets/Upload.png")} />
//                     </View>
    
//                     <View style={{alignItems:'center'}}>
//                         <Text style={styles.totalInterest}>Total available amount</Text>
//                         <Text style={styles.amount}>{`N${accBalance.toLocaleString()}`}</Text>
//                     </View>
    
//                     <View style={{flexDirection: "row", gap: 10}}>
//                         <View style={styles.info}>
//                         <View style={styles.lock}>
//                             <Image source={require("../assets/Wallet.png")}/>
//                         </View>
//                         <View>
//                             <Text style={styles.capital}>Your Capital</Text>
//                             <Text style={styles.number}>N150,000</Text>
//                         </View>
//                         </View>
    
//                         <View style={styles.info}>
//                             <View style={styles.lock}>
//                                 <Image source={require("../assets/Dolls.png")}/>
//                             </View>
//                             <View>
//                             <Text style={styles.capital}>Total Interest</Text>
//                             <Text style={styles.number}>N50.00</Text>
//                             </View>
//                         </View>
//                     </View>
    
//                     <View style={styles.warningBox}>
//                         <Image 
//                         source={require("../assets/Danger.png")}
//                         style={{width:14,height:14}}
//                         />
//                         <View style={{flex:1,paddingRight:15}}>
//                         <Text style={styles.warningText}>
//                             You cannot withdraw your interest since your durations has not been completed
//                         </Text>
//                         </View>
//                     </View>
    
//                     </View>
    
//                     <View>
    
//                     <View style={{flexDirection: "row", justifyContent: "space-between",marginBottom:5,paddingHorizontal:6}}>
//                         <Text style={{fontSize:12,color:'#292B2D'}}>Early Withdrawal Fee</Text>
//                         <Text style={{fontSize:12,color:'#FD3C4A'}}>- N10.00</Text>
//                     </View>
    
//                     {/* AMOUNT INPUT */}
//                     <View style={styles.passwordContainer}>
//                         <TextInput
//                         style={styles.passwordInput}
//                         placeholder="Amount"
//                         placeholderTextColor={'#6C727F'}
//                         keyboardType="numeric"
//                         value={amount}
//                         onChangeText={(text)=> setAmount(text)}
//                         />
//                         <Image source={require("../assets/NairaImg.png")}/>
//                     </View>
    
//                     <View style={{flexDirection: "row",height:25,justifyContent: "flex-end", gap: 20,marginTop:10}}>
//                         <TouchableOpacity style={styles.selector}>
//                             <Text style={{fontSize:14,color: "#442CF5"}}>All</Text>
//                         </TouchableOpacity>
    
//                         <TouchableOpacity style={styles.selector}>
//                             <Text style={{fontSize:14,color: "#442CF5"}}>50%</Text>
//                         </TouchableOpacity>
//                     </View>
    
//                     <View style={{gap:10,marginTop:10}}>
//                         <TouchableOpacity style={styles.select_div} onPress={()=>setSelectBank(true)}>
//                         {
//                             bank?
//                             <Text style={{fontSize:14,color:'#6C727F'}}>{bank.name}</Text> :
//                             <Text style={{fontSize:14,color:'#6C727F'}}>Select bank</Text>
//                         }
//                         <Image source={require("../assets/arrow.png")}/>
//                         </TouchableOpacity>
    
//                         {/* ACCOUNT NUMBER INPUT */}
//                         <View style={styles.passwordContainer}>
//                         <TextInput
//                             style={styles.passwordInput}
//                             placeholder="Account number"
//                             placeholderTextColor={'#6C727F'}
//                             keyboardType="numeric"
//                             maxLength={10}
//                             value={accNumber}
//                             onChangeText={(text)=> setAccNumber(text)}
//                         />
//                         </View>
//                     </View>
    
//                     </View>
    
//                 </View>
//                 </ScrollView>
    
//                 <View style={{paddingHorizontal:15, paddingBottom:20,paddingTop:10}}>
//                 {
//                     activeButton?
//                     <CustomButton
//                     backgroundColor={'#2C14DD'}
//                     title={'Continue'}
//                     /> 
//                     :
//                     <View style={styles.button}>
//                     <Text style={styles.buttonText}>Continue</Text>
//                     </View>
//                 }
//                 </View>
    
//             </SafeAreaView>
//             {
//                 selectBank &&
//                 <DropdownMenus 
//                 selectBank={true}
//                 onClose={()=> setSelectBank(false)}
//                 selectedBank={handleSelect}
//                 />
//             }
//             </View>
//     )
// }

// export default Withdrawal;

// const styles = StyleSheet.create({
//     header: {
//       flexDirection: "row",
//       alignItems: "flex-end",
//       justifyContent: "space-between",
//       padding: 15,
//       backgroundColor: "#4A3AFF",
//       height: 120
//     },
//     headerTitle: {
//       color: "white",
//       fontSize: 18,
//       fontWeight: "bold",
//     },
//     card: {
//       backgroundColor: "white",
//       borderRadius: 16,
//       paddingTop: 20,
//       paddingBottom:10,
//       paddingHorizontal:10,
//       alignItems: "center",
//       marginTop: 15,
//       gap:15
//     },
//     lockIcon: {
//       backgroundColor: "#442CF5",
//       height:60,
//       width:60,
//       borderRadius: '50%',
//       justifyContent:'center',
//       alignItems:'center'
//     },
//     totalInterest: {
//       fontSize: 14,
//       color: "#6C727F",
//     },
//     amount: {
//       fontSize: 24,
//       fontWeight: 700,
//       color: "#131313",
//     },
//     info: {
//       flex:1,
//       backgroundColor: "#F5F7FF", 
//       flexDirection: "row", 
//       padding: 10, 
//       borderRadius: 10, 
//       gap: 10
//     },
//     details: {
//       width: "100%",
//       padding: 10,
//       backgroundColor: "#f3f3ff",
//       borderRadius: 10
//     },
//     detailText: {
//       fontSize: 14,
//       color: "#555",
//       paddingVertical: 2,
//     },
//     warningBox: {
//       backgroundColor: "#FFFAEC",
//       paddingHorizontal: 6,
//       paddingVertical:4,
//       borderRadius: 10,
//       width: "100%",
//       flexDirection: "row",
//       alignItems: "center",
//       gap: 10
//     },
//     warningText: {
//       fontSize: 10,
//       color:'#292B2D',
//       lineHeight:18
//     },
//     button: {
//       height:50,
//       backgroundColor: "#b9b3f5",
//       borderRadius: 16,
//       alignItems: "center",
//       justifyContent:'center'
//     },
//     buttonText: {
//       color: "#FCFCFC",
//       fontSize: 14,
//       fontWeight: 600,
//     },

//     capital: {
//       color: "#6C727F",
//       fontSize:12
//     },
//     number: {
//       fontSize: 14,
//       fontWeight: 600,
//       color:'#131313'
//     },

//     lock: {
//       width:30,
//       height:30,
//       backgroundColor: "#442CF5",
//       borderRadius: '50%',
//       justifyContent:'center',
//       alignItems:'center'
//       },
//       passwordContainer: {
//         height:50,
//         flexDirection: "row",
//         alignItems: "center",
//         backgroundColor: "white",
//         paddingHorizontal: 12,
//         borderRadius: 16,
//         gap:10
//       },
//       passwordInput: {
//         flex: 1,
//         // backgroundColor:'red'
//       },
//       selector: {
//         backgroundColor: "white", 
//         borderColor: "#442CF5", 
//         borderWidth: 1, 
//         borderRadius: 10, 
//         paddingHorizontal:20,
//         height:'100%',
//         justifyContent:'center'
//       },
//       select_div: {
//         height:50,
//         flexDirection:'row',
//         alignItems:'center',
//         justifyContent:'space-between',
//         backgroundColor:'white',
//         borderRadius:16,
//         paddingHorizontal:15
//     }
// });