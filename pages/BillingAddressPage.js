import React, { Component, useState, useEffect } from 'react';
import xStyle from '../assets/css/x_style.js';
// import { useNavigation } from '@react-navigation/native';
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
import { UserProfile } from '../Context/Usercontext.js';
import { useAuth } from '../Context/Authcontext.js';

export const BillingAddressPage = ({route,navigation}) => {

    // const navigation = useNavigation();
    const { 
        place_order,
        my_profile,
        get_country_list,
        get_state_list,
        change_billing_address,
        change_contact_details,
        createOrder,
        processPayment,
        applyCoupon } = UserProfile()

    const {authData,getCartData}=useAuth();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [state, setState] = useState('')
    const [pin, setPin] = useState('')
    const [couponCode, setCouponCode] = useState('')
    const [countryList, setCountryList] = useState([])
    const [stateList, setStateList] = useState([])
    const [selectedCountry, setSelectedCountry] = useState('')
    const [selectedState, setSelectedState] = useState('')
    const [orderTotal,setOrderTotal]=useState(0)
    const [buyNow,setBuyNow]=useState(0)
    const [togglePayment, setTogglePayment] = useState(true)
    const [showCoupon, setShowCoupon] = useState(false)
    const [placeOrderResponse, setPlaceOrderResponse] = useState({})


    useEffect(() => {
        console.log("inside use effect")
        myProfileApi()
        renderCountryList()
    }, []);

    useEffect(() =>{

        console.log("buynow status= ",route.params.buynow)
        setBuyNow(route.params.buynow)
    },[route.params.buynow])

    const countryHandler = async  (itemValue, itemIndex) => {

    
        if (selectedCountry == null && selectedCountry == '') {
            try {
                const resp = await get_state_list(itemValue)


                setStateList(resp.output)

                console.log("getStateList= ", resp.output)
            } catch (err) {
                console.error(err);
            }
        }
        else {
            renderStateList(itemValue)
        }
        setSelectedCountry(itemValue)
    }

    const renderStateList = async (countyId) => {
        try {
            console.log("inside statelist")
            const resp = await get_state_list(countyId)
            setStateList(resp.output)
            console.log("getStateList= ", resp.output)
        } catch (err) {
            console.error(err);
        }
    }
    const renderCountryList = async () => {
        try {
            const resp = await get_country_list()
            setCountryList(resp.output)
            console.log("getCountryList= ", resp.output)
        } catch (err) {
            console.error(err);
        }
    }

    const myProfileApi = async () => {

        const resp = await my_profile()
        console.log("Response from my profile api", resp)
        setAddress(resp.output.addressline)
        setSelectedCountry(resp.output.countryid)
        setSelectedState(resp.output.stateid)
        setCity(resp.output.city)
        setPin(resp.output.pincode)
        setName(resp.output.name)
        setEmail(resp.output.email)
        setPhoneNo(resp.output.contactno)

        if (resp.output.countryid !== null && resp.output.countryid !== '') {
            renderStateList(resp.output.countryid)
        }
    }



    const placeOrder = async (data) => {

        // console.log("respPlaceOrder=",respPlaceOrder.output.orderno)

        // console.log("razor pay payment status code= ",respPaymentConfirmed['statuscode'])
        let changebillingDetails = {
            addressline: address,
            city: city,
            pincode: pin,
            stateid: selectedState,
            countryid: selectedCountry,
        }

        let changecontactDetails = {
            email: email,
            contactno: phoneNo,
        }

        const contactDetailsPesponse = await change_contact_details(changecontactDetails)
        console.log("contact details=", contactDetailsPesponse)

        const billingDetailsPesponse = await change_billing_address(changebillingDetails)
        console.log("billing details=", billingDetailsPesponse)
        
        console.log("Buynow before sending=",buyNow)
        const respPlaceOrder = await place_order(buyNow)
        console.log("place order response= ",respPlaceOrder)
        
        setPlaceOrderResponse(respPlaceOrder)

        if(respPlaceOrder.output !== null)
            setOrderTotal(respPlaceOrder.output.totalAmount)
            const cartDataresp=await getCartData(authData)
            console.log("cart data response after place order= ",cartDataresp)
        setTogglePayment(false)
        setShowCoupon(true)
    
        // return respPlaceOrder
    }

    const applyCouponCode = async () => {
     
        let json = {
            couponcode: couponCode,
            orderid:placeOrderResponse.output.id
        }
        // ... applycoupon api endpoint here
        if(couponCode === "" || couponCode === undefined || couponCode === null)
            alert("Coupon Code cannot be empty!")
        else {
            const res = await applyCoupon(json)
            setOrderTotal(res.output.totalAmount)
            console.log(res)

        }
    }

    return (
        <>

            <ScrollView style={[xStyle.homeBg,{marginBottom:'45%'}]} stickyHeaderIndices={[0]}>
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
                            selectedValue={selectedCountry}
                            onValueChange={countryHandler}
                        >

                            <Picker.Item style={{ color: '#7B8890' }} label="Select Country" value="0" />
                            {
                                countryList.map((data, index) => (
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
                            selectedValue={selectedState}
                            onValueChange={(itemValue, itemIndex) => setSelectedState(itemValue)}
                        >

                            <Picker.Item style={{ color: '#7B8890' }} label="Select State" value="0" />
                            {
                                stateList.map((data, index) => (
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

                        <TouchableOpacity style={xStyle.BillingAddressSaveBtn}
                            onPress={() => placeOrder() }
                        >
                            <Text style={xStyle.BillingAddressBtnText}>
                                Save
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {showCoupon && 
                
                <View style={xStyle.BillingAddressApplyCouponCard}>
                    <View style={xStyle.BillingAddressApplyCouponView}>
                        <Text style={xStyle.BillingAddressCardHeaderText}>Apply Coupon</Text>

                    </View>

                    <View style={xStyle.BillingAddressOrderTotalDetailsView}>
                        <Text style={xStyle.BillingAddressApplyCouponOrderTotalText}>Order Total</Text>
                        <Text style={xStyle.BillingAddressApplyCouponPriceText}>  ₹ {orderTotal}</Text>
                    </View>

                    <View style={xStyle.BillingAddressApplyCoupnView}>
                        <TextInput
                            value={couponCode}
                            onChangeText={couponCode => setCouponCode(couponCode)}

                            style={xStyle.BillingAddressApplyCouponTextInput}
                            placeholder="Insert Coupon Code"
                            placeholderTextColor={'#7B8890'}
                        />
                        <TouchableOpacity style={xStyle.BillingAddressApplyCoupnBtn}
                            onPress={()=>applyCouponCode()}
                        >
                            <Text style={xStyle.BillingAddressApplyCouponBtnText}>
                                Apply
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={xStyle.BillingAddressSaveBtnArea}>

                        <TouchableOpacity style={xStyle.BillingAddressSaveBtn}
                            onPress={() => navigation.navigate('confirmOrder')}
                            disabled={togglePayment}
                        >
                            <Text style={xStyle.BillingAddressBtnText}>
                                Order Now
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                }
            </View>

        </ScrollView >
            <Footer />

        </>
    )
}

export default BillingAddressPage;