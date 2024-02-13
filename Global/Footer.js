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
      <TouchableOpacity>
        <Image
          source={require('../assets/images/home.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity>
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