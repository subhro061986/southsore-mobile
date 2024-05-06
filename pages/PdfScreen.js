import React, { Component, useState, useEffect,useRef } from 'react';
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
const { getBookShelf,myBookList,bookMarkForPdf,markPdf} = UserProfile()
const [loadingContent, setLoadingContent] = useState(true);
const [currentPage, setCurrentPage] = useState(0);
const [totalPages, setTotalPages] = useState(0);
const EPDF_URL = route.params.epdf
const inputRef = useRef(markPdf);
useEffect(() => {
console.log("PDF URL===>",route.params.epdf)
}, [authData]);

useEffect(() => {
    setCurrentPage(markPdf)
    inputRef.current=markPdf
    }, [markPdf]);

const setBookmark=async(val,count)=>{
    console.log("CHECK PAGE",val)
    setCurrentPage(val)
    setTotalPages(count)
    if(val >0){
        const resp = await bookMarkForPdf(val)
    }
    else{
        setCurrentPage(markPdf)
        inputRef.current=markPdf
    }
    
}
const chkBookMark=async(pdf)=>{
    const resp = await bookMarkForPdf(pdf)
    //inputRef.current=pdf
}

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
        <View>
            <Text style={{
                textAlign:'center',
                fontWeight:'bold'
                }}
            >{currentPage}/{totalPages}</Text>
        <PDFView
          fadeInDuration={250.0}
          //ref={(pdf)=>chkBookMark(pdf)}
          ref={inputRef}
          style={{width:'100%',height: Dimensions.get('screen').height}}
          resource={EPDF_URL}
          resourceType='url'
          onLoad={() => 
            setLoadingContent(false)
            //console.log(`PDF rendered from URL`)
            }
          onError={(error) => console.log('Cannot render PDF', error)}
          enableAnnotations={true}
          horizontal={true}
          onPageChanged={(page,pageCount)=>setBookmark(page,pageCount)}
        />
        </View>
        </SafeAreaView>
    )
}
export default PdfScreen;