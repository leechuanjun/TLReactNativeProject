/**
 * Course 28
 * React Native API模块StyleSheet样式表详解
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Util from '../utils';

export default class extends Component{
  render() {
    return(
      <View style={styles.rootViewContainer}>
        <View style={styles.container}>
          <Text style={[styles.title, this.props.isActive && styles.activeTitle]} />

        </View>
        <View style={styles.hairStyle}>
          <Text style={styles.title}>测试1</Text>
          <Text style={styles.title}>测试2</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  rootViewContainer:{
    marginTop : 100,
  },
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  activeTitle: {
    color: 'red',
  },
  hairStyle:{
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});
