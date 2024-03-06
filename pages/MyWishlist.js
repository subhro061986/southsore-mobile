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
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../Context/Authcontext.js';
import { UserProfile } from '../Context/Usercontext.js';
import Config from "../config/Config.json";
import Footer from '../Global/Footer.js';
import TopBar from '../Global/TopBar.js';

export const MyWishlist = () => {

    const navigation = useNavigation();
    const { wishlistitems, publisherId, add_delete_to_wishlist } = UserProfile();
    const { wishlistshow } = useAuth();

    const [modalvisibility, setmodalvisibility] = useState(false);

    const toggleWishlistHandler = async (book_id) => {
        let json = {
            "bookid": book_id,
            "currentPage": 1,
            "recordPerPage": 5
        }
        const resp = await add_delete_to_wishlist(json);
        // console.log("WISHLIST : ", resp);
        alert(resp.message);
        //Best_Selling() 
    }

    const wishlistHandler = (event, book_id) => {
        event.stopPropagation();
        if (wishlistshow === true) {
            toggleWishlistHandler(book_id);
        }
        else {
            alert("Please login first");
            navigate('home');
        }
    }

    return (
        <SafeAreaView>
            <ScrollView style={xStyle.cartPageBodyBg} stickyHeaderIndices={[0]}>
                {/* <TopMenuPub /> */}
                <TopBar />

                <View style={xStyle.cartPageHeaderView}>
                    <Text style={xStyle.cartPageHeader}>
                        My Wishlist
                    </Text>
                    <Text style={xStyle.cartPageHeaderResults}>
                        {wishlistitems.length} items added to the list
                    </Text>
                </View>
                <View style={[xStyle.cartPageBooksMainDiv, {
                    marginBottom: '50%'
                }]}>
                    {
                        wishlistitems.map((data, index) => (
                            wishlistitems &&
                            <View style={xStyle.pub_home_best_card} key={index}>
                                <Image
                                    // source={require('../assets/images/bcov1.png')}
                                    source={{ uri: Config.API_URL + Config.PUB_IMAGES + publisherId + "/" + data.image + '?d=' + new Date() }}
                                    style={xStyle.pub_home_best_cover}
                                    height={134}
                                    width={138}
                                />
                                <View style={xStyle.pub_home_best_card_col2}>
                                    <View style={xStyle.pub_home_best_card_col2_top}>
                                        <View>
                                            <Text style={xStyle.pub_home_best_card_title}>{data.title.length > 15 ? data.title.substring(0, 15) + ".." : data.title}</Text>
                                            <View style={xStyle.pub_home_card_author_view}>
                                                <Text style={xStyle.pub_home_card_author}>
                                                    Author: <Text style={xStyle.pub_home_card_author_name}>
                                                        {data.authors.length > 15 ? data.authors.substring(0, 15) + ".." : data.authors}
                                                    </Text>
                                                </Text>
                                            </View>
                                        </View>
                                        <TouchableOpacity onPress={(e) => wishlistHandler(e, data.id)}>
                                            <Image
                                                source={require('../assets/images/close-circle-thin.png')}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={xStyle.pub_home_best_card_col2_bottom}>
                                        <View>
                                            <Text style={xStyle.pub_home_best_card_price}>
                                                ₹{data.price}
                                            </Text>
                                        </View>
                                        <View>
                                            <TouchableOpacity
                                                style={xStyle.wishlistMoveToCartBtn}
                                            // onPress={() => navigation.navigate('wishlist')}
                                            >
                                                <Text style={xStyle.wishlistMoveToCartBtnTxt}>
                                                    Move to Cart
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        ))
                    }
                </View>

            </ScrollView>
            <Footer />
        </SafeAreaView>
    )
}
export default MyWishlist;