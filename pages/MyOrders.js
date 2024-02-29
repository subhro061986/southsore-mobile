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

export const MyOrders = () => {

    const navigation = useNavigation();

    const downloadBook=(id) =>{

    }
    return (
        <SafeAreaView>
            <ScrollView style={xStyle.cartPageBodyBg} stickyHeaderIndices={[0]}>
                <TopBar />
                <View style={xStyle.cartPageHeaderView}>
                    <Text style={xStyle.cartPageHeader}>
                        Orders
                    </Text>
                </View>
                <View style={[xStyle.cartPageBooksMainDiv, {
                    marginBottom: '50%'
                }]}>
                    <View style={xStyle.MyOrdersCard}>

                        <View style={xStyle.MyOrdersProductDetailsMainView}>

                            <Image
                                source={require('../assets/images/bcov5.png')}
                                style={xStyle.pub_home_best_cover}
                                height={134}
                                width={138}
                            />
                            <View style={xStyle.MyOrdersProductDetailsView}>
                                
                                <View style={xStyle.MyOrdersProductDetailsHeadersView}>

                                    <Text style={xStyle.pub_home_best_card_title}>The Lion King</Text>

                                    <TouchableOpacity >
                                        <Image
                                            source={require('../assets/images/greenTick.png')}
                                        />
                                    </TouchableOpacity>

                                </View>

                                <View style={xStyle.pub_home_card_author_view}>
                                    <Text style={xStyle.pub_home_card_author}>Author: <Text style={xStyle.pub_home_card_author_name}>Jeff Keller</Text></Text>
                                </View>

                                <View style={[xStyle.pub_home_card_author_view, { marginBottom: '5%' }]}>
                                    <Text style={xStyle.pub_home_card_author}>Publisher: <Text style={xStyle.pub_home_card_author_name}>Modern Publishing House</Text></Text>
                                </View>

                                <View style={xStyle.MyOrderPriceView}>

                                    <Text style={xStyle.MyOrderMainPriceText}>
                                        ₹149
                                    </Text>
                                    <Text style={xStyle.MyOrderDiscountedPriceText}>
                                        ₹199
                                    </Text>

                                </View>

                            </View>
                        </View>

                        <View style={xStyle.MyOrdersFooter}>
                            <View>
                                <Text style={[xStyle.MyOrderFooterText,{paddingBottom:'5%'}]}>
                                    Payment Status: <Text  style={[xStyle.MyOrderFooterText,{fontWeight:'500'}]}>Complete</Text>
                                </Text>
                                <Text style={xStyle.MyOrderFooterText}>
                                    Order No: <Text  style={[xStyle.MyOrderFooterText,{fontWeight:'500'}]}>EP8585092299</Text>
                                </Text>

                            </View>

                            <TouchableOpacity style={xStyle.MyOrderFooterDownloadBtn}
                                onPress={() =>{downloadBook(1)}}
                            
                            >

                                <Text style={xStyle.MyOrderFooterDownloadBtnText}>Download</Text>

                                <Image
                                    source={require('../assets/images/import.png')}
                                    style={xStyle.MyOrderFooterDownloadBtnImg}
                                    height={16}
                                    width={16}
                                    />
                            </TouchableOpacity>

                        </View>
                    </View>
                    <View style={xStyle.MyOrdersCard}>

                        <View style={xStyle.MyOrdersProductDetailsMainView}>

                            <Image
                                source={require('../assets/images/bcov3.png')}
                                style={xStyle.pub_home_best_cover}
                                height={134}
                                width={138}
                            />
                            <View style={xStyle.MyOrdersProductDetailsView}>
                                
                                <View style={xStyle.MyOrdersProductDetailsHeadersView}>

                                    <Text style={xStyle.pub_home_best_card_title}>The Swallows</Text>

                                    <TouchableOpacity >
                                        <Image
                                            source={require('../assets/images/greenTick.png')}
                                        />
                                    </TouchableOpacity>

                                </View>

                                <View style={xStyle.pub_home_card_author_view}>
                                    <Text style={xStyle.pub_home_card_author}>Author: <Text style={xStyle.pub_home_card_author_name}>Jeff Keller</Text></Text>
                                </View>

                                <View style={[xStyle.pub_home_card_author_view, { marginBottom: '5%' }]}>
                                    <Text style={xStyle.pub_home_card_author}>Publisher: <Text style={xStyle.pub_home_card_author_name}>Modern Publishing House</Text></Text>
                                </View>

                                <View style={xStyle.MyOrderPriceView}>

                                    <Text style={xStyle.MyOrderMainPriceText}>
                                        ₹223
                                    </Text>
                                    <Text style={xStyle.MyOrderDiscountedPriceText}>
                                        ₹249
                                    </Text>

                                </View>

                            </View>
                        </View>

                        <View style={xStyle.MyOrdersFooter}>
                            <View>
                                <Text style={[xStyle.MyOrderFooterText,{paddingBottom:'5%'}]}>
                                    Payment Status: <Text  style={[xStyle.MyOrderFooterText,{fontWeight:'500'}]}>Complete</Text>
                                </Text>
                                <Text style={xStyle.MyOrderFooterText}>
                                    Order No: <Text  style={[xStyle.MyOrderFooterText,{fontWeight:'500'}]}>EP8585092299</Text>
                                </Text>

                            </View>

                            <TouchableOpacity style={xStyle.MyOrderFooterDownloadBtn}
                                onPress={() =>{downloadBook(1)}}
                            
                            >

                                <Text style={xStyle.MyOrderFooterDownloadBtnText}>Download</Text>

                                <Image
                                    source={require('../assets/images/import.png')}
                                    style={xStyle.MyOrderFooterDownloadBtnImg}
                                    height={16}
                                    width={16}
                                    />
                            </TouchableOpacity>

                        </View>
                    </View>
                    <View style={xStyle.MyOrdersCard}>

                        <View style={xStyle.MyOrdersProductDetailsMainView}>

                            <Image
                                source={require('../assets/images/bcov4.png')}
                                style={xStyle.pub_home_best_cover}
                                height={134}
                                width={138}
                            />
                            <View style={xStyle.MyOrdersProductDetailsView}>
                                
                                <View style={xStyle.MyOrdersProductDetailsHeadersView}>

                                    <Text style={xStyle.pub_home_best_card_title}>Dune</Text>

                                    <TouchableOpacity >
                                        <Image
                                            source={require('../assets/images/greenTick.png')}
                                        />
                                    </TouchableOpacity>

                                </View>

                                <View style={xStyle.pub_home_card_author_view}>
                                    <Text style={xStyle.pub_home_card_author}>Author: <Text style={xStyle.pub_home_card_author_name}>Jeff Keller</Text></Text>
                                </View>

                                <View style={[xStyle.pub_home_card_author_view, { marginBottom: '5%' }]}>
                                    <Text style={xStyle.pub_home_card_author}>Publisher: <Text style={xStyle.pub_home_card_author_name}>Modern Publishing House</Text></Text>
                                </View>

                                <View style={xStyle.MyOrderPriceView}>

                                    <Text style={xStyle.MyOrderMainPriceText}>
                                        ₹185
                                    </Text>
                                    <Text style={xStyle.MyOrderDiscountedPriceText}>
                                        ₹230
                                    </Text>

                                </View>

                            </View>
                        </View>

                        <View style={xStyle.MyOrdersFooter}>
                            <View>
                                <Text style={[xStyle.MyOrderFooterText,{paddingBottom:'5%'}]}>
                                    Payment Status: <Text  style={[xStyle.MyOrderFooterText,{fontWeight:'500'}]}>Complete</Text>
                                </Text>
                                <Text style={xStyle.MyOrderFooterText}>
                                    Order No: <Text  style={[xStyle.MyOrderFooterText,{fontWeight:'500'}]}>EP8585092299</Text>
                                </Text>

                            </View>

                            <TouchableOpacity style={xStyle.MyOrderFooterDownloadBtn}
                                onPress={() =>{downloadBook(1)}}
                            
                            >

                                <Text style={xStyle.MyOrderFooterDownloadBtnText}>Download</Text>

                                <Image
                                    source={require('../assets/images/import.png')}
                                    style={xStyle.MyOrderFooterDownloadBtnImg}
                                    height={16}
                                    width={16}
                                    />
                            </TouchableOpacity>

                        </View>
                    </View>




                </View>

            </ScrollView>
            <Footer />
        </SafeAreaView>
    )
}
export default MyOrders;