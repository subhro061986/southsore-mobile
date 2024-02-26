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
import Overlay from 'react-native-modal-overlay';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { RadioButton } from 'react-native-paper';
// import { UserProfile } from '../context/UserContext.js';

import BuyStepsPub from '../Global/BuyStepsPub.js';
import TopMenuPub from '../Global/TopMenuPub.js';
import FooterPub from '../Global/FooterPub.js';

export const CategoryDetails = () => {

    const navigation = useNavigation();
    const [sortSelected, setSortSelected] = useState(0);
    const [priceFilter, setPriceFilter] = useState(0);
    const sortSelectionChange = (itemValue, itemIndex) => {
        setSortSelected(itemValue);
    }

    const sortValue = [
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

    const [modalvisibility, setmodalvisibility] = useState(false);

    useEffect(() => {

    }, []);

    const filterModalHandler = () => {
        setmodalvisibility(true);

    }

    const backbuttonhandler = () => {
        setmodalvisibility(false);
    }

    return (
        <SafeAreaView>
            <ScrollView style={xStyle.categoryDetailsBodyBg} stickyHeaderIndices={[0]}>
                <TopMenuPub />
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
                                        <Picker.Item label={data.title} value={data.id} key={index} />
                                    ))
                                }
                            </Picker>
                        </View>
                    </View>
                    <TouchableOpacity onPress={filterModalHandler}>
                        <Image
                            source={require('../assets/images/filterBtn.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={xStyle.categoryDetailsBooksMainDiv}>
                    <View style={xStyle.pub_home_best_card}>
                        <Image
                            source={require('../assets/images/bcov1.png')}
                            style={xStyle.pub_home_best_cover}
                            height={134}
                            width={138}
                        />
                        <View style={xStyle.pub_home_best_card_col2}>
                            <View style={xStyle.pub_home_best_card_col2_top}>
                                <View>
                                    <Text style={xStyle.pub_home_best_card_title}>The Goldfinch</Text>
                                    <View style={xStyle.pub_home_card_author_view}>
                                        <Text style={xStyle.pub_home_card_author}>Author: <Text style={xStyle.pub_home_card_author_name}>Jeff Keller</Text></Text>
                                    </View>
                                </View>
                                <TouchableOpacity>
                                    <Image
                                        source={require('../assets/images/wishblue.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={xStyle.pub_home_best_card_col2_bottom}>
                                <View>
                                    <Text style={xStyle.pub_home_best_card_price}>
                                        ₹149
                                    </Text>
                                </View>
                                <View>
                                    <TouchableOpacity>
                                        <Image
                                            source={require('../assets/images/plusBtn.png')}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={xStyle.pub_home_best_card}>
                        <Image
                            source={require('../assets/images/bcov2.png')}
                            style={xStyle.pub_home_best_cover}
                            height={134}
                            width={138}
                        />
                        <View style={xStyle.pub_home_best_card_col2}>
                            <View style={xStyle.pub_home_best_card_col2_top}>
                                <View>
                                    <Text style={xStyle.pub_home_best_card_title}>The Hypocrite..</Text>
                                    <View style={xStyle.pub_home_card_author_view}>
                                        <Text style={xStyle.pub_home_card_author}>Author: <Text style={xStyle.pub_home_card_author_name}>Jeff Keller</Text></Text>
                                    </View>
                                </View>
                                <TouchableOpacity>
                                    <Image
                                        source={require('../assets/images/wishblue.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={xStyle.pub_home_best_card_col2_bottom}>
                                <View>
                                    <Text style={xStyle.pub_home_best_card_price}>
                                        ₹199
                                    </Text>
                                </View>
                                <View>
                                    <TouchableOpacity>
                                        <Image
                                            source={require('../assets/images/plusBtn.png')}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={xStyle.pub_home_best_card}>
                        <Image
                            source={require('../assets/images/bcov3.png')}
                            style={xStyle.pub_home_best_cover}
                            height={134}
                            width={138}
                        />
                        <View style={xStyle.pub_home_best_card_col2}>
                            <View style={xStyle.pub_home_best_card_col2_top}>
                                <View>
                                    <Text style={xStyle.pub_home_best_card_title}>The Swallows</Text>
                                    <View style={xStyle.pub_home_card_author_view}>
                                        <Text style={xStyle.pub_home_card_author}>Author: <Text style={xStyle.pub_home_card_author_name}>Jeff Keller</Text></Text>
                                    </View>
                                </View>
                                <TouchableOpacity>
                                    <Image
                                        source={require('../assets/images/wishblue.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={xStyle.pub_home_best_card_col2_bottom}>
                                <View>
                                    <Text style={xStyle.pub_home_best_card_price}>
                                        ₹249
                                    </Text>
                                </View>
                                <View>
                                    <TouchableOpacity>
                                        <Image
                                            source={require('../assets/images/plusBtn.png')}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={xStyle.pub_home_best_card}>
                        <Image
                            source={require('../assets/images/bcov4.png')}
                            style={xStyle.pub_home_best_cover}
                            height={134}
                            width={138}
                        />
                        <View style={xStyle.pub_home_best_card_col2}>
                            <View style={xStyle.pub_home_best_card_col2_top}>
                                <View>
                                    <Text style={xStyle.pub_home_best_card_title}>Dune</Text>
                                    <View style={xStyle.pub_home_card_author_view}>
                                        <Text style={xStyle.pub_home_card_author}>Author: <Text style={xStyle.pub_home_card_author_name}>Jeff Keller</Text></Text>
                                    </View>
                                </View>
                                <TouchableOpacity>
                                    <Image
                                        source={require('../assets/images/wishblue.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={xStyle.pub_home_best_card_col2_bottom}>
                                <View>
                                    <Text style={xStyle.pub_home_best_card_price}>
                                        ₹149
                                    </Text>
                                </View>
                                <View>
                                    <TouchableOpacity>
                                        <Image
                                            source={require('../assets/images/plusBtn.png')}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* <TouchableOpacity style={xStyle.categoryDetailsViewMore_btn}>
                        <Text style={xStyle.categoryDetailsViewMore}>
                            View More
                        </Text>
                    </TouchableOpacity> */}
                </View>
                <BuyStepsPub />
            </ScrollView>
            <FooterPub />

            <View>
                <Overlay
                    // animationType={ZoomIn}
                    // transparent={true}
                    visible={modalvisibility}
                    // // isVisible={modalvisibility}
                    // onRequestClose={backbuttonhandler}
                    // hasBackdrop={true}
                    // backdropColor={'black'}
                    // // statusBarTranslucent={true}
                    // backdropOpacity={0.5}
                    onClose={backbuttonhandler}
                    closeOnTouchOutside
                    containerStyle={{ backgroundColor: 'rgba(38, 37, 37, 0.78)' }}
                    childrenWrapperStyle={{ backgroundColor: '#FFFFFF', borderRadius: 30 }}
                >

                    <TouchableOpacity
                        style={xStyle.categoryDetailsModalCross}
                        onPress={backbuttonhandler}
                    >
                        <Image
                            source={require('../assets/images/close-circle.png')}
                        />
                    </TouchableOpacity>
                    <View style={xStyle.categoryDetailsModalHeaderView}>
                        <Text style={xStyle.categoryDetailsModalHeader}>Refine your Search by Price</Text>
                    </View>

                    <View style={xStyle.categoryDetailsModalBody}>
                        <View style={xStyle.categoryDetailsModalRadioBtn}>
                            <RadioButton
                                value="1"
                                status={priceFilter === 1 ? 'checked' : 'unchecked'}
                                onPress={() => setPriceFilter(1)}
                            />
                            <Text style={xStyle.categoryDetailsModalRadioBtnTextFont}>
                                Under ₹500
                            </Text>
                        </View>
                        <View style={xStyle.categoryDetailsModalRadioBtn}>
                            <RadioButton
                                value="2"
                                status={priceFilter === 2 ? 'checked' : 'unchecked'}
                                onPress={() => setPriceFilter(2)}
                            />
                            <Text style={xStyle.categoryDetailsModalRadioBtnTextFont}>
                                ₹1,000 - ₹1,500
                            </Text>
                        </View>
                        <View style={xStyle.categoryDetailsModalRadioBtn}>
                            <RadioButton
                                value="3"
                                status={priceFilter === 3 ? 'checked' : 'unchecked'}
                                onPress={() => setPriceFilter(3)}
                            />
                            <Text style={xStyle.categoryDetailsModalRadioBtnTextFont}>
                                ₹1,500 - ₹3,000
                            </Text>
                        </View>
                    </View>
                </Overlay>
            </View>
        </SafeAreaView>
    )
}
export default CategoryDetails;