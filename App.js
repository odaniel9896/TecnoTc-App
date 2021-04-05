import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import Logup from './src/screens/logup';
import Login from './src/screens/login';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack"
import { isSignedIn } from './src/services/security';

export default function App() {

  const Stack = createStackNavigator();

  //initialRouteName={isSignedIn() ? "Home" : "Login"}
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown: false}} >
        <Stack.Screen name="Logup" component={Logup} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
