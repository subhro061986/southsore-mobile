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

export const AboutSouthshore = () => {

  return (
    <View style={xStyle.aboutSouthShoreView}>
      <Text style={xStyle.aboutSouthShoreHead}>
        A Marketplace for Academic and Professional
      </Text>
      <Text style={xStyle.aboutSouthShoreHeadPart2}>
        E-Books
      </Text>
      <Text style={xStyle.aboutSouthShoreTag}>
        E-books junction – a digital marketplace, where knowledge knows no bounds
      </Text>
      <Text style={xStyle.aboutSouthShoreDescPart1}>
        E-books junction is your passport to an extensive, ever-expanding library of e-books, thoughtfully curated from esteemed publishers both in India and abroad. As an avid learner, a dedicated student, or a professional striving for success, e-books junction.is your trusted companion on your intellectual journey.
      </Text>
      <Text style={xStyle.aboutSouthShoreDescPart2}>
        Why choose e-books? The benefits are undeniable. With e-books junction, you'll experience a world of advantages at your fingertips. First and foremost, accessibility.
      </Text>
      <TouchableOpacity>
        <Text style={xStyle.aboutSouthShoreReadMore}>
          Read More
        </Text>
      </TouchableOpacity>
    </View>
  )
}
export default AboutSouthshore;