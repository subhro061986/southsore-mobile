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
    Linking,
    Modal
} from 'react-native';

import Overlay from 'react-native-modal-overlay';
import { ZoomIn } from 'react-native-reanimated';
// import { useAuth } from '../context/AuthContext.js';
// import { useNavigation } from '@react-navigation/native';
// import { UserProfile } from '../context/UserContext.js';

export const BuyStep = () => {

    const [modalvisibility, setmodalvisibility] = useState(false);

    useEffect(() => {

    }, []);

    const joinNowModalHandler = () => {
        setmodalvisibility(true);

    }

    const backbuttonhandler = () => {
        setmodalvisibility(!modalvisibility);
    }

    return (
        <>
            <View style={xStyle.buy_bg}>
                <Text style={xStyle.buy_head_1}>Buy your favorite book in just 3 easy steps.</Text>
                <Text style={xStyle.buy_head_2}>e-booksjunction has a range of curated academic and professional e-books from leading
                    publishers both from India and internationally. We constantly increase the range of
                    titles across different genres and different publishers ensuring our
                    customers get the latest in the field.</Text>
                <Text style={xStyle.buy_head_3}>Here are following <Text style={xStyle.buy_head_3_sec}>steps</Text></Text>
                <ScrollView horizontal={true} style={xStyle.buy_scroll_div}>
                    <View style={xStyle.buy_card}>
                        <Image
                            source={require('../assets/images/buystep.png')}
                        />
                        <Text style={xStyle.buy_card_head}>Browse <Text style={xStyle.buy_card_head_sec}>E-Pub Reader</Text></Text>
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
                            source={require('../assets/images/buystep.png')}
                        />
                        <Text style={xStyle.buy_card_head}>Browse <Text style={xStyle.buy_card_head_sec}>E-Pub Reader</Text></Text>
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
                            source={require('../assets/images/buystep.png')}
                        />
                        <Text style={xStyle.buy_card_head}>Browse <Text style={xStyle.buy_card_head_sec}>E-Pub Reader</Text></Text>
                        <Text style={xStyle.buy_card_body}>Once you are on our platform
                            &nbsp;<Text
                                style={xStyle.buy_card_link}
                                onPress={() => Linking.openURL('http://ebooksjunction.com/')}>
                                www.ebooksjunctions.com</Text> as a customer,
                            you have the option to choosing to select based on a publisher on their webstore on
                            the platform or search / browse for books based on keywords,
                            title name, author or the ISBN number.</Text>
                    </View>
                </ScrollView>
                <TouchableOpacity style={xStyle.buy_join_btn} onPress={joinNowModalHandler}>
                    <Text style={xStyle.buy_join_txt}>Join Now</Text>
                </TouchableOpacity>
            </View>

            {/* --------JOIN NOW MODAL------- */}

            <View>
                <Overlay
                    // animationType={ZoomIn}
                    // transparent={true}
                    visible={modalvisibility}
                    // // isVisible={modalvisibility}
                    // onRequestClose={backbuttonhandler}
                    // hasBackdrop={true}
                    // backdropColor={'black'}
                    // // statusBarTranslucent={true}
                    // backdropOpacity={0.5}
                    onClose={backbuttonhandler}
                    closeOnTouchOutside
                    containerStyle={{ backgroundColor: 'rgba(38, 37, 37, 0.78)' }}
                    childrenWrapperStyle={{ backgroundColor: '#FFFFFF', borderRadius: 30 }}
                >


                    <Text style={xStyle.buy_join_modal_head}>Join as Publisher</Text>
                    <Text style={xStyle.buy_join_modal_sub_head}>Fill the form and continue to join as  publisher</Text>

                    <View style={xStyle.buy_join_modal_body}></View>



                </Overlay>
            </View>
        </>
    )
}
export default BuyStep;