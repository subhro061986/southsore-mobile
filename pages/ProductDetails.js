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

                <View style={xStyle.prod_det_view}>
                    <Image
                        source={require('../assets/images/bookdet.png')}
                        style={xStyle.prod_det_cov_img}
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
                    <View></View>
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