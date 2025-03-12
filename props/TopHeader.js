import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const TopHeader = ({ title, rightIcon, onRightPress }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      {/* Left: Back Button + Title */}
      <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons 
            name="chevron-back" 
            size={24} 
            color="black" 
            style={styles.icon} 
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>

      {/* Right: Optional Icon */}
      {rightIcon && (
        <TouchableOpacity onPress={onRightPress}>
          <Ionicons name={rightIcon} size={24} color="white" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TopHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#4A3AFF",
    height: 120,
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  icon: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 5,
  }
});
