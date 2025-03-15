import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; 
import Slider from "@react-native-community/slider";
import { useNavigation } from '@react-navigation/native';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../props/CustomButton";

const FixPlanScreen = () => {
  const [days, setDays] = useState(5);
  const navigation = useNavigation();

  return (
    <View style={{flex:1,backgroundColor:'#F5F7FF'}}>
      <StatusBar style="light" backgroundColor="#442CF5"/>
      <SafeAreaView style={styles.container}>
        <View>

          {/* Header */}
          <View style={styles.header}>
            <View style={{flexDirection:'row', alignItems:'center',gap:10}}>
              <TouchableOpacity style={styles.back} onPress={()=> navigation.goBack()}>
                <EvilIcons name="chevron-left" size={30} color="black" />
              </TouchableOpacity>
              <Text style={{color:'#FFFF',fontSize:16,fontWeight:600}}>Fix plan</Text>
            </View>
            <View style={styles.create}>
              <Text style={{color:'#292B2D', fontSize:20}}>+ </Text>
              <Text style={{color:'#292B2D',fontWeight:400}}>Create</Text>
            </View>
          </View>

          {/* Interest Card */}
          <View style={styles.card_container}>
            <View style={styles.card}>

              <View style={{alignItems:'center',gap:10}}>
                <View style={styles.lockIcon}>
                  <Image source={require("../assets/Union.png")}/>
                </View>
                <Text style={styles.totalInterest}>Total interest</Text>
                <Text style={styles.amount}>N{days * 10}.00</Text>
              </View>

              {/* Progress Bar */}
              <View style={styles.days_container}>
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                  <Text style={styles.sliderLabel}>Days</Text>
                  <Text style={styles.sliderLabel}>30 days</Text>
                </View>

                <View style={styles.sliderContainer}>
                  <Slider
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={30}
                    step={1}
                    minimumTrackTintColor={ days <= 10 ? "red" : days <= 20 ? "blue" : "green" }
                    maximumTrackTintColor="#ddd"
                    thumbTintColor="white"
                    thum
                    value={days}
                    onValueChange={(value) => setDays(value)}
                  />
                </View>

                <Text style={styles.dayCount}>{days} days</Text>
              </View>

              {/* Plan Details */}
              <View style={styles.details}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                  <Text style={styles.detailText}>Plan name</Text>
                  <Text style={styles.detailText2}>Fixed plan</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                  <Text style={styles.detailText}>Plan title</Text>
                  <Text style={styles.detailText2}>My savings 1</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                  <Text style={styles.detailText}>Amount</Text>
                  <Text style={styles.detailText2}>N150,000</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                  <Text style={styles.detailText}>Duration</Text>
                  <Text style={styles.detailText2}>60 days</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                  <Text style={styles.detailText}>Withdrawal date</Text>
                  <Text style={styles.detailText2}>17 Jul, 2025</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                  <Text style={styles.detailText}>Interest</Text>
                  <Text style={styles.detailText2}>15%/year</Text>
                </View>
              </View>

            </View>

            <View style={styles.warningBox}>
              <View style={{width:24}}>
                <Image 
                  source={require("../assets/Danger.png")}
                  style={{width:24,height:24}}
                />
              </View>
              <View style={{flex:1,paddingRight:2}}>
                <Text style={styles.warningText}>
                  You can withdraw anytime you want but withdrawal before the maturity period means losing the interest and being charged a fee.
                </Text>
              </View>
            </View>

          </View>
        </View>
        
        <View style={{paddingHorizontal:15,paddingBottom:20}}>
          <CustomButton 
            onPress={() => navigation.navigate('withdrawalPage')}
            backgroundColor={'#2C14DD'}
            title={'Request withdrawal'}
          />
        </View>

      </SafeAreaView>
    </View>
  );
};

export default FixPlanScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'space-between'
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
  create: {
    width:'fit-content',
    height:28,
    backgroundColor:'#FFFF',
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:10,
    borderRadius:14,
      
  },
  card_container: {
    paddingHorizontal:15,
    paddingTop:30,
    gap:10
    // backgroundColor:'red'
  },
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    paddingTop:20,
    paddingBottom:10,
    paddingHorizontal:10,
    alignItems: "center",
    gap:20
  },
  lockIcon: {
    width:60,
    height:60,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: "#00A86B",
    borderRadius: '50%',
  },
  totalInterest: {
    fontSize: 12,
    color: "#292B2D",
  },
  amount: {
    fontSize: 28,
    fontWeight: 800,
    color: "#131313",
  },
  days_container: {
    width:'100%',
    height:50,
    // borderWidth:1
  },
  sliderContainer: {
    width:'100%',
    // backgroundColor:'red',
    flexDirection: "row",
  },
  slider: {
    flex: 1,
  },
  sliderLabel: {
    fontSize: 12,
    color: "#292B2D",
  },
  dayCount: {
    fontSize: 10,
    color: "#6C727F",
  },
  details: {
    width: "100%",
    padding: 10,
    gap:10,
    backgroundColor: "#F5F7FF",
    borderRadius: 16
  },
  detailText: {
    fontSize: 12,
    color: "#6C727F",
  },
  detailText2: {
    fontSize: 12,
    color: "#292B2D",
  },
  warningBox: {
    backgroundColor: "#FFFAEC",
    padding: 10,
    borderRadius: 16,
    width: "100%",
    flexDirection: "row",
    alignItems:'center',
    gap:10
  },
  warningText: {
    fontSize: 12,
    color:'#292B2D',
    lineHeight:18
  },
});
  