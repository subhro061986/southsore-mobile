import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Navigation from './navs/Navigation';
import { UserProvider } from './Context/Usercontext';
import { AuthProvider } from './Context/Authcontext';




const App= () => {
 
  return (
    <AuthProvider>
    <UserProvider>
        <Navigation/>
    </UserProvider>
    </AuthProvider>
    
  );
};



export default App;
