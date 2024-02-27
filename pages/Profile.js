import React, { Component } from 'react';
import xStyle from '../assets/css/x_style.js';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    Button,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    Animated,
    PermissionsAndroid
} from 'react-native';
// import { useAuth } from '../context/AuthContext.js';
import { useNavigation } from '@react-navigation/native';
// import { UserProfile } from '../context/UserContext.js';

import TopBar from "../Global/TopBar.js";
import Footer from "../Global/Footer.js";

export const Profile = () => {

    const navigation = useNavigation();


    return (
        <SafeAreaView>
            <ScrollView style={xStyle.homeBg} stickyHeaderIndices={[0]}>
                <TopBar/>
            </ScrollView>
            <Footer/>
        </SafeAreaView>
    )
}
export default Profile;