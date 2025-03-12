import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity} from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import Custom2Button from "../props/Custom2Button";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import CustomButton from "../props/CustomButton";


const ContributeDetails = () => {
   const navigate = useNavigation()
   return (

      <View style = {styles.conContainer}>
         <SafeAreaView style={{flex:1,justifyContent:'space-between'}}>
            <StatusBar style="light" backgroundColor="#442CF5"/>

            <View>
               <View style={styles.header}>
                  <View style={{flexDirection:'row', alignItems:'center',gap:10}}>
                     <TouchableOpacity style={styles.back} onPress={()=> navigate.goBack()}>
                        <EvilIcons name="chevron-left" size={30} color="black" />
                     </TouchableOpacity>
                     <Text style={{color:'#FFFF',fontSize:16,fontWeight:600}}>Create group</Text>
                  </View>
               </View>

               <View style = {styles.contribute}>
                  <View style = {styles.progress}>
                     <View style = {[styles.bar, {backgroundColor: "#442CF5"}]}></View>
                     <View style = {[styles.bar, {backgroundColor: "#dad5fd"}]}></View>
                  </View>

                  <View>
                     <Text style={styles.createT}>Create contribution group</Text>
                     <Text style = {styles.detail}>Enter your contribution details</Text>
                  </View>

                  <View style = {styles.form}>
                     <View style = {styles.inputDiv}>
                        <TextInput style = {styles.input}
                           placeholder= "Group name"
                           placeholderTextColor= "#6C727F"
                        />
                     </View>

                     <View style = {styles.inputDiv}>
                        <TextInput style = {styles.input}
                           placeholder= "Amount per members"
                           placeholderTextColor= "#6C727F"
                        />
                        <Image 
                           style = {styles.inputImage} 
                           source={require('../assets/applyLoan/blackNaira.png')}
                        />
                     </View>

                     <View style = {styles.inputDiv}>
                        <TextInput style = {styles.input}
                           placeholder= "Payment interval"
                           placeholderTextColor= "#6C727F"
                        />
                        <Image 
                           style = {styles.inputImage} 
                           source={require('../assets/applyLoan/arrowDown.png')}
                        />
                     </View>

                     <View style = {styles.inputDiv}>
                        <TextInput style = {styles.input}
                           placeholder= "Maximum members"
                           placeholderTextColor= "#6C727F"
                        />
                        <Image 
                           style = {styles.inputImage} 
                           source={require('../assets/applyLoan/arrowDown.png')}
                        />
                     </View>
                        
                  </View>

               </View>
            </View>

            <View style = {styles.conButton}>
               <CustomButton 
                  backgroundColor={'#2C14DD'}
                  title={'Continue'}
                  onPress={() => navigate.navigate("InviteScreen1")}
               />
            </View>
         </SafeAreaView>
      </View>
   )
}


const styles = StyleSheet.create({
   header: {
      height:55,
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
   conContainer: {
   backgroundColor: "#F5F7FF",
   flex:1
   },
  smallBox: {
      backgroundColor: 'blue', 
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      backgroundColor: "white",
      padding: 5
  },
  innercont: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      paddingLeft: 15,
      gap: 10,
      paddingTop: 90,
  },
  create: {
      color: "white",
      fontSize: 16,
      fontWeight: 600
  },
  contribute:{
      width: '100%',
      height: 450,
      gap: 15,
      paddingHorizontal:15,
      marginTop: 40,
      // backgroundColor:'red'
  },
  progress:{
     flexDirection: "row",
     gap: 20,
   //   backgroundColor:'red'
  },
  bar: {
    flex:1,
    height: 3
  },
  createT: {
      fontWeight: 700,
      fontSize: 24,
      color:'#131313'
  },
  detail: {
     fontSize: 14,
     color:'#292B2D',
     marginTop: 6
  },
  form: {
   width: 328,
   height: 248,
   marginTop: 20,
   gap: 15,
   // backgroundColor:'red'
  },
  inputDiv: {
   height: 50,
   backgroundColor: "#FFFF",
   borderRadius: 16,
   justifyContent:'center',
   position:'relative'
  },
  input: {
   flex:1,
   paddingHorizontal:12,
   fontSize: 14,
   color:'#6C727F'
  },
  inputImage: {
   width:15,
   height:15,
   position:'absolute',
   right:12
  },
  conButton: {
   paddingHorizontal:15,
   paddingBottom:20
  }
})

export default ContributeDetails
