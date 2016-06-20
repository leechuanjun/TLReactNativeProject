/**
 * Course
 * React Native控件之WebView组件详解以及实例使用
 * WebView加载本地的HTML静态字符串
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  WebView,
} from 'react-native';

import Util from '../utils';

export default class course11_html extends Component {
  constructor(props){
    super(props);
    this.state={
       notifCount: 0,
    };
  }

  render() {
    return(
      <View style={styles.rootViewContainer}>
        <WebView style={styles.webview_style}
          source={require('./public/statichtml.html')}
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
    // marginTop:70,
  },
  webview_style:{
    backgroundColor:'#00ff00',
  },
  text_style:{
    textAlign:'center',
    height: 20,
  },
});
