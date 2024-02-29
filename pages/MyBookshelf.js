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
// import { useAuth } from '../context/AuthContext.js';
import { useNavigation } from '@react-navigation/native';
// import { UserProfile } from '../context/UserContext.js';


import FooterPub from '../Global/FooterPub.js';
import TopBar from '../Global/TopBar.js';
import Footer from '../Global/Footer.js';

export const MyBookshelf = () => {

    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <ScrollView style={xStyle.cartPageBodyBg} stickyHeaderIndices={[0]}>
                <TopBar />
                <View style={xStyle.cartPageHeaderView}>
                    <Text style={xStyle.cartPageHeader}>
                        My BookShelf
                    </Text>
                    <Text style={xStyle.cartPageHeaderResults}>
                        5 items found
                    </Text>
                </View>
                <View style={[xStyle.cartPageBooksMainDiv, {
                    marginBottom: '50%'
                }]}>
                    <View style={xStyle.pub_home_best_card}>
                        <Image
                            source={require('../assets/images/bcov1.png')}
                            style={xStyle.pub_home_best_cover}
                            height={134}
                            width={138}
                        />
                        <View style={xStyle.MyBookshelfMainView}>
                            <View style={xStyle.MyBookshelfMainTextView}>
                                <View>
                                    <Text style={xStyle.pub_home_best_card_title}>The Goldfinch</Text>
                                    <View style={xStyle.pub_home_card_author_view}>
                                        <Text style={xStyle.pub_home_card_author}>Author: <Text style={xStyle.pub_home_card_author_name}>Jeff Keller</Text></Text>
                                    </View>
                                    <View style={xStyle.pub_home_card_author_view}>
                                        <Text style={xStyle.pub_home_card_author}>Purchased: <Text style={xStyle.pub_home_card_author_name}>11 Feb,2024</Text></Text>
                                    </View>
                                </View>
                                <TouchableOpacity>
                                    <Image
                                        source={require('../assets/images/greenTick.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View >
                               
                                <TouchableOpacity
                                    style={[xStyle.wishlistMoveToCartBtn,{width:'50%'}]}
                                // onPress={() => navigation.navigate('wishlist')}
                                >
                                    <Text style={xStyle.wishlistMoveToCartBtnTxt}>
                                       Read Now
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={xStyle.pub_home_best_card}>
                        <Image
                            source={require('../assets/images/bcov2.png')}
                            style={xStyle.pub_home_best_cover}
                            height={134}
                            width={138}
                        />
                        <View style={xStyle.MyBookshelfMainView}>
                            <View style={xStyle.MyBookshelfMainTextView}>
                                <View>
                                    <Text style={xStyle.pub_home_best_card_title}>The Hypocrite..</Text>
                                    <View style={xStyle.pub_home_card_author_view}>
                                        <Text style={xStyle.pub_home_card_author}>Author: <Text style={xStyle.pub_home_card_author_name}>Jeff Keller</Text></Text>
                                    </View>
                                    <View style={xStyle.pub_home_card_author_view}>
                                        <Text style={xStyle.pub_home_card_author}>Purchased: <Text style={xStyle.pub_home_card_author_name}>11 Feb,2024</Text></Text>
                                    </View>
                                </View>
                                <TouchableOpacity>
                                    <Image
                                        source={require('../assets/images/greenTick.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View >
                               
                                <TouchableOpacity
                                    style={[xStyle.wishlistMoveToCartBtn,{width:'50%'}]}
                                // onPress={() => navigation.navigate('wishlist')}
                                >
                                    <Text style={xStyle.wishlistMoveToCartBtnTxt}>
                                       Read Now
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={xStyle.pub_home_best_card}>
                        <Image
                            source={require('../assets/images/bcov2.png')}
                            style={xStyle.pub_home_best_cover}
                            height={134}
                            width={138}
                        />
                        <View style={xStyle.MyBookshelfMainView}>
                            <View style={xStyle.MyBookshelfMainTextView}>
                                <View>
                                    <Text style={xStyle.pub_home_best_card_title}>The Hypocrite..</Text>
                                    <View style={xStyle.pub_home_card_author_view}>
                                        <Text style={xStyle.pub_home_card_author}>Author: <Text style={xStyle.pub_home_card_author_name}>Jeff Keller</Text></Text>
                                    </View>
                                    <View style={xStyle.pub_home_card_author_view}>
                                        <Text style={xStyle.pub_home_card_author}>Purchased: <Text style={xStyle.pub_home_card_author_name}>11 Feb,2024</Text></Text>
                                    </View>
                                </View>
                                <TouchableOpacity>
                                    <Image
                                        source={require('../assets/images/greenTick.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View >
                               
                                <TouchableOpacity
                                    style={[xStyle.wishlistMoveToCartBtn,{width:'50%'}]}
                                // onPress={() => navigation.navigate('wishlist')}
                                >
                                    <Text style={xStyle.wishlistMoveToCartBtnTxt}>
                                       Read Now
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                  
                </View>

            </ScrollView>
            <Footer />
        </SafeAreaView>
    )
}
export default MyBookshelf;