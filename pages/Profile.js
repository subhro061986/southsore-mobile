import React, { Component, useEffect, useState } from 'react';
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
import Overlay from 'react-native-modal-overlay';
import { Picker } from '@react-native-picker/picker';
// import { useAuth } from '../context/AuthContext.js';
import { useNavigation } from '@react-navigation/native';
// import { UserProfile } from '../context/UserContext.js';

import TopBar from "../Global/TopBar.js";
import Footer from "../Global/Footer.js";

export const Profile = () => {

    const navigation = useNavigation();

    const [contactInfoModalVisibility, setmodalvisibility] = useState(false);
    const [personalInfoModalVisibility, setPersonalmodalvisibility] = useState(false);
    const [sortCountrySelected, setSortSelected] = useState(0);
    const [sortStateSelected, setSortStateSelected] = useState(0);

    useEffect(() => {

    }, []);

    const contactInfoModalHandler = () => {
        setmodalvisibility(true);

    }

    const contactBackbuttonhandler = () => {
        setmodalvisibility(false);
    }

    const personalInfoModalHandler = () => {
        setPersonalmodalvisibility(true);

    }

    const personalBackbuttonhandler = () => {
        setPersonalmodalvisibility(false);
    }

    const sortCountrySelectionChange = (itemValue, itemIndex) => {
        setSortSelected(itemValue);
    }

    const sortStateSelectionChange = (itemValue, itemIndex) => {
        setSortStateSelected(itemValue);
    }

    const sortCountryValue = [
        {
            id: 1,
            title: 'Best Seller'
        },
        {
            id: 2,
            title: 'Price Low to High'
        },
        {
            id: 3,
            title: 'Price High to Low'
        },
        {
            id: 4,
            title: 'A -> Z'
        },
        {
            id: 5,
            title: 'Z -> A'
        },
    ]


    return (
        <SafeAreaView>
            <ScrollView style={xStyle.profbg} stickyHeaderIndices={[0]}>
                <TopBar />
                <View style={xStyle.homepaddinng}>
                    <View style={xStyle.prof_head_view}>
                        <Text style={xStyle.prof_head}>Profile</Text>
                    </View>
                    <View style={xStyle.prof_contact_view}>
                        <View style={xStyle.prof_user_contact_info_view}>
                            <View style={xStyle.prof_user_img_view}>
                                <Image
                                    source={require('../assets/images/nouser.png')}
                                // style={xStyle.topbar_btn_mb}
                                />
                            </View>
                            <View>
                                <Text style={xStyle.prof_user_name}>Bryan Roberson</Text>
                                <View style={xStyle.prof_user_contact_info_txt_view}>
                                    <Text style={xStyle.prof_user_contact_info}>bryan29@gmail.com</Text>
                                </View>
                                <Text style={xStyle.prof_user_contact_info}>+91 7044 0648 63</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={contactInfoModalHandler}>
                            <Image
                                source={require('../assets/images/editicon.png')}
                            // style={xStyle.topbar_btn_mb}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={xStyle.prof_personal_view}>
                        <View style={xStyle.prof_personal_text_view}>
                            <Text style={xStyle.prof_user_personal_info_title}>Address: <Text style={xStyle.prof_user_contact_info}>Sealdah</Text></Text>
                            <Text style={xStyle.prof_user_personal_info_title}>Country: <Text style={xStyle.prof_user_contact_info}>India</Text></Text>
                            <Text style={xStyle.prof_user_personal_info_title}>State: <Text style={xStyle.prof_user_contact_info}>West Bengal</Text></Text>
                            <Text style={xStyle.prof_user_personal_info_title}>City: <Text style={xStyle.prof_user_contact_info}>Kolkata</Text></Text>
                            <Text style={xStyle.prof_user_personal_info_title}>Pin: <Text style={xStyle.prof_user_contact_info}>700009</Text></Text>
                        </View>
                        <TouchableOpacity onPress={personalInfoModalHandler}>
                            <Image
                                source={require('../assets/images/editicon.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <Footer />

            {/* --------CONTACT INFO MODAL------- */}

            <View>
                <Overlay
                    // animationType={ZoomIn}
                    // transparent={true}
                    visible={contactInfoModalVisibility}
                    // // isVisible={contactInfoModalVisibility}
                    // onRequestClose={contactBackbuttonhandler}
                    // hasBackdrop={true}
                    // backdropColor={'black'}
                    // // statusBarTranslucent={true}
                    // backdropOpacity={0.5}
                    onClose={contactBackbuttonhandler}
                    closeOnTouchOutside
                    containerStyle={{ backgroundColor: 'rgba(38, 37, 37, 0.78)' }}
                    childrenWrapperStyle={{ backgroundColor: '#FFFFFF', borderRadius: 30 }}
                >

                    <TouchableOpacity
                        style={xStyle.buy_join_modal_cross}
                        onPress={contactBackbuttonhandler}
                    >
                        <Image
                            source={require('../assets/images/close-circle.png')}
                        />
                    </TouchableOpacity>

                    <View style={xStyle.buy_join_modal_head_view}>
                        <View style={xStyle.prof_upload_img_sec}>
                            <Image
                                source={require('../assets/images/profgrey.png')}
                                style={xStyle.prof_upload_img_margin}
                            />
                            <Text style={xStyle.prof_upload_img_txt}>Upload your Image</Text>
                            <TouchableOpacity style={xStyle.prof_upload_camera_btn}>
                                <Image
                                    source={require('../assets/images/camera.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={xStyle.buy_join_modal_body}>
                        <Text style={xStyle.buy_join_modal_legend}>Name</Text>
                        <View style={xStyle.buy_join_modal_input_view}>
                            <TextInput style={[xStyle.buy_join_modal_input, xStyle.buy_join_modal_input_height]}
                                placeholder="Your Name" placeholderTextColor={'#7B8890'}></TextInput>
                            <Image
                                source={require('../assets/images/profile-circle.png')}
                                style={xStyle.buy_join_modal_input_icon}
                            />
                        </View>
                        <Text style={xStyle.buy_join_modal_legend}>Email</Text>
                        <View style={xStyle.buy_join_modal_input_view}>
                            <TextInput style={[xStyle.buy_join_modal_input, xStyle.buy_join_modal_input_height]}
                                placeholder='Your email address' placeholderTextColor={'#7B8890'} editable={false}></TextInput>
                            <Image
                                source={require('../assets/images/smsbox.png')}
                                style={xStyle.buy_join_modal_input_icon}
                            />
                        </View>
                        <Text style={xStyle.buy_join_modal_legend}>Phone no</Text>
                        <View style={xStyle.buy_join_modal_input_view}>
                            <TextInput style={[xStyle.buy_join_modal_input, xStyle.buy_join_modal_input_height]}
                                placeholder='Your phone number' placeholderTextColor={'#7B8890'}></TextInput>
                            <Image
                                source={require('../assets/images/call.png')}
                                style={xStyle.buy_join_modal_input_icon}
                            />
                        </View>
                    </View>
                    <TouchableOpacity style={xStyle.howToSouthShoreJoinNowBtn}>
                        <Text style={[xStyle.howToSouthShoreJoinNowBtnText, xStyle.buy_submit_font]}>Upload</Text>
                    </TouchableOpacity>



                </Overlay>
            </View>

            {/* --------PERSONAL INFO MODAL------- */}

            <View>
                <Overlay
                    // animationType={ZoomIn}
                    // transparent={true}
                    visible={personalInfoModalVisibility}
                    // // isVisible={contactInfoModalVisibility}
                    // onRequestClose={contactBackbuttonhandler}
                    // hasBackdrop={true}
                    // backdropColor={'black'}
                    // // statusBarTranslucent={true}
                    // backdropOpacity={0.5}
                    onClose={personalBackbuttonhandler}
                    closeOnTouchOutside
                    containerStyle={{ backgroundColor: 'rgba(38, 37, 37, 0.78)' }}
                    childrenWrapperStyle={{ backgroundColor: '#FFFFFF', borderRadius: 30 }}
                >

                    <TouchableOpacity
                        style={xStyle.buy_join_modal_cross}
                        onPress={personalBackbuttonhandler}
                    >
                        <Image
                            source={require('../assets/images/close-circle.png')}
                        />
                    </TouchableOpacity>



                    <View style={xStyle.buy_join_modal_body}>
                        <Text style={xStyle.buy_join_modal_legend}>Address</Text>
                        <View style={xStyle.buy_join_modal_input_view}>
                            <TextInput style={[xStyle.buy_join_modal_input, xStyle.buy_join_modal_input_height]}
                                placeholder="Your Address" placeholderTextColor={'#7B8890'}></TextInput>
                            <Image
                                source={require('../assets/images/profile-circle.png')}
                                style={xStyle.buy_join_modal_input_icon}
                            />
                        </View>
                        <Text style={xStyle.buy_join_modal_legend}>Country</Text>
                        <View style={xStyle.buy_join_modal_input_view}>
                            <View style={xStyle.prof_picker_view}>
                                <Picker
                                    style={xStyle.categoryDetailsDropDownPicker}
                                    selectedValue={sortCountrySelected}
                                    onValueChange={(itemValue, itemIndex) =>
                                        sortCountrySelectionChange(itemValue, itemIndex)
                                    }
                                >
                                    <Picker.Item label="Please Select" value="0" />
                                    {
                                        sortCountryValue.map((data, index) => (
                                            <Picker.Item label={data.title} value={data.id} key={index} />
                                        ))
                                    }
                                </Picker>
                            </View>
                        </View>
                        <Text style={xStyle.buy_join_modal_legend}>State</Text>
                        <View style={xStyle.buy_join_modal_input_view}>
                            <View style={xStyle.prof_picker_view}>
                                <Picker
                                    style={xStyle.categoryDetailsDropDownPicker}
                                    selectedValue={sortStateSelected}
                                    onValueChange={(itemValue, itemIndex) =>
                                        sortStateSelectionChange(itemValue, itemIndex)
                                    }
                                >
                                    <Picker.Item label="Please Select" value="0" />
                                    {
                                        sortCountryValue.map((data, index) => (
                                            <Picker.Item label={data.title} value={data.id} key={index} />
                                        ))
                                    }
                                </Picker>
                            </View>
                        </View>
                        <Text style={xStyle.buy_join_modal_legend}>City</Text>
                        <View style={xStyle.buy_join_modal_input_view}>
                            <TextInput style={[xStyle.buy_join_modal_input, xStyle.buy_join_modal_input_height]}
                                placeholder='Your City' placeholderTextColor={'#7B8890'}></TextInput>
                            <Image
                                source={require('../assets/images/call.png')}
                                style={xStyle.buy_join_modal_input_icon}
                            />
                        </View>
                        <Text style={xStyle.buy_join_modal_legend}>Pin</Text>
                        <View style={xStyle.buy_join_modal_input_view}>
                            <TextInput style={[xStyle.buy_join_modal_input, xStyle.buy_join_modal_input_height]}
                                placeholder='Your Pin' placeholderTextColor={'#7B8890'}></TextInput>
                            <Image
                                source={require('../assets/images/call.png')}
                                style={xStyle.buy_join_modal_input_icon}
                            />
                        </View>
                    </View>
                    <TouchableOpacity style={xStyle.howToSouthShoreJoinNowBtn}>
                        <Text style={[xStyle.howToSouthShoreJoinNowBtnText, xStyle.buy_submit_font]}>Upload</Text>
                    </TouchableOpacity>



                </Overlay>
            </View>

        </SafeAreaView>
    )
}
export default Profile;