/**
 * Course 27
 * React Native API模块Dimensions屏幕宽高详解
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';

import Util from '../utils';

export default class extends Component{
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>
          屏幕信息如下:
        </Text>
        <Text style={styles.instructions}>
           当前屏幕宽度:+{Dimensions.get('window').width};
        </Text>
        <Text style={styles.instructions}>
           当前屏幕高度:'+{Dimensions.get('window').height};
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  rootViewContainer:{
    marginTop : 70,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
