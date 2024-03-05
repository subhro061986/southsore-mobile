import React, { Component, useState } from 'react';
import xStyle from '../assets/css/x_style.js';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';
// import { useAuth } from '../context/AuthContext.js';
import { useNavigation } from '@react-navigation/native';
// import { UserProfile } from '../context/UserContext.js';
import Autocomplete from 'react-native-autocomplete-input';

export const TopMenu = () => {
  const navigation = useNavigation();

  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const data = [
    {id: 1, title: 'JavaScript' },
    {id: 2, title: 'Java' },
    {id: 3, title: 'Python' },
    {id: 4, title: 'React Native' },
    {id: 5, title: 'Ruby' },
  ];

  const handleInputChange = (text) => {
    setQuery(text);

    const filtered = data.filter(item =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );

    setFilteredData(filtered);
    // setShowAutocomplete(true); // Show autocomplete when text input changes
  };

  const handleItemPress = (item) => {
    // Handle item selection logic here
    console.log('Selected item:', item.title);
    // For example, you can set the selected item in state
    setSelectedItem(item);
    // Or navigate to another screen
    // navigation.navigate('Details', { item });
    // setShowAutocomplete(false); // Hide autocomplete after selection
  };


  return (
    <View style={xStyle.topnav}>
      <View style={xStyle.topnav_top}>
        <View>
          <Image
            source={require('../assets/images/logo_page.png')}
          />
        </View>
        <View style={xStyle.topnavRight}>
          <TouchableOpacity>
            <Image
              source={require('../assets/images/sms.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('wishlist')}
          >
            <Image
              source={require('../assets/images/heart.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('cartdetails')}
          >
            <Image
              source={require('../assets/images/shopping-cart.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={xStyle.topnav_bottom}>
        {/* <TextInput style={xStyle.search_bar} onChangeText={handleInputChange} value={query} placeholder='Search by Author, Tittle, ISBN' placeholderTextColor={'#B0B6CC'}></TextInput> */}
        
        <View style={{ flex: 1 }}>
        {/* <TextInput
          placeholder="Search..."
          placeholderTextColor={'#B0B6CC'}
          
        /> */}
        {/* {showAutocomplete && ( */}
          <Autocomplete
            data={data}
            onChangeText={handleInputChange}
          value={query}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleItemPress(item)}>
                <Text>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
        {/* )} */}
      </View>

        {/* <View style={xStyle.search_pos}>
          <Image
            source={require('../assets/images/search-normal.png')}
          />
        </View> */}
      </View>


    </View>
  )
}
export default TopMenu;