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
import FooterPub from '../Global/FooterPub.js';
import TopBar from '../Global/TopBar.js';
import Footer from '../Global/Footer.js';
import { useAuth } from '../Context/Authcontext.js';
import { UserProfile } from '../Context/Usercontext.js';
import Config from "../config/Config.json"
import {
    ReadiumView,
    Settings,
  } from 'react-native-readium';
  import RNFS from 'react-native-fs';
import TopBarReader from '../Global/TopBarReader.js';

export const EpubScreenOffline = ({route,navigation}) => {
console.log("EPUB",route.params.epub)
const {authData} = useAuth()
const { getBookShelf,myBookList} = UserProfile()
const [urifile, setFile] = useState();
const [loadingContent, setLoadingContent] = useState(true);
//const EPUB_URL = `https://react-reader.metabits.no/files/alice.epub`;

useEffect(() => {
  setFile(route.params.epub);

}, []);



    return (
        <SafeAreaView>
            <View style={xStyle.topbar}>
                <View style={[xStyle.topnav_top, { justifyContent: 'flex-start' }]}>
                    <TouchableOpacity style={xStyle.topbar_back_btn}
                        onPress={() => navigation.navigate('offlinebookshelf')}
                    >
                        <Image
                            source={require('../assets/images/backbtn.png')}
                        />
                    </TouchableOpacity>
                   
                    
                </View>
            </View>

            <ReadiumView
                file={urifile}
                style={{marginBottom:20}}
                
                //src="https://react-reader.metabits.no/files/alice.epub"
            />
            {/* {loadingContent===true?(
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
            ):(
            <ReadiumView
                file={urifile}
                style={{marginBottom:20}}
                //src="https://react-reader.metabits.no/files/alice.epub"
            />
            )} */}
        </SafeAreaView>
    )
}
export default EpubScreenOffline;