/**
 * Course 31
 * React Native API模块之AppStateIOS运行状态详解-适配iOS开发
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AppStateIOS,
} from 'react-native';

import Util from '../utils';

export default class extends Component{
  constructor(props){
    super(props);
    this.state={
      //当前状态
      appState: AppStateIOS.currentState,
      //进行保存前一个状态
      previousAppStates: [],
      //内存警告
      memoryWarnings: 0,

    };
    this._handleAppStateChange = this.handleAppStateChange.bind(this);
    this._handleMemoryWarning = this.handleMemoryWarning.bind(this);
  }
  //添加监听事件
  componentDidMount() {
    console.log('componentDidMount invoke...');
    AppStateIOS.addEventListener('change', this._handleAppStateChange);
    AppStateIOS.addEventListener('memoryWarning', this._handleMemoryWarning);
  }
  //移除监听事件
  componentWillUnmount() {
    console.log('componentWillUnmount invoke...');
    AppStateIOS.removeEventListener('change', this._handleAppStateChange);
    AppStateIOS.addEventListener('memoryWarning', this._handleMemoryWarning);
  }
  //状态处理
  handleAppStateChange(appState) {
    var previousAppStates = this.state.previousAppStates.slice();
    previousAppStates.push(this.state.appState);
    this.setState({
      appState,
      previousAppStates,
    });
  }
  handleMemoryWarning() {
    this.setState({memoryWarnings: this.state.memoryWarnings + 1});
  }
  render() {
    return (
      <View style={styles.rootViewContainer}>
        <Text style={styles.welcome}>AppStateIOS实例</Text>
        <Text>当前的状态信息数组:{JSON.stringify(this.state.previousAppStates)}</Text>
        <Text>当前的状态信息为:{this.state.appState}</Text>
        <Text>当前的内存警告次数信息为:{this.state.memoryWarnings}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rootViewContainer:{
    marginTop : 70,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    marginLeft:10,
  },
});
