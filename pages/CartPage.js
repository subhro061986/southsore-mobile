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

import TopMenuPub from '../Global/TopMenuPub.js';
import FooterPub from '../Global/FooterPub.js';

export const CartPage = () => {

    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <ScrollView style={xStyle.cartPageBodyBg} stickyHeaderIndices={[0]}>
                <TopMenuPub />
                <View style={xStyle.cartPageHeaderView}>
                    <Text style={xStyle.cartPageHeader}>
                        My Cart
                    </Text>
                    <Text style={xStyle.cartPageHeaderResults}>
                        3 items added to the list
                    </Text>
                </View>
                <View style={xStyle.cartPageBooksMainDiv}>
                    <View style={xStyle.pub_home_best_card}>
                        <Image
                            source={require('../assets/images/bcov1.png')}
                            style={xStyle.pub_home_best_cover}
                            height={134}
                            width={138}
                        />
                        <View style={xStyle.pub_home_best_card_col2}>
                            <View style={xStyle.pub_home_best_card_col2_top}>
                                <View>
                                    <Text style={xStyle.pub_home_best_card_title}>The Goldfinch</Text>
                                    <View style={xStyle.pub_home_card_author_view}>
                                        <Text style={xStyle.pub_home_card_author}>Author: <Text style={xStyle.pub_home_card_author_name}>Jeff Keller</Text></Text>
                                    </View>
                                </View>
                                <TouchableOpacity>
                                    <Image
                                        source={require('../assets/images/close-circle-thin.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={xStyle.pub_home_best_card_col2_bottom}>
                                <View>
                                    <Text style={xStyle.pub_home_best_card_price}>
                                        ₹149
                                    </Text>
                                </View>
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
                        <View style={xStyle.pub_home_best_card_col2}>
                            <View style={xStyle.pub_home_best_card_col2_top}>
                                <View>
                                    <Text style={xStyle.pub_home_best_card_title}>The Hypocrite..</Text>
                                    <View style={xStyle.pub_home_card_author_view}>
                                        <Text style={xStyle.pub_home_card_author}>Author: <Text style={xStyle.pub_home_card_author_name}>Jeff Keller</Text></Text>
                                    </View>
                                </View>
                                <TouchableOpacity>
                                    <Image
                                        source={require('../assets/images/close-circle-thin.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={xStyle.pub_home_best_card_col2_bottom}>
                                <View>
                                    <Text style={xStyle.pub_home_best_card_price}>
                                        ₹199
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={xStyle.pub_home_best_card}>
                        <Image
                            source={require('../assets/images/bcov3.png')}
                            style={xStyle.pub_home_best_cover}
                            height={134}
                            width={138}
                        />
                        <View style={xStyle.pub_home_best_card_col2}>
                            <View style={xStyle.pub_home_best_card_col2_top}>
                                <View>
                                    <Text style={xStyle.pub_home_best_card_title}>The Swallows</Text>
                                    <View style={xStyle.pub_home_card_author_view}>
                                        <Text style={xStyle.pub_home_card_author}>Author: <Text style={xStyle.pub_home_card_author_name}>Jeff Keller</Text></Text>
                                    </View>
                                </View>
                                <TouchableOpacity>
                                    <Image
                                        source={require('../assets/images/close-circle-thin.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={xStyle.pub_home_best_card_col2_bottom}>
                                <View>
                                    <Text style={xStyle.pub_home_best_card_price}>
                                        ₹249
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={xStyle.cartPageOrderSummaryView}>
                    <View style={xStyle.cartPageOrderSummaryHeaderView}>
                        <Text style={[xStyle.cartPageHeader,{fontSize:20}]}>Order Summary</Text>
                    </View>
                    <View style={xStyle.cartPageOrderSummaryBody}>
                        <View style={xStyle.cartPageOrderSummaryBodyItems}>
                            <Text style={xStyle.cartPageOrderSummaryBodyItemsLabelText}>Subtotal</Text>
                            <Text style={xStyle.cartPageOrderSummaryBodyItemsValueText}>₹597</Text>
                        </View>
                        <View style={xStyle.cartPageOrderSummaryBodyItems}>
                            <Text style={xStyle.cartPageOrderSummaryBodyItemsLabelText}>GST</Text>
                            <Text style={xStyle.cartPageOrderSummaryBodyItemsValueText}>5%</Text>
                        </View>
                    </View>
                    <View style={[xStyle.cartPageOrderSummaryTotal, xStyle.cartPageOrderSummaryBodyItems]}>
                        <Text style={xStyle.cartPageOrderSummaryBodyItemsValueText}>Total</Text>
                        <Text style={xStyle.cartPageOrderSummaryBodyItemsValueText}>₹625</Text>
                    </View>
                    <View style={{
                        display:'flex',
                        flexDirection:'row',
                        justifyContent:'space-between',
                        marginTop:'5%',
                        marginBottom:'2%'
                    }}>
                        <TouchableOpacity style={{
                            alignItems:'center',
                            paddingHorizontal:'10%',
                            paddingVertical:'4%',
                            borderWidth:0.5,
                            borderColor: '#26252C',
                            borderRadius:100
                        }}>
                            <Text style={{
                            fontWeight: '600',
                            fontSize: 16,
                            color: '#26252C',
                            }}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            backgroundColor: '#007FE3',
                            paddingHorizontal:'10%',
                            paddingVertical:'4%',
                            borderRadius:100,
                            alignItems:'center',
                        }}>
                            <Text style={{
                                fontWeight: '600',
                                fontSize: 16,
                                color: '#ffffff',
                            }}
                            >Checkout</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
            <FooterPub />
        </SafeAreaView>
    )
}
export default CartPage;