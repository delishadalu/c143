import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";


const AppTopNavigation = createMaterialTopTabNavigator();

import Liked from "../screen/liked"
import Popular from "../screen/popular"
import Recommended from "../screen/recommented"

export default class App extends React.Component {
  render() {
    return(
       <AppTopNavigation.Navigator  screenOptions={{
      tabBarLabelStyle: { fontSize: 12 ,fontFamily:"monospace"},
      tabBarItemStyle: { borderWidth:1, borderColor:"white" },
      tabBarStyle: { backgroundColor: '#182854' },
      tabBarActiveTintColor: 'white',
    }}>
      <AppTopNavigation.Screen name="Popular" component={Popular} />
      <AppTopNavigation.Screen name="Recommended" component={Recommended} />
      <AppTopNavigation.Screen name="Liked" component={Liked} />
    </AppTopNavigation.Navigator>
    );
  }
}
