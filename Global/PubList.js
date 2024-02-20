import React, { Component } from 'react';
import xStyle from '../assets/css/x_style.js';

import {
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    ScrollView
} from 'react-native';
// import { useAuth } from '../context/AuthContext.js';
// import { useNavigation } from '@react-navigation/native';
// import { UserProfile } from '../context/UserContext.js';

export const PubList = () => {

    return (
        <>
            <View style={xStyle.publist_bg}>
                <View style={xStyle.publist_head_view}>
                    <Text style={xStyle.publist_head}>Listed Publishers</Text>
                </View>
                <ScrollView horizontal={true}>
                    <View>
                        <TouchableOpacity style={xStyle.pub_cards}>
                            <Image
                                source={require('../assets/images/pub_1.png')}
                            />
                        </TouchableOpacity>
                        <Text style={xStyle.pub_name}>Penguin Books</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={xStyle.pub_cards}>
                            <Image
                                source={require('../assets/images/pub_2.png')}
                            />
                        </TouchableOpacity>
                        <Text style={xStyle.pub_name}>Simon & Schuster</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={xStyle.pub_cards}>
                            <Image
                                source={require('../assets/images/pub_3.png')}
                            />
                        </TouchableOpacity>
                        <Text style={xStyle.pub_name}>Houghton Mifflin..</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={xStyle.pub_cards}>
                            <Image
                                source={require('../assets/images/pub_1.png')}
                            />
                        </TouchableOpacity>
                        <Text style={xStyle.pub_name}>Penguin Books</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={xStyle.pub_cards}>
                            <Image
                                source={require('../assets/images/pub_2.png')}
                            />
                        </TouchableOpacity>
                        <Text style={xStyle.pub_name}>Simon & Schuster</Text>
                    </View>
                </ScrollView>
            </View>
        </>
    )
}
export default PubList;