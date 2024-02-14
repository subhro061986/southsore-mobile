import React, { Component } from 'react';
import xStyle from '../assets/css/x_style.js';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView
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
      <View style={xStyle.howToSouthShoreTagView}>
        <Text style={xStyle.howToSouthShoreTag}>
          Here are following
        </Text>
        <Text style={xStyle.howToSouthShoreTagPart2}> steps</Text>
      </View>
      <ScrollView horizontal={true}>
        <View style={xStyle.howToSouthShoreCard}>
          <Image
            source={require('../assets/images/howtosouthshore_1.png')}
          />
          <Text style={xStyle.buy_card_head}>I am a  <Text style={xStyle.buy_card_head_sec}>Publisher</Text></Text>
          <Text style={xStyle.howToSouthShoreCardTag}>
            how do I sell my e-books on
            &nbsp;
            <Text style={xStyle.buy_card_link} onPress={() => Linking.openURL('http://ebooksjunction.com/')}>
              www.ebooksjunctions.com
            </Text>
          </Text>
          <Text style={xStyle.buy_card_body}>
            Click on the “Join now” button. There are a few details required and we will get back to you and discuss the details over a call at a time convenient to you.
          </Text>
        </View>
        <View style={xStyle.howToSouthShoreCard}>
          <Image
            source={require('../assets/images/howtosouthshore_2.png')}
          />
          <Text style={xStyle.howToSouthShoreCardHead}>Display your books</Text>
          <Text style={xStyle.howToSouthShoreCardHeadSec}>Your own webstore</Text>
          
          <Text style={xStyle.buy_card_body}>
          After registration and completion of formalities, you as a publisher will have your own webstore on our platform to upload, display and sell your e-content. The platform also supports your custom url.
          </Text>
        </View>
        <View style={xStyle.howToSouthShoreCard}>
          <Image
            source={require('../assets/images/howtosouthshore_3.png')}
          />
          <Text style={xStyle.buy_card_head}>Reach your <Text style={xStyle.buy_card_head_sec}>Customers</Text></Text>
          
          <Text style={xStyle.buy_card_body}>
          Its simple, upload the titles and sell through the platform. Customers can search using key words and pay through the connected secure payment gateway and download the titles to read. The content is secure and can be read only through the proprietary reader of the platform.
          </Text>
        </View>
      </ScrollView>

      <TouchableOpacity style={xStyle.howToSouthShoreJoinNowBtn}>
        <Text style={xStyle.howToSouthShoreJoinNowBtnText}>Join Now</Text>
      </TouchableOpacity>
    </View>
  )
}
export default HowToSouthShore;