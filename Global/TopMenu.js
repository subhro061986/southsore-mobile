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

export const TopMenu=()=>{
    
    return(
      <View style={xStyle.topnav}>
        
        <Image
              source={require('../assets/images/logo_page.png')}
        />
        
    </View>
    )
  }
  export default TopMenu;