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
import FooterPub from '../Global/FooterPub.js';
import BuyStepsPub from '../Global/BuyStepsPub.js';
import TopMenuPub from '../Global/TopMenuPub.js';
import BestSeller from '../Global/BestSeller.js';

export const ProductDetails = () => {

    const navigation = useNavigation();


    return (
        <SafeAreaView>
            <ScrollView style={xStyle.homeBg} stickyHeaderIndices={[0]}>
                <TopMenuPub />

                {/* Product Details */}

                <View
                    style={xStyle.prod_det_view}
                >
                    <Image
                        source={require('../assets/images/bookdet.png')}
                        style={xStyle.prod_det_cov_img}
                        width={318}
                    />
                    <View style={xStyle.prod_det_head_view}>
                        <Text style={xStyle.prod_det_head}>The Swallows</Text>
                    </View>
                    <View style={xStyle.prod_det_author_view}>
                        <Text style={xStyle.pub_home_card_author}>Author: <Text style={xStyle.pub_home_card_author_name}>Jeff Keller</Text></Text>
                    </View>
                    <View style={xStyle.prod_det_price_view}>
                        <Text style={xStyle.prod_det_price}>Price: <Text style={xStyle.prod_det_price_value}>₹249</Text></Text>
                    </View>
                    <View style={xStyle.prod_det_btn_view}>
                        <TouchableOpacity style={xStyle.prod_det_add_btn}>
                            <Text style={xStyle.prod_det_add_btn_txt}>Add to Cart</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={xStyle.prod_det_buy_btn}>
                            <Text style={xStyle.prod_det_add_buy_txt}>Buy Now</Text>
                            <Image
                                source={require('../assets/images/add.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={xStyle.prod_det_border}></View>
                    <View style={xStyle.prod_det_des_head_view}>
                        <Text style={xStyle.prod_det_des_head}>Description</Text>
                    </View>
                    <View style={xStyle.prod_det_des_body_view}>
                        <Text style={xStyle.prod_det_des_body}>
                            Set in a kingdom of lions in Africa, The Lion King tells the story of Simba (Swahili for lion)
                            , a lion cub who is to succeed his father, Mufasa, as King of the Pride Lands; however
                            , after his paternal uncle Scar kills Mufasa to seize the throne
                            , Simba is tricked into believing he was responsible for his father's death and flees into exile.
                        </Text>
                    </View>
                    <View style={xStyle.prod_det_details_head_view}>
                        <Text style={xStyle.prod_det_details_head}>Product Details</Text>
                    </View>
                    <View style={xStyle.prod_det_details_body_view}>
                        <Text style={xStyle.prod_det_details_body_title}>&#8226;  Author: <Text style={xStyle.prod_det_details_body_value}>Justine Korman</Text></Text>
                        <Text style={xStyle.prod_det_details_body_title}>&#8226;  Publisher: <Text style={xStyle.prod_det_details_body_value}>Modern Publishing House</Text></Text>
                        <Text style={xStyle.prod_det_details_body_title}>&#8226;  Publisher Date: <Text style={xStyle.prod_det_details_body_value}>09 Sep 2003</Text></Text>
                        <Text style={xStyle.prod_det_details_body_title}>&#8226;  Format: <Text style={xStyle.prod_det_details_body_value}>E-Book</Text></Text>
                        <Text style={xStyle.prod_det_details_body_title}>&#8226;  Edition No: <Text style={xStyle.prod_det_details_body_value}>02</Text></Text>
                        <Text style={xStyle.prod_det_details_body_title}>&#8226;  ISBN-10: <Text style={xStyle.prod_det_details_body_value}>0736420959</Text></Text>
                        <Text style={xStyle.prod_det_details_body_title}>&#8226;  ISBN-13: <Text style={xStyle.prod_det_details_body_value}>9781974738700</Text></Text>
                        <Text style={xStyle.prod_det_details_body_title}>&#8226;  No of Pages: <Text style={xStyle.prod_det_details_body_value}>24</Text></Text>
                    </View>
                </View>


                {/* Best Seller */}

                <BestSeller />

                {/* Buying Steps */}

                <BuyStepsPub />

            </ScrollView>
            <FooterPub />
        </SafeAreaView>
    )
}
export default ProductDetails;