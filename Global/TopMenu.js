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
import Autocomplete from 'react-native-autocomplete-input';
import { UserProfile } from '../Context/Usercontext.js';
import { useAuth } from '../Context/Authcontext.js';

export const TopMenu = () => {
  const navigation = useNavigation();
  const { allActivePublisher } = UserProfile()
  const { wishlistshow,authData,cartCount } = useAuth()
  const [filteredFilms, setFilteredFilms] = useState([]);

  useEffect(() => {
    console.log("cart count= ",cartCount)
  }, [authData]);

  const findPublisher = (query) => {
    // Method called every time when we change the value of the input
    if (query) {
      // Making a case insensitive regular expression
      const regex = new RegExp(`${query.trim()}`, 'i');
      // Setting the filtered film array according the query

      setFilteredFilms(
        allActivePublisher.filter((pub) => pub.name.search(regex) >= 0)
      );
    } else {
      // If the query is null then return blank
      setFilteredFilms([]);
    }
  };

  const handleWishlist = () => {
    
    if(wishlistshow === false){
      alert("Please log in first.");
    }
    else{
      navigation.navigate('wishlist');
    }
  }
  const gotoPublisher=(data)=>{
    navigation.navigate('pubhome',{publisher_id:data.id})
  }
  return (
    <View style={xStyle.topnav}>
      <View style={xStyle.topnav_top}>
        <View>
          <Image
            source={require('../assets/images/logo_page.png')}
          />
        </View>
        <View style={xStyle.topnavRight}>
          <TouchableOpacity>
            <Image
              source={require('../assets/images/sms.png')}
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

          <View 
              style={{
                backgroundColor:'#ffffff',
                width:20,
                height:20,
                borderRadius:20,
                alignItems:'center',
                position:'absolute',
                top:-10,
                right:-10
              }}
            >
                <Text style={{fontWeight:'bold'}}>{cartCount}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={xStyle.topnav_bottom}>
        {/* <TextInput style={xStyle.search_bar} onChangeText={handleInputChange} value={query} placeholder='Search by Author, Tittle, ISBN' placeholderTextColor={'#B0B6CC'}></TextInput> */}

        <View style={{ 
          flex: 1 
          }}
          >
          <Autocomplete
            inputContainerStyle={{
              //width: '100%',
              paddingHorizontal:20,
              backgroundColor:'#ffffff',
              borderRadius:10,
            }}
            listContainerStyle={{
              width:'100%',
              borderRadius:5
            }}
            autoCapitalize="none"
            autoCorrect={false}
            data={filteredFilms}
            onChangeText={(text) => findPublisher(text)}
            placeholder="Search by publisher"
            flatListProps={{
              renderItem: ({ item }) => (
                <TouchableOpacity
                onPress={() => {
                  gotoPublisher(item);
                }}
                style={{
                  width:'100%',
                  paddingHorizontal:20,
                  paddingVertical:10,
                }}
                >
                  <Text>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>

        {/* <View style={xStyle.search_pos}>
          <Image
            source={require('../assets/images/search-normal.png')}
          />
        </View> */}
      </View>


    </View>
  )
}
export default TopMenu;