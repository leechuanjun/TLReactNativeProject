/**
 * Course 21
 * React Native控件之ActivityIndicatorIOS进度指示器组件详解及实例
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicatorIOS,
} from 'react-native';

import Util from '../utils';

export default class extends Component{
  render() {
    return(
      <View style={styles.rootViewContainer}>
        <Text style={styles.welcome}>
          ActivityIndicatorIOS使用实例
        </Text>
        <Text style={{margin:10}}>自定义颜色指示器</Text>
        <View style={styles.horizontal}>
          <ActivityIndicatorIOS color="#0000ff" />
          <ActivityIndicatorIOS color="#aa00aa" />
          <ActivityIndicatorIOS color="#aa3300" />
          <ActivityIndicatorIOS color="#00aa00" />
        </View>
        <Text style={{margin:10}}>Large进度指示器</Text>
        <ActivityIndicatorIOS
          style={[styles.centering,{margin:10}, {backgroundColor:'#cccccc'}, {height: 80}]}
          color="white"
          size="large"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  rootViewContainer:{
    marginTop: 70,
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  horizontal: {
    marginTop:10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
