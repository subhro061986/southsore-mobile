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
import TopMenu from "../Global/TopMenu.js";
import Footer from "../Global/Footer.js";



const HomeScreen =({navigation})=> {

  useEffect(() => {
    
  }, []);

  
    return(
    <SafeAreaView>
        <ScrollView style={xStyle.homeBg}>
            <TopMenu/>
            <Text>HELLO</Text>
        </ScrollView>
            <Footer/>
    </SafeAreaView>
        
    );
  
  }




export default HomeScreen;