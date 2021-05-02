import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import Logup from './src/screens/logup';
import Login from './src/screens/login';
import Profile from './src/screens/userProfile/profile';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

export default function App() {

  const Stack = createStackNavigator();

  //initialRouteName={isSignedIn() ? "Home" : "Login"}
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Profile"}  screenOptions={{headerShown: false}} >
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Logup" component={Logup} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
