import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
    const [profilePic, setProfilePic] = useState(require("../assets/Group 20474.png"));

    useEffect(() => {
        // Load profile picture from storage on app start
        const loadProfilePic = async () => {
            const storedPic = await AsyncStorage.getItem("profilePic");
            if (storedPic) {
                setProfilePic({ uri: storedPic });
            }
        };
        loadProfilePic();
    }, []);

    const updateProfilePic = async (uri) => {
        setProfilePic({ uri });
        await AsyncStorage.setItem("profilePic", uri);
    };

    return (
        <ProfileContext.Provider value={{ profilePic, updateProfilePic }}>
            {children}
        </ProfileContext.Provider>
    );
};
