import React from 'react';
import {View, SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './store/store';
import BottomTabNavigator from './components/routes/TabNavigator';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#131313"
  }
}

export default function App() {
  return (
    <Provider store = {store}>
    <View style = {{flex: 1}}>
      <StatusBar barStyle = "light-content"/>
      <NavigationContainer theme = {MyTheme}>
      <BottomTabNavigator />
      </NavigationContainer>
    </View>
    </Provider>
  );
}