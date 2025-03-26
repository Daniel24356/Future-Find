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
                <Text style ={{color: "#292B2D", fontSize: 16.5}}>Repay Loan</Text>
            </View>
            <View style = {styles.receiveSub}>
                <Image style={styles.img} source={require('../assets/applyLoan/withdraw.png')}/>
                <Text style ={{color: "#292B2D", fontSize: 16.5}}>Withdraw</Text>
            </View>
        </View>
        <View style = {styles.review}>
             <Image style= {{width: 24, height: 24}} source = {require('../assets/applyLoan/nullOrange.png')}/>
            <Text style = {{width: 274, fontSize: 12, lineHeight: 18}}>You will need to repay the current loan before you will be able to apply for another one</Text>
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F7FF",
    flex: 1,
    alignContent: "center",
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
    left: -19,
  },
  image2: {
    width: 268.75,
    height: 163.75,
    opacity: 50,
    rotation: -10.4,
  },
  image3: {
    width: 100,
    height: 85,
    top: 72,
    left: 2,
  },
  easyLoan: {
    width: 328,
    height: 258,
    backgroundColor: "#FFFFFF",
    marginTop: -76,
    borderRadius: 16,
    marginLeft: 16,
    padding: 20,
  },
  easyText: {
    width: 288,
    height: 70,
    paddingLeft: 40,
    paddingRight: 40,
    flexDirection: "column",
    alignItems: "center",
    gap: 18,
  },
  h3: {
    fontSize: 28,
    fontWeight: 800,
    color: "#240F51",
  },
  easyTextFlex: {
    width: 288,
    height: 122,
    flexDirection: "column",
    borderRadius: 16,
    padding: 10,
    backgroundColor: "#F5F7FF",
    gap: 10,
  },
  current: {
    width: 268,
    height: 18,
    flexDirection: "row",
    justifyContent: "space-between",
  },
      review: {
        width: 328,
        height: 56,
        backgroundColor: "#FFFAEC",
        borderRadius: 16,
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        gap: 12,
        marginLeft: 16,
        marginTop: 15,
      },
    receive: {
        width: 328,
        height: 106,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
        marginLeft: 16,
        padding: 10,
        gap: 20,
        marginTop: 25,
        borderRadius: 16
    },
    receiveSub: {
        width: 144,
        height: 86,
        backgroundColor: "#F5F7FF",
        borderRadius: 16,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        gap: 7
    },
    img: {
        width: 38,
        height: 38,
        marginBottom: 4
    }
})

export default ReviewPayLoan
