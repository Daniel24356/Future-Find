import { StyleSheet, View, Text, TextInput, Image} from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import Custom2Button from "../props/Custom2Button";
import { useNavigation } from "@react-navigation/native";


const InviteScreen = () => {
   const navigate = useNavigation()
   return (
     <View style = {styles.conContainer}>
       <View style={styles.header}>
                <View style={styles.innercont}>
                    <View style={styles.smallBox}>
                        <Ionicons name="chevron-back" size={20} color="black" />
                    </View>
                    <Text style={styles.create}>Create group</Text>
                </View>
            </View>

             <View style = {styles.contribute}>
               <View style = {styles.progress}>
                  <View style = {styles.bar}></View>
                  <View style = {styles.bar}></View>
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
                  placeholderTextColor= "#6C727F"
               ></TextInput>
               </View>
                  
             </View>
             <View style = {styles.link}>
              <Text>0 members</Text>
              <Text style = {styles.textCopy}>Copy group link <Image style ={styles.Img} source={require('../assets/applyLoan/Copy.png')}/></Text>
             </View>
             </View>
            
               <View style = {styles.conButton}>
              <Custom2Button
              backgroundColor = "#2C14DD"
              title = "Continue"
            onPress={() => navigate.navigate("ContributeScreen2")}
              />
              </View>
              
     </View>
   )
}


const styles = StyleSheet.create({
     conContainer: {
        backgroundColor: "#f5f7ff",
     },
     header: {
      backgroundColor: "#442cf5",
      height: 150,
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
      fontSize: 18
  },
  contribute:{
      width: 392,
      height: 570,
      gap: 13,
      marginTop: 40,
      marginLeft: 17,
      paddingLeft: 5,
      paddingRight: 6
  },
  progress:{
     flexDirection: "row",
     gap: 20
  },
  bar: {
    width: 180,
    height: 3,
    backgroundColor: "#442CF5"
  },
  createT: {
      fontWeight: 700,
      fontSize: 35
  },
  detail: {
     fontSize: 18.5,
     marginTop: 8
  },
  form: {
   marginTop: 15,
   gap: 20
  },
  inputDiv: {
   height: 370,
   flexDirection: "row",
   backgroundColor: "#fff",
   borderRadius: 16,
   paddingBottom: 8,
   paddingRight: 12,
   paddingLeft: 12,
   paddingTop: 8,
   gap: 10
  },
  input: {
   width: 340,
   height: 340,
   flex: 1,
   paddingLeft: 5,
   paddingTop: 8,
   fontSize: 16,
  textAlignVertical: "top"
   
  },
  link: {
    height: 30,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  textCopy: {
    paddingRight: 12,
    paddingLeft: 12,
    paddingTop: 5,
    paddingBottom: 2,
    backgroundColor: "#FAFBFF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#6C727F1A",

  },
  conButton: {
   width: 392,
   marginLeft: 17,
   marginTop: 65,
   marginBottom: 55
  }
})

export default InviteScreen
