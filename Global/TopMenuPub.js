import React, { Component, useState, useEffect } from 'react';
import xStyle from '../assets/css/x_style.js';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { UserProfile } from '../Context/Usercontext.js';
import Config from "../config/Config.json"
import { useAuth } from '../Context/Authcontext';
// import { UserProfile } from '../context/UserContext.js';

export const TopMenuPub = ({ route}) => {
  const navigation = useNavigation();

  const { category_by_publisher, items, getPublishersById, publisherId, getBooksBySearchText, allActivePublisher } = UserProfile()
  const { wishlistshow, authData, logOut } = useAuth()
  const [publisherDetails, setPublisherDetails] = useState('')
  const [searchText, setSearchText] = useState('')
  // const [toggleSearch, setToggleSearch] = useState(false)
  const [publisherBooks, setPublisherBooks] = useState([])

  useEffect(() => {
    // console.log("Publisher id in TopMenuPub===>", route.params.publisher_id);
    console.log("Publisher id in TopMenuPub===>", publisherId);
    getPubById();
  }, [authData])

  // const handleToggleSearch = () => {
  //   setToggleSearch(!toggleSearch)
  // }

  const getPubById = async () => {
    // let pubid = 0;

    // // if(location.state.publisher_id==='' || location.state.publisher_id===null || location.state.publisher_id===0 || location.state.publisher_id===undefined){
    // if (location.state === null || location.state === 'null') {
    //   pubid = publisherId
    // }
    // else {
    //   pubid = location.state.publisher_id
    // }
    const result = await getPublishersById(publisherId)
    console.log("Publisher RESULT===>", result?.data);
    setPublisherDetails(result?.data?.output)


  }
  // const goToProfile = () => {
  //   if (wishlistshow === true) {
  //     navigate('/mybookshelf', { state: { fromHome: false } })
  //   }
  //   else {
  //     navigate('/login')
  //   }
  // }
  // const gotoLogin = () => {
  //   navigate('/login')
  // }
  // const doLogout = async () => {

  //   const resp = await logOut()

  //   if (resp === "Success") {
  //     console.log('logout_response', resp)
  //     navigate("/login")
  //   }

  //   // window.location.reload()

  // }
  const gotoPublisher = (val) => {
    navigation.navigate('pubhome', { publisher_id: val.id })
  }

  const getbookByText = async (e) => {
    console.log('e', e)


    setSearchText(e)

    if (e !== "" && e !== undefined && e !== null) {
      let json = {
        searchText: e
      }
      let response = await getBooksBySearchText(json)
      if (response.statuscode === "0") {
        setPublisherBooks(response.output)
      }
      // console.log('search results', searchText)

    }
    else {
      setPublisherBooks([])
    }



  }





  const goToProductDetailsPage = (id) => {
    console.log('product id : ', id);
    navigation.navigate('productdetails', { BOOK_ID: id })
  }

  const handleWishlist = () => {
    console.log('Wishlist show : ', wishlistshow);
    if(wishlistshow === false){
      alert("Please log in first.");
    }
    else{
      navigation.navigate('wishlist');
    }
  }
  return (
    <View style={xStyle.topnav}>
      <View style={xStyle.topnav_top}>
        <TouchableOpacity
        style={{ width:100}}
          onPress={gotoPublisher}
        >
          <Image
            // source={require('../assets/images/jurisPressLogo_white.png')}
            style={{
              height:30,
              width:90,
              resizeMode:'contain'
            }}
            source={{ uri: Config.API_URL + Config.PUB_IMAGES + publisherDetails.id + '/' + publisherDetails.logo }}
          />
          {/* <Text style={{color:'white'}}>{Config.API_URL + Config.PUB_IMAGES + publisherDetails.id + '/' + publisherDetails.logo}</Text> */}
        </TouchableOpacity>
        <View style={xStyle.topnavRight}>
          <TouchableOpacity>
            <Image
              source={require('../assets/images/call-white.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleWishlist()}
          >
            <Image
              source={require('../assets/images/heart.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('cartdetails')}
          >
            <Image
              source={require('../assets/images/shopping-cart.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={xStyle.topnav_bottom}>
        <TextInput
          style={xStyle.search_bar}
          placeholder='Search by Author, Tittle, ISBN'
          placeholderTextColor={'#B0B6CC'}
          value={searchText}
          onChangeText={(e) => getbookByText(e)}
        ></TextInput>
        <View style={xStyle.search_pos}>
          <Image
            source={require('../assets/images/search-normal.png')}
          />
        </View>
        {publisherBooks.length > 0
          && searchText.length > 0 &&

          <View
            style={{
              borderWidth: 1,
              borderColor: '#dee2e6',
              minHeight: 70,
              width: '100%',
              borderRadius: 6,
              maxHeight: 200,
              overflowY: 'auto',
              position: "absolute",
              top: 46,
              zIndex: 1,
              backgroundColor: 'white'

            }}>

            {
              publisherBooks.length > 0 &&
              publisherBooks.map((book, index) => (

                <TouchableOpacity
                  style={{
                    paddingHorizontal: '5%',
                    paddingVertical: '5%'
                  }}
                  key={index}
                  onPress={() => goToProductDetailsPage(book.id)}
                >

                  <View style={{ marginBottom: '2%' }}>
                    <Text> {book.title} </Text>
                  </View>
                  <View style={{ marginBottom: '2%' }}>
                    <Text>ISBN13: {book.isbn13}</Text>
                  </View>
                  <Text>Author: {book.authors}</Text>

                </TouchableOpacity>
              ))
            }

          </View>

        }
      </View>



    </View>
  )
}
export default TopMenuPub;