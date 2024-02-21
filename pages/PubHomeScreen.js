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

                <View style={[xStyle.publist_bg, {marginBottom:'55%'}]}>
                <View style={xStyle.publist_head_view}>
                    <Text style={xStyle.publist_head}>Listed Publishers</Text>
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

            </ScrollView>
            <FooterPub />
        </SafeAreaView>
    )
}
export default PubHomeScreen;