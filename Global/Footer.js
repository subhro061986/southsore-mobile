import React, { Component } from 'react';
import xStyle from '../assets/css/x_style.js';

import {
  View,
  Text,
  Image,
  TouchableOpacity,

} from 'react-native';

import { useNavigation } from '@react-navigation/native';


export const Footer = () => {

  const navigation = useNavigation();

  return (
    <View style={xStyle.bottomnav}>
      <TouchableOpacity
        onPress={() => navigation.navigate('home')}
      >
        <Image
          source={require('../assets/images/home.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('pubhome')}
      >
        <Image
          source={require('../assets/images/publisher.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require('../assets/images/profile.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require('../assets/images/login.png')}
        />
      </TouchableOpacity>
    </View>
  )
}
export default Footer;