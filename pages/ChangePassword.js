import React, { Component, useState, useEffect } from 'react';
import xStyle from '../assets/css/x_style.js';
import { useNavigation } from '@react-navigation/native';
import {
    Text,
    View,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Image,
} from 'react-native'
import TopMenu from '../Global/TopMenu.js';
import Footer from '../Global/Footer.js';
import FooterPub from '../Global/FooterPub.js';
import { Picker } from '@react-native-picker/picker';

export const ChangePassword = () => {

    const navigation = useNavigation();

    const [oldPassWord, setOldPassWord] = useState('')
    const [newPassWord, setNewPassWord] = useState('')
    const [confirmPassWord, setConfirmPassWord] = useState('')




    return (
        <SafeAreaView>

            <ScrollView style={xStyle.homeBg} stickyHeaderIndices={[0]}>
                <TopMenu />
                <View style={xStyle.BillingAddressViewMain}>
                    <Text style={xStyle.BillingAddressMainHeader}>Change Password</Text>
                    <View style={[xStyle.BillingAddressCard, xStyle.mb200]}>


                        {/* Name */}
                        <Text style={xStyle.BillingAddressFormLabel}>Old Password</Text>
                        <View style={xStyle.BillingAddressViewTextInput}>
                            <TextInput
                                style={xStyle.BillingAddressFormTextInput}
                                placeholder="Old PassWord"
                                placeholderTextColor={'#7B8890'}
                                value={oldPassWord}
                                keyboardType="text"
                                onChangeText={(e)=>setOldPassWord(e)}
                            />
                            {/* <Image style={xStyle.BillingAddressIcon} source={require('../assets/images/profile-circle.png')} height={24} width={24} /> */}

                        </View>

                        {/* email */}
                        <Text style={xStyle.BillingAddressFormLabel}>New Password</Text>
                        <View style={xStyle.BillingAddressViewTextInput}>
                            <TextInput
                                style={xStyle.BillingAddressFormTextInput}
                                placeholder="New Password"
                                placeholderTextColor={'#7B8890'}
                                value={newPassWord}
                                keyboardType="text"
                                onChangeText={(e)=>setNewPassWord(e)}
                            />
                            {/* <Image style={xStyle.BillingAddressIcon} source={require('../assets/images/smsbox.png')} height={24} width={24} /> */}

                        </View>

                        {/* email */}
                        <Text style={xStyle.BillingAddressFormLabel}>Confirm Password</Text>
                        <View style={xStyle.BillingAddressViewTextInput}>
                            <TextInput
                                style={xStyle.BillingAddressFormTextInput}
                                placeholder="Confirm Password"
                                placeholderTextColor={'#7B8890'}
                                value={confirmPassWord}
                                keyboardType="text"
                                onChangeText={(e)=>setConfirmPassWord(e)}
                            />
                            {/* <Image style={xStyle.BillingAddressIcon} source={require('../assets/images/smsbox.png')} height={24} width={24} /> */}

                        </View>

                        <View style={xStyle.BillingAddressSaveBtnArea}>

                            <TouchableOpacity style={xStyle.BillingAddressSaveBtn}>
                                <Text style={xStyle.BillingAddressBtnText}>
                                    Save
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* <View style={xStyle.BillingAddressApplyCouponCard}>

                    </View> */}
                </View>

            </ScrollView >
            <FooterPub />

        </SafeAreaView>
    )
}

export default ChangePassword;