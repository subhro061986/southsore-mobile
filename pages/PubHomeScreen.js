import React, { Component,useEffect, useState } from 'react';
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
import { useNavigation, useRoute   } from '@react-navigation/native';
import { UserProfile } from '../Context/Usercontext';
import Config from "../config/Config.json"
import { useAuth } from '../Context/Authcontext';
// import { UserProfile } from '../context/UserContext.js';

import TopMenu from "../Global/TopMenu.js";
import Footer from "../Global/Footer.js";
import FooterPub from '../Global/FooterPub.js';
import BuyStepsPub from '../Global/BuyStepsPub.js';
import TopMenuPub from '../Global/TopMenuPub.js';
import BestSeller from '../Global/BestSeller.js';

export const PubHomeScreen = () => {

    const navigation = useNavigation();
    const route  = useRoute();
    
    const { getPublishersById, publisherId } = UserProfile();
    const { authData } = useAuth();
    
    const [publisherDetails, setPublisherDetails] = useState('')

    useEffect(() => {
        getPubById();
    }, [authData])

    const getPubById = async () => {
        let pubid = 0;
        if (route.params === null || route.params === 'null') {
          pubid = publisherId
        }
        else {
          pubid = route.params.publisher_id
        }
        const result = await getPublishersById(pubid)
        console.log("RESULT from Banner ===>",result);
        setPublisherDetails(result?.data?.output)
    
    }


    return (
        <SafeAreaView>
            <ScrollView style={xStyle.homeBg} stickyHeaderIndices={[0]} keyboardShouldPersistTaps='always'>
                <TopMenuPub />

                {/* Banner */}

                <ImageBackground 
                // source={require('../assets/images/PubBg.png')} 
                source={{uri:Config.API_URL + Config.PUB_IMAGES + publisherDetails.id + "/" + publisherDetails.banner + '?d=' + new Date()}}
                resizeMode="cover" style={xStyle.pub_banner}>


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
                        <TouchableOpacity
                            style={xStyle.pub_home_new_card}
                            onPress={() => navigation.navigate('productdetails')}
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
                        </TouchableOpacity>

                        <TouchableOpacity
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
                        </TouchableOpacity>

                        <TouchableOpacity
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
                        </TouchableOpacity>

                        <TouchableOpacity
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
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Best Seller */}

                <BestSeller/>

                {/* Recommendations */}

                <View style={xStyle.pub_home_new_view}>
                    <Text style={xStyle.pub_home_new_head}>Recommendations</Text>
                    <View
                        style={xStyle.pub_home_rec_body}
                    >
                        <ScrollView horizontal={true}>
                            <TouchableOpacity
                                style={xStyle.pub_home_rec_card}
                                onPress={() => navigation.navigate('productdetails')}
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
                            </TouchableOpacity>

                            <TouchableOpacity
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
                            </TouchableOpacity>

                            <TouchableOpacity
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
                            </TouchableOpacity>
                        </ScrollView>

                    </View>
                </View>

                {/* Buying Steps */}

                <BuyStepsPub />

            </ScrollView>
            <FooterPub />
        </SafeAreaView>
    )
}
export default PubHomeScreen;