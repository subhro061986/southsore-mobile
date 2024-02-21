import React, { Component, useEffect, useState } from 'react';
import xStyle from '../assets/css/x_style.js';

import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Overlay from 'react-native-modal-overlay';
// import { useAuth } from '../context/AuthContext.js';
// import { useNavigation } from '@react-navigation/native';
// import { UserProfile } from '../context/UserContext.js';

export const HowToSouthShore = () => {

  const [modalvisibility, setmodalvisibility] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {

  }, []);

  const joinNowModalHandler = () => {
    setmodalvisibility(true);

  }

  const backbuttonhandler = () => {
    setmodalvisibility(false);
  }


  return (
    <>
      <View style={xStyle.howToSouthShoreView}>
        <View style={xStyle.howToSouthShoreHeader_View}>
          <Text style={xStyle.howToSouthShoreHeader}>
            How to Use E-Books Junction
          </Text>
        </View>
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
            <View style={xStyle.buy_card_head_view}>
              <Text style={xStyle.buy_card_head}>I am a &nbsp;
                <Text style={xStyle.buy_card_head_sec}>Publisher</Text>
              </Text>
            </View>
            <View style={xStyle.howToSouthShoreCardTag_view}>
              <Text style={xStyle.howToSouthShoreCardTag}>
                how do I sell my e-books on
                &nbsp;
                <Text style={xStyle.buy_card_link} onPress={() => Linking.openURL('http://ebooksjunction.com/')}>
                  www.ebooksjunctions.com
                </Text>
              </Text>
            </View>
            <Text style={xStyle.buy_card_body}>
              Click on the “Join now” button. There are a few details required and we will get back to you and discuss the details over a call at a time convenient to you.
            </Text>
          </View>
          <View style={xStyle.howToSouthShoreCard}>
            <Image
              source={require('../assets/images/howtosouthshore_2.png')}
            />
            <Text style={xStyle.howToSouthShoreCardHead}>Display your books</Text>
            <View style={xStyle.howToSouthShoreCardHeadSec_view}>
              <Text style={xStyle.howToSouthShoreCardHeadSec}>Your own webstore</Text>
            </View>

            <Text style={xStyle.buy_card_body}>
              After registration and completion of formalities, you as a publisher will have your own webstore on our platform to upload, display and sell your e-content. The platform also supports your custom url.
            </Text>
          </View>
          <View style={xStyle.howToSouthShoreCard}>
            <Image
              source={require('../assets/images/howtosouthshore_3.png')}
            />
            <View style={xStyle.buy_card_head_view}>
              <Text style={xStyle.buy_card_head}>Reach your <Text style={xStyle.buy_card_head_sec}>Customers</Text></Text>
            </View>

            <Text style={xStyle.buy_card_body}>
              Its simple, upload the titles and sell through the platform. Customers can search using key words and pay through the connected secure payment gateway and download the titles to read. The content is secure and can be read only through the proprietary reader of the platform.
            </Text>
          </View>
        </ScrollView>

        <TouchableOpacity style={xStyle.howToSouthShoreJoinNowBtn} onPress={joinNowModalHandler}>
          <Text style={xStyle.howToSouthShoreJoinNowBtnText}>Join Now</Text>
        </TouchableOpacity>
      </View>

      {/* --------JOIN NOW MODAL------- */}

      <View>
        <Overlay
          // animationType={ZoomIn}
          // transparent={true}
          // // isVisible={modalvisibility}
          // onRequestClose={backbuttonhandler}
          // hasBackdrop={true}
          // backdropColor={'black'}
          // // statusBarTranslucent={true}
          // backdropOpacity={0.5}
          visible={modalvisibility}
          onClose={backbuttonhandler}
          closeOnTouchOutside
          containerStyle={{ backgroundColor: 'rgba(38, 37, 37, 0.78)' }}
          childrenWrapperStyle={{ backgroundColor: '#FFFFFF', borderRadius: 30 }}
        >
          <TouchableOpacity
            style={xStyle.buy_join_modal_cross}
            onPress={backbuttonhandler}
          >
            <Image
              source={require('../assets/images/close-circle.png')}
            />
          </TouchableOpacity>
          <View style={xStyle.howToSouthShoreModal_container}>
            <View style={xStyle.howToSouthShoreModalHead_view}>
              <Text style={xStyle.howToSouthShoreModalHead}>Join as Publisher</Text>
            </View>
            <Text style={xStyle.howToSouthShoreModalSubHead}>Fill the form and continue to join as  publisher</Text>
            <View style={xStyle.howToSouthShoreModalBody}>
              <View style={xStyle.howToSouthShoreModalBodyFormView}>
                <Text style={xStyle.howToSouthShoreModalBodyFormLabel}>Name</Text>
                <TextInput
                  style={xStyle.howToSouthShoreModalBodyFormInput}
                  placeholder="Your name"
                  placeholderTextColor={'#7B8890'}
                  keyboardType="text"
                  value={name}
                  onChangeText={(e) => setName(e)}
                />
                <Image
                  source={require('../assets/images/profile-circle.png')}
                  style={xStyle.howToSouthShoreModalBodyFormInputIcon}
                />
              </View>
              <View>
                <Text style={xStyle.howToSouthShoreModalBodyFormLabel}>Email</Text>
                <TextInput
                  style={xStyle.howToSouthShoreModalBodyFormInput}
                  placeholder="Your email address"
                  placeholderTextColor={'#7B8890'}
                  keyboardType="email"
                  value={email}
                  onChangeText={(e) => setEmail(e)}
                />
                <Image
                  source={require('../assets/images/smsbox.png')}
                  style={xStyle.howToSouthShoreModalBodyFormInputIcon}
                />
              </View>
              <View>
                <Text style={xStyle.howToSouthShoreModalBodyFormLabel}>Phone</Text>
                <TextInput
                  style={xStyle.howToSouthShoreModalBodyFormInput}
                  placeholder="Your phone number"
                  placeholderTextColor={'#7B8890'}
                  keyboardType="text"
                  value={phoneNumber}
                  onChangeText={(e) => setPhoneNumber(e)}
                />
                <Image
                  source={require('../assets/images/call.png')}
                  style={xStyle.howToSouthShoreModalBodyFormInputIcon}
                />
              </View>
              <View>
                <Text style={xStyle.howToSouthShoreModalBodyFormLabel}>Message</Text>
                <TextInput
                  style={xStyle.howToSouthShoreModalBodyFormInput}
                  placeholder="Your message"
                  placeholderTextColor={'#7B8890'}
                  keyboardType="text"
                  value={message}
                  multiline={true}
                  numberOfLines={4}
                  textAlignVertical='top'
                  onChangeText={(e) => setMessage(e)}
                />
              </View>
              <TouchableOpacity style={xStyle.howToSouthShoreModalSubmit}>
                <Text style={xStyle.howToSouthShoreModalSubmitText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Overlay>
      </View>
    </>
  )
}
export default HowToSouthShore;