import React, { Component, useState, useEffect } from 'react';
import xStyle from '../assets/css/x_style.js';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput

} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Overlay from 'react-native-modal-overlay';


export const Footer = () => {

  const navigation = useNavigation();

  const [logInModalvisibility, setLogInModalvisibility] = useState(false);
  const [signUpModalvisibility, setSignUpModalvisibility] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {

  }, []);

  const logInModalHandler = () => {
    setLogInModalvisibility(true);
    setSignUpModalvisibility(false);
  }

  const logInBackButtonHandler = () => {
    setLogInModalvisibility(false);
  }

  const signUpModalHandler = () => {
    setSignUpModalvisibility(true);
    setLogInModalvisibility(false);
  }

  const signUpBackButtonHandler = () => {
    setSignUpModalvisibility(false);
  }

  return (
    <>
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
        <TouchableOpacity
          onPress={() => navigation.navigate('profile')}
        >
          <Image
            source={require('../assets/images/profile.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={logInModalHandler}>
          <Image
            source={require('../assets/images/login.png')}
          />
        </TouchableOpacity>
      </View>

      {/* --------LOG IN MODAL------- */}

      <View>
        <Overlay
          // animationType={ZoomIn}
          // transparent={true}
          visible={logInModalvisibility}
          // // isVisible={modalvisibility}
          // onRequestClose={backbuttonhandler}
          // hasBackdrop={true}
          // backdropColor={'black'}
          // // statusBarTranslucent={true}
          // backdropOpacity={0.5}
          onClose={logInBackButtonHandler}
          closeOnTouchOutside
          containerStyle={{ backgroundColor: 'rgba(38, 37, 37, 0.78)' }}
          childrenWrapperStyle={{ backgroundColor: '#FFFFFF', borderRadius: 30 }}
        >
          <TouchableOpacity
            style={xStyle.buy_join_modal_cross}
            onPress={logInBackButtonHandler}
          >
            <Image
              source={require('../assets/images/close-circle.png')}
            />
          </TouchableOpacity>
          <View style={xStyle.buy_join_modal_head_view}>
            <Text style={xStyle.buy_join_modal_head}>Log In</Text>
          </View>
          <Text style={xStyle.buy_join_modal_sub_head}>
            Enter your enail and password to log in
          </Text>

          <View style={xStyle.logInModalBody}>
            <Text style={xStyle.buy_join_modal_legend}>Email</Text>
            <View style={xStyle.buy_join_modal_input_view}>
              <TextInput style={[xStyle.buy_join_modal_input, xStyle.buy_join_modal_input_height]}
                placeholder='Your email address' placeholderTextColor={'#7B8890'}></TextInput>
              <Image
                source={require('../assets/images/smsbox.png')}
                style={xStyle.buy_join_modal_input_icon}
              />
            </View>
            <Text style={xStyle.buy_join_modal_legend}>Password</Text>
            <View style={xStyle.buy_join_modal_input_view}>
              <TextInput style={[xStyle.buy_join_modal_input, xStyle.buy_join_modal_input_height]}
                placeholder='Your password' placeholderTextColor={'#7B8890'}></TextInput>
              <Image
                source={require('../assets/images/eye-slash.png')}
                style={xStyle.buy_join_modal_input_icon}
              />
            </View>
            <TouchableOpacity style={xStyle.forgotPasswordView}>
              <Text style={xStyle.forgotPasswordTxt}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={xStyle.logInBtn}>
            <Text style={[xStyle.logInBtnText]}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={xStyle.signInWithGoogleBtn}>
            <Text style={[xStyle.signInWithGoogleBtnTxt]}>Sign in with </Text>
            <Image
              source={require('../assets/images/google.png')}
            />
          </TouchableOpacity>
          <View style={xStyle.logInFooter}>
            <Text style={xStyle.logInFooterTxt}>
              Don't have an account?
            </Text>
            <TouchableOpacity
              style={xStyle.forgotPasswordView}
              onPress={signUpModalHandler}
            >
              <Text style={xStyle.forgotPasswordTxt}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </Overlay>
      </View>

      {/* --------SIGN UP MODAL------- */}

      <View>
        <Overlay
          // animationType={ZoomIn}
          // transparent={true}
          visible={signUpModalvisibility}
          // // isVisible={modalvisibility}
          // onRequestClose={backbuttonhandler}
          // hasBackdrop={true}
          // backdropColor={'black'}
          // // statusBarTranslucent={true}
          // backdropOpacity={0.5}
          onClose={signUpBackButtonHandler}
          closeOnTouchOutside
          containerStyle={{ backgroundColor: 'rgba(38, 37, 37, 0.78)' }}
          childrenWrapperStyle={{ backgroundColor: '#FFFFFF', borderRadius: 30 }}
        >
          <TouchableOpacity
            style={xStyle.buy_join_modal_cross}
            onPress={signUpBackButtonHandler}
          >
            <Image
              source={require('../assets/images/close-circle.png')}
            />
          </TouchableOpacity>
          <View style={xStyle.buy_join_modal_head_view}>
            <Text style={xStyle.buy_join_modal_head}>Sign Up</Text>
          </View>
          <Text style={xStyle.buy_join_modal_sub_head}>
            Experience the most efficient way of reading.
          </Text>

          <View style={xStyle.signUpModalBody}>
            <Text style={xStyle.buy_join_modal_legend}>Name</Text>
            <View style={xStyle.buy_join_modal_input_view}>
              <TextInput style={[xStyle.buy_join_modal_input, xStyle.buy_join_modal_input_height]}
                placeholder="Your name" placeholderTextColor={'#7B8890'}></TextInput>
              <Image
                source={require('../assets/images/profile-circle.png')}
                style={xStyle.buy_join_modal_input_icon}
              />
            </View>
            <Text style={xStyle.buy_join_modal_legend}>Email</Text>
            <View style={xStyle.buy_join_modal_input_view}>
              <TextInput style={[xStyle.buy_join_modal_input, xStyle.buy_join_modal_input_height]}
                placeholder='Your email address' placeholderTextColor={'#7B8890'}></TextInput>
              <Image
                source={require('../assets/images/smsbox.png')}
                style={xStyle.buy_join_modal_input_icon}
              />
            </View>
            <Text style={xStyle.buy_join_modal_legend}>Phone no</Text>
            <View style={xStyle.buy_join_modal_input_view}>
              <TextInput style={[xStyle.buy_join_modal_input, xStyle.buy_join_modal_input_height]}
                placeholder='Your phone number' placeholderTextColor={'#7B8890'}></TextInput>
              <Image
                source={require('../assets/images/call.png')}
                style={xStyle.buy_join_modal_input_icon}
              />
            </View>
            <Text style={xStyle.buy_join_modal_legend}>Password</Text>
            <View style={xStyle.buy_join_modal_input_view}>
              <TextInput style={[xStyle.buy_join_modal_input, xStyle.buy_join_modal_input_height]}
                placeholder='Your password' placeholderTextColor={'#7B8890'}></TextInput>
              <Image
                source={require('../assets/images/eye-slash.png')}
                style={xStyle.buy_join_modal_input_icon}
              />
            </View>
          </View>
          <TouchableOpacity style={xStyle.logInBtn}>
            <Text style={[xStyle.logInBtnText]}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={xStyle.signInWithGoogleBtn}>
            <Text style={[xStyle.signInWithGoogleBtnTxt]}>Sign up with </Text>
            <Image
              source={require('../assets/images/google.png')}
            />
          </TouchableOpacity>
          <View style={xStyle.signUpFooter}>
            <Text style={xStyle.logInFooterTxt}>
              I have already account!
            </Text>
            <TouchableOpacity
              style={xStyle.forgotPasswordView}
              onPress={logInModalHandler}
            >
              <Text style={xStyle.forgotPasswordTxt}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </Overlay>
      </View>
    </>
  )
}
export default Footer;