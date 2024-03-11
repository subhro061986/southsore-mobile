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
import FooterPub from '../Global/FooterPub.js';
import TopBar from '../Global/TopBar.js';
import Footer from '../Global/Footer.js';
import { useAuth } from '../Context/Authcontext.js';
import { UserProfile } from '../Context/Usercontext.js';
import Config from "../config/Config.json"
export const MyBookshelf = ({ navigation }) => {

    const { authData } = useAuth()
    const { getBookShelf, myBookList } = UserProfile()
    // const [myBooks, setMyBooks] = useState([])
    const [bookReadType, setBookReadType] = useState(0)
    const [readerModalvisibility, setReaderModalvisibility] = useState(false);
    useEffect(() => {

    }, [authData]);

    const bookTypeValue = [
        {
            id: 0,
            title: 'PDF'
        },
        {
            id: 1,
            title: 'EPUB'
        }
    ]

    const handleBookReadType = (itemValue, itemIndex) => {
        setBookReadType(itemValue)
        console.log("Item val", itemValue);
        console.log("Item index", itemIndex);
        let book_type_val = itemValue
        if (book_type_val === 0) {
            // setLowToHigh();
        }
        else {
            // setHightoLow();
        }

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

    const navigateToReadScreen = async(book)=> {
        if(book.epdf_link!== null || book.epdf_link!== 'null' && book.epub_link !== null || book.epub_link !== 'null'){
            setReaderModalvisibility(true)
        }
        else if(book.epdf_link !== null || book.epdf_link !== 'null'){

        }
        else if(book.epub_link !== null || book.epub_link !== 'null'){

        }
        else{

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
                <View style={[xStyle.cartPageBooksMainDiv, {
                    marginBottom: '50%'
                }]}>
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
                                        <View style={{
                                            width: '48%',
                                            borderWidth: 1,
                                            borderColor: 'grey',
                                            height: 35
                                        }}>
                                            <Picker
                                                style={{
                                                    fontSize: 12,
                                                    color: 'grey',
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
                                </View>
                            </View>
                        ))}


                </View>

            </ScrollView>
            <Footer />
        </SafeAreaView>
    )
}
export default MyBookshelf;