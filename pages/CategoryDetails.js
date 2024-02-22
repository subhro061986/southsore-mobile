import React, { Component } from 'react';
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
// import { useAuth } from '../context/AuthContext.js';
import { useNavigation } from '@react-navigation/native';
// import { UserProfile } from '../context/UserContext.js';

import TopMenu from "../Global/TopMenu.js";
import Footer from "../Global/Footer.js";

export const CategoryDetails = () => {

    const navigation = useNavigation();


    return (
        <SafeAreaView>
            <ScrollView style={xStyle.categoryDetailsBodyBg} stickyHeaderIndices={[0]}>
                <TopMenu />
                <View style={xStyle.categoryDetailsHeaderView}>
                    <Text style={xStyle.categoryDetailsHeader}>
                        Art & Photography
                    </Text>
                    <Text style={xStyle.categoryDetailsHeaderResults}>
                        79 Results found
                    </Text>
                </View>
                <View style={xStyle.categoryDetailsSortingMainView}>
                    <View>
                        <Text style={xStyle.categoryDetailsSortText}>
                            Sort By
                        </Text>
                        {/* drop down for sorting */}
                    </View>
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/images/filterBtn.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={xStyle.categoryDetailsBooksMainDiv}>
                    <View style={xStyle.categoryDetailsBook}>
                        <View>
                            
                        </View>
                    </View>
                </View>
            </ScrollView>
            <Footer />
        </SafeAreaView>
    )
}
export default CategoryDetails;