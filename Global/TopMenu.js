import React, { Component, useState,useEffect } from 'react';
import xStyle from '../assets/css/x_style.js';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';
// import { useAuth } from '../context/AuthContext.js';
import { useNavigation } from '@react-navigation/native';
import Autocomplete from 'react-native-autocomplete-input';
import { UserProfile } from '../Context/Usercontext.js';

export const TopMenu = () => {
  const navigation = useNavigation();
  const {allActivePublisher}=UserProfile()
  const [filteredFilms, setFilteredFilms] = useState([]);

  

  useEffect(() => {
    
  }, []);

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
            onPress={() => navigation.navigate('wishlist')}
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
        {/* <TextInput style={xStyle.search_bar} onChangeText={handleInputChange} value={query} placeholder='Search by Author, Tittle, ISBN' placeholderTextColor={'#B0B6CC'}></TextInput> */}
        
        <View style={{ flex: 1 }}>
        <Autocomplete
          autoCapitalize="none"
          autoCorrect={false}
          data={filteredFilms}
          onChangeText={(text) => findPublisher(text)}
          placeholder="Search by publisher"
          flatListProps={{
            renderItem: ({ item }) => (
            <TouchableOpacity
              // onPress={() => {
              //   setSelectedValue(item);
              // }}
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