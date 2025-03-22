import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Alert, PermissionsAndroid, Platform, Button } from 'react-native';
import React, { useState, useContext } from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import { StatusBar } from 'expo-status-bar';
import CustomButton from '../props/CustomButton';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import axios from 'axios';
import PopUpScreen from '../props/PopUpScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from "expo-image-picker";
import { ProfileContext } from './ProfileContext';

const EditProfileScreen = () => {
    const [form, setForm] = useState({
        firstName: "",
        phoneNumber: "",
        email: ""
    });

    const [success, setSuccess] = useState(false);
    const { profilePic, updateProfilePic } = useContext(ProfileContext);

    // Request gallery permission
    const requestGalleryPermission = async () => {
        if (Platform.OS === "android") {
            try {
                const permission = Platform.Version >= 33 
                    ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES 
                    : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

                const granted = await PermissionsAndroid.request(permission, {
                    title: "Gallery Permission",
                    message: "This app needs access to your gallery to select an image.",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK",
                });

                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log("✅ Gallery permission granted");
                    return true;
                } else {
                    Alert.alert("Permission Denied", "You need to grant permission to access the gallery.");
                    return false;
                }
            } catch (err) {
                console.warn("🚨 Permission request error:", err);
                return false;
            }
        }
        return true;
    };

    // Function to pick an image
    // import { Alert } from "react-native";
    // import AsyncStorage from "@react-native-async-storage/async-storage";
    // import * as ImagePicker from "react-native-image-picker";
    // import axios from "axios";
    
    const pickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
            Alert.alert("Permission required", "You need to grant permission to pick images.");
            return;
        }
    
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
        });
    
        if (result.canceled || !result.assets || result.assets.length === 0) {
            console.log("⚠️ No image selected");
            return;
        }
    
        const uri = result.assets[0].uri;
        updateProfilePic(uri); // Update via context
    
        try {
            const token = await AsyncStorage.getItem("userToken");
            if (!token) throw new Error("User authentication failed.");
    
            const formData = new FormData();
            formData.append("profilePic", {
                uri,
                name: "profile.jpg",
                type: "image/jpeg",
            });
    
            const response = await axios.put(
                "http://192.168.160.138:5000/api/v1/users/profile-pic",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
    
            if (response.status === 200 && response.data.success) {
                Alert.alert("Success", "Profile picture updated!");
            } else {
                throw new Error("Unexpected response from server");
            }
        } catch (error) {
            console.error("🚨 Error updating profile picture:", error);
            
            // Display a detailed message if available
            const errorMessage =
                error.response?.data?.message || "Failed to update profile picture.";
            
            Alert.alert("Error", errorMessage);
        }
    };
    
    
    

    // Function to update profile details
    const handleUpdate = async () => {
        try {
            const token = await AsyncStorage.getItem("userToken");
            const userId = await AsyncStorage.getItem("userId");
    
            if (!token || !userId) {
                console.error("Authentication failed.");
                return;
            }
    
            // Only include fields that have been modified
            const updatedData = {};
            if (form.firstName) updatedData.firstName = form.firstName;
            if (form.lastName) updatedData.lastName = form.lastName;
            if (form.phoneNumber) updatedData.phoneNumber = form.phoneNumber;
            if (form.email) updatedData.email = form.email; // Only send if changed
    
            const response = await axios.patch(
                `http://192.168.160.138:5000/api/v1/users/${userId}`,
                updatedData, // Send only changed fields
                { headers: { Authorization: `Bearer ${token}` } }
            );
    
            console.log("Profile updated successfully!", response.data);
            if (response.status === 200 || response.status === 201) {
                setSuccess(true);
                setForm({ firstName: "", lastName: "", phoneNumber: "", email: "" });
            }
        } catch (error) {
            console.error("Update Error:", error.response?.data || error.message);
        }
    };
    

    const testImagePicker = () => {
        ImagePicker.launchImageLibrary(
            { mediaType: "photo" },
            (response) => {
                console.log("📷 Response:", response);
            }
        );
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="blue" style="light" />
            <View style={styles.top_container}>
                <View style={styles.profile_1}>
                    <View style={styles.icon}>
                        <Entypo name="chevron-small-left" size={24} color="black" />
                    </View>
                    <Text style={styles.icon_text}>Edit Profile</Text>
                </View>
            </View>

            <View style={styles.image_section} keyboardShouldPersistTaps="handled">
                <Image source={profilePic} style={styles.image} />
                <TouchableOpacity onPress={pickImage} style={{position: "absolute", right: 45,  bottom: 30}}>
                    <Image source={require("../assets/cam.png")}/>
                </TouchableOpacity>

            </View>

            <View style={styles.container_input}>
                <TextInput
                    style={styles.inputs}
                    placeholder="First Name"
                    value={form.firstName}
                    onChangeText={(text) => setForm({ ...form, firstName: text })}
                />

<TextInput
                    style={styles.inputs}
                    placeholder="Last Name"
                    value={form.lastName}
                    onChangeText={(text) => setForm({ ...form, lastName: text })}
                />

                <TextInput
                    style={styles.inputs}
                    placeholder="Phone Number"
                    keyboardType="phone-pad"
                    value={form.phoneNumber}
                    onChangeText={(text) => setForm({ ...form, phoneNumber: text })}
                />
                <TextInput
                    style={styles.inputs}
                    placeholder="Email"
                    keyboardType="email-address"
                    value={form.email}
                    onChangeText={(text) => setForm({ ...form, email: text })}
                />
                <TextInput
                    style={styles.inputs}
                    placeholder="BVN"
                    keyboardType="number-pad"
                    editable={false}
                    value="0000000000"
                />
                <View style={styles.bottom_comment}>
                    <EvilIcons style={{ color: '#292B2D', height: 20, width: 20 }} name="exclamation" size={24} color="black" />
                    <Text style={{ color: '#292B2D', fontSize: 12, fontWeight: "400" }}>
                        You cannot edit your BVN
                    </Text>
                </View>
            </View>

            <View style={{ width: '100%', paddingHorizontal: 13 }}>
                <CustomButton backgroundColor={'blue'} title={'Save changes'} onPress={handleUpdate} />
            </View>

            {success && <PopUpScreen accountSaved={true} onPress={() => setSuccess(false)} />}
        </View>
    );
};

export default EditProfileScreen;


const styles = StyleSheet.create({
    container: { flex: 1, width:'100%', alignItems: 'center' , backgroundColor: '#F5F7FF' },
    top_container:{
        width:'100%',
        height:100,
        backgroundColor:'blue',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    profile_1:{
        width:'30%',
        height:40,
        // backgroundColor:'red',
        marginLeft:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        marginTop:20
    },
    
    icon:{
        width:25,
        height:25,
        backgroundColor:'white',
        borderRadius:9,  
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',  
        // paddingTop:30
    },

    icon_text:{
    //    fontWeight:600,
       color:'white',
       fontSize:15,
       lineHeight:20,
       alignContent:'center'
    },
    image_section:{
        width:181,
        height:150,
        // backgroundColor:'red',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        position: "relative"
    },
    image:{
        width:90,
        height:90,
        borderRadius: 50
    },
    container_input: { width:'100%',  justifyContent: 'center', padding: 20, paddingTop:6,},
    inputs: {  padding: 10, marginBottom: 10, borderRadius: 10 , backgroundColor:'white', height:47},
    bottom_comment: {
        width:'100%',
        height: 20,
        flexDirection:'row',
        alignItems:'center',
        gap: 6,
        marginBottom:130
        
    }
   
})