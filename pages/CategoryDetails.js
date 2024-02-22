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
    PermissionsAndroid
} from 'react-native';
// import { useAuth } from '../context/AuthContext.js';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
// import { UserProfile } from '../context/UserContext.js';

import TopMenu from "../Global/TopMenu.js";
import Footer from "../Global/Footer.js";

export const CategoryDetails = () => {

    const navigation = useNavigation();
    const [sortSelected, setSortSelected] = useState(0);
    const sortSelectionChange = (itemValue, itemIndex) => {
        setSortSelected(itemValue);
    }

    const sortValue = [
        {
            id : 1,
            title : 'Best Seller'
        },
        {
            id : 2,
            title : 'Price Low to High'
        },
        {
            id : 3,
            title : 'Price High to Low'
        },
        {
            id : 4,
            title : 'A -> Z'
        },
        {
            id : 5,
            title : 'Z -> A'
        },
    ]

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
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={xStyle.categoryDetailsSortText}>
                            Sort By
                        </Text>
                        <View style={[xStyle.categoryDetailsDropDown]}>
                            <Picker
                                style={xStyle.categoryDetailsDropDownPicker}
                                selectedValue={sortSelected}
                                onValueChange={(itemValue, itemIndex) =>
                                    sortSelectionChange(itemValue, itemIndex)
                                }
                            >
                                <Picker.Item label="Please Select" value="0" />
                                {/* <Picker.Item label="Best Seller" value="1" />
                                <Picker.Item label="New Arrivals" value="2" /> */}
                                {
                                    sortValue.map((data, index) => (
                                        <Picker.Item label={data.title} value={data.id} key={index}/> 
                                    ))
                                }
                            </Picker>
                        </View>
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
                        <Image
                            source={require('../assets/images/book1.png')}
                        />
                        </View>
                    </View>
                </View>
            </ScrollView>
            <Footer />
        </SafeAreaView>
    )
}
export default CategoryDetails;