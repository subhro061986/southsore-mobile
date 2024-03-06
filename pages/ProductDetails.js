import React, { Component,useState, useEffect } from 'react';
import xStyle from '../assets/css/x_style.js';
import { useRoute } from "@react-navigation/native"
import { UserProfile } from '../Context/Usercontext.js';
import { useAuth } from "../Context/Authcontext";
import Config from "../config/Config.json";

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
    Alert
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
    const route = useRoute()

    const { get_book_details,
        addto_cart,
        add_single_item,
        cart_items,
        add_delete_to_wishlist,
        getBookShelf,
        remove_cart_item,
        get_items,
         } = UserProfile()
    const { wishlistshow, uuid,authData,add_book_to_storage } = useAuth();
    
    const [bookdetail, setBookdetail] = useState({})
    const [images, setImages] = useState([])
    const [front_cover, setFrontCover] = useState('');
    const [back_cover, setBackCover] = useState('');
    const [readbool, setReadbool] = useState(false)
    const [showtext, setShowtext] = useState(false)
    const [defaultimg, setDefaultimg] = useState('')
    const [nondefaultimg, setNondefaultimg] = useState('')
    const [isBookPresent, setIsBookPresent] = useState(false)
    const [dependencyvar, setDependencyvar] = useState(false)
    
    const dummy =require('../assets/images/demoBook.png')

    const image_path = Config.API_URL + Config.PUB_IMAGES;


    useEffect(() => {
        console.log("p_detail : ", route?.params ? route?.params?.bookId : 2)
        book_detail(route.params.bookId)

        console.log("bookid= ", route.params?.bookId)
        getbookshelfData(route.params.bookId)

    },[route.params?.bookId])

    const getbookshelfData = async (bookid) => {

        const booklistResp = await getBookShelf()
        console.log("bookList Resp:",booklistResp)
        if (booklistResp?.output?.books != null) {
            let booklist_arr = booklistResp?.output?.books?.filter((val) => {
                return (val.id === bookid)
            })
            console.log("booklistarr=", booklist_arr)

            if (booklist_arr.length > 0) {
                setIsBookPresent(true)
            }

        }
    }

    const book_detail = async (book_id) => {
        const resp = await get_book_details(book_id)
        console.log("book=",resp)
        if (resp === undefined || resp === null) {
            setBookdetail({})
            setImages([])
            setFrontCover('')
            setBackCover('')
        }
        else {
            console.log("det_resp", resp)
            if (resp.statuscode === "0" && JSON.stringify(resp.output) !== "{}" && resp.output !== null && resp.output !== undefined) {
                setBookdetail(resp.output)
                // setImages(resp.output.images?.length > 0 ? resp.output.images : dummy);
                setFrontCover(resp.output.front_cover)
                setBackCover(resp.output.back_cover)
                default_img(resp.output)

                if (resp.output.description.length > 336) {
                    setReadbool(true)
                    setShowtext(false)
                }
                else {
                    setReadbool(false)
                }
            }
            else {
                setBookdetail({})
                // setImages([])
                setFrontCover('')
                setBackCover('')

            }
        }

    }

    const default_img = async (pub_obj) => {
        let frontCover = image_path + pub_obj.publisherid + '/' + pub_obj.front_cover + '?d=' + new Date();
        let backCover = image_path + pub_obj.publisherid + '/' + pub_obj.back_cover + '?d=' + new Date();
        console.log("PUB OBJ FC IMAGE : ", frontCover);
        console.log("PUB OBJ BC IMAGE : ", backCover);
        setDefaultimg(frontCover);
        setNondefaultimg(backCover);

    }

    const add_to_cart = async (bookid, toCheckout) => {
        console.log('bookDetails',bookdetail)

        let json_data = {
            title: bookdetail.title,
            author: bookdetail.authors,
            price: bookdetail.price,
            publisher: bookdetail.publisher,
            items_no: 1,
            image: defaultimg,
            category: bookdetail.category,
            publisherid: bookdetail.publisherid,
            bookid:bookdetail.id,
            deviceid:uuid
          }

        if(authData === '' || authData === null || authData === undefined){
        
            const resp= await add_book_to_storage(json_data)
            if (toCheckout) {
                alert("Please Login to Buy this book!")
            }
            else {
                alert("Item Added to Cart");
            }
        }
        else {
        const resp= await add_book_to_storage(json_data)

        }

       
        // else {
        //     const get_json =
        //     {
        //         deviceid: uuid
        //         // "9E7C1A59-7473-405F-81A7-11E25C70F0AC" 
        //     }

        //     const resp = await cart_items(get_json)

        //     console.log("get_json ", get_json)

        //     let book_exist_arr = resp.output.filter((val) => {
        //         return (
        //             val.id === bookid
        //         )
        //     })



        //     if (book_exist_arr.length === 0) {

        //         add_single(bookid)

        //         toast.success("Item Added to Cart", {
        //             position: "bottom-center",
        //             autoClose: 2000,
        //             hideProgressBar: true,
        //             closeOnClick: true,
        //             pauseOnHover: true,
        //             draggable: true,
        //             closeButton: false,
        //             theme: "dark",
        //         });

        //     }
        //     else {

        //         if (toCheckout) {

        //             // remove book from cart
        //             Remove_Cart_Item(bookid)

        //             // add book again to the cart such that it is the last item added
        //             add_single(bookid)
                    
        //         }
        //         else {

        //             console.log("The Book already exists in the cart")
        //             toast.info("Book Already Added", {
        //                 position: "top-center",
        //                 autoClose: 3000,
        //                 hideProgressBar: true,
        //                 closeOnClick: true,
        //                 pauseOnHover: true,
        //                 draggable: true,
        //                 closeButton: false,
        //                 // theme: "light",
        //                 style: { fontWeight: 'bold', backgroundColor: "rgb(220, 249, 252)" }
        //             });
        //         }
        //     }

        //     if (toCheckout) {
        //         navigate("/billingaddress", { state: { buynow: 1 } })
        //     }

        // }

    }
    // const add_to_cart = async (bookid, toCheckout) => {

    //     console.log("Product_det_wishlistshow_bool ", wishlistshow)

    //     if (wishlistshow === false) {
    //         console.log("added to cart")


    //         addto_cart(bookdetail)
    //         if (toCheckout) {
    //             navigate("/login")
    //         }
    //         else {

    //             toast.success("Item Added to Cart", {
    //                 position: "bottom-center",
    //                 autoClose: 2000,
    //                 hideProgressBar: true,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 closeButton: false,
    //                 theme: "dark",
    //             });
    //         }
    //         // navigation("/cartpage")

            
    //     }
    //     else {
    //         const get_json =
    //         {
    //             deviceid: uuid
    //             // "9E7C1A59-7473-405F-81A7-11E25C70F0AC" 
    //         }

    //         const resp = await cart_items(get_json)

    //         console.log("get_json ", get_json)

    //         let book_exist_arr = resp.output.filter((val) => {
    //             return (
    //                 val.id === bookid
    //             )
    //         })



    //         if (book_exist_arr.length === 0) {

    //             add_single(bookid)

    //             toast.success("Item Added to Cart", {
    //                 position: "bottom-center",
    //                 autoClose: 2000,
    //                 hideProgressBar: true,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 closeButton: false,
    //                 theme: "dark",
    //             });

    //         }
    //         else {

    //             if (toCheckout) {

    //                 // remove book from cart
    //                 Remove_Cart_Item(bookid)

    //                 // add book again to the cart such that it is the last item added
    //                 add_single(bookid)
                    
    //             }
    //             else {

    //                 console.log("The Book already exists in the cart")
    //                 toast.info("Book Already Added", {
    //                     position: "top-center",
    //                     autoClose: 3000,
    //                     hideProgressBar: true,
    //                     closeOnClick: true,
    //                     pauseOnHover: true,
    //                     draggable: true,
    //                     closeButton: false,
    //                     // theme: "light",
    //                     style: { fontWeight: 'bold', backgroundColor: "rgb(220, 249, 252)" }
    //                 });
    //             }
    //         }

    //         if (toCheckout) {
    //             navigate("/billingaddress", { state: { buynow: 1 } })
    //         }

    //     }

    // }

    const add_single = async (bookid) => {
        const json = {
            "deviceid": uuid,
            // "9E7C1A59-7473-405F-81A7-11E25C70F0AC" , 
            "bookid": bookid
        }
        const resp = await add_single_item(json)
        console.log("single_item_added ", resp.message)
    }

    const Remove_Cart_Item = async (book_id) => {
        console.log("remove", book_id)

        if (wishlistshow === true) {
            let remove_json = {
                deviceid: uuid,
                // "9E7C1A59-7473-405F-81A7-11E25C70F0AC",
                bookid: book_id
            }

            console.log("Remove_json ", remove_json)

            const resp = await remove_item(remove_json)
            
        }
        else {
            let cartItems=JSON.parse(localStorage.getItem("cart_data")) || []
            
            let is_book_exists = cartItems.find((val) => val.my_book_id === book_id)
            if (is_book_exists !== undefined) {



                let localstorage_array = [...cartItems]
                let arr_index = cartItems.indexOf(is_book_exists)
                // console.log("index", arr_index)

                localstorage_array.splice(arr_index, 1)
                localStorage.setItem("cart_data", JSON.stringify(localstorage_array))
                // console.log("localarray_after_remove :", JSON.parse(localStorage.getItem("cart_data")))
                setDependencyvar(!dependencyvar)
                get_items()
            }
        }


    }

    const remove_item = async (remove_json) => {
        const resp = await remove_cart_item(remove_json)
        console.log("Remove_cart :", resp) 
    }


    return (
        <SafeAreaView>
            <ScrollView style={xStyle.homeBg} stickyHeaderIndices={[0]}>
                <TopMenuPub />

                {/* Product Details */}

                <View
                    style={xStyle.prod_det_view}
                >
                    {/* <Text style={{color:'black'}}>{defaultimg}</Text> */}
                    <Image
                        // source={require('../assets/images/demoBook.png')}
                        source={{uri:defaultimg}}
                        style={[xStyle.prod_det_cov_img, 
                            {width:'100%', height:251}
                        ]}
                        // width={318}
                        
                    />
                    <View style={xStyle.prod_det_head_view}>
                        <Text style={xStyle.prod_det_head}>{bookdetail.title}</Text>
                    </View>
                    <View style={xStyle.prod_det_author_view}>
                        <Text style={xStyle.prod_det_card_author}>Author: <Text style={xStyle.prod_det_card_author_name}>{bookdetail.authors}</Text></Text>
                    </View>
                    <View style={xStyle.prod_det_price_view}>
                        <Text style={xStyle.prod_det_price}>Price: <Text style={xStyle.prod_det_price_value}>₹{bookdetail.price}</Text></Text>
                    </View>

                    {isBookPresent ?
                    <View style={xStyle.prod_det_btn_view}>
                        <TouchableOpacity style={xStyle.prod_det_add_btn}
                            onPress={() =>navigation.navigate('mybookshelf')}
                        >
                            <Text style={xStyle.prod_det_add_btn_txt}>Go To Boofshelf</Text>
                            <Image
                                source={require('../assets/images/cartblack.png')}
                            />
                        </TouchableOpacity>
                    
                    </View>
                    :

                    <View style={xStyle.prod_det_btn_view}>
                        <TouchableOpacity style={xStyle.prod_det_add_btn}
                            onPress={() =>add_to_cart(bookdetail.id,false)}
                        >
                            <Text style={xStyle.prod_det_add_btn_txt}>Add to Cart</Text>
                            <Image
                                source={require('../assets/images/cartblack.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={xStyle.prod_det_buy_btn}
                            onPress={() =>add_to_cart(bookdetail.id,true)}
                        >
                            <Text style={xStyle.prod_det_add_buy_txt}>Buy Now</Text>
                            <Image
                                source={require('../assets/images/add.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    }
                    <View style={xStyle.prod_det_border}></View>
                    <View style={xStyle.prod_det_des_head_view}>
                        <Text style={xStyle.prod_det_des_head}>Description</Text>
                    </View>
                    <View style={xStyle.prod_det_des_body_view}>
                        <Text style={xStyle.prod_det_des_body}>
                        {bookdetail.description}
                        </Text>
                    </View>
                    <View style={xStyle.prod_det_details_head_view}>
                        <Text style={xStyle.prod_det_details_head}>Product Details</Text>
                    </View>
                    <View style={xStyle.prod_det_details_body_view}>
                        <Text style={xStyle.prod_det_details_body_title}>&#8226;  Author: <Text style={xStyle.prod_det_details_body_value}>{bookdetail.authors}</Text></Text>
                        <Text style={xStyle.prod_det_details_body_title}>&#8226;  Publisher: <Text style={xStyle.prod_det_details_body_value}>{bookdetail.publisher}</Text></Text>
                        {/* <Text style={xStyle.prod_det_details_body_title}>&#8226;  Publisher Date: <Text style={xStyle.prod_det_details_body_value}>09 Sep 2003</Text></Text> */}
                        <Text style={xStyle.prod_det_details_body_title}>&#8226;  Year Of Publishing: <Text style={xStyle.prod_det_details_body_value}>{bookdetail.yearofpublishing}</Text></Text>
                        <Text style={xStyle.prod_det_details_body_title}>&#8226;  Format: <Text style={xStyle.prod_det_details_body_value}>E-Book</Text></Text>
                        <Text style={xStyle.prod_det_details_body_title}>&#8226;  Edition No: <Text style={xStyle.prod_det_details_body_value}>{bookdetail.editionno}</Text></Text>
                        <Text style={xStyle.prod_det_details_body_title}>&#8226;  ISBN-10: <Text style={xStyle.prod_det_details_body_value}>{bookdetail.isbn10}</Text></Text>
                        <Text style={xStyle.prod_det_details_body_title}>&#8226;  ISBN-13: <Text style={xStyle.prod_det_details_body_value}>{bookdetail.isbn13}</Text></Text>
                        <Text style={xStyle.prod_det_details_body_title}>&#8226;  No of Pages: <Text style={xStyle.prod_det_details_body_value}>{bookdetail.noofpages}</Text></Text>
                    </View>
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