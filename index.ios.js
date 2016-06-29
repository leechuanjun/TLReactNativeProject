/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  StatusBar,
} from 'react-native';

import MainView from './view/common/mainview';

class TLReactNativeProject extends Component {
  componentDidMount() {
    StatusBar.setBarStyle(0);
  }

  render(){
    return (
      <NavigatorIOS
        ref='nav'
        style={styles.container}
        initialRoute={{
          title:"Project Learning of RN",
          component: MainView,
          backButtonTitle: 'back',
          shadowHidden: true,
        }}
        itemWrapperStyle={styles.itemWrapper}
        tintColor="#777"
      />
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  itemWrapper:{
    backgroundColor: '#f3f3f3'
  },
});

AppRegistry.registerComponent('TLReactNativeProject', () => TLReactNativeProject);
