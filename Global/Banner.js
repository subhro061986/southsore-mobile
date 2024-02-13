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
// import { useNavigation } from '@react-navigation/native';
// import { UserProfile } from '../context/UserContext.js';

export const Banner = () => {

    return (
        <>
            <ImageBackground source={require('../assets/images/banner.png')} resizeMode="cover" style={xStyle.banner}>
                <Text style={xStyle.intro_1}>Welcome to</Text>
                <Text style={xStyle.intro_2}>E-Books</Text>
                <Text style={xStyle.intro_3}>Endless Possibilities</Text>
                <Text style={xStyle.intro_4}>Shop, Read, Repeat!</Text>
            </ImageBackground>
        </>
    )
}
export default Banner;