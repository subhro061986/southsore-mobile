import React, { Component, useEffect, useState } from 'react';
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
    PermissionsAndroid,
    Dimensions,
    useWindowDimensions 
} from 'react-native';
import RenderHtml from 'react-native-render-html';
// import { useAuth } from '../context/AuthContext.js';
import { useNavigation } from '@react-navigation/native';

import { UserProfile } from '../Context/Usercontext';
import Config from "../config/Config.json"
import { useAuth } from '../Context/Authcontext';

import TopMenu from "../Global/TopMenu.js";
import Footer from "../Global/Footer.js";
import FooterPub from '../Global/FooterPub.js';
import BuyStepsPub from '../Global/BuyStepsPub.js';
import TopMenuPub from '../Global/TopMenuPub.js';
import BestSeller from '../Global/BestSeller.js';

export const PubHomeScreen = ({ route, navigation }) => {

    // const navigation = useNavigation();
    const { width } = useWindowDimensions();

    const { getPublishersById, publisherId, getNewArrivals, allNewArrival, publisherData, allBestSeller, add_delete_to_wishlist } = UserProfile();
    const { authData, wishlistshow } = useAuth();

    const [publisherDetails, setPublisherDetails] = useState('')

    useEffect(() => {
        console.log("Publisher id ===>", route.params.publisher_id);
        getPubById();
    }, [authData])

    const getPubById = async () => {
        // let pubid = 0;
        // const about = document.getElementById("pub_about");
        // if (route.params === null || route.params === 'null') {
        //   pubid = publisherId
        // }
        // else {
        //   pubid = route.params.publisher_id
        // }
        const result = await getPublishersById(route.params.publisher_id)
        console.log("RESULT from Banner ===>", result);
        setPublisherDetails(result?.data?.output)
        // about.innerHTML = result?.data?.output?.about;

    }

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
        }
    }


    return (
        <SafeAreaView>
            <ScrollView style={xStyle.homeBg} stickyHeaderIndices={[0]} keyboardShouldPersistTaps='always'>
                <TopMenuPub />

                {/* Banner */}

                <View
                    // source={require('../assets/images/PubBg.png')}
                    // source={{uri:Config.API_URL + Config.PUB_IMAGES + publisherDetails.id + "/" + publisherDetails.banner + '?d=' + new Date()}}
                    // resizeMode="cover" 
                    // style={xStyle.pub_banner}
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        // paddingVertical: '10%',
                        // height: 285,
                        // width: Dimensions.get('screen').width,
                    }}
                >


                    {/* <View> */}
                    <Image
                        // source={require('../assets/images/demoBook.png')}
                        // source={require('../assets/images/PubBg.png')}
                        source={{ uri: Config.API_URL + Config.PUB_IMAGES + publisherDetails.id + "/" + publisherDetails.banner + '?d=' + new Date() }}
                        // width={'50%'}
                        // height={200}
                        style={{
                            height: 230,
                            width: Dimensions.get('screen').width * 0.5,
                            resizeMode: 'stretch'
                        }}

                    />
                    {/* </View> */}

                    <View style={[xStyle.pub_banner_txt_view, { marginLeft: '3%' }]}>
                        <Text style={xStyle.pub_banner_head}>Your Gateway to Excellence</Text>
                        <View style={xStyle.pub_banner_body_view}>
                            <Text style={xStyle.pub_banner_body}>Explore Academic & Professional E-Books with Ease</Text>
                        </View>
                    </View>

                </View>

                {/* Publisher About */}

                <View style={xStyle.pub_about}>
                    <Image
                        // source={require('../assets/images/demoPubLogo.png')}
                        source={{ uri: Config.API_URL + Config.PUB_IMAGES + publisherDetails.id + '/' + publisherDetails.logo }}
                        style={[xStyle.pub_about_logo, { resizeMode: 'contain' }]}
                        height={50}
                        width={200}
                    />
                    <View
                    style={xStyle.pub_about_body}
                    >
                        {/* <Text id='pub_about'></Text> */}
                        <RenderHtml
                            contentWidth={width}
                            source={{html: publisherDetails.about}}
                        />
                        {/* Juris Press is a prominent publisher of law and other professional books
                        , headquartered in Chennai, India. Established with a commitment to providing high-quality
                        , authoritative literature
                        , Juris Press specializes in catering to the discerning needs of the professional */}
                    </View>
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
                        {
                            allNewArrival.map((data, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={[xStyle.pub_home_new_card
                                        // , {backgroundColor:'pink'}
                                    ]}
                                    onPress={() => navigation.navigate('productdetails',{bookId:data.id})}
                                >

                                    <Image
                                        // source={require('../assets/images/cov1.png')}
                                        source={{ uri: Config.API_URL + Config.PUB_IMAGES + data.publisherid + "/" + data.image + '?d=' + new Date() }}
                                        // style={xStyle.pub_home_new_card_img}
                                        style={{
                                            borderRadius: 13,
                                            resizeMode: 'contain',
                                            width: '100%',
                                            height: 130,
                                            // borderWidth:1,
                                            // borderColor:'black'
                                        }}
                                    // width={154}
                                    // height={130}
                                    />
                                    <TouchableOpacity style={xStyle.pub_home_new_card_wishbtn} onPress={(e) => wishlistHandler(e, data.id)}>
                                            {
                                                data.isFavourite === 1 ? (
                                                    <Image
                                                        source={require('../assets/images/wishblue.png')}
                                                    />
                                                ) : (
                                                    <Image
                                                        source={require('../assets/images/notWishlist.png')}
                                                    />
                                                )
                                            }
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
                                                    {/* Attitude Is Everyt.. */}
                                                    {data.title.length > 15 ? data.title.substring(0, 15) + ".." : data.title}
                                                </Text>
                                            </View>
                                            <Text
                                                style={xStyle.pub_home_card_author}
                                            >Author:
                                                <Text
                                                    style={xStyle.pub_home_card_author_name}
                                                >
                                                    {/* Jeff Keller */}
                                                    {data.authors.length > 15 ? data.authors.substring(0, 15) + ".." : data.authors}
                                                </Text>
                                            </Text>
                                        </View>
                                        <View
                                            style={xStyle.pub_home_card_price_view}
                                        >
                                            <Text
                                                style={xStyle.pub_home_card_price}
                                            >
                                                ₹{data.price}
                                            </Text>
                                            <TouchableOpacity>
                                                <Image
                                                    source={require('../assets/images/plusBtn.png')}
                                                />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                            ))
                        }
                    </View>
                </View>

                {/* Best Seller */}

                <BestSeller />


                {/* Recommendations */}

                {/* <View style={xStyle.pub_home_new_view}>
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
                </View> */}

                {/* Buying Steps */}

                <BuyStepsPub />

            </ScrollView>
            <FooterPub />
        </SafeAreaView>
    )
}
export default PubHomeScreen;