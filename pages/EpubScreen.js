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

export const EpubScreen = ({route,navigation}) => {
console.log("EPUB",route.params.epub)
const {authData} = useAuth()
const { getBookShelf,myBookList} = UserProfile()
const [loadingContent, setLoadingContent] = useState(true);
//const EPUB_URL = `https://react-reader.metabits.no/files/alice.epub`;
const EPUB_URL = route.params.epub;
const fileName=EPUB_URL.split("/");
const latFname=fileName[fileName.length-1]
console.log("FILE NAME",latFname)
const EPUB_PATH = `${RNFS.DocumentDirectoryPath}/`+latFname;
console.log(EPUB_PATH);
  const [urifile, setFile] = useState();
  const INITIAL_LOCATION = {
    href: '/OPS/main3.xml',
    title: 'Chapter 2 - The Carpet-Bag',
    type: 'application/xhtml+xml',
    target: 27,
    locations: {
      position: 24,
      progression: 0,
      totalProgression: 0.03392330383480826
    },
  };

useEffect(() => {
    downloadFile()
}, [authData]);

const downloadFile=async()=>{
    const { promise } = RNFS.downloadFile({
      fromUrl: EPUB_URL,
      toFile: EPUB_PATH,
      background: true,
      discretionary: true,
    });
    console.log("DOWNLOADING....")
    // wait for the download to complete
    await promise;
    setLoadingContent(false)

    setFile({
      url: EPUB_PATH,
      initialLocation: INITIAL_LOCATION,
    });
  }

    return (
        <SafeAreaView>
            <TopBarReader />
            {loadingContent===true?(
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
            )}
        </SafeAreaView>
    )
}
export default EpubScreen;