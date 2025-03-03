import React, {useState} from 'react'
import { View, Text, StyleSheet, Switch, Image } from 'react-native'

const ReviewPayLoan = () => {

    const [hasReceived, setHasReceived] = useState(false);
    const [hasNotReceived, setHasNotReceived] = useState(false);
    const toggleYes = (value) => {
        setHasReceived(value);
        if (value) {
          setHasNotReceived(false);
        }
      };
    
      const toggleNo = (value) => {
        setHasNotReceived(value);
        if (value) {
          setHasReceived(false);
        }
      };

  return (
    <View style = {styles.container}>
      <View style = {styles.topDiv}>
        <View style = {styles.overlay}>
          <Image style = {styles.image} source={require('../assets/applyLoan/Coint.png')}/>
          <Image style = {styles.image2} source={require('../assets/applyLoan/Coint.png')}/>
          <Image style = {styles.image3} source={require('../assets/applyLoan/Coint.png')}/>
        </View>
      </View>
      <View style ={styles.easyLoan}>
        <View style = {styles.easyText}>
          <Text style = {{textAlign: "center", fontSize: 18}}>Your current loan amount</Text>
          <Text style = {styles.h3}>N2,500,000</Text>
        </View>
        <View style = {styles.easyTextFlex}>
           <View style={styles.current}>
            <Text style ={{color: "#6C727F", fontSize: 16.5}}>Loan amount</Text>
            <Text style ={{color: "#292B2D", fontSize: 16.5}}>N2,500,000</Text>
           </View>
           <View style={styles.current}>
            <Text style ={{color: "#6C727F", fontSize: 16.5}}>Interest</Text>
            <Text style ={{color: "#292B2D", fontSize: 16.5}}>10% (N250,000)</Text>
           </View>
           <View style={styles.current}>
            <Text style ={{color: "#6C727F", fontSize: 16.5}}>Total amount</Text>
            <Text style ={{color: "#292B2D", fontSize: 16.5}}>N2,750,000</Text>
           </View>
           <View style={styles.current}>
            <Text style ={{color: "#6C727F", fontSize: 16.5}}>Repayment due</Text>
            <Text style ={{color: "#292B2D", fontSize: 16.5}}>28 Mar, 2027</Text>
           </View>
        </View>

      </View>
      <View style = {styles.receive}>
            <View style = {styles.receiveSub}>
                <Image style={styles.img} source={require('../assets/applyLoan/repay.png')}/>
                <Text style ={{color: "#292B2D"}}>Repay Loan</Text>
            </View>
            <View style = {styles.receiveSub}>
                <Image style={styles.img} source={require('../assets/applyLoan/withdraw.png')}/>
                <Text style ={{color: "#292B2D"}}>Withdraw</Text>
            </View>
        </View>
        <View style = {styles.review}>
             <Image style= {{width: 28, height: 28}} source = {require('../assets/applyLoan/nullOrange.png')}/>
            <Text style = {{width: 335, fontSize: 15, lineHeight: 23}}>You will need to repay the current loan before you will be able to apply for another one</Text>
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
       backgroundColor: "#F5F7FF",
       flex: 1,
       alignContent: "center"
    },

    topDiv: {
      height: 158,
    },
    overlay: {
      height: 158,
      backgroundColor: "#442CF5",
      flex: 1,
      flexDirection: "row",
    },  
    image: {
      width: 100,
      height: 75,
      top: 83,
      left: -19
    },
    image2: {
      width: 268.75,
      height: 163.75,
      opacity: 50,
      rotation: -10.4
    },
    image3: {
      width: 100,
      height: 85,
      top: 72,
      left: 2
    },
    easyLoan: {
      width: 392,
      height: 290,
      backgroundColor: "#FFFFFF",
      marginTop: -76,
      borderRadius: 16,
      marginLeft: 17,
      padding: 20
    },
    easyText: {
      width: 350,
      height: 100,
      paddingLeft: 40,
      paddingRight: 40,
      flexDirection: "column",
      alignItems: "center",
      gap: 18,
    },
    h3: {
       fontSize: 35,
       fontWeight: "bold",
       color: "#240F51",
    },
    easyTextFlex: {
      width: 350,
      height: 145,
      flexDirection: "column",
      borderRadius: 16,
      paddingBottom: 12,
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 12,
      backgroundColor: "#F5F7FF",
      gap: 10
    },
    current:{
        height: 21,
        flexDirection: "row",
        justifyContent: "space-between",
        
    },
    review:{
        width: 392,
        height: 65,
        backgroundColor: "#FFFAEC",
        borderRadius: 16,
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
        gap: 12,
        marginLeft: 17,
        marginTop: 15
    },
    receive: {
        width: 392,
        height: 140,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
        marginLeft: 17,
        gap: 15,
        marginTop: 25,
        borderRadius: 16
    },
    receiveSub: {
        width: 175,
        height: 110,
        backgroundColor: "#F5F7FF",
        borderRadius: 16,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 15,
        paddingRight: 10,
        paddingTop: 15,
        paddingBottom: 12,
        gap: 7
    },
    img: {
        width: 40,
        height: 40,
        marginBottom: 5
    }
})

export default ReviewPayLoan
