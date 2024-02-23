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
// import { useNavigation } from '@react-navigation/native';
// import { UserProfile } from '../context/UserContext.js';

export const TopMenuPub = () => {

  return (
    <View style={xStyle.topnav}>
      <View style={xStyle.topnav_top}>
        <View>
          <Image
            source={require('../assets/images/jurisPressLogo_white.png')}
          />
        </View>
        <View style={xStyle.topnavRight}>
          <TouchableOpacity>
            <Image
              source={require('../assets/images/call-white.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../assets/images/heart.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../assets/images/shopping-cart.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={xStyle.topnav_bottom}>
        <TextInput style={xStyle.search_bar} placeholder='Search by Author, Tittle, ISBN' placeholderTextColor={'#B0B6CC'}></TextInput>
        <View style={xStyle.search_pos}>
          <Image
            source={require('../assets/images/search-normal.png')}
          />
        </View>
      </View>


    </View>
  )
}
export default TopMenuPub;