/**
 * Course 20
 * React Native控件之ProgressViewIOS进度加载组件详解及实例
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ProgressViewIOS,
} from 'react-native';

import Util from '../utils';

export default class extends Component{
  render() {
    return(
      <View style={styles.rootViewContainer}>
        <Text style={styles.welcome}>
          ProgressViewIOS使用实例
        </Text>
        <ProgressViewIOS style={styles.progressView} progress={0.3}/>
        <ProgressViewIOS style={styles.progressView} progressTintColor="purple" progress={0.2}/>
        <ProgressViewIOS style={styles.progressView} progressTintColor="red" progress={0.4}/>
        <ProgressViewIOS style={styles.progressView} progressTintColor="orange" progress={0.6}/>
        <ProgressViewIOS style={styles.progressView} progressTintColor="yellow" progress={0.8}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  rootViewContainer:{
    marginTop: 70,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  progressView: {
    marginTop: 20,
    marginLeft:10,
    marginRight:10,
  }
});
