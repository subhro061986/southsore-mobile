import React, { Component } from 'react';
import xStyle from '../assets/css/x_style.js';

import {
  View,
  Text,
  Image,
  TouchableOpacity,

} from 'react-native';


export const Footer = () => {
  return (
    <View style={xStyle.bottomnav}>
      <Image
        source={require('../assets/images/home.png')}
      />
      <Image
        source={require('../assets/images/publisher.png')}
      />
      <Image
        source={require('../assets/images/profile.png')}
      />
      <Image
        source={require('../assets/images/login.png')}
      />
    </View>
  )
}
export default Footer;