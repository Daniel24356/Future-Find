import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const TopHeader = ({ title, rightIcon, onRightPress }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      {/* Left: Back Button + Title */}
      <View style={styles.group}>
        <TouchableOpacity 
          style={styles.icon}
          onPress={() => navigation.goBack()}>
          <Ionicons 
            name="chevron-back" 
            size={18} 
            color="#240F51" 
          />
        </TouchableOpacity>
      </View>

      <View style={[styles.group, {alignItems:'center'}]}>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>

      {/* Right: Optional Icon */}
      <View style={[styles.group, {alignItems:'flex-end'}]}>
        {rightIcon &&
          <TouchableOpacity onPress={onRightPress}>
            <Ionicons name={rightIcon} size={24} color="white" />
          </TouchableOpacity>
        }
      </View>
    </View>
  );
};

export default TopHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    backgroundColor: "#442CF5",
    height: 60,
    width:'100%'
  },
  group: {
    flex:1,
    // backgroundColor:'yellow',
    justifyContent:'center'
  },
  headerTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: 600,
  },
  icon: {
    backgroundColor: "white",
    borderRadius: 10,
    width:28,
    height:28,
    justifyContent:'center',
    alignItems:'center'
  }
});
