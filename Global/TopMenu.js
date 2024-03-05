import React, { Component } from 'react';
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
// import { UserProfile } from '../context/UserContext.js';
import Autocomplete from 'react-native-autocomplete-input';

export const TopMenu = () => {
  const navigation = useNavigation();

  // const { query } = this.state;
  // const data = filterData(query);

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
        <TextInput style={xStyle.search_bar} placeholder='Search by Author, Tittle, ISBN' placeholderTextColor={'#B0B6CC'}></TextInput>
        
          {/* <Autocomplete
          style={{
            flex: 1,
            left: 0,
            position: 'absolute',
            right: 0,
            top: 0,
            zIndex: 1
          }}
            data={data}
            value={query}
            onChangeText={(text) => this.setState({ query: text })}
            flatListProps={{
              keyExtractor: (_, idx) => idx,
              renderItem: ({ item }) => <Text>{item}</Text>,
            }}
          /> */}
        
        <View style={xStyle.search_pos}>
          <Image
            source={require('../assets/images/search-normal.png')}
          />
        </View>
      </View>


    </View>
  )
}
export default TopMenu;