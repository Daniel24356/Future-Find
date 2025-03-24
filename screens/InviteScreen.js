import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity, Alert} from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import Custom2Button from "../props/Custom2Button";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import CustomButton from "../props/CustomButton";
import { useState } from "react";
import axios from "axios";
import { INVITE_USERS } from "../API_URL";


const InviteScreen = () => {
  const [emails, setEmails] = useState([])

  const inviteUserToContribution = async () => {
    try{
      if(emails.length === 0){
        Alert.alert("Error", "Please enter at least one email")
      }
      const response = await axios.post(`${INVITE_USERS}/${id}/invite`, {id, emails})
      if(response.status === 200){
        Alert.alert("Success", "Invitations successfully sent to the valid emails.")
    }
  }catch(error){
    Alert.alert("Error", error.response?.message || "Something went wrong")
  }
}
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
              <View style = {[styles.bar]}></View>
              <View style = {[styles.bar]}></View>
            </View>

            <View>
              <Text style={styles.createT}>Invite members to join</Text>
              <Text style = {styles.detail}>Invite members via email or group link</Text>
            </View>

            <View style = {styles.form}>

              <View style = {styles.inputDiv}>
                <TextInput style = {styles.input}
                  multiline = {true}
                  placeholder= "Enter email addresses"
                  placeholderTextColor= "#8F94A3"
                  value={emails}
                  onChangeText={setEmails}
                />
              </View>
                
            </View>

            <View style = {styles.link}>
              <Text style={{fontSize:14,color:'#292B2D'}}>0 members</Text>
              <View style = {styles.textCopy}>
                <Text style={{fontSize:14,color:'#292B2D'}}>Copy group link</Text>
                <Image 
                  style ={styles.Img} 
                  source={require('../assets/applyLoan/Copy.png')}
                />
              </View>
            </View>

          </View>
        </View>

        <View style={styles.conButton}>
          <CustomButton
            title={'Continue'}
            backgroundColor={'#b9b3f5'}
            onPress={inviteUserToContribution}
          />
        </View>

      </SafeAreaView>
    </View> 
   )
}


const styles = StyleSheet.create({
  conContainer: {
    flex:1,
    backgroundColor: "#f5f7ff",
  },
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
   
},
  progress:{
    flexDirection: "row",
    gap: 20,
 
 },
 bar: {
   flex:1,
   height: 3,
   backgroundColor:'#442CF5',
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
   marginTop: 15,
  },
  inputDiv: {
   height: 335,
   backgroundColor: "#FFFF",
   borderRadius: 16,
   paddingHorizontal:12,
  
  },

  input: {
    flex: 1,
    fontSize: 12,
    fontWeight:500,
    color:'#292B2D',
    lineHeight:20,
    textAlignVertical: "top",
   
   
  },
  link: {
    width: 328,
    height: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:'center'
  },
  textCopy: {
    flexDirection:'row',
    backgroundColor: "##FAFBFF",
    paddingHorizontal:10,
    paddingVertical:2,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#6C727F1A",
    alignItems:'center',
    gap:5

  },
  Img: {
    width: 12,
    height: 13.33
  },
  conButton: {
    paddingHorizontal:15,
    paddingBottom:20
   }
})

export default InviteScreen
