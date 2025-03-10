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
              <View style= {styles.cr}>
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

               <View style = {styles.link}>
              <Text style={{fontSize: 14, fontWeight: 400, height: 24}}>0 members</Text>
              <Text style = {styles.textCopy}>Copy group link <Image style ={styles.Img} source={require('../assets/applyLoan/Copy.png')}/></Text>
             </View>
             </View>
            
             </View>

               <View style = {styles.conButton}>
              <Custom2Button
              backgroundColor = "#2C14DD"
              title = "Continue"
              opacity= "30"
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
      fontSize: 16,
      fontWeight: 600
  },
  contribute:{
    width: 328,
    height: 355,
    gap: 20,
    marginTop: 40,
    marginLeft: 16,
  },
  progress:{
     flexDirection: "row",
    justifyContent: "space-between"
  },
  bar: {
    width: 154,
    height: 2,
    backgroundColor: "#442CF5"
  },
  cr:{
    width: 328,
    height: 61,
    gap: 6
  },
  createT: {
      fontWeight: 700,
      fontSize: 24
  },
  detail: {
    fontSize: 14,
    fontWeight: 400
  },
  form: {
    width: 328,
    height: 372,
    marginTop: 20,
    gap: 16
  },
  inputDiv: {
    width: 328,
   height: 334,
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
   width: 290,
   height: 318,
   flex: 1,
   paddingLeft: 5,
   paddingTop: 8,
   fontSize: 12,
   fontWeight: 400,
  textAlignVertical: "top" 
  },
  link: {
    width: 328,
    height: 28,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  textCopy: {
    width: 141,
    height: 28,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: "#FAFBFF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#6C727F1A",
    gap: 5,
    fontSize: 14, 
    fontWeight: 400,
    color: "#292B2D"

  },
  Img: {
    width: 12,
    height: 13.33
  },
  conButton: {
   width: 328,
   marginLeft: 16,
   top: 727,
   marginBottom: 55
  }
})

export default InviteScreen
