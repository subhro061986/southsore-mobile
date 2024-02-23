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

export const PubHomeScreen = () => {

    const navigation = useNavigation();


    return (
        <SafeAreaView>
            <ScrollView style={xStyle.homeBg} stickyHeaderIndices={[0]}>
                <TopMenu />

                {/* Banner */}

                <ImageBackground source={require('../assets/images/PubBg.png')} resizeMode="cover" style={xStyle.pub_banner}>


                    <Image
                        source={require('../assets/images/demoBook.png')}
                    />

                    <View style={xStyle.pub_banner_txt_view}>
                        <Text style={xStyle.pub_banner_head}>Your Gateway to Excellence</Text>
                        <View style={xStyle.pub_banner_body_view}>
                            <Text style={xStyle.pub_banner_body}>Explore Academic & Professional E-Books with Ease</Text>
                        </View>
                    </View>

                </ImageBackground>

                {/* Publisher About */}

                <View style={xStyle.pub_about}>
                    <Image
                        source={require('../assets/images/demoPubLogo.png')}
                        style={xStyle.pub_about_logo}
                    />
                    <Text style={xStyle.pub_about_body}>
                        Juris Press is a prominent publisher of law and other professional books
                        , headquartered in Chennai, India. Established with a commitment to providing high-quality
                        , authoritative literature
                        , Juris Press specializes in catering to the discerning needs of the professional
                    </Text>
                    <TouchableOpacity style={xStyle.southshoreInnovationsReadMore_btn}>
                        <Text style={xStyle.southshoreInnovationsReadMore}>
                            Read More
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Category List */}

                <View style={xStyle.publist_bg}>
                    <View style={xStyle.publist_head_view}>
                        <Text style={xStyle.publist_head}>Categories</Text>
                    </View>
                    <ScrollView horizontal={true}>
                        <View>
                            <TouchableOpacity style={xStyle.pub_cat_cards}>
                                <Image
                                    source={require('../assets/images/art.png')}
                                />
                            </TouchableOpacity>
                            <Text style={xStyle.pub_name}>Art & Photo..</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={xStyle.pub_cat_cards}>
                                <Image
                                    source={require('../assets/images/eng.png')}
                                />
                            </TouchableOpacity>
                            <Text style={xStyle.pub_name}>English L..</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={xStyle.pub_cat_cards}>
                                <Image
                                    source={require('../assets/images/bio.png')}
                                />
                            </TouchableOpacity>
                            <Text style={xStyle.pub_name}>Biographies..</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={xStyle.pub_cat_cards}>
                                <Image
                                    source={require('../assets/images/art.png')}
                                />
                            </TouchableOpacity>
                            <Text style={xStyle.pub_name}>Art & Photo..</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={xStyle.pub_cat_cards}>
                                <Image
                                    source={require('../assets/images/eng.png')}
                                />
                            </TouchableOpacity>
                            <Text style={xStyle.pub_name}>English L..</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={xStyle.pub_cat_cards}>
                                <Image
                                    source={require('../assets/images/bio.png')}
                                />
                            </TouchableOpacity>
                            <Text style={xStyle.pub_name}>Biographies..</Text>
                        </View>
                    </ScrollView>
                </View>

                {/* New Arrival */}

                <View style={xStyle.pub_home_new_view}>
                    <Text style={xStyle.pub_home_new_head}>New Arrivals</Text>
                    <View
                        style={xStyle.pub_home_new_body}
                    >
                        <View
                            style={xStyle.pub_home_new_card}
                        >

                            <Image
                                source={require('../assets/images/cov1.png')}
                                style={xStyle.pub_home_new_card_img}
                                width={154}
                            />
                            <TouchableOpacity style={xStyle.pub_home_new_card_wishbtn}>
                                <Image
                                    source={require('../assets/images/wishlist.png')}
                                />
                            </TouchableOpacity>
                            <View
                                style={xStyle.pub_home_new_card_txtbox}
                            >
                                <View
                                    style={xStyle.pub_home_new_card_view_1}
                                >
                                    <View
                                        style={xStyle.pub_home_card_title_view}
                                    >
                                        <Text
                                            style={xStyle.pub_home_card_title}
                                        >
                                            Attitude Is Everyt..
                                        </Text>
                                    </View>
                                    <Text
                                        style={xStyle.pub_home_card_author}
                                    >Author:
                                        <Text
                                            style={xStyle.pub_home_card_author_name}
                                        >
                                            Jeff Keller
                                        </Text>
                                    </Text>
                                </View>
                                <View
                                    style={xStyle.pub_home_card_price_view}
                                >
                                    <Text
                                        style={xStyle.pub_home_card_price}
                                    >
                                        ₹199
                                    </Text>
                                    <TouchableOpacity>
                                        <Image
                                            source={require('../assets/images/plusBtn.png')}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View
                            style={xStyle.pub_home_new_card}
                        >
                            <Image
                                source={require('../assets/images/cov2.png')}
                                style={xStyle.pub_home_new_card_img}
                                width={154}
                            />
                            <TouchableOpacity style={xStyle.pub_home_new_card_wishbtn}>
                                <Image
                                    source={require('../assets/images/wishlist.png')}
                                />
                            </TouchableOpacity>
                            <View
                                style={xStyle.pub_home_new_card_txtbox}
                            >
                                <View
                                    style={xStyle.pub_home_new_card_view_1}
                                >
                                    <View
                                        style={xStyle.pub_home_card_title_view}
                                    >
                                        <Text
                                            style={xStyle.pub_home_card_title}
                                        >
                                            Harry Potter and th..
                                        </Text>
                                    </View>
                                    <Text
                                        style={xStyle.pub_home_card_author}
                                    >Author:
                                        <Text
                                            style={xStyle.pub_home_card_author_name}
                                        >
                                            Jeff Keller
                                        </Text>
                                    </Text>
                                </View>
                                <View
                                    style={xStyle.pub_home_card_price_view}
                                >
                                    <Text
                                        style={xStyle.pub_home_card_price}
                                    >
                                        ₹300
                                    </Text>
                                    <TouchableOpacity>
                                        <Image
                                            source={require('../assets/images/plusBtn.png')}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View
                            style={xStyle.pub_home_new_card}
                        >
                            <Image
                                source={require('../assets/images/cov3.png')}
                                style={xStyle.pub_home_new_card_img}
                                width={154}
                            />
                            <TouchableOpacity style={xStyle.pub_home_new_card_wishbtn}>
                                <Image
                                    source={require('../assets/images/wishlist.png')}
                                />
                            </TouchableOpacity>
                            <View
                                style={xStyle.pub_home_new_card_txtbox}
                            >
                                <View
                                    style={xStyle.pub_home_new_card_view_1}
                                >
                                    <View
                                        style={xStyle.pub_home_card_title_view}
                                    >
                                        <Text
                                            style={xStyle.pub_home_card_title}
                                        >
                                            Whit by Rock
                                        </Text>
                                    </View>
                                    <Text
                                        style={xStyle.pub_home_card_author}
                                    >Author:
                                        <Text
                                            style={xStyle.pub_home_card_author_name}
                                        >
                                            Jeff Keller
                                        </Text>
                                    </Text>
                                </View>
                                <View
                                    style={xStyle.pub_home_card_price_view}
                                >
                                    <Text
                                        style={xStyle.pub_home_card_price}
                                    >
                                        ₹149
                                    </Text>
                                    <TouchableOpacity>
                                        <Image
                                            source={require('../assets/images/plusBtn.png')}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View
                            style={xStyle.pub_home_new_card}
                        >
                            <Image
                                source={require('../assets/images/cov4.png')}
                                style={xStyle.pub_home_new_card_img}
                                width={154}
                            />
                            <TouchableOpacity style={xStyle.pub_home_new_card_wishbtn}>
                                <Image
                                    source={require('../assets/images/wishlist.png')}
                                />
                            </TouchableOpacity>
                            <View
                                style={xStyle.pub_home_new_card_txtbox}
                            >
                                <View
                                    style={xStyle.pub_home_new_card_view_1}
                                >
                                    <View
                                        style={xStyle.pub_home_card_title_view}
                                    >
                                        <Text
                                            style={xStyle.pub_home_card_title}
                                        >
                                            The way of the na..
                                        </Text>
                                    </View>
                                    <Text
                                        style={xStyle.pub_home_card_author}
                                    >Author:
                                        <Text
                                            style={xStyle.pub_home_card_author_name}
                                        >
                                            Jeff Keller
                                        </Text>
                                    </Text>
                                </View>
                                <View
                                    style={xStyle.pub_home_card_price_view}
                                >
                                    <Text
                                        style={xStyle.pub_home_card_price}
                                    >
                                        ₹179
                                    </Text>
                                    <TouchableOpacity>
                                        <Image
                                            source={require('../assets/images/plusBtn.png')}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Best Seller */}

                <View style={xStyle.pub_home_best_bg}>
                    <Text style={xStyle.pub_home_best_head}>Best Seller</Text>

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
                                        source={require('../assets/images/wishblue.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={xStyle.pub_home_best_card_col2_bottom}>
                                <View>
                                    <Text style={xStyle.pub_home_best_card_price}>
                                        ₹149
                                    </Text>
                                </View>
                                <View>
                                    <TouchableOpacity>
                                        <Image
                                            source={require('../assets/images/plusBtn.png')}
                                        />
                                    </TouchableOpacity>
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
                                        source={require('../assets/images/wishblue.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={xStyle.pub_home_best_card_col2_bottom}>
                                <View>
                                    <Text style={xStyle.pub_home_best_card_price}>
                                        ₹199
                                    </Text>
                                </View>
                                <View>
                                    <TouchableOpacity>
                                        <Image
                                            source={require('../assets/images/plusBtn.png')}
                                        />
                                    </TouchableOpacity>
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
                                        source={require('../assets/images/wishblue.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={xStyle.pub_home_best_card_col2_bottom}>
                                <View>
                                    <Text style={xStyle.pub_home_best_card_price}>
                                        ₹249
                                    </Text>
                                </View>
                                <View>
                                    <TouchableOpacity>
                                        <Image
                                            source={require('../assets/images/plusBtn.png')}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={xStyle.pub_home_best_card}>
                        <Image
                            source={require('../assets/images/bcov4.png')}
                            style={xStyle.pub_home_best_cover}
                            height={134}
                            width={138}
                        />
                        <View style={xStyle.pub_home_best_card_col2}>
                            <View style={xStyle.pub_home_best_card_col2_top}>
                                <View>
                                    <Text style={xStyle.pub_home_best_card_title}>Dune</Text>
                                    <View style={xStyle.pub_home_card_author_view}>
                                        <Text style={xStyle.pub_home_card_author}>Author: <Text style={xStyle.pub_home_card_author_name}>Jeff Keller</Text></Text>
                                    </View>
                                </View>
                                <TouchableOpacity>
                                    <Image
                                        source={require('../assets/images/wishblue.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={xStyle.pub_home_best_card_col2_bottom}>
                                <View>
                                    <Text style={xStyle.pub_home_best_card_price}>
                                        ₹149
                                    </Text>
                                </View>
                                <View>
                                    <TouchableOpacity>
                                        <Image
                                            source={require('../assets/images/plusBtn.png')}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                </View>

                {/* Recommendations */}

                <View style={xStyle.pub_home_new_view}>
                    <Text style={xStyle.pub_home_new_head}>Recommendations</Text>
                    <View
                        style={xStyle.pub_home_rec_body}
                    >
                        <ScrollView horizontal={true}>
                            <View
                                style={xStyle.pub_home_rec_card}
                            >

                                <Image
                                    source={require('../assets/images/cov1.png')}
                                    style={xStyle.pub_home_new_card_img}
                                    width={154}
                                />
                                <TouchableOpacity style={xStyle.pub_home_new_card_wishbtn}>
                                    <Image
                                        source={require('../assets/images/wishlist.png')}
                                    />
                                </TouchableOpacity>
                                <View
                                    style={xStyle.pub_home_new_card_txtbox}
                                >
                                    <View
                                        style={xStyle.pub_home_new_card_view_1}
                                    >
                                        <View
                                            style={xStyle.pub_home_card_title_view}
                                        >
                                            <Text
                                                style={xStyle.pub_home_card_title}
                                            >
                                                Attitude Is Everyt..
                                            </Text>
                                        </View>
                                        <Text
                                            style={xStyle.pub_home_card_author}
                                        >Author:
                                            <Text
                                                style={xStyle.pub_home_card_author_name}
                                            >
                                                Jeff Keller
                                            </Text>
                                        </Text>
                                    </View>
                                    <View
                                        style={xStyle.pub_home_card_price_view}
                                    >
                                        <Text
                                            style={xStyle.pub_home_card_price}
                                        >
                                            ₹199
                                        </Text>
                                        <TouchableOpacity>
                                            <Image
                                                source={require('../assets/images/plusBtn.png')}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                            <View
                                style={xStyle.pub_home_rec_card}
                            >
                                <Image
                                    source={require('../assets/images/cov2.png')}
                                    style={xStyle.pub_home_new_card_img}
                                    width={154}
                                />
                                <TouchableOpacity style={xStyle.pub_home_new_card_wishbtn}>
                                    <Image
                                        source={require('../assets/images/wishlist.png')}
                                    />
                                </TouchableOpacity>
                                <View
                                    style={xStyle.pub_home_new_card_txtbox}
                                >
                                    <View
                                        style={xStyle.pub_home_new_card_view_1}
                                    >
                                        <View
                                            style={xStyle.pub_home_card_title_view}
                                        >
                                            <Text
                                                style={xStyle.pub_home_card_title}
                                            >
                                                Harry Potter and th..
                                            </Text>
                                        </View>
                                        <Text
                                            style={xStyle.pub_home_card_author}
                                        >Author:
                                            <Text
                                                style={xStyle.pub_home_card_author_name}
                                            >
                                                Jeff Keller
                                            </Text>
                                        </Text>
                                    </View>
                                    <View
                                        style={xStyle.pub_home_card_price_view}
                                    >
                                        <Text
                                            style={xStyle.pub_home_card_price}
                                        >
                                            ₹300
                                        </Text>
                                        <TouchableOpacity>
                                            <Image
                                                source={require('../assets/images/plusBtn.png')}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                            <View
                                style={xStyle.pub_home_rec_card}
                            >
                                <Image
                                    source={require('../assets/images/cov4.png')}
                                    style={xStyle.pub_home_new_card_img}
                                    width={154}
                                />
                                <TouchableOpacity style={xStyle.pub_home_new_card_wishbtn}>
                                    <Image
                                        source={require('../assets/images/wishlist.png')}
                                    />
                                </TouchableOpacity>
                                <View
                                    style={xStyle.pub_home_new_card_txtbox}
                                >
                                    <View
                                        style={xStyle.pub_home_new_card_view_1}
                                    >
                                        <View
                                            style={xStyle.pub_home_card_title_view}
                                        >
                                            <Text
                                                style={xStyle.pub_home_card_title}
                                            >
                                                The Way of The..
                                            </Text>
                                        </View>
                                        <Text
                                            style={xStyle.pub_home_card_author}
                                        >Author:
                                            <Text
                                                style={xStyle.pub_home_card_author_name}
                                            >
                                                Jeff Keller
                                            </Text>
                                        </Text>
                                    </View>
                                    <View
                                        style={xStyle.pub_home_card_price_view}
                                    >
                                        <Text
                                            style={xStyle.pub_home_card_price}
                                        >
                                            ₹179
                                        </Text>
                                        <TouchableOpacity>
                                            <Image
                                                source={require('../assets/images/plusBtn.png')}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>

                    </View>
                </View>

                {/* Buying Steps */}

                <View style={xStyle.pub_home_buy_bg}>
                    <View style={xStyle.buy_head_1_View}>
                        <Text style={xStyle.pub_buy_head_1}>Buy your favorite book in just 3 easy steps.</Text>
                    </View>
                    <Text style={xStyle.pub_buy_head_3}>Here are following <Text style={xStyle.pub_buy_head_3_sec}>steps</Text></Text>
                    <ScrollView horizontal={true} style={xStyle.buy_scroll_div}>
                        <View style={xStyle.buy_card}>
                            <Image
                                source={require('../assets/images/buystep.png')}
                            />
                            <View style={xStyle.buy_card_head_view}>
                                <Text style={xStyle.buy_card_head}>Browse <Text style={xStyle.buy_card_head_sec}>E-Pub Reader</Text></Text>
                            </View>
                            <Text style={xStyle.buy_card_body}>Once you are on our platform
                                &nbsp;<Text
                                    style={xStyle.buy_card_link}
                                    onPress={() => Linking.openURL('http://ebooksjunction.com/')}>
                                    www.ebooksjunctions.com</Text> as a customer,
                                you have the option to choosing to select based on a publisher on their webstore on
                                the platform or search / browse for books based on keywords,
                                title name, author or the ISBN number.</Text>
                        </View>
                        <View style={xStyle.buy_card}>
                            <Image
                                source={require('../assets/images/buystep2.png')}
                            />
                            <View style={xStyle.buy_card_head_view}>
                                <Text style={xStyle.buy_card_head}>Select and <Text style={xStyle.buy_card_head_sec}>Buy</Text></Text>
                            </View>
                            <Text style={xStyle.buy_card_body}>
                                Make your selection(s) across publishers, genres and add to the shopping cart, log in with your credentials and complete the purchase. You have a range of options to pay through our secure payment gateway.
                            </Text>
                        </View>
                        <View style={xStyle.buy_card}>
                            <Image
                                source={require('../assets/images/buystep3.png')}
                            />
                            <View style={xStyle.buy_card_head_view}>
                                <Text style={xStyle.buy_card_head}>Download and <Text style={xStyle.buy_card_head_sec}>Read</Text></Text>
                            </View>
                            <Text style={xStyle.buy_card_body}>
                                Once you make a purchase, the selected book(s) come to your dashboard and are available in your ‘MyBookshelf section”. As a next step download the e-book reader to your device and the book as well for you to enjoy a simple and seamless offline reading.
                            </Text>
                        </View>
                    </ScrollView>
                </View>

            </ScrollView>
            <FooterPub />
        </SafeAreaView>
    )
}
export default PubHomeScreen;