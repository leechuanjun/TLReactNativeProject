/**
 * Course 24
 * React Native API模块之`AppState`详解
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AppState,
} from 'react-native';

import Util from '../utils';
import ToastIOS from 'react-native-sk-toast';

export default class extends Component{
  constructor(props){
    super(props);
    this._handleAppStateChange = this.handleAppStateChange.bind(this);
    this.state = {
        _appState:AppState.currentState,
        _changeMessage:'',
    };
  }

  componentWillMount() {
    //ToastAndroid.show('挂载',ToastAndroid.SHORT);
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  componentWillUnmount() {
    //ToastAndroid.show('取消挂载',ToastAndroid.SHORT);
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  handleAppStateChange(appState) {
    ToastIOS.bottom('当前状态为:'+appState);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>当前App状态信息如下:</Text>
        <Text>
           {this.state._appState}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rootViewContainer:{
    marginTop : 70,
  },
  container: {
    flex: 1,
    marginTop : 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
