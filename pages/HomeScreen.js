import React, { useEffect, useState } from "react";
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
import AboutSouthshore from "../Global/AboutSouthshore.js";
import Footer from "../Global/Footer.js";
import Banner from "../Global/Banner.js";
import PubList from "../Global/PubList.js";





import SouthshoreInnovations from "../Global/SouthshoreInnovations.js";



const HomeScreen = ({ navigation }) => {

  useEffect(() => {

  }, []);


  return (
    <SafeAreaView>
      <ScrollView style={xStyle.homeBg}>
        <TopMenu />
        {/* <Text>HELLO</Text> */}
        {/* <Image
          source={require('../assets/images/banner.png')}
        /> */}
        <Banner/>
        {/* <Text style={styles.check}>abcd abcd</Text> */}
        
        <AboutSouthshore/>

        <PubList/>

        <SouthshoreInnovations />
      </ScrollView>
      <Footer />
    </SafeAreaView>

  );

}




export default HomeScreen;

// const styles = StyleSheet.create({
//   check:{
//     fontFamily: 'Protest Revolution'
//   }
// })