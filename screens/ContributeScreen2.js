import { StyleSheet, View, Text, TextInput, Image} from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import Custom2Button from "../props/Custom2Button";
import { useNavigation } from "@react-navigation/native";


const ContributeScreen2 = () => {
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
                  <View style = {[styles.bar, {backgroundColor: "#442CF5"}]}></View>
                  <View style = {[styles.bar, {backgroundColor: "#dad5fd"}]}></View>
               </View>
              <View>
              <Text style={styles.createT}>Create contribution group</Text>
              <Text style = {styles.detail}>Enter your contribution details</Text>
              </View>

              <View style = {styles.form}>

               <View style = {styles.inputDiv}>
                  <View style = {styles.inDiv}>
                    <Text style = {styles.inText}>Group name</Text>
                  <TextInput style = {styles.input}
                  placeholder= "Monthly savings"
                  placeholderTextColor= "#6C727F"
               ></TextInput>
                  </View>
               </View>

               <View style = {styles.inputDiv}>
                 <View style = {styles.inDiv}>
                    <Text style = {styles.inText}>Amount per members</Text>
                 <TextInput style = {styles.input}
                  placeholder= "35,000"
                  placeholderTextColor= "#6C727F"
               ></TextInput>
                 </View>
               <Image style = {styles.inputImage} source={require('../assets/applyLoan/blackNaira.png')}/>
               </View>

               <View style = {styles.inputDiv}>
              <View style = {styles.inDiv}>
                <Text style = {styles.inText}>Payment interval</Text>
              <TextInput style = {styles.input}
                  placeholder= "Monthly"
                  placeholderTextColor= "#6C727F"
               ></TextInput>
              </View>
               <Image style = {styles.inputImage} source={require('../assets/applyLoan/arrowDown.png')}/>
               </View>

               <View style = {styles.inputDiv}>
               <View style = {styles.inDiv}>
                <Text style = {styles.inText}>Maximum members</Text>
               <TextInput style = {styles.input}
                  placeholder= "30"
                  placeholderTextColor= "#6C727F"
               ></TextInput>
               </View>
               </View>
                  
             </View>

             </View>
               <View style = {styles.conButton}>
              <Custom2Button
              backgroundColor = "#2C14DD"
              title = "Continue"
              onPress = {() => navigate.navigate("InviteScreen1")}
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
      height: 450,
      gap: 20,
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
    height: 3
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
   marginTop: 20,
   gap: 20
  },
  inputDiv: {
   height: 55,
   flexDirection: "row",
   backgroundColor: "#fff",
   alignItems: "center",
   borderRadius: 16,
   paddingBottom: 8,
   paddingRight: 12,
   paddingLeft: 12,
   paddingTop: 8,
   gap: 10
  },
  inDiv: {
    width: 325,
    height: 45,
    paddingTop: 5,
    flexDirection: "column"
  },
  inText: {
    fontSize: 15,
    paddingLeft: 5,
    color: "#8F94A3",
    marginBottom: 2,
  },
  input: {
   width: 325,
   height: 30,
   paddingTop: 2,
   fontSize: 18,
   fontWeight: 500,
   color: "#292B2D"
  },
  conButton: {
   width: 392,
   marginLeft: 17,
   marginTop: 170,
   marginBottom: 55
  }
})

export default ContributeScreen2
