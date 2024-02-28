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

export const BillingAddressPage = () => {

    const navigation = useNavigation();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [state, setState] = useState('')
    const [pin, setPin] = useState('')
    const [couponCode, setCouponCode] = useState('')


    const countries = [
        {
            id: 1,
            name: 'india'
        },
        {
            id: 2,
            name: 'england'
        },
        {
            id: 3,
            name: 'australia'
        },
        {
            id: 4,
            name: 'spain'
        },
        {
            id: 5,
            name: 'germany'
        },
    ]

    return (
        <>

            <ScrollView style={xStyle.homeBg} stickyHeaderIndices={[0]}>
                <TopMenu />
                <View style={xStyle.BillingAddressViewMain}>
                    <Text style={xStyle.BillingAddressMainHeader}>Billing Address</Text>
                    <View style={xStyle.BillingAddressCard}>


                        {/* Name */}
                        <Text style={xStyle.BillingAddressFormLabel}>Name</Text>
                        <View style={xStyle.BillingAddressViewTextInput}>
                            <TextInput
                                style={xStyle.BillingAddressFormTextInput}
                                placeholder="Your user name"
                                placeholderTextColor={'#7B8890'}
                                value={name}
                                onChangeText={name => setName(name)}
                            />
                            <Image style={xStyle.BillingAddressIcon} source={require('../assets/images/profile-circle.png')} height={24} width={24} />

                        </View>

                        {/* email */}
                        <Text style={xStyle.BillingAddressFormLabel}>Email</Text>
                        <View style={xStyle.BillingAddressViewTextInput}>
                            <TextInput
                                style={xStyle.BillingAddressFormTextInput}
                                placeholder="Your email address"
                                placeholderTextColor={'#7B8890'}
                                value={email}
                                onChangeText={email => setEmail(email)}
                            />
                            <Image style={xStyle.BillingAddressIcon} source={require('../assets/images/smsbox.png')} height={24} width={24} />

                        </View>

                        {/* Phone */}
                        <Text style={xStyle.BillingAddressFormLabel}>Phone no</Text>
                        <View style={xStyle.BillingAddressViewTextInput}>
                            <TextInput
                                style={xStyle.BillingAddressFormTextInput}
                                placeholder="Your phone no"
                                placeholderTextColor={'#7B8890'}
                                value={phoneNo}
                                onChangeText={phone => setPhoneNo(phone)}
                                keyboardType="numeric"
                            />
                            <Image style={xStyle.BillingAddressIcon} source={require('../assets/images/call.png')} height={24} width={24} />

                        </View>

                        {/* Address */}
                        <Text style={xStyle.BillingAddressFormLabel}>Address</Text>
                        <View style={xStyle.BillingAddressViewTextInput}>
                            <TextInput
                                style={xStyle.BillingAddressFormTextInput}
                                placeholder="Your address"
                                placeholderTextColor={'#7B8890'}
                                value={address}
                                onChangeText={address => setAddress(address)}
                                editable
                                multiline
                                numberOfLines={4}


                            />

                        </View>

                        {/* City */}
                        <Text style={xStyle.BillingAddressFormLabel}>City</Text>
                        <View style={xStyle.BillingAddressViewTextInput}>
                            <TextInput
                                style={xStyle.BillingAddressFormTextInput}
                                placeholder="Your City"
                                placeholderTextColor={'#7B8890'}
                                value={city}
                                onChangeText={city => setCity(city)}
                            />
                            <Image style={xStyle.BillingAddressIcon} source={require('../assets/images/location.png')} height={24} width={24} />

                        </View>

                        {/* country */}
                        <Text style={xStyle.BillingAddressFormLabel}>Country</Text>
                    <View style={[xStyle.BillingAddressDropDown]}>
                        <Picker
                            style={xStyle.categoryDetailsDropDownPicker}
                            selectedValue={country}
                            onValueChange={(itemValue, itemIndex) => setCountry(itemValue)}
                        >

                            <Picker.Item style={{ color: '#7B8890' }} label="Select Country" value="0" />
                            {
                                countries.map((data, index) => (
                                    <Picker.Item label={data.name} value={data.id} key={index} />
                                ))
                            }
                        </Picker>
                    </View>


                    {/* state */}
                    <Text style={xStyle.BillingAddressFormLabel}>State</Text>
                    <View style={[xStyle.BillingAddressDropDown]}>
                        <Picker
                            style={xStyle.categoryDetailsDropDownPicker}
                            selectedValue={state}
                            onValueChange={(itemValue, itemIndex) => setState(itemValue)}
                        >

                            <Picker.Item style={{ color: '#7B8890' }} label="Select State" value="0" />
                            {
                                countries.map((data, index) => (
                                    <Picker.Item label={data.name} value={data.id} key={index} />
                                ))
                            }
                        </Picker>
                    </View>

                    {/* Pin */}
                    <Text style={xStyle.BillingAddressFormLabel}>Pin</Text>
                    <View style={xStyle.BillingAddressViewTextInput}>
                        <TextInput
                            style={xStyle.BillingAddressFormTextInput}
                            placeholder="Your pin"
                            placeholderTextColor={'#7B8890'}
                            value={pin}
                            onChangeText={pin => setPin(pin)}
                        />

                    </View>

                    <View style={xStyle.BillingAddressSaveBtnArea}>

                        <TouchableOpacity style={xStyle.BillingAddressSaveBtn}>
                            <Text style={xStyle.BillingAddressBtnText}>
                                Save
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={xStyle.BillingAddressApplyCouponCard}>
                    <View style={xStyle.BillingAddressApplyCouponView}>
                        <Text style={xStyle.BillingAddressCardHeaderText}>Apply Coupon</Text>

                    </View>

                    <View style={xStyle.BillingAddressOrderTotalDetailsView}>
                        <Text style={xStyle.BillingAddressApplyCouponOrderTotalText}>Order Total</Text>
                        <Text style={xStyle.BillingAddressApplyCouponPriceText}>  ₹ 625</Text>
                    </View>

                    <View style={xStyle.BillingAddressApplyCoupnView}>
                        <TextInput
                            value={couponCode}
                            onChangeText={couponCode => setCouponCode(couponCode)}

                            style={xStyle.BillingAddressApplyCouponTextInput}
                            placeholder="Insert Coupon Code"
                            placeholderTextColor={'#7B8890'}
                        />
                        <TouchableOpacity style={xStyle.BillingAddressApplyCoupnBtn}>
                            <Text style={xStyle.BillingAddressApplyCouponBtnText}>
                                Apply
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={xStyle.BillingAddressSaveBtnArea}>

                        <TouchableOpacity style={xStyle.BillingAddressSaveBtn}
                            onPress={() => navigation.navigate('confirmOrder')}
                        >
                            <Text style={xStyle.BillingAddressBtnText}>
                                Order Now
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </ScrollView >
            <FooterPub />

        </>
    )
}

export default BillingAddressPage;