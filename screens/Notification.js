import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';



const Notification = () => {
  return (
    <View style={styles.backdrop}>

      <Text style={styles.welcome}>Today</Text>

      <View style={[styles.box, styles.box1]}>
        <MaterialCommunityIcons name="brightness-percent" size={35} color="#008a6b" style={styles.icn1} />

        <Text style={styles.percentage}>50% cashback</Text>
        <Text style={styles.boxtext}>Get 50% cashback for data subscriptions</Text>

        
      </View>


      <View style={[styles.box, styles.box1]}>
        <MaterialCommunityIcons name="brightness-percent" size={35} color="#008a6b" style={styles.icn1} />

        <Text style={styles.percentage}>60% cashback</Text>
        <Text style={styles.boxtext}>Get 50% cashback for bet account funding</Text>
      </View>







      <Text style={styles.yest}>Yesterday</Text>

      <View style={[styles.box, styles.box1]}>
        <FontAwesome5 name="hand-holding-usd" size={35} color="#ffc93d" style={styles.icn1} />

        <Text style={styles.info}>Loan application</Text>
        <Text style={styles.infotext}>We'll get back to you regarding your loan</Text>
      </View>


      <View style={[styles.box, styles.box1]}>
        <FontAwesome5 name="hand-holding-usd" size={35} color="#008a6b" style={styles.icn1} />

        <Text style={styles.info}>Loan approved</Text>
        <Text style={styles.infotext}>Your loan has been approved</Text>
      </View>


      <View style={[styles.box, styles.box1]}>
        <FontAwesome6 name="money-bills" size={35} color="#7f3dff" style={styles.icn1} />

        <Text style={styles.info}>Repaid loan</Text>
        <Text style={styles.infotextt}>You repay N20,000 in clearing your loan</Text>
      </View>


      <View style={[styles.box, styles.box1]}>
        <MaterialCommunityIcons name="export-variant" size={35} color="#442cf5" style={styles.icn1} />  

        <Text style={styles.info}>Withdrawal</Text>
        <Text style={styles.infotextt2}>-N20,000 </Text>
      </View>  
      




      <Text style={styles.week}>Last 7 Days</Text>

      
      <View style={[styles.box, styles.box1]}>
        <FontAwesome5 name="hand-holding-usd" size={35} color="#ffc93d" style={styles.icn1} />

        <Text style={styles.info}>Loan application</Text>
        <Text style={styles.infotext}>We'll get back to you regarding your loan</Text>
      </View>


      <View style={[styles.box, styles.box1]}>
        <FontAwesome5 name="hand-holding-usd" size={35} color="#008a6b" style={styles.icn1} />

        <Text style={styles.info}>Loan approved</Text>
        <Text style={styles.infotext}>Your loan has been approved</Text>
      </View>

      <View style={[styles.box, styles.box1]}>
        <FontAwesome6 name="money-bills" size={35} color="#7f3dff" style={styles.icn1} />

        <Text style={styles.info}>Repaid loan</Text>
        <Text style={styles.infotextt}>You repay N20,000 in clearing your loan</Text>
      </View>


      

    </View>
  );
};

const styles = StyleSheet.create({
    backdrop:{
        flex: 1,
        backgroundColor: 'whitesmoke',
    },

    box:{
        width: 80,
        height: 100,
        borderRadius: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    box1:{
       width: 353,
       height: 65, 
       backgroundColor: '#ffffff',
       borderRadius: 5,
       marginLeft: 15,
       marginTop: 9,
    },

    welcome:{
        paddingTop: 65,
        paddingLeft: 15,
        color: 'grey',
    },

    yest:{
        paddingTop: 15,
        paddingLeft: 15,
        color: 'grey',
    },

    week:{
        paddingTop: 20,
        paddingLeft: 15,
        color: 'grey',
    },

    icn1:{
      paddingTop: 15,
      paddingLeft: 9,
    },
    percentage:{
      paddingTop: 10,
      paddingLeft: 8,
      fontSize: 18,
      fontWeight: '500',
    },
    boxtext:{
      paddingLeft: 51,
      marginTop: -14,
    },
    info:{
      paddingTop: 10,
      paddingLeft: 11,
      fontSize: 18,
      fontWeight: '500',
    },
    infotext:{
      paddingLeft: 59,
      marginTop: -14,
    },
    infotextt:{
      paddingLeft: 63,
      marginTop: -14,
    },
    infotextt2:{
      marginTop: 37,
      marginLeft: -90,
    }
})

export default Notification;
