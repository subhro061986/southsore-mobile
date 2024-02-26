import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../pages/SplashScreen';
import HomeScreen from '../pages/HomeScreen';
import PubHomeScreen from '../pages/PubHomeScreen';
import CategoryDetails from '../pages/CategoryDetails';
import ProductDetails from '../pages/ProductDetails';
import CartPage from '../pages/CartPage';



const Stack = createStackNavigator();
const Navigation=()=>{
  return (
    <NavigationContainer initialRouteName="splash">
      <Stack.Navigator>
          <Stack.Screen name="splash" component={SplashScreen} options={{title: 'splash',headerShown: false}}/>
          <Stack.Screen name="home" component={HomeScreen} options={{title: 'intro',headerShown: false}}/>
          <Stack.Screen name="pubhome" component={PubHomeScreen} options={{title: 'pubintro',headerShown: false}}/>
          <Stack.Screen name="categorydetails" component={CategoryDetails} options={{title: 'categorydetails',headerShown: false}}/>
          <Stack.Screen name="productdetails" component={ProductDetails} options={{title: 'prodetails',headerShown: false}}/>
          <Stack.Screen name="cartdetails" component={CartPage} options={{title: 'cartdetails',headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
