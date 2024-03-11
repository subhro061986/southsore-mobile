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
import { Picker } from '@react-native-picker/picker';
import Overlay from 'react-native-modal-overlay';
import FooterPub from '../Global/FooterPub.js';
import TopBar from '../Global/TopBar.js';
import Footer from '../Global/Footer.js';
import { useAuth } from '../Context/Authcontext.js';
import { UserProfile } from '../Context/Usercontext.js';
import Config from "../config/Config.json";

export const MyBookshelf = ({ navigation }) => {

    const { authData } = useAuth()
    const { getBookShelf, myBookList } = UserProfile()
    const [bookReading, setBookReading] = useState('')
    const [bookReadType, setBookReadType] = useState(0)
    const [readerModalvisibility, setReaderModalvisibility] = useState(false);
    useEffect(() => {

    }, [authData]);

    const bookTypeValue = [
        {
            id: 0,
            title: 'Please select a type'
        },
        {
            id: 1,
            title: 'PDF'
        },
        {
            id: 2,
            title: 'EPUB'
        }
    ]

    const handleBookReadType = (itemValue, itemIndex) => {
        setBookReadType(itemValue)
        console.log("Item val", itemValue);
        console.log("Item index", itemIndex);
        let book_type_val = itemValue;
        setReaderModalvisibility(false);
        if (book_type_val === 1) {
            // open pdf book
            if(bookReading !== null){
                navigation.navigate('pdf', { epdf: Config.API_URL + Config.PUB_IMAGES + bookReading.publisherid + "/" + bookReading.epdf_link })
            }
        }
        else if (book_type_val === 2) {
            // open epub book
            if(bookReading !== null){
                navigation.navigate('pdf', { epdf: Config.API_URL + Config.PUB_IMAGES + bookReading.publisherid + "/" + bookReading.epub_link })
            }
        }
        else {
            console.log("Selection failed")
        }

    }

    const readerModalHandler = () => {
        setReaderModalvisibility(true);
    }

    const backbuttonhandler = () => {
        setReaderModalvisibility(false);
    }

    // const navigateToReadScreen = async (book) => {



    //     if (bookReadType === "epub") {
    //         navigation.navigate("epub",
    //             // {
    //             //     state: {
    //             //         url: book.epub_link,
    //             //         publisher_id: book.publisherid
    //             //     }
    //             // }
    //             { epub: Config.API_URL + Config.PUB_IMAGES + book.publisherid + "/" + book.epub_link }
    //         )
    //     }
    //     else if (bookReadType === "pdf") {
    //         navigation.navigate("pdf",
    //             //  {
    //             //     state: {
    //             //         url: book.epdf_link,
    //             //         publisher_id: book.publisherid
    //             //     }
    //             // }
    //             { epdf: Config.API_URL + Config.PUB_IMAGES + book.publisherid + "/" + book.epdf_link }
    //         )
    //     }
    //     else {
    //         if (book.epub_link !== "" && book.epub_link != undefined && book.epub_link != "null")
    //             navigation.navigate("epub",
    //                 // {
    //                 //     state:
    //                 //     {
    //                 //     url: book.epub_link,
    //                 //     publisher_id: book.publisherid
    //                 //     }
    //                 // }
    //                 { epub: Config.API_URL + Config.PUB_IMAGES + book.publisherid + "/" + book.epub_link }
    //             )
    //         else if (book.epdf_link !== "" && book.epdf_link != undefined && book.epdf_link != "null")
    //             navigation.navigate("pdf",
    //                 // {
    //                 //     state: {
    //                 //         url: book.epdf_link,
    //                 //         publisher_id: book.publisherid
    //                 //     }
    //                 // }
    //                 { epdf: Config.API_URL + Config.PUB_IMAGES + book.publisherid + "/" + book.epdf_link }
    //             )
    //     }
    // }

    const getExt = (url) => {
        // navigation.navigate("/pdf")
        let text = "How are you doing today?";
        const myArray = text.split(" ");
    }

    const navigateToReadScreen = async (book) => {
        console.log("Reading : ", book);
        if ((book.epdf_link !== null && book.epdf_link !== 'null') && (book.epub_link !== null && book.epub_link !== 'null')) {
            console.log("Inside both");
            setReaderModalvisibility(true);
            setBookReading(book);
        }
        else if (book.epdf_link !== null || book.epdf_link !== 'null') {
            console.log("Inside pdf");
            navigation.navigate('pdf', { epdf: Config.API_URL + Config.PUB_IMAGES + book.publisherid + "/" + book.epdf_link })
        }
        else if (book.epub_link !== null || book.epub_link !== 'null') {
            console.log("Inside epub");
            navigation.navigate('pdf', { epdf: Config.API_URL + Config.PUB_IMAGES + book.publisherid + "/" + book.epub_link })
        }
        else {

        }
    }

    return (
        <SafeAreaView>
            <ScrollView style={xStyle.cartPageBodyBg} stickyHeaderIndices={[0]}>
                <TopBar />
                <View style={xStyle.cartPageHeaderView}>
                    <Text style={xStyle.cartPageHeader}>
                        My BookShelf
                    </Text>
                    <Text style={xStyle.cartPageHeaderResults}>
                        {myBookList.length} items
                    </Text>
                </View>
                <View style={[
                    xStyle.cartPageBooksMainDiv,
                    { marginBottom: '50%' }
                ]}>
                    {
                        myBookList.length > 0 && myBookList.map((book, index) => (
                            <View style={[xStyle.pub_home_best_card]} key={index}>
                                <Image
                                    source={{ uri: Config.API_URL + Config.PUB_IMAGES + book.publisherid + "/" + book.image + '?d=' + new Date() }}
                                    style={xStyle.pub_home_best_cover}
                                    height={134}
                                    width={138}
                                />
                                <View style={xStyle.MyBookshelfMainView}>
                                    <View style={xStyle.MyBookshelfMainTextView}>
                                        <View>
                                            <Text style={xStyle.pub_home_best_card_title}>{book.title}</Text>
                                            <View style={xStyle.pub_home_card_author_view}>
                                                <Text style={xStyle.pub_home_card_author}>Author:
                                                    <Text style={xStyle.pub_home_card_author_name}>{book.authors}</Text>
                                                </Text>
                                            </View>
                                            <View style={xStyle.pub_home_card_author_view}>
                                                <Text style={xStyle.pub_home_card_author}>Purchased:
                                                    <Text style={xStyle.pub_home_card_author_name}>{book.invoicedate?.split(" ")[0]}</Text>
                                                </Text>
                                            </View>
                                        </View>
                                        {/* <TouchableOpacity>
                                            <Image
                                                source={require('../assets/images/greenTick.png')}
                                            />
                                        </TouchableOpacity> */}
                                    </View>
                                    <View style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between'
                                    }}>

                                        <TouchableOpacity
                                            style={[xStyle.wishlistMoveToCartBtn, { width: '50%' }]}
                                            // onPress={() => navigation.navigate('pdf',{epdf:Config.API_URL + Config.PUB_IMAGES + book.publisherid + "/" + book.epdf_link})}
                                            onPress={() => { navigateToReadScreen(book) }}
                                        >
                                            <Text style={xStyle.wishlistMoveToCartBtnTxt}>
                                                Read Now
                                            </Text>
                                        </TouchableOpacity>
                                        {/* <TouchableOpacity
                                            style={[xStyle.wishlistMoveToCartBtn, { width: '50%' }]}
                                            onPress={() => navigation.navigate('epub')}
                                        >
                                            <Text style={xStyle.wishlistMoveToCartBtnTxt}>
                                                Epub
                                            </Text>
                                        </TouchableOpacity> */}
                                    </View>
                                </View>
                            </View>
                        ))
                    }
                </View>
            </ScrollView>
            <Footer />
            <View>
                <Overlay
                    // animationType={ZoomIn}
                    // transparent={true}
                    visible={readerModalvisibility}
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
                    <TouchableOpacity
                        style={xStyle.buy_join_modal_cross}
                        onPress={backbuttonhandler}
                    >
                        <Image
                            source={require('../assets/images/close-circle.png')}
                        />
                    </TouchableOpacity>
                    <View style={xStyle.buy_join_modal_head_view}>
                        <Text style={xStyle.buy_join_modal_head}>Select Book Type</Text>
                    </View>

                    <View style={xStyle.logInModalBody}>
                        <View style={{
                            width: 200,
                            borderWidth: 1,
                            borderColor: 'grey',
                            borderRadius: 20,
                            // height: 40,
                            // padding: 10,
                        }}>
                            <Picker
                                style={{
                                    fontSize: 12,
                                    color: 'grey'
                                }}
                                selectedValue={bookReadType}
                                onValueChange={
                                    (itemValue, itemIndex) =>
                                        handleBookReadType(itemValue, itemIndex)
                                }
                            >
                                {
                                    bookTypeValue.map((data, index) => (
                                        <Picker.Item label={data.title} value={data.id} key={index} />
                                    ))
                                }
                            </Picker>
                        </View>
                    </View>
                    {/* <TouchableOpacity style={xStyle.logInBtn}
                    // onPress={sendEmail}
                    >
                        <Text style={[xStyle.logInBtnText]}>Send Request</Text>
                    </TouchableOpacity> */}
                </Overlay>
            </View>
        </SafeAreaView>
    )
}
export default MyBookshelf;