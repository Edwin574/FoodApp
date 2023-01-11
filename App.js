import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/Screens/Home';
import Login from './src/Screens/Login';
import FirstDisplay from './src/Screens/Display1';
import SecondDisplay from './src/Screens/Display2';

const Stack=createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='FirstDisplay'>
        <Stack.Screen component={FirstDisplay } name="FirstDisplay" />
        <Stack.Screen component={SecondDisplay } name="SecondDisplay" />
        <Stack.Screen component={Home } name="Home" />
        <Stack.Screen component={Login } name="Login" />
      </Stack.Navigator>
    </NavigationContainer>
  
  );
}

