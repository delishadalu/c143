import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Home from "../screen/home"
import TopNavigator from "./toptab"

const Stack = createStackNavigator();

import { createStackNavigator } from '@react-navigation/stack';


export default class App extends React.Component {
  render() {
    return(
    
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Top" component={TopNavigator} />
        </Stack.Navigator>
     
    );
  }
}
