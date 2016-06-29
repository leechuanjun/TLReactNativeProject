/**
 * Course 38
 * React Native进阶之原生模块封装基础篇详解-适配iOS开发
 * 封装一个iOS日历原生模块，让JavaScript可以进行访问到iOS平台日历的功能。
 */
import React, { Component } from 'react';
//进行导入NativeModules中的CalendarManger模块
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  NativeModules,
} from 'react-native';

var TLCalendarManager = NativeModules.TLCalendarManager;

class CustomButton extends React.Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor="#a5a5a5"
        onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}

import Util from '../utils';

export default class extends Component{
  render() {
    return(
      <View style={styles.rootViewContainer}>
        <Text style={styles.welcome}>
            封装iOS原生模块实例
        </Text>
        <CustomButton text="点击调用原生模块addEvent方法"
            onPress={()=>TLCalendarManager.addEvent('生日聚会', '江苏南通 中天路')}
        />
        <CustomButton text="点击调用原生模块addEvent方法"
            onPress={()=>TLCalendarManager.addEventMoreDate('生日聚会', '江苏南通 中天路',1463987752)}
        />
        <CustomButton text="调用原生模块addEvent方法-传入字段格式"
            onPress={()=>TLCalendarManager.addEventMoreDetails('生日聚会', {
              location:'江苏 南通市 中天路',
              time:1463987752,
              description:'请一定准时来哦~'
            })}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  rootViewContainer:{
    marginTop : 70,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    margin:5,
    backgroundColor: 'white',
    padding: 10,
    borderWidth:1,
    borderColor: '#cdcdcd',
  },
});
