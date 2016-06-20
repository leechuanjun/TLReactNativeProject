/**
 * Course
 * React Native控件之WebView组件详解以及实例使用
 * 一个WebView组件最基本的使用方法，直接加载一个网页
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  WebView,
} from 'react-native';

import Util from '../utils';
var DEFAULT_URL = 'http://m.niwodai.com/';

export default class course11_url extends Component{
  render() {
    return(
      <View style={styles.rootViewContainer}>
        <Text style={styles.text_style}>简单的网页显示</Text>
        <WebView style={styles.webview_style}
          source={{uri:DEFAULT_URL}}
          startInLoadingState={true}
          domStorageEnabled={true}
          javaScriptEnabled={true}
          >
        </WebView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  rootViewContainer:{
    flex:1,
    marginTop:25,
  },
  webview_style:{
    backgroundColor:'#00ff00',
  },
  text_style:{
    textAlign:'center',
    height: 20,
  }
});
