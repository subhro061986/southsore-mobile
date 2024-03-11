import React, { Component, useState, useEffect } from 'react';
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
    PermissionsAndroid,
    Dimensions
} from 'react-native';

import { useAuth } from '../Context/Authcontext.js';
import { UserProfile } from '../Context/Usercontext.js';
import Config from "../config/Config.json"
import PDFView from 'react-native-view-pdf';
import TopBarReader from '../Global/TopBarReader.js';

export const PdfScreen = ({route,navigation}) => {

const {authData} = useAuth()
const { getBookShelf,myBookList} = UserProfile()
const [loadingContent, setLoadingContent] = useState(true);
const EPDF_URL = route.params.epdf
useEffect(() => {
console.log("PDF URL===>",route.params.epdf)
}, [authData]);

    return (
        <SafeAreaView>
            <TopBarReader/>
        {loadingContent===true &&
        <View 
            style={{
                // flex:1,
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'#ffffff',
                height:Dimensions.get('screen').height,
                //paddingVertical:Dimensions.get('screen').height*0.1
            }}>
        <Image
            source={require('../assets/images/playstore.png')}
            style={{height:50,width:50}}
          />
          <Text style={xStyle.pub_home_best_card_title}>Loading</Text>
        </View>
        }
        <PDFView
          fadeInDuration={250.0}
          style={{width:'100%',height: Dimensions.get('screen').height}}
          resource={EPDF_URL}
          resourceType='url'
          onLoad={() => 
            setLoadingContent(false)
            //console.log(`PDF rendered from URL`)
            }
          onError={(error) => console.log('Cannot render PDF', error)}
          horizontal={true}
        />
        
        </SafeAreaView>
    )
}
export default PdfScreen;