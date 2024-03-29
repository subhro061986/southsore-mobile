import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../pages/SplashScreen';
import HomeScreen from '../pages/HomeScreen';



const Stack = createStackNavigator();
const Navigation=()=>{
  return (
    <NavigationContainer initialRouteName="splash">
      <Stack.Navigator>
          <Stack.Screen name="splash" component={SplashScreen} options={{title: 'splash',headerShown: false}}/>
          <Stack.Screen name="home" component={HomeScreen} options={{title: 'intro',headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
