import React, { Component, useState, useEffect } from 'react';
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
import { Picker } from '@react-native-picker/picker';
import Overlay from 'react-native-modal-overlay';
import FooterPub from '../Global/FooterPub.js';
import TopBar from '../Global/TopBar.js';
import Footer from '../Global/Footer.js';
import { useAuth } from '../Context/Authcontext.js';
import { UserProfile } from '../Context/Usercontext.js';
import Config from "../config/Config.json";
import RNFS from 'react-native-fs';

export const MyBookshelfOffline = ({ navigation }) => {

    const { authData ,offlineData} = useAuth()
    console.log("OFFLINE DATA",offlineData)

    return (
        <SafeAreaView>
            <ScrollView style={xStyle.cartPageBodyBg}>
            
            <View style={xStyle.cartPageHeaderView}>
                    <Text style={xStyle.cartPageHeader}>
                        My BookShelf (Offline Mode)
                    </Text>
                    <Text style={xStyle.cartPageHeaderResults}>
                        {offlineData.length} items
                    </Text>
            </View>
            
            <View style={[
                    xStyle.cartPageBooksMainDiv,
                    { marginBottom: '50%' }
                ]}>
                    {
                        offlineData.length > 0 && offlineData.map((book, index) => (
                            <View style={[xStyle.pub_home_best_card]} key={index}>
                                <Image
                                    source={require('../assets/images/playstore.png')}
                                    style={xStyle.pub_home_best_cover}
                                    height={134}
                                    width={138}
                                />
                                <View style={xStyle.MyBookshelfMainView}>
                                    <View style={xStyle.MyBookshelfMainTextView}>
                                        <View>
                                            <Text style={xStyle.pub_home_best_card_title}>{book.title.length > 15 ? book.title.substring(0, 15) + ".." : book.title}</Text>
                                            <View style={xStyle.pub_home_card_author_view}>
                                                <Text style={xStyle.pub_home_card_author}>Author:
                                                    <Text style={xStyle.pub_home_card_author_name}>{book.authors.length > 15 ? book.authors.substring(0, 15) + ".." : book.authors}</Text>
                                                </Text>
                                            </View>
                                            
                                        </View>
                                        
                                    </View>
                                    <View style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between'
                                    }}>

                                        <TouchableOpacity
                                            style={[xStyle.wishlistMoveToCartBtn, { width: '50%' }]}
                                            onPress={() => navigation.navigate('offpdf',{epdf:book.epdf_link})}
                                            //onPress={() => { navigateToReadScreen(book) }}
                                        >
                                            <Text style={xStyle.wishlistMoveToCartBtnTxt}>
                                                Read Now
                                            </Text>
                                        </TouchableOpacity>
                                        
                                    </View>
                                </View>
                            </View>
                        ))
                    }
                </View>
                
            </ScrollView>
        </SafeAreaView>
    )
}
export default MyBookshelfOffline;