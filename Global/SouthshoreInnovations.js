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

export const SouthshoreInnovations = () => {

  return (
    <View style={xStyle.southshoreInnovationsView}>
      <Text style={xStyle.southshoreInnovationsHeader}>
      Southshore Innovations
      </Text>
      <Text style={xStyle.southshoreInnovationsTag}>
      Simple Solutions to Complex Problems
      </Text>
      <Text style={xStyle.southshoreInnovationsDesc}>
      Southshore Innovations Private Limited is a technology focused company headquartered at Chennai. The company is promoted by techno functional professionals with deep domain experience in different areas such as book production, sales, customer experience, distribution with specific focus on the publishing industry.
      </Text>
      <Text style={xStyle.southshoreInnovationsReadMore}>
        Read More
      </Text>
    </View>
  )
}
export default SouthshoreInnovations;