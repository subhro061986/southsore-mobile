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

export const HowToSouthShore = () => {

  return (
    <View style={xStyle.howToSouthShoreView}>
      <Text style={xStyle.howToSouthShoreHeader}>
      How to Use E-Books Junction
      </Text>
      <Text style={xStyle.howToSouthShoreTag}>
      Here are following steps
      </Text>
      
      <TouchableOpacity>
        <Text style={xStyle.aboutSouthShoreReadMore}>
          Read More
        </Text>
      </TouchableOpacity>
    </View>
  )
}
export default HowToSouthShore;