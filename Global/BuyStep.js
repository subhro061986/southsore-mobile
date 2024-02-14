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
    PermissionsAndroid,
    Linking
} from 'react-native';
// import { useAuth } from '../context/AuthContext.js';
// import { useNavigation } from '@react-navigation/native';
// import { UserProfile } from '../context/UserContext.js';

export const BuyStep = () => {

    return (
        <>
            <View style={xStyle.buy_bg}>
                <Text style={xStyle.buy_head_1}>Buy your favorite book in just 3 easy steps.</Text>
                <Text style={xStyle.buy_head_2}>e-booksjunction has a range of curated academic and professional e-books from leading
                    publishers both from India and internationally. We constantly increase the range of
                    titles across different genres and different publishers ensuring our
                    customers get the latest in the field.</Text>
                <Text style={xStyle.buy_head_3}>Here are following <Text style={xStyle.buy_head_3_sec}>steps</Text></Text>
                <View style={xStyle.buy_card}>
                    <Image
                        source={require('../assets/images/buystep.png')}
                    />
                    <Text style={xStyle.buy_card_head}>Browse <Text style={xStyle.buy_card_head_sec}>E-Pub Reader</Text></Text>
                    <Text style={xStyle.buy_card_body}>Once you are on our platform
                        &nbsp;<Text
                            style={xStyle.buy_card_link}
                            onPress={() => Linking.openURL('http://ebooksjunction.com/')}>
                            www.ebooksjunctions.com</Text> as a customer,
                        you have the option to choosing to select based on a publisher on their webstore on
                        the platform or search / browse for books based on keywords,
                        title name, author or the ISBN number.</Text>
                </View>
                <TouchableOpacity style={xStyle.buy_join_btn}>
                    <Text style={xStyle.buy_join_txt}>Join Now</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}
export default BuyStep;