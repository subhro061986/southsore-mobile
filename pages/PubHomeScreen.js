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

import TopMenu from "../Global/TopMenu.js";
import Footer from "../Global/Footer.js";

export const PubHomeScreen = () => {

    const navigation = useNavigation();


    return (
        <SafeAreaView>
            <ScrollView style={xStyle.homeBg} stickyHeaderIndices={[0]}>
                <TopMenu />
                <ImageBackground source={require('../assets/images/PubBg.png')} resizeMode="cover" style={xStyle.banner}>
                    <View>
                        <Image
                            source={require('../assets/images/demoBook.png')}
                        />
                    </View>
                    <View>
                        <Text></Text>
                        <Text></Text>
                    </View>
                </ImageBackground>
            </ScrollView>
            <Footer />
        </SafeAreaView>
    )
}
export default PubHomeScreen;