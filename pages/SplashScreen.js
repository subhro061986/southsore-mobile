import React, { useEffect,useState } from "react";
import xStyle from '../assets/css/x_style.js';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, 
  Image, 
  Button, 
  TextInput, 
  TouchableOpacity,
  ImageBackground,
  Animated,
  PermissionsAndroid
} from 'react-native';



const SplashScreen =({navigation})=> {

  useEffect(() => {
    var timer = setTimeout(()=> {
      navigation.navigate('home');
    }, 3000);
  }, []);
  
    return(
      <SafeAreaView style={{flex:1}}>
      <View
        style={{
          flex:1,
          alignItems:'center',
          backgroundColor:'#FFFFFF'
        }}
        >

            <View
                style={{
                alignItems:'center',
                marginVertical:'80%',
                justifyContent:'center',
                }}
              >
              <Image
                source={require('../assets/images/logo.png')}
              />
          </View>
        </View>
      </SafeAreaView>
        
    );
  
  }




export default SplashScreen;