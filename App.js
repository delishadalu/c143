import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import StackNavigator from "./navigation/stack"

export default class App extends React.Component {
  render() {
    return(
      <NavigationContainer>
      <StackNavigator />
      </NavigationContainer>
    );
  }
}
