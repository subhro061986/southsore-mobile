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
import FooterPub from '../Global/FooterPub.js';
import TopBar from '../Global/TopBar.js';
import Footer from '../Global/Footer.js';
import { useAuth } from '../Context/Authcontext.js';
import { UserProfile } from '../Context/Usercontext.js';
import Config from "../config/Config.json"
export const MyBookshelf = ({navigation}) => {

const {authData} = useAuth()
const { getBookShelf,myBookList} = UserProfile()
useEffect(() => {

}, [authData]);

    return (
        <SafeAreaView>
            <ScrollView style={xStyle.cartPageBodyBg} stickyHeaderIndices={[0]}>
                <TopBar />
                <View style={xStyle.cartPageHeaderView}>
                    <Text style={xStyle.cartPageHeader}>
                        My BookShelf
                    </Text>
                    <Text style={xStyle.cartPageHeaderResults}>
                        {myBookList.length} items
                    </Text>
                </View>
                <View style={[xStyle.cartPageBooksMainDiv, {
                    marginBottom: '50%'
                }]}>
                    {
                    myBookList.length > 0 && myBookList.map((book, index) => (
                    <View style={[xStyle.pub_home_best_card]} key={index}>
                        <Image
                            source={{uri:Config.API_URL + Config.PUB_IMAGES + book.publisherid + "/" + book.image + '?d=' + new Date()}}
                            style={xStyle.pub_home_best_cover}
                            height={134}
                            width={138}
                        />
                        <View style={xStyle.MyBookshelfMainView}>
                            <View style={xStyle.MyBookshelfMainTextView}>
                                <View>
                                    <Text style={xStyle.pub_home_best_card_title}>{book.title}</Text>
                                    <View style={xStyle.pub_home_card_author_view}>
                                        <Text style={xStyle.pub_home_card_author}>Author: 
                                            <Text style={xStyle.pub_home_card_author_name}>{book.authors}</Text>
                                        </Text>
                                    </View>
                                    <View style={xStyle.pub_home_card_author_view}>
                                        <Text style={xStyle.pub_home_card_author}>Purchased: 
                                            <Text style={xStyle.pub_home_card_author_name}>{book.invoicedate?.split(" ")[0]}</Text>
                                        </Text>
                                    </View>
                                </View>
                                {/* <TouchableOpacity>
                                    <Image
                                        source={require('../assets/images/greenTick.png')}
                                    />
                                </TouchableOpacity> */}
                            </View>
                            <View >
                               
                                <TouchableOpacity
                                    style={[xStyle.wishlistMoveToCartBtn,{width:'50%'}]}
                                    onPress={() => navigation.navigate('pdf',{epdf:Config.API_URL + Config.PUB_IMAGES + book.publisherid + "/" + book.epdf_link})}
                                >
                                    <Text style={xStyle.wishlistMoveToCartBtnTxt}>
                                       Read Now
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={[xStyle.wishlistMoveToCartBtn,{width:'50%'}]}
                                    onPress={() => navigation.navigate('epub')}
                                >
                                    <Text style={xStyle.wishlistMoveToCartBtnTxt}>
                                       Epub
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                ))}

                  
                </View>

            </ScrollView>
            <Footer />
        </SafeAreaView>
    )
}
export default MyBookshelf;